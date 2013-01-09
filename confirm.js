/* ===================================================
 * Confirm jQuery Plugin v1.0.0
 * http://github.com/elithompson/confirm-jquery-plugin
 * ===================================================
 * Copyright 2013 Eli Thompson and other contributors
 * 
 * Licensed under MIT License.
 * 
 * http://opensource.org/licenses/MIT
 * =================================================== */

(function ($) {
  $.fn.confirm = function (options) {
    if (typeof options === 'string') {
      options = {
        selector: options
      };
    }

    var o = $.extend({
      onConfirm: function () {
        return true;
      },
      selector: null,
      eventNamespace: 'confirm',
      classNamespace: 'confirm',
      confirmingTimeout: 3 * 1000,
      confirmationText: 'Are you sure?',
      confirmingClasses: 'btn-danger',
      rearm: false
    }, options),
      _confirming = 'confirming',
      _confirmed = 'confirmed',
      ens = function (s) { // format for event namespace
        return s + '.' + o.eventNamespace;
      },
      cns = function (s) { // format for class namespace
        return o.classNamespace + '-' + s;
      },
      confirming = function (event) {
        event.preventDefault();
        var $that = $(this),
          originalText = $that.html(),
          timeoutToken;
        $that.text(o.confirmationText).addClass(o.confirmingClasses).addClass(cns(_confirming))
          .on(ens('mouseout'), function () {
          timeoutToken = setTimeout(function () {
            $that.html(originalText).off(ens('')).removeClass(cns(_confirming)).removeClass(o.confirmingClasses);
          }, o.confirmingTimeout);
        }).on(ens('mouseover'), function () {
          clearTimeout(timeoutToken);
        });
      },
      confirmed = function (event) {
        var $that = $(this).removeClass(cns(_confirming)).removeClass(o.confirmingClasses).off(ens(''));
        if (!o.rearm) {
          $that.addClass(cns(_confirmed));
        }
        return o.onConfirm.call(this, event);
      };

    return this.on(ens('click'), o.selector, function (event) {
      var $that = $(this);
      if ($that.hasClass(cns(_confirmed))) {
        return;
      }
      if ($that.hasClass(cns(_confirming))) {
        return confirmed.call(this, event);
      }
      return confirming.call(this, event);
    });
  };
})(jQuery);