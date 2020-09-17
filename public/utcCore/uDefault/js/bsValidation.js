// 擴充 讓bs-select可有驗證效果
$(document).ready(function () {
    var select = $(this).find('select[class = "form-control bs-select"]');

    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        let forms = document.getElementsByClassName('needs-validation');
        let data = $('.needs-validation');
        // Loop over them and prevent submission
        let validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');

                check(data);
            }, true);
        });
    }, false);

    // 判斷from was-validated 有這個class 才會去做消除 selectFather的  bs-invalid 屬性
    select.change(function () {
        var validated = $('form').hasClass('was-validated');
        var selectVal = $(this).val();
        
        if (true == validated && null != selectVal ) 
            $(this).parent().removeClass('bs-invalid');
    });

    function check(data) {
        let form     = data;
        let dropdown = form.find('.bootstrap-select');
        dropdown.each(function () {
            let select = $(this).find('select[class = "form-control bs-select"]');
            let selectFather = select.parent();
            let button = $(this).find('button');
            let selectVal = select.val();

            // console.log(selectFather);
            if (null == selectVal)
                selectFather.addClass('bs-invalid');
        });
    }




});


