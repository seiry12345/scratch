if ($(".catalog-left-block").size() && $(window).width() <= 992) {
            $(".catalog-left-block").append("<div class='catalog-btn'>Показать изыскания</div>");
            $(".catalog-left-block .catalog-btn").toggle(function () {
                $(".catalog-left-block .catalog-btn").text("Скрыть изыскания");
                $(".catalog-left-block .items").slideToggle();
            }, function () {
                $(".catalog-left-block .catalog-btn").text("Показать изыскания");
                $(".catalog-left-block .items").slideToggle();
            });
        };
