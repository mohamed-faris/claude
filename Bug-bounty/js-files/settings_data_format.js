var Custom = function() {

    var full = false;

    document.body.classList.add('page-display-settings');

    var get_contents = function() {

        var request = HTML.ajax('GET', END_POINTS.urls()['Display Settings'], null, null);
        request.success(function(data) {
            if (data.status == 'OK') {
                HTML.set_time(data);
                {
                    var listtype = $('select[name="list_format"]');
                    listtype.children('option').each(function(i) {
                        if ($(this)[0].value == data.results.list_format) {
                            $(this).prop('selected', true);
                        }

                    });

                    var date_display = $('select[name="date_display"]');
                    date_display.children('option').each(function(i) {
                        if ($(this)[0].value == data.results.date_display) {
                            $(this).prop('selected', true);
                        } else if ($(this)[0].value == "" && (data.results.date_display == null || data.results.date_display == "")) {
                            $(this).prop('selected', true);
                        }
                    });

                    var date_download = $('select[name="date_download"]');
                    date_download.children('option').each(function(i) {
                        if ($(this)[0].value == data.results.date_download) {
                            $(this).prop('selected', true);
                        }
                    });

                    var time_display = $('select[name="time_display"]');
                    time_display.children('option').each(function(i) {
                        if ($(this)[0].value == data.results.time_display) {
                            $(this).prop('selected', true);
                        } else if ($(this)[0].value == "" && (data.results.time_display == null || data.results.time_display == "")) {
                            $(this).prop('selected', true);
                        }
                    });
                }
                set_timezones(data);
                var reports_table_length = $('select[name="reports_table_length"]');
                reports_table_length.children('option').each(function(i) {
                    if ($(this)[0].value == data.results.reports_table_length) {
                        $(this).prop('selected', true);
                    }
                });

                $('form').find('div').removeClass('generated--loading');
            } else {
                HTML.handleError(data);
                return;
            }
        });
    };

    var create_dpa_modal = function() {

        $(document).on('click', '#data-processing-agreement', function(e) {
            var dpa = $('<div></div>');
            // Load dpa template client-side so we can make use of bootbox interface to create the modal
            var getDPA = HTML.ajax('GET', '/api/dashboard/edit_account/dpa', null, null, true, 'Loading..');
            getDPA.success(function(data) {
                dpa.append(data)
                Custom.bb = bootbox.dialog({
                    title: "Review and accept the agreement",
                    message: dpa,
                    className: "dialog-dpa"
                });
            });
        });

        $(document).on('submit', '#accept-agreement', function() {
            postData = {
                "version_hash": $('#version_hash').val()
            };
            var acceptAgreement = HTML.ajax('POST', '/api/dashboard/edit_account/dpa', postData, null, 'Saving...');
            acceptAgreement.success(function(data) {
                Custom.bb.modal('hide');
                Custom.bb = null;
                if (data['status'] == 'OK') {
                    location.reload();
                    HTML.alertUser(HTML.alertType.success, "You have accepted the Data Processing Agreement.");
                } else {
                    HTML.RequestError(data);
                }
            });
            acceptAgreement.error(HTML.RequestError);
        });
    };

    var create_doc_viewer_modal = function() {
        $(document).on('click', '.view-document-modal', function(e) {
            e.preventDefault();
            var btn = $(this);
            var url = btn.data('url');
            var title = btn.data('title') || 'View Document';

            if (!url) return;

            var content;
            // Simple auto-detection for PDF based on extension
            if (url.toLowerCase().indexOf('.pdf') !== -1) {
                content = $('<iframe src="' + url + '" style="width:100%; height:80vh; border:none;" allowfullscreen></iframe>');
            } else {
                // Fallback/Default to iframe for other content types
                content = $('<iframe src="' + url + '" style="width:100%; height:80vh; border:none;" allowfullscreen></iframe>');
            }

            Custom.bb = bootbox.dialog({
                title: title,
                message: content,
                className: "dialog-dpa modal-compliance-pdf",
                size: "large" // Optional: ensures it's wide enough
            });
        });
    };

    var set_timezones = function(data) {
        if (data.status == 'OK') {
            HTML.set_time(data);
            //data.results.timezones is an associative array of timezones.
            //we need to iterate over it, and add options for each one to the timezone drop down.
            //and we need to order them by timezone (utc_offset)
            var tz_list = $('select[name="timezone"]');
            tz_list.empty();
            //for (timezone in data.results.timezones)
            for (var i = 0; i < data.results.timezones.length; i++) {
                timezone = data.results.timezones[i];
                var vals = "";
                var timezoneoffset = timezone.name != 'Auto-Detect' ? '(' + timezone.offset_name.substr(0, timezone.offset_name.length - 3) + ') ' : '';
                var opt = $('<option></option>').val(timezone.name).prop('title', timezone.example + ' ' + timezone.abbrev).text(timezoneoffset + timezone.disp_name);
                if (data.results.selected_tz.localeCompare(timezone.name) == 0) {
                    opt.prop('selected', true);
                }
                tz_list.append(opt);
            }
            if (full != null && full) {
                $('#more').text('Fewer Timezones');
                $('#more').on('click', function(e) {
                    e.preventDefault();
                    var resp = HTML.ajax('GET', END_POINTS.urls()['Display Settings'], null, true, 'Loading...');
                    full = false;
                    resp.success(set_timezones);
                    return false;
                });
            } else {
                $('#more').text('More Timezones');
                $('#more').on('click', function(e) {
                    e.preventDefault();
                    var resp = HTML.ajax('GET', END_POINTS.urls()['Display Settings'] + '?all=', null, true, 'Loading...');
                    full = true;
                    resp.success(set_timezones, true);
                    return false;

                });
            }

        } else {
            HTML.handleError(data);
            return
        }
    }

    return {
        init: function() {
            HTML.general();
            create_dpa_modal();
            create_doc_viewer_modal();
            get_contents();

            $('#more').on('click', function(e) {
                e.preventDefault();
                var resp = HTML.ajax('GET', END_POINTS.urls()['Display Settings'] + '?all=', null, true, 'Loading...');
                full = true;
                resp.success(set_timezones);
            });

            var form = $('form');
            form.on('submit', function(e) {
                e.preventDefault();
                var res = HTML.form($(this));
                res.success(function(data) {
                    if (data.status == 'OK') {
                        HTML.set_time(data);
                    } else {
                        HTML.handleError(data);
                    }
                });
            });
        }
    };
}();