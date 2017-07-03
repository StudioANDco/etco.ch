
(function($) {
    'use strict';

    function slide(wrapper) {
        var offset = -wrapper.data('pos') * wrapper[0].offsetWidth;
        wrapper.css('transform', 'translate3d(' + offset + 'px, 0, 0)');
    }

    $(function() {
        $('.slider').each(function() {
            var slider = $(this);
            var itemsCount = slider.find('.slider__slide').length;

            var previous = $('<button class="slider__button slider__previous"> << </button>');
            var next = $('<button class="slider__button slider__next"> >> </button>');

            slider.find('.slider__slide').wrapAll('<div class="slider__wrapper">').wrapAll('<div class="slider__slides">');
            slider.prepend(previous);
            slider.append(next);

            previous.on('click', function() {
                var wrapper = $(this).parent().find('.slider__slides');
                wrapper.data('pos', Math.max(wrapper.data('pos') - 1, 0));
                slide(wrapper);
            });

            next.on('click', function() {
                var wrapper = $(this).parent().find('.slider__slides');
                wrapper.data('pos', Math.min(wrapper.data('pos') + 1, itemsCount - 1));
                slide(wrapper);
            });

            slider.find('.slider__slides').data('pos', 0);

            $('document').on('resize', function() {
                slide(slider.find('.slider__slides'));
            })
        });

    });
})(jQuery);
