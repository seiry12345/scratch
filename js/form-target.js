$(document).ready(function () {
    $(".form-control").on("blur focus", function (e) {
        var $this = $(this);
        var $parent = $this.parent().find("label");
        if (e.type == "focus") {
            if ($this.val() !== "") {
                $parent.addClass("label-active");
            } else {
                $parent.toggleClass("label-active");
            }
        } else if (e.type == "blur") {
            if ($this.val() == "") {
                $parent.removeClass("label-active");
            } else {
                $parent.addClass("label-active");
            }
        }
    });
});
