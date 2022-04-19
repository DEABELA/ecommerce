$(".order").click(function(e) {
    let button = $(this);

    if (!button.hasClass("animate")) {
        button.addClass("animate");
        setTimeout(() => {
            button.removeClass("animate");

            window.location.assign("file:///C:/Users/deabe/Desktop/fse/Ecommerce%20final%20web/checkout.html");

        }, 9000);



    }
});