//XSS issues should be fixed.
"use strict";

function classToggler() {
    'use strict';
    var toggleTrigger = $('[data-toggle-trigger]');

    toggleTrigger.on('click', function(e) {
        e.stopImmediatePropagation();

        var toggleIdentifier = $(this).data('toggle-trigger'),
            toggleTarget = $(this).parents('.drop-content').find('[data-toggle-target="' + toggleIdentifier + '"]');

        if (toggleTarget.hasClass('is-active')) {
            $('[data-toggle-target]').removeClass('is-active');
            toggleTarget.removeClass('is-active');
        } else {
            $('[data-toggle-target]').removeClass('is-active');
            toggleTarget.addClass('is-active');
        }
    });
}

//function that handles confirmations toggling behavior - separated from classToggler behavior
function confirmationsToggler() {
    'use strict';

    $(document).on('click', '.toggle-link.is-active', function(e) {
        e.stopImmediatePropagation();

        $(this).parents('.drop-content').find('.dropdown-menu').addClass('is-transparent');
        $(this).parents('.drop-content').find('.options-confirmation').addClass('is-active');
    });

    $(document).on('click', '.toggle-cancel', function(e) {
        e.stopImmediatePropagation();

        $(this).parents('.drop-content').find('.dropdown-menu').removeClass('is-transparent');
        $(this).parents('.drop-content').find('.options-confirmation').removeClass('is-active');
    });
}
confirmationsToggler();

//setting width of the overlaying buttons on mobile
function setMobileButtons() {
    if ($(window).width() < 800) {
        $('.card-functions .drop-content button.btn.transparent').each(function() {
            var titleWidth = $(this).parents('.card--tab.has-functions').find('.article-pool-name').width();
            $(this).width(titleWidth);
        });
    }
};

function styletable() {
    $(document).find('table .even').removeClass('even');
    $(document).find('table tbody tr:nth-child(odd)').addClass('even');
    $(document).find('table').each(function(index, el) {
        $(this).find('tbody').find('tr').each(function(index2, el2) {
            if ($(el).find('tbody').find('tr').length > 1) {
                $(this).find('.table-remove').removeClass('hidden');
            } else if ($(el).parents('article').hasClass('default_pool')) {
                $(this).find('.table-remove').addClass('hidden');
            }
        });
    });
}

