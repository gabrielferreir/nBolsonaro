(function ($) {

    var self = $.nVampeta = new function () { };

    $.extend(self, {

        nBolsonaroBackgrounds: [
            'https://i.pinimg.com/236x/6c/49/f8/6c49f82d128293c61fb10440e642773c.jpg'
        ],

        nBolsonaroImgs: [
            'https://catracalivre.com.br/wp-content/uploads/2019/03/bolsonaro-dormindo-1.jpg',
            'http://d1x4bjge7r9nas.cloudfront.net/wp-content/uploads/2019/04/11083255/bolsonaro2019.jpg',
            'https://media1.tenor.com/images/8abb5d56a61f8d25639b087bb505c412/tenor.gif',
            'https://thumbs.gfycat.com/AccurateAgreeableDoctorfish-max-1mb.gif',
            'https://media.tenor.com/images/4e63faeb224c96045df2a33556eb6996/tenor.gif',
            'https://blog.jovempan.com.br/paulacarvalho/wp-content/uploads/sites/14/2018/03/jair.gif',
            'https://f.i.uol.com.br/fotografia/2018/08/02/15332216705b631b26d1fe5_1533221670_3x2_md.jpg',
            'http://www.museudememes.com.br/wp-content/uploads/2017/09/capa.jpg',
        ],

        handleImages: function (lstImgs, time) {
            $.each($('img'), function (i, item) {
                if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                    var h = $(item).height();
                    var w = $(item).width();

                    if (h > 0 && w > 0) {
                        $(item).css('width', w + 'px').css('height', h + 'px');
                        $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
                    }
                    else {
                        $(item).load(function () {
                            if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                                var h = $(item).height();
                                var w = $(item).width();
                                $(item).css('width', w + 'px').css('height', h + 'px');
                                $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
                            }
                        });
                    }
                }
            });

            //Keep replacing
            if (time > 0) {
                setTimeout(function () { self.handleImages(lstImgs, time); }, time);
            }
        },

        handleLogo: function (bgImgs, time) {
            $backgroundImages = $(
                '[class*=logo], [class*=header], [id*=header], [id*=logo],' +
                '[class*=logo] span, [class*=header] span, [id*=header] span, [id*=logo] span,' +
                '[class*=logo] h1, [class*=header] h1, [id*=header] h1, [id*=logo] h1,' +
                '[class*=logo] a, [class*=header] a, [id*=header] a, [id*=logo] a'
            )
                .filter(function () {
                    backgroundImg = $(this).css('background-image');
                    return backgroundImg && backgroundImg != 'none';
                }
                );

            $backgroundImages.each(function (i, item) {
                $(item).css('background-image', 'url(' + bgImgs[Math.floor(Math.random() * bgImgs.length)] + ')');
                $(item).css('background-position', '0 0');
                $(item).css('background-repeat', 'no-repeat');
                $(item).css('background-size', 'contain');
            });
        }
    });

    $(function () {
        self.handleImages(self.nBolsonaroImgs, 3000);
        self.handleLogo(self.nBolsonaroBackgrounds, 3000);
    });
})(jQuery);
