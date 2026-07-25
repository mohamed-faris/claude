// support code for reports-popup.html
var P0Pup = function($) {

    var page;

    var selectall = function(e) {
        $(e.target.parentElement).find('.pre-scrollable').select();
        $(e.target).hide();
        $(e.target.parentElement).find('.unselect-all').show();
        return false;
    };

    var unselectall = function(e) {
        $('.something-else').select();
        $(e.target).hide();
        $(e.target.parentElement).find('.select-all').show();
        return false;
    };

    var getQueryString = function(value) {
        if (!value) {
            return '';
        }

        var queryStart = value.indexOf('?');
        return queryStart === -1 ? value : value.substring(queryStart);
    };

    var getReferenceId = function(results) {
        if (!results) {
            return '';
        }

        var dataKey = results.data_key || '';
        return dataKey.split('/')[0];
    };

    var setReferenceId = function(data) {
        if (data && data.results) {
            data.results.reference_id = getReferenceId(data.results);
        }
    };

    var mergeMissingResults = function(baseResults, freshResults) {
        baseResults = baseResults || {};
        freshResults = freshResults || {};

        var mergedResults = $.extend({}, baseResults, freshResults);
        $.each(baseResults, function(key, value) {
            if (freshResults[key] === undefined || freshResults[key] === null || freshResults[key] === '') {
                mergedResults[key] = value;
            }
        });

        return mergedResults;
    };

    var syncOutboundIpRow = function(context) {
        var transportValue = context.find('#transport-hidden').val();
        if (transportValue) {
            context.find('#outbound-ip .transport').text(transportValue);
            context.find('#outbound-ip').show();
        } else {
            context.find('#outbound-ip').hide();
        }
    };

    var syncTabContentHeight = function(context) {
        var activePane = context.find('.tab-content > .tab-pane.active');
        var openContainer = context.find('.delivery-open, .overview-open, .headers-open').first();

        if (openContainer.hasClass('overview-open')) {
            activePane = context.find('.reports-tab-overview');
        } else if (openContainer.hasClass('headers-open')) {
            activePane = context.find('.reports-tab-headers');
        } else if (openContainer.hasClass('delivery-open')) {
            activePane = context.find('.reports-tab-delivery');
        }

        var tabHeight = activePane.outerHeight();
        if (tabHeight) {
            context.find('.tab-content').height(tabHeight);
        }
    };

    $(document).on('click', '.info-modal-options-close', function() {
        $('.info-modal').removeClass('in');
        $('.info-modal .modal-backdrop').removeClass('in');
        $('.users-modal:not(.info-modal)').addClass('in');
        $('.users-modal:not(.info-modal) + .modal-backdrop').addClass('in');
        $('.tab-content').removeAttr('style');
    });

    $(document).on('click', '.info-modal .modal-backdrop, .bootbox-close-button', function() {
        $('.info-modal').removeClass('in');
        $(this).removeClass('in');
    });

    var reset_modal = function() {

        // not built yet
        if (page === null || page === undefined) {
            return;
        }

        // force unselect all to show select all
        page.find('a.btn.grey.select-all').show();
        page.find('a.btn.grey.unselect-all').hide();

        // default to overview tab again ( these tabs are painful.. )
        page.find('li.bootbox-tabs__tab').removeClass('active');
        page.find('ul.bootbox-tabs li:first-child').addClass('active');
        page.find('div.tab-content div.tab-pane').removeClass('active');
        page.find('div.tab-content div:first-child').addClass('active');
        page.find('div.tab-content').attr('style', '');
        page.find('.bootbox-tabs-row').parent().removeClass().addClass('delivery-open');
    };

    return {

        handleUnblock: function(e) {
            $('#inline-error').remove();
            var link = $(e.target);
            var recipient = encodeURIComponent(link.data('recipient'));
            var requestParams = [{
                'recipient': recipient,
                'reason': 'bounce'
            }];
            var resp = HTML.ajax('DELETE', END_POINTS.urls().Suppressions + '?suppressions=' + JSON.stringify(requestParams), null, false);

            $('#unblock-link').addClass('is-hidden');
            HTML.createInlineLoadingGIF('.modal-footer');
            setTimeout(function() {
                $('.loader').addClass('is-fadein');
            }, 10);

            var getInlineError = function() {
                return '<span id="inline-error">Unblock failed unexpectedly. Please <a href="javascript:void(0);" data-recipient="' + recipient + '" onclick="P0Pup.handleUnblock(event)">try again</a> or contact support.</span>';
            };

            resp.success(function(data) {
                HTML.removeInlineLoadingGIF('.modal-footer');
                if (!data.error && data.message_class == 'success') {
                    HTML.alertUserInline('.modal-footer', HTML.alertType.success, decodeURIComponent(recipient) + ' has been blocked');
                } else {
                    HTML.alertUserInline('.modal-footer', HTML.alertType.error, getInlineError());
                }
            });
            resp.error(function(e) {
                HTML.alertUserInline('.modal-footer', HTML.alertType.error, getInlineError());
                HTML.removeInlineLoadingGIF('.modal-footer');
            });
        },

        handleData: function(data, refreshData) {

            // reset the modal display
            reset_modal();

            // sanitize the sender
            data.results.sender = (data.results.sender != '') ? data.results.sender : '<blank sender>';

            // bootbox.dialog unlinks page from the DOM, so keep a reference.
            if (!page) {
                page = $('#p0p');
            }

            // if there's no open rows hide the 'trackin_table' and show the empty message
            if (data.results.opens.length > 0) {
                page.find("#trackin_table").css('display', 'table');
                page.find("#trackin_table_empty").css('display', 'none');
            } else {
                page.find("#trackin_table").css('display', 'none');
                page.find("#trackin_table_empty").css('display', 'block');
            }

            // hook up the headers selectall/unselect all click handlers
            page.find('a.btn.grey.select-all').on('click', selectall);
            page.find('a.btn.grey.unselect-all').on('click', unselectall);

            // Confirm there is a headers entry and provide a blank if not
            if ('headers' in data.results === false) {
                data.results.headers = 'Headers unavailable';
            }
            var headerUnavailable = (data.results.headers === undefined || data.results.headers === null || data.results.headers === '' || data.results.headers === 'Headers unavailable');
            setReferenceId(data);

            // populate the data.
            HTML.sub_conform_to(data, page);

            //prepare buttons
            var my_buttons = {};

            if ('doc_id' in data.results)
                my_buttons.content = {
                    label: "View Contents",
                    className: "btn btn-default btn-gray-box view-content",
                    callback: function() {
                        var win = window.open('?did=' + data.results.doc_id + '&sid=' + data.results.shard_id + '&subacct=' + data.results.subAcct, '_blank');
                        if (win) {
                            win.focus();
                        }
                    }
                };
            var that = this;

            var showRefresh = headerUnavailable;
            if (!showRefresh && data.results.rows !== undefined && data.results.rows.length > 0) {
                showRefresh = true;
                $.each(data.results.rows, function(idx, el) {
                    if (el[1] !== 10 && !el[5][""]) {
                        showRefresh = false;
                    }
                });
            }

            if (showRefresh) {
                my_buttons.refresh = {
                    label: '<span class="refresh-text">Refresh </span><span class="loader-spinner"></span>',
                    className: "btn button-outlined btn-refresh",
                    callback: function() {
                        that.clickHandler(refreshData.originalEvent, refreshData.deliveryInfo, refreshData.requestPoint, refreshData.updateDataCallback);
                        return false;
                    }
                };
            }

            my_buttons.success = {
                label: "OK",
                className: "btn-primary"
            };

            var initializeDialog = function(customFooterLink) {
                page.removeClass('hide');

                var dialog = bootbox.dialog({
                    title: 'Email details',
                    message: page,
                    buttons: my_buttons,
                    className: 'users-modal',
                });

                var backdrop = $('.modal-backdrop').last();
                var dataKey = data.results.data_key || '';

                dialog.addClass('is-hidden').css({
                    'opacity': 1,
                    'pointer-events': 'none'
                });
                backdrop.addClass('is-hidden').css({
                    'opacity': 0.25,
                    'pointer-events': 'none'
                });

                dialog.find('#outbound-ip').css('display', data.results.show_outbound_ip ? 'block' : 'none');

                dialog.find('.smtpresponse-data').each(function(idx, el) {
                    var html = $(el).html();
                    html = html.replace("'Reports &gt; Suppressions' page at app.smtp2go.com.", "'Reports &gt; <a href=\"" + data.results['suppressions-link'] + "\" target=\"_blank\">Suppressions</a>' page at app.smtp2go.com.");
                    html = html.replace(/\n/g, '<br />');
                    $(el).html(html);
                });

                if (dataKey) {
                    dialog.find('a#archives-preview-link').attr('href', "/reports/archive?xid=" + dataKey.split('/')[0] + '&subacct=' + data.subAcct);
                }

                var dialogRevealed = false;
                var revealDialog = function() {
                    if (dialogRevealed) {
                        return;
                    }
                    dialogRevealed = true;

                    syncTabContentHeight(dialog);

                    if (customFooterLink) {
                        dialog.find('.modal-footer').find('button').before(customFooterLink);
                    }

                    syncOutboundIpRow(dialog);

                    dialog.removeClass('is-hidden').css('pointer-events', '');
                    backdrop.removeClass('is-hidden').css('pointer-events', '');
                };

                dialog.one('shown.bs.modal', revealDialog);
                setTimeout(revealDialog, 250);

                // remove the subaccount bits if they still exist
                $("label#01KRJ6Y7QJAC7ENMN2PV7FP842").remove();
                $("span#01KRJ6Y7QJAC7ENMN2PV7FP842").remove();
                $("br#01KRJ6Y7QJAC7ENMN2PV7FP842").remove();

                // if this is a subaccount add a login link to the details panel (check if we're on the subaccount by looking at the 'Back to Master' link)
                if (data.subAcct !== undefined && data.subAcct !== '' && $('a#link_to_master').length == 0 && $('a[data-login-as="' + data.subAcct + '"]').text() !== '') {
                    let detailsContent = $("div#overview");
                    let label = $(document.createElement('label'));
                    label.attr('id', "01KRJ6Y7QJAC7ENMN2PV7FP842");
                    label.addClass('control-label detail');
                    label.text("Subaccount: ");
                    let span = $(document.createElement('span'));
                    span.attr('id', "01KRJ6Y7QJAC7ENMN2PV7FP842");
                    span.text($('a[data-login-as="' + data.subAcct + '"]').text());
                    let br = $(document.createElement('br'));
                    br.attr('id', "01KRJ6Y7QJAC7ENMN2PV7FP842")
                    detailsContent.prepend(label, span, br);
                }
            };

            initializeDialog();

        },

        clickHandler: function(e, deliveryInfo, requestPoint, updateDataCallback) {

            requestPoint = (requestPoint === undefined) ? 'Activity' : requestPoint;
            var btn = $(e.target);
            var qargsString = getQueryString(btn.data('value') || btn.attr('href'));
            var qargs = HTML.getQueryParams(qargsString);
            delete qargs.email_details;
            console.log('Activity event exim_id:', qargs.esxid);
            var dataKey = qargs.esxid + "/" + qargs.rcpt;
            var subAcct = qargs.subacct;
            deliveryInfo = deliveryInfo || {};
            var data = {
                'results': deliveryInfo[dataKey],
                'subAcct': subAcct
            };
            var refreshButton = $('.btn-refresh');

            // Missing cached data should still allow a full reload request.
            if (data.results === undefined || data.results === null) {
                data.results = {
                    incomplete: true,
                    refreshing: false,
                    rows: [],
                    opens: [],
                    headers: 'Headers unavailable',
                    show_outbound_ip: false,
                };
            }

            refreshButton.addClass("is-loading");
            setTimeout(function() {
                refreshButton.find('.refresh-text').text('Refreshing');
            }, 100);

            // if the delivery info is incomplete do a background ajax call to fetch it
            if (data.results.incomplete === true) {

                // set the data key in the qargs so we can return it, if they've clicked out of the modal and opened another
                qargs["data_key"] = dataKey;
                qargs["load_full"] = true;
                var resp = HTML.ajax('POST', END_POINTS.urls()[requestPoint], qargs, null, false, '', true);
                resp.success(function(respData) {
                    var freshResults = (respData && respData.results) ? respData.results : null;
                    if (freshResults === null) {
                        refreshButton.removeClass("is-loading");
                        refreshButton.find('.refresh-text').text('Refresh');
                        HTML.handleError(respData || {
                            error: 'Unable to refresh email details. Please try again.'
                        });
                        return;
                    }
                    freshResults = mergeMissingResults(data.results, freshResults);
                    respData.results = freshResults;

                    // only update the modal if the ajax request is for the original
                    page = $('#p0p');
                    var dataKeyInput = $('#p0p #data_key')[0];
                    if ('data_key' in freshResults && dataKeyInput && freshResults.data_key === dataKeyInput.value) {
                        setReferenceId(respData);
                        HTML.sub_conform_to(respData, page);
                        syncOutboundIpRow($('.users-modal'));
                        $('.users-modal .smtpresponse-data').each(function(idx, el) {
                            var html = $(el).html();
                            html = html.replace("'Reports &gt; Suppressions' page at app.smtp2go.com.", "'Reports &gt; <a href=\"" + freshResults['suppressions-link'] + "\" target=\"_blank\">Suppressions</a>' page at app.smtp2go.com.");
                            html = html.replace(/\n/g, '<br />');
                            $(el).html(html);
                        });
                        syncTabContentHeight($('.users-modal'));
                    }

                    refreshButton.removeClass("is-loading");
                    refreshButton.find('.refresh-text').text('Refresh');

                    $.each(freshResults.rows || [], function(idx, el) {
                        if (el[1] !== 10 && !el[5][""]) {
                            refreshButton.css('display', 'none');
                        }
                    });

                    // update the data in js
                    freshResults.incomplete = false;
                    updateDataCallback(dataKey, freshResults);
                });
            }

            // if we're refreshing, the above is running, so just return;
            if (data.results.refreshing) {
                return;
            }

            // set the datakey in the data so the modal has it
            data.results.data_key = dataKey;

            // data needed by the Refresh button in the handleData function
            var refreshData = {
                originalEvent: e,
                requestPoint: requestPoint,
                deliveryInfo: {},
                updateDataCallback: updateDataCallback,
            };

            // set to undefined as this will trigger the refresh button to re-lookup the data
            refreshData.deliveryInfo[qargs.esxid + "/" + qargs.rcpt] = {
                "incomplete": true,
                "refreshing": true
            };
            this.handleData(data, refreshData);
        },

    };
}($);