var generate_pool_functions = function(poolName, poolID, canRemovePool, canReassignPoolUsers, hasIPs, isDefault) {
    var cardFunctionsTab = $('<div></div>').addClass('card--tab has-functions');
    var header = $('<h2></h2>').addClass('card--title').append($('<span class="article-pool-name"></span>').text(poolName));

    var functions = $('<div></div>').addClass('card-functions');

    var addIPAddress = $('<button type="button" role="button"></button>').addClass('button-outlined add-ip').text('Add IP address')
        .data('pid', poolID);

    var dropContent = $('<div></div>').addClass('drop-content');
    var dropDownToggleButton = $('<button type="button" role="button"></button>').addClass('btn transparent')
        .attr('data-toggle-trigger', 'dropdown');
    var bullets = $('<span>&bull;&bull;&bull;</span>').addClass('bullets');
    dropDownToggleButton.append(bullets);
    var dropDownList = $('<ul></ul>').addClass('dropdown-menu dropdown-options options-pool').attr('data-toggle-target', 'dropdown');

    var poolRename = $('<li></li>').addClass('pool-rename').attr('data-pool-name', poolName).attr('data-pool-id', poolID);
    poolRename.append('<a href="#"><span class="icon-pen">&#9998;</span> Rename pool</a>');
    dropDownList.append(poolRename);

    if (canReassignPoolUsers) {
        var reassignUsers = $('<li></li>').addClass('drop-reassign-pool').attr('data-pid', poolID).attr('data-pool-name', poolName);
        reassignUsers.append('<a href="#"><span class="icon-heads"></span> Reassign users</a><div class="input-icon">' +
            '<i class="fa fa-info-circle tooltips" data-original-title="Reassign any users of this pool to another pool."' +
            ' data-container="body"></i><div class="tooltip-dropdown">Reassign any users of this pool to another pool.</div></div>');
        dropDownList.append(reassignUsers);
    }

    if (canRemovePool) {
        var poolRemove = $('<li></li>').addClass('options-toggle options-remove').attr('data-pid', poolID);
        var removeIcon = $('<span class="icon-remove"></span>');
        var removeLink = $('<a href="javascript:void(0);" class="toggle-link is-active" data-confirmation-trigger="remove" data-confirmation-target="cancel"><span class="remove-pool-message" id="remove-message">Remove pool</span></a>')
            .on('click', dropDownRemovePool);
        var confirmationSpan = $('<span class="options-confirmation confirmation-remove" data-confirmation-target="cancel" data-confirmation-target="remove"></span>');
        var confirmRemove = $('<a class="confirm options-confirm-remove" data-pid="' + poolID + '" href="javascript:void(0);"></a>').append('<span>Remove</span>')
            .on('click', dropOptionsConfirmRemovePool);

        var confirmCancel = $('<a href="javascript:void(0);" class="options-confirm-cancel link-gray" data-confirmation-trigger="cancel"></a>')
            .on('click', dropDownRemovePoolCancel);

        confirmCancel.append('<span>Cancel</span>');
        confirmationSpan.append('<span class="confirmation-text">Confirm remove?</span>');
        confirmationSpan.append(confirmRemove);
        confirmationSpan.append(confirmCancel);

        poolRemove.append(removeIcon);
        poolRemove.append(removeLink);
        poolRemove.append(confirmationSpan);

        dropDownList.append(poolRemove);

    }

    if (hasIPs && !isDefault) {
        var setDefault = $('<li class="options-toggle">' +
            '<div class="toggle-area">' +
            '<span class="icon-check"></span>' +
            '<a class="toggle-link is-active" href="javascript:void(0);"> Set as default</a>' +
            '<span class="options-confirmation options-set-default">' +
            '<span class="confirmation-text">Are you sure? </span>' +
            '<a data-pool-id="' + poolID + '" class="confirm options-confirm-remove set-default-pool"><span>Set as default</span></a>' +
            '<a class="toggle-cancel link-gray"><span>Cancel</span></a>' +
            '</span>' +
            '</div>' +
            '<div class="input-icon"><i class="fa fa-info-circle tooltips" data-original-title="Set this pool to be the pool used by all unassigned users." data-container="body"></i><div class="tooltip-dropdown">Set this pool to be the pool used by all unassigned users.</div></div></li>');
        dropDownList.append(setDefault);
    }

    dropContent.append(dropDownToggleButton);
    dropContent.append(dropDownList);
    if (isDefault) {
        var defaultPool = $('<span class="label label-default">Default</span>');
        header.append(defaultPool);
    }
    if (!is_free_account && !is_subaccount) {
        functions.append(addIPAddress);
    }

    if (!is_subaccount) {
        functions.append(dropContent);
    }
    cardFunctionsTab.append(header);
    //cardFunctionsTab.append(poolRenameBox);
    cardFunctionsTab.append(functions);

    return cardFunctionsTab;
}

