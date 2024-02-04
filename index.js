$(document).ready(function () {
    $(".input-tel").mask("+7 (999) 999-99-99");

    //открытие модального окна
    $(".modal").on("open.modal", function () {
        let modal = $(this);
        modal.removeClass("modal--hidden");
        modal.arcticmodal({
            afterClose: function () {
                modal.addClass("modal--hidden");
            },
        });
    });

    //закрытие модального окна
    $(".modal").on("close.modal", function () {
        let modal = $(this);
        modal.arcticmodal("close");
    });

    $(".banner__link").on("click", function (e) {
        e.preventDefault();
        $(".modal").trigger("open.modal");
    });

    $(".modal-form").on("submit", function (e) {
        e.preventDefault();
        let data = $(this).serialize();
        let form = $(this);
        let parent = form.closest(".modal");
        $.ajax({
            type: "POST",
            url: "email.php",
            data: data,
            success: function () {
                parent.addClass("modal-from--success");
            },
            error: function () {
                alert("Ошибка сервера, попробуйте еще раз");
            },
        });
    });
});
