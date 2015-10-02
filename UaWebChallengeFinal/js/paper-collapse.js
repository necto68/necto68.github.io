(function() {
  (function($) {
    'use strict';
    $.fn.paperCollapse = function(options) {
      var settings;
      settings = $.extend({}, $.fn.paperCollapse.defaults, options);
      $(document).on('click', 'div.collapse-card .title', function(){
        if ($(this).parent('.collapse-card').hasClass('active')) {
          settings.onHide.call(this);
          $(this).parent('.collapse-card').removeClass('active');
          $(this).parent('.collapse-card').find('.body').slideUp(settings.animationDuration, settings.onHideComplete);
        } else {
          $(this).parent('.collapse-card').siblings('.collapse-card').find('.body').slideUp(settings.animationDuration, settings.onHideComplete);
          $(this).parent('.collapse-card').siblings('.collapse-card').removeClass('active');
          settings.onShow.call(this);
          $(this).parent('.collapse-card').addClass('active');
          $(this).parent('.collapse-card').find('.body').slideDown(settings.animationDuration, settings.onShowComplete);
        }
      });
      return this;
    };
    $.fn.paperCollapse.defaults = {
      animationDuration: 400,
      easing: 'swing',
      onShow: function() {},
      onHide: function() {},
      onShowComplete: function() {},
      onHideComplete: function() {}
    };
  })(jQuery);

  (function($) {
    $(function() {
      $('.collapse-card').paperCollapse({});
    });
  })(jQuery);

}).call(this);