var generate_pool_article = function(data, pool_item) {
    var poolbox = '';
    var can_remove = true;
    pool_item.ipcount = 0;

    for (var l = 0; l < data.results.ips.length; l++) {
        if (data.results.ips[l].pool == pool_item.poolid) {
            //has IP's assigned, don't delete.
            can_remove = false;
            pool_item.ipcount += 1;
        }
    }
    pool_item.can_move_ip =
        pool_item.ipcount > 1 || (pool_item.ipcount <= 1 && pool_item.assigned_users.length == 0 && pool_item.assigned_subaccounts.length == 0);

    var article = $(
        '<article id="' + pool_item.poolid + '" class="card"></article'
    );
    article.data('pool', pool_item.poolname);
    article.data('pid', pool_item.poolid);
    article.data('ips_movable', pool_item.can_move_ip);
    article.data('ip_count', pool_item.ipcount);
    if (pool_item.default) {
        article.addClass('default_pool');
    }

    var canReassignPoolUsers =
        pool_item.ipcount < data.results.ips.length && (pool_item.assigned_users.length > 0 || pool_item.assigned_subaccounts.length > 0);

    article.append(
        generate_pool_functions(
            pool_item.poolname,
            pool_item.poolid,
            can_remove,
            canReassignPoolUsers,
            pool_item.ipcount > 0,
            pool_item.default,
        )
    );

    var rows = $();
    for (var i = 0; i < data.results.ips.length; i++) {
        var ip_item = data.results.ips[i];
        if (ip_item.pool == pool_item.poolid) {
            var span = $('<span></span>');
            span.data('pid', pool_item.poolid);
            span.data('niid', ip_item.id);
            span.text(ip_item.address);

            var ip_col = $('<td></td>')
                .data('title', 'IP Address')
                .attr('data-title', 'IP Address')
                .append(span);
            var rep_col = $('<td></td>')
                .data('title', 'Reputation')
                .attr('data-title', 'Reputation')
                .append(
                    $('<a target="_blank">SenderScore LookUp</a>').prop(
                        'href',
                        'https://www.senderscore.org/report/?lookup=' +
                        ip_item.address +
                        '&authenticated=true'
                    )
                );

            var ipDropContent = $('<div></div>').addClass('drop-content');
            ipDropContent.append(
                '<a class="button-dropdown" data-toggle-trigger="options"><span class="caret-down"></span></a>'
            );
            var optionList = $('<ul></ul>')
                .addClass('dropdown-menu dropdown-options')
                .attr('data-toggle-target', 'options');
            var changeIPPool = $('<li></li>')
                .addClass('ip-change-pool')
                .attr('data-pid', pool_item.poolid)
                .attr('data-ip', ip_item.address)
                .append(
                    '<a href="javascript:void(0);"><span class="icon-shift"></span> Move to pool...</a>'
                );

            var removeIP = $('<li></li>').addClass('options-toggle options-remove');
            var removeIcon = $('<span class="icon-remove"></span>');
            var removeMessage = $(
                '<a href="javascript:void(0);" class="toggle-link is-active"><span class="remove-ip-message" id="remove-message"> Remove</span></a>'
            );

            var confirmCancel = $('<span></span>')
                .addClass('options-confirmation')
                .attr('id', 'confirmation-remove');
            confirmCancel
                .append('<span class="confirmation-text"></span>')
                .html('<span class="confirmation-text">Are you sure? </span>');
            confirmCancel.append(
                $(
                    '<a class="ipaddress-remove confirm" href="javascript:void(0);">Remove</a>'
                )
                .attr('data-ipid', ip_item.id)
                .on('click', removeIPFromPool)
            );
            confirmCancel.append(
                $('<a href="javascript:void(0);">Cancel</a>').addClass(
                    'link-gray toggle-cancel'
                )
            );

            removeIP.append(removeIcon);
            removeIP.append(removeMessage);
            removeIP.append(confirmCancel);
            optionList.append(changeIPPool);
            optionList.append(removeIP);
            ipDropContent.append(optionList);

            if (pool_item.ipcount == 1 && !data.results.optional_private_ip) {
                if (!pool_item.can_move_ip || pool_item.default) {
                    ipDropContent.addClass('hidden');
                }
            }

            var act_col = $('<td></td>').addClass('table-action');
            act_col.append(
                $('<a></a>')
                .prop('href', '#')
                .addClass('change-pool btn blue')
                .text('Move to pool')
            );
            act_col.append(ipDropContent);
            rows = rows.add(
                $('<tr></tr>').append(ip_col).append(rep_col).append(act_col)
            );
        }
    }
    article.append(
        $('<table></table>')
        .attr('data-can-move-ip', pool_item.can_move_ip)
        .append(
            $(
                '<thead><tr><th>Outbound IP Address</th><th colspan="2">Reputation<div class="input-icon"><i class="fa fa-info-circle tooltips" data-original-title="Check the reputation of the IP address at SenderScore." data-container="body"></i><div class="tooltip-dropdown">Check the reputation of the IP address at SenderScore.</div></div></th></tr></thead>'
            )
        )
        .append($('<tbody></tbody>').append(rows))
    );

    if (pool_item.assigned_users.length > 0 || pool_item.assigned_subaccounts.length > 0) {

        var footer = $('<footer></footer>').addClass('card-footer');

        function renderFooterLayout() {
            footer.empty();

            var assigned = pool_item.assigned_users;
            var assignedSubaccounts = pool_item.assigned_subaccounts;

            if ($(window).width() < 768) {
                // single summary block for mobile
                var totalUsers = assigned.length;
                var totalSubs = assignedSubaccounts.length;

                var footerItems = $('<div></div>').addClass('footer-items');
                footerItems.append($('<span></span>').addClass('footer-items-text').text('There are '));

                // users hover group
                var usersHover = $('<div></div>').addClass('items-remaining');
                var usersContainer = $('<div></div>').addClass('items-remaining-container');
                var usersToggler = $('<span></span>').addClass('tooltip-toggler').text(totalUsers + ' users');
                var usersListHover = $('<ul></ul>').addClass('items-remaining-list');
                assigned.forEach(u => usersListHover.append($('<li></li>').text(u)));
                usersContainer.append(usersToggler).append(usersListHover);
                usersHover.append(usersContainer);

                footerItems.append(usersHover);

                // subaccounts hover group
                if (totalSubs > 0) {
                    var subsHover = $('<div></div>').addClass('items-remaining');
                    var subsContainer = $('<div></div>').addClass('items-remaining-container');
                    var subsToggler = $('<span></span>').addClass('tooltip-toggler').text(totalSubs + ' subaccounts');
                    var subsListHover = $('<ul></ul>').addClass('items-remaining-list');
                    assignedSubaccounts.forEach(s => subsListHover.append($('<li></li>').text(s)));
                    subsContainer.append(subsToggler).append(subsListHover);
                    subsHover.append(subsContainer);

                    footerItems
                        .append($('<span></span>').addClass('footer-items-text').text(' and '))
                        .append(subsHover)
                }

                footerItems.append($('<span></span>').addClass('footer-items-text').text(' assigned to this pool.'));
                footer.append(footerItems);

            } else { // larger screens
                if (assigned.length > 0) {
                    var usersList = $('<div></div>').addClass('footer-items');
                    usersList.append($('<h4></h4>').text('Users assigned to this pool: '));
                    var visibleCountUsers = 4;
                    var visibleUsersUl = $('<ul></ul>');
                    for (var i = 0; i < Math.min(visibleCountUsers, assigned.length); i++) {
                        visibleUsersUl.append($('<li></li>').text(assigned[i]));
                    }
                    usersList.append(visibleUsersUl);

                    if (assigned.length > visibleCountUsers) {
                        var remainingCountUsers = assigned.length - visibleCountUsers;
                        var itemsRemainingUsers = $('<div></div>').addClass('items-remaining');
                        var containerUsers = $('<div></div>').addClass('items-remaining-container');
                        var togglerUsers = $('<span></span>').addClass('tooltip-toggler').text(remainingCountUsers + ' more');
                        var listUsers = $('<ul></ul>').addClass('items-remaining-list');
                        for (var u = visibleCountUsers; u < assigned.length; u++) {
                            listUsers.append($('<li></li>').text(assigned[u]));
                        }
                        containerUsers.append(togglerUsers).append(listUsers);
                        itemsRemainingUsers.append(' and ').append(containerUsers);
                        usersList.append(itemsRemainingUsers);
                    }
                    footer.append(usersList);
                }

                if (assignedSubaccounts.length > 0) {
                    var subaccountsList = $('<div></div>').addClass('footer-items');
                    subaccountsList.append($('<h4></h4>').text('Subaccounts assigned to this pool: '));
                    var visibleCountSubs = 4;
                    var visibleSubsUl = $('<ul></ul>');
                    for (var j = 0; j < Math.min(visibleCountSubs, assignedSubaccounts.length); j++) {
                        visibleSubsUl.append($('<li></li>').text(assignedSubaccounts[j]));
                    }
                    subaccountsList.append(visibleSubsUl);

                    if (assignedSubaccounts.length > visibleCountSubs) {
                        var remainingCountSubs = assignedSubaccounts.length - visibleCountSubs;
                        var itemsRemainingSubs = $('<div></div>').addClass('items-remaining');
                        var containerSubs = $('<div></div>').addClass('items-remaining-container');
                        var togglerSubs = $('<span></span>').addClass('tooltip-toggler').text(remainingCountSubs + ' more');
                        var listSubs = $('<ul></ul>').addClass('items-remaining-list');
                        for (var s = visibleCountSubs; s < assignedSubaccounts.length; s++) {
                            listSubs.append($('<li></li>').text(assignedSubaccounts[s]));
                        }
                        containerSubs.append(togglerSubs).append(listSubs);
                        itemsRemainingSubs.append(' and ').append(containerSubs);
                        subaccountsList.append(itemsRemainingSubs);
                    }
                    footer.append(subaccountsList);
                }
            }
        }

        // initial render
        renderFooterLayout();

        // re-render footer on resize across threshold
        var resizeTimer;
        $(window).on('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(renderFooterLayout, 150);
        });

        article.append(footer);
    }

    return article;
}

