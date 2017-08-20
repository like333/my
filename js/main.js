$(document).ready(function () {
    var $section = $('.section')
    $('#fullpage').fullpage({
        //Navigation
        navigation: true,
        navigationColor: "#fff",
        navigationPosition: 'right',
        navigationTooltips: ['基本信息', '工作经验', '参与项目', '技能清单', '技能提升','联系方式'],
        slidesNavigation: true,
        slidesNavPosition: 'top',

        //Scrolling
        css3: true,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease-out',
        loopBottom: true,
        sectionsColor: ['#21B384', '#EB8E73', '#3EB0D8', '#28a745', '#0f88eb','#EB8E73'],

        afterLoad: function (anchorLink, index) {
            var len = $('.section').length;
            var loadedSection = $(this);
            $('.section').each(function (i) {
                if (index == (i + 1)) {
                    console.log(i);
                    $(this).find('.message').addClass('show');
                }
            })
        },
        onLeave: function (index, nextIndex, direction) {
            $('.section').each(function (i) {
                if (index == (i+1)) {
                    $section.eq(i).find('.message').removeClass('show');
                }
            })
            $('.section').each(function (i) {
                if (index == (i+1)) {
                    $section.eq(i+1).find('.message').addClass('show');
                }
            })
        }
    });
});