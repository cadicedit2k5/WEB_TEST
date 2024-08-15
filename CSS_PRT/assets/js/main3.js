$(document).ready(function() {
    $(".tab-content h1:not(:first-child)").hide();
    $(".tab > li > a").click(function() {
        event.preventDefault();
        $(".tab > li").removeClass("active");
        $(this).addClass("active");

        let h = $(this).attr("href");
        $(".tab-content h1").hide();
        $(h).show()
    })
})