function fill_dedicatedips(data) {
    HTML.set_time(data);
    Custom.num_ips_allowed = data.results.num_allowed;
    var pool_list = $('#dedicated-ips');
    var has_multiple_pools = (data.results.pools.length > 1);

    for (var j = 0; j < data.results.pools.length; j++) {
        pool_list.append(generate_pool_article(data, data.results.pools[j]));
    }
}

var refreshPoolArticleElements = function(data, recreateArticles) {
    if (recreateArticles) {
        for (var i = 0; i < data.results.pools.length; i++) {
            $('article[id="' + data.results.pools[i].poolid + '"]').replaceWith(generate_pool_article(data, data.results.pools[i]));
        }
    }
    HTML.set_time(data);
    styletable();
    classToggler();
    setMobileButtons();
    if (data.results != undefined && data.results.ips != undefined) {
        Custom.ip_count = data.results.ips.length;
        update_ip_price(1);
    }
}

var edit_pool = function(articleToUpdate, newPoolName) {
    var originalPoolName = articleToUpdate.data('pool');
    if (newPoolName == originalPoolName) {
        return;
    }
    var postData = {};
    postData['rename_pool'] = newPoolName;
    postData['original_pool_name'] = originalPoolName;
    var request = HTML.ajax('POST', END_POINTS.urls()['Dedicated IPs'], postData, null, true, 'Loading...');
    request.success(function(data) {
        if (data.status == 'OK') {
            HTML.set_time(data);
            $(articleToUpdate).find('.article-pool-name').text(newPoolName);
            $(articleToUpdate).find('.pool-rename-input').val('');
            $(articleToUpdate).find('.pool-rename-box').removeClass('is-active');
            $(articleToUpdate).data('pool', newPoolName);
            $(articleToUpdate).find('.pool-rename').attr('data-pool-name', newPoolName);
            $('option[value="' + $(articleToUpdate).attr('id') + '"]').text(newPoolName);

            // have to force hide it;
            bootbox.hideAll();
        } else {
            $('.modal-header').after('<div class="modal-error notice error visible">' + data.items[0] + '</div>');
        }
    });
}

// 'Remove' button functionality

var removeIPFromPool = function() {
    var IPAddressID = $(this).attr('data-ipid');

    if (IPAddressID) {
        var postData = {
            'delete_ip': IPAddressID
        };
        var request = HTML.ajax('DELETE', END_POINTS.urls()['Dedicated IPs'], postData, null, true, 'Loading...');
        request.success(function(data) {
            if (data.status == 'OK') {
                refreshPoolArticleElements(data, true);
            } else {
                HTML.handleError(data);
            }
        });
    }
}

var removePool = function(poolID, cancelButton) {
    var postData = {
        'delete_pool': poolID
    };
    var request = HTML.ajax('DELETE', END_POINTS.urls()['Dedicated IPs'], postData, null, true, 'Loading...');

    request.success(function(data) {
        if (data.status == 'OK') {
            $('#' + poolID).remove();
            refreshPoolArticleElements(data, false);
            // if($('article').length < 2) {
            //   $('.used-by').addClass('hidden');
            // }
        } else {
            cancelButton.click();
            HTML.handleError(data);
        }
    });
}

var dropDownRemovePool = function(e) {
    e.stopImmediatePropagation();
    $(this).parents('.drop-content').find('.dropdown-menu').addClass('is-transparent');
    $(this).parents('.options-remove').find('.options-confirmation').addClass('is-active');
}

var dropOptionsConfirmRemovePool = function(e) {
    e.stopImmediatePropagation();
    var cancelButton = $('.options-confirm-cancel');
    removePool($(this).attr('data-pid'), cancelButton);
}

var dropDownRemovePoolCancel = function(e) {
    e.stopImmediatePropagation();
    $(this).parents('.drop-content').find('.dropdown-menu').removeClass('is-transparent');
    $(this).parents('.options-remove').find('.confirmation-remove').removeClass('is-active');
}

var reassignPoolUsers = function(e) {
    e.preventDefault();
    var request = HTML.ajax('POST', END_POINTS.urls()['Dedicated IPs'], $(this).serialize(), null, true, 'Loading...');
    request.success(function(data) {
        if (data.status == 'OK') {
            refreshPoolArticleElements(data, true);
            bootbox.hideAll();
        } else {
            $('.modal-header').after('<div class="modal-error notice error visible">' + data.items[0] + '</div>');
        }
    });
}

// Dedicated IPs New Pool bootbox
var save_new_pool = function() {
    var poolname = $('.pool-name').val();
    $('.pool-name').val('');
    var post_data = {};
    post_data['add_pool'] = poolname;
    var request = HTML.ajax('POST', END_POINTS.urls()['Dedicated IPs'], post_data, null, true, 'Loading...');
    request.success(function(data) {
        if (data.status == 'OK') {
            var article = $('<article id="' + data.results.pool_id + '" class="card"></article>').data('pool', poolname).data('pid', data.results.pool_id);
            article.append(generate_pool_functions(poolname, data.results.pool_id, true, false, false, false));
            article.append('<table><thead><tr><th colspan="2">Outbound IP Address</th></tr></thead><tbody></tbody></table>');
            article.appendTo($('#dedicated-ips'));
            refreshPoolArticleElements(data, false);
            $('.pool-name').parents('.modal-backdrop').remove();
            // if($('article').length > 1) {
            //   $('.used-by').removeClass('hidden');
            // }
            // have to force hide it;
            bootbox.hideAll();
        } else {
            $('.modal-header').after('<div class="modal-error notice error visible">' + data.items[0] + '</div>');
        }
    });
};

