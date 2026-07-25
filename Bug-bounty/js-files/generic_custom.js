// this code can handle most simple forms via "conform_form" and 
// by assuming a get request on the from action URL (or data-fetch) will yield the settings.
var Custom = function() {
    var plans_avail = null;

    var get_contents = function(cb) {
        var gets = ['']
        $('form.autoajax').each(function(a, b) {
            var act = b.action
            if (b.hasAttribute('data-fetch'))
                act = b.getAttribute('data-fetch')
            if (gets.indexOf(act) >= 0) return;
            gets.push(act);
            //console.log("req+"+act);
            var request = HTML.ajax('GET', act, {
                'login_id': Cookie.read('login_id')
            });
            request.success(function(data) {
                handle_response(data);
                if (cb !== undefined) {
                    cb();
                }
            });
            request.error(HTML.requestError);
        })
    }

    var handle_response = function(data) {
        if (data.status == 'OK') {
            HTML.conform_forms(data);
            HTML.conform_to(data);
            $('.hide.show-when-loaded').removeClass('hide');
        } else if (data.status == 'REDIRECT') {
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
        } else {
            HTML.handleError(data);
            return;
        }
        return false;
    }

    return {
        init: function() {
            HTML.general();
            get_contents(this.on_loaded);
        },
        on_loaded: function() {
            // empty - override by doing Custom.on_loaded on your page
        },
        renew: function(e) {
            e.preventDefault();
            var resp = HTML.form($(this));
            resp.success(handle_response);
            return false;
        }
    };
}();