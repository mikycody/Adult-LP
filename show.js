(function($) {
    $.fn.showHide = function(options) {
        var defaults = {
            speed: 1000,
            easing: '',
            changeText: 1,
            showText: 'Show',
            hideText: 'Hide'
        };
        var options = $.extend(defaults, options);
        $(this).click(function() {
            $('.toggleDiv').fadeOut(options.speed, options.easing);
            var toggleClick = $(this);
            var toggleDiv = $(this).attr('rel');
            $(toggleDiv).fadeIn(options.speed, options.easing, function() {
                if (options.changeText == 1) {
                    $(toggleDiv).is(":visible") ? toggleClick.text(options.hideText) : toggleClick.text(options.showText);
                }
            });
            return false;
        });
    };
})(jQuery);

$(document).ready(function() {


    $('.show_hide').showHide({
        speed: 0,
        easing: '',
        changeText: 1,
        showText: 'View',
        hideText: ''

    });


});