var update_ip_price = function(quantity) {
    var unitPrice = 19 * Custom.plan_duration;
    if (Custom.ip_count == 0) {
        quantity -= 1;
    }
    if (quantity == 0) {
        $('#plan-price').text('Free');
    } else {
        var planPriceText = '$' + unitPrice * quantity + ' per ';
        if (Custom.plan_duration == 1) {
            planPriceText += 'month';
        }
        if (Custom.plan_duration == 3) {
            planPriceText += 'quarter';
        }
        if (Custom.plan_duration == 12) {
            planPriceText += 'year';
        }
        $('#plan-price').text(planPriceText);
    }
}

var Custom = function() {

    var get_contents = function() {

        var request = HTML.ajax('GET', END_POINTS.urls()['Dedicated IPs'], null, null);
        $('.inner-div').empty();
        $('.alert').attr('style', 'display: none;');
        request.success(function(data) {
            if (data.status == 'OK') {
                fill_dedicatedips(data);
                bindall();
                Custom.ip_count = data.results.ips.length;
                Custom.plan_duration = data.results.plan_duration;
                update_ip_price(1);
                if (!is_subaccount) {
                    $('.add-ip, .add-pool').removeClass('hidden');
                }
                $(document).find('table tbody tr:nth-child(odd)').addClass('even');
                //Show cant be reassigned tool tip
                classToggler();
            } else {
                HTML.handleError(data);
                return;
            }
        });
    };

    var bindall = function() {
        HTML.init();
    }

    return {
        init: function() {

            HTML.general();
            get_contents();

        },
        num_ips_allowed: 'nil',
        ip_count: 0,
        plan_duration: 1,
        onFailure: function(data) {
            if (HTML.submitButton != null) {
                $(HTML.submitButton).parents('li').addClass('has-error');
                //the actual error handling is done in the HTML.handleError(..) code, we're just manipulating DOM stuff here.
            }
            HTML.submitButton = null;
        },
    };
}();

$(document).on('click', '.drop-reassign-pool', function() {
    var previousPool = $(this).attr('data-pid');
    var previousPoolName = $(this).attr('data-pool-name');
    var selectPoolForm = $('<form></form>').addClass('modal-ip-group-switch form-horizontal').attr('id', previousPool + 'reassign-users')
        .on('submit', reassignPoolUsers);
    var currentPoolInput = $('<input></input').attr('type', 'hidden').attr('name', 'old_pool_for_users').attr('value', previousPool);
    var poolFormContainer = $('<div class="form-group"></div>');
    selectPoolForm.append(poolFormContainer);
    poolFormContainer.append(currentPoolInput);
    var poolSelect = $('<select></select>').attr('name', 'ipgroup-switch').addClass('el-full');
    var poolArticles = $('article');
    var selectContainer = $('<div></div>').addClass('select-container el-stretch');

    for (var i = 0; i < poolArticles.length; i++) {
        if ($(poolArticles[i]).attr('id') != previousPool && $(poolArticles[i]).data('ip_count') > 0) {
            poolSelect.append($('<option></option>')
                .attr('value', $(poolArticles[i]).attr('id')).text($(poolArticles[i]).find('.article-pool-name').text()));
        }
    }
    selectContainer.append(poolSelect);
    poolFormContainer.append(selectContainer);
    var poolNameModalContent = $('<strong></strong>').text(previousPoolName);
    var modalMessage = $('<p class="block-form"></p>').append('Which pool should the Users of ').append(poolNameModalContent).append(' be moved to?');

    var modalContent = $('<div></div>').append(modalMessage).append(selectPoolForm);
    var title = $('<span></span>').append('Reassign Users from ').append($('<span></span>').text(previousPoolName));
    bootbox.dialog({
        className: 'modal-medium',
        title: title,
        message: modalContent,
        buttons: {
            save: {
                label: 'Reassign',
                className: 'btn blue',
                callback: function() {
                    $('form[id="' + previousPool + 'reassign-users"]').submit();
                    return false;
                }
            }
        }
    });
});

