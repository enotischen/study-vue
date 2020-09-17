$(function () {
    $('#demo-basic').on('click', function() {
        Swal.fire('Any fool can use a computer');
    });
    $('#demo-title-abbr').on('click', function() {
        Swal.fire(
            'The Internet?',
            'That thing is still around?',
            'question'
        );
    });
    $('#demo-title').on('click', function() {
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
        });
    });
    $('#demo-toast').on('click', function() {
        Swal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            type: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
        });
    });
});