$(document).on('click', '.function-bar-outside .add-pool', function() {
    bootbox.dialog({
        className: 'modal-medium',
        title: 'Add an IP Pool',
        message: '<p>You can optionally have a different pool for different types of email traffic. For example, you can send all of your marketing emails from one pool, and all of your transactional emails from another pool.</p>' +
            '<form class="form-horizontal"><div class="form-group"><label class="control-label new-label">Pool Name</label><div class="el-stretch"><input type="text" class="form-control input-md pool-name"></div></div></form>',
        buttons: {
            save: {
                label: 'Add Pool',
                className: 'btn blue dedicated-ip-pool add-pool-submit',
                callback: function() {
                    save_new_pool();
                    return false;
                },
            }
        }
    });
    $('.pool-name').keypress(function(e) {
        if (e.which == 13) {
            $('.add-pool-submit').click();
        };
    });
});

$(document).on('click', '.ip-change-pool', function(e) {
    var previousPool = $(this).attr('data-pid');
    var ipAddressToMove = $(this).attr('data-ip');

    var selectPoolForm = $('<form></form>').addClass('modal-ip-group-switch form-horizontal').attr('id', previousPool + 'move-ip');
    var poolFormContainer = $('<div class="form-group"></div>');
    var poolSelect = $('<select></select>').attr('name', 'modal-ip-pool-switch').addClass('el-full');
    var poolArticles = $('article');
    var selectContainer = $('<div></div>').addClass('select-container el-stretch');

    for (var i = 0; i < poolArticles.length; i++) {
        if ($(poolArticles[i]).attr('id') != previousPool) {
            poolSelect.append($('<option></option>')
                .attr('value', $(poolArticles[i]).attr('id')).text($(poolArticles[i]).find('.article-pool-name').text()));
        }
    }
    selectPoolForm.append(poolFormContainer);
    poolFormContainer.append(selectContainer);
    selectContainer.append(poolSelect);
    var modalMessage = $('<p>Which pool should ' + ipAddressToMove + ' be moved to?</p>');

    var modalContent = $('<div></div>').append(modalMessage).append(selectPoolForm);

    bootbox.dialog({
        className: 'modal-medium',
        title: 'Move ' + ipAddressToMove,
        message: modalContent,
        buttons: {
            save: {
                label: 'Reassign',
                className: 'btn blue',
                callback: function() {
                    var post_data = {}
                    post_data['new_pool_for_ip'] = $('form[id="' + previousPool + 'move-ip"]').find('select[name="modal-ip-pool-switch"]').val();
                    post_data['move_ip'] = ipAddressToMove;
                    var request = HTML.ajax('POST', END_POINTS.urls()['Dedicated IPs'], post_data, null, true, 'Loading...');
                    request.success(function(data) {
                        if (data.status == 'OK') {
                            refreshPoolArticleElements(data, true);
                            bootbox.hideAll();
                        } else {
                            console.log(data);
                            if (data.items != undefined && data.items.length > 0) {
                                $('.modal-header').after('<div class="modal-error notice error visible">' + data.items[0] + '</div>');
                            } else if (data.error != undefined) {
                                $('.modal-header').after('<div class="modal-error notice error visible">' + data.error + '</div>');
                            }
                        }
                    });
                    return false;
                }
            }
        }
    });
});

$(document).on('click', '.pool-rename', function(e) {
    var pid = $(this).attr('data-pool-id');
    var articleToUpdate = $('article').filter(function() {
        return $(this).data('pid') == pid;
    });

    var poolName = $(this).attr('data-pool-name');
    bootbox.dialog({
        className: 'modal-medium',
        title: 'Rename Pool',
        message: '<p>Change the name of your IP Pool</p>' +
            '<form class="form-horizontal"><div class="form-group"><label class="control-label new-label">Pool Name</label><div class="el-stretch"><input type="text" value="' + HTML.escapeHTML(poolName) + '" class="form-control input-md edit-pool-name"></div></div></form>',
        buttons: {
            save: {
                label: 'Save',
                className: 'btn blue dedicated-ip-pool pool-rename-submit',
                callback: function() {
                    edit_pool(articleToUpdate, $('.edit-pool-name').val());
                    return false;
                }
            }
        }
    });
    $('.edit-pool-name').keypress(function(e) {
        if (e.which == 13) {
            $('.pool-rename-submit').click();
        };
    });
});

// Dedicated IPs New IP Address bootbox

var toggleBlockMain;

$(document).on('click', '#dedicated-ips .add-ip', function() {
    var pool = null;
    var table = null;
    toggleBlockMain = $('.lead-toggle').html();
    var titleAdd = '<button class="icon-back"></button> Add an IP Address';
    var toggleBlockAdd = '<p>Choose to add one or more additional IP addresses into your account.</p>';

    if ($(this).data()['pid']) {
        pool = $(this).data()['pid'];
        table = $('#' + pool + ' table tbody');
    } else if ($('.default_pool').length) {
        pool = $('.default_pool').data()['pid'];
        table = $('.default_pool table tbody');
    } else {
        pool = $('.card:first').data()['pid'];
        table = $('.card:first table tbody');
    }

    var n = Custom.num_ips_allowed - $('tbody tr').length;
    var options = '';
    if (n > 0) {
        for (var i = 1; i <= n; i++) {
            options += '<option value="' + i + '">' + i + '</option>';
        }
    }
    if (n > 0) {
        $('.page-title').addClass('is-hidden');
        $('.lead-toggle').addClass('is-hidden');
        $('#new_quantity').html(options);

        $('section#dedicated-ips .card, .function-bar-outside').addClass('is-hidden');
        setTimeout(function() {
            $('.page-title').html(titleAdd).removeClass('is-hidden');
            $('.lead-toggle').html(toggleBlockAdd).removeClass('is-hidden');
            $('section#dedicated-ips .card, .function-bar-outside').addClass('hide');
            $('.add-ip-container').removeClass('hide');
            $('#dedicated-ips').addClass('is-ipadd');
            setTimeout(function() {
                $('.add-ip-container').removeClass('is-hidden');
            }, 10);
        }, 300);

        $('.add-ip-container .hide-splash').unbind('click')
        $(document).on('click', '.add-ip-container .hide-splash', function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();

            // clicking this should initiate purchase

            var postData = {
                'add_ip': 1,
                'pool': pool,
                'quantity': parseInt($('#new_quantity').val()),
            };
            var request = HTML.ajax('POST', END_POINTS.urls()['Dedicated IPs'], postData, null, true, 'Loading...');
            request.success(function(data) {
                if (data.status == 'REDIRECT') {
                    // Gotta redirect to payment page
                    var url_ = data.results.redirect_url;
                    var postage = data.results.data;
                    var form = document.createElement('form');
                    form.setAttribute('action', url_);
                    form.setAttribute('method', 'post');
                    form.setAttribute('class', 'hide');
                    for (var item in postage) {
                        if (postage.hasOwnProperty(item)) {
                            var inp = document.createElement('input');
                            inp.setAttribute('name', item);
                            inp.setAttribute('value', postage[item]);
                            form.appendChild(inp);
                        }
                    }
                    $('body').append(form);
                    form.submit();
                    // game over -- document.location rewritten , no more javascript runs.
                } else if (data.status == 'OK') {
                    // No payment page required (free?)! Easier to empty and reload all than add specific address
                    refreshPoolArticleElements(data, true);
                } else {
                    HTML.handleError(data);
                }
            });
        });
    } else {
        bootbox.dialog({
            className: 'modal-medium',
            title: 'Add an IP address',
            message: '<p>Get in touch with our support team to request more than ' +
                Custom.num_ips_allowed + ' addresses.</p>',
            buttons: {
                save: {
                    label: 'OK',
                    className: 'btn blue'
                }
            }
        })
    }
});

$(document).on('click', '.add-ip-container .hide-splash, .page-title .icon-back', function() {
    var titleMain = 'Dedicated IPs';
    $('.add-ip-container, .page-title, .lead-toggle').addClass('is-hidden');
    $('#dedicated-ips').removeClass('is-ipadd');
    setTimeout(function() {
        $('.page-title').html(titleMain).removeClass('is-hidden');;
        $('.lead-toggle').html(toggleBlockMain).removeClass('is-hidden');;
        $('.add-ip-container').addClass('hide');
        $('section#dedicated-ips .card, .function-bar-outside').removeClass('hide');
        setTimeout(function() {
            $('section#dedicated-ips .card, .function-bar-outside').removeClass('is-hidden');
        }, 10);
    }, 300);
});

$(document).on('change', '#new_quantity', function() {
    update_ip_price(parseInt($(this).val()));
});

$(document).on('click', '.set-default-pool', function() {
    var postData = {};
    postData['set_pool_as_default'] = $(this).attr('data-pool-id');
    var request = HTML.ajax('POST', END_POINTS.urls()['Dedicated IPs'], postData, null, true, 'Loading...');
    request.success(function(data) {
        if (data.status == 'OK') {
            HTML.set_time(data);
            refreshPoolArticleElements(data, true);
        } else {
            HTML.handleError(data);
        }
    });
});