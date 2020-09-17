$(function () {
    $('#addDate').on('click', function(event) {
        $('#dynamic-zone').append('<label>日期</label><input type="text" class="form-control datepicker" name="x">');
    });
    $('#addIcon').on('click', function(event) {
        $('#dynamic-zone').append('<label>日期時間</label><div class="input-group"><div class="input-group-prepend"><span class="input-group-text"><i class="fas fa-calendar-alt"></i></span></div><input type="text" class="form-control datetimepicker" name="x" placeholder="yyyy-MM-dd HH:nn"></div>');
    });
    $('#addDateRange').on('click', function(event) {
        $('#dynamic-zone').append('<label>日期範圍</label><div class="input-group date-range"><label class="sr-only">開始日期</label><input type="text" class="form-control datepicker" name="x" placeholder="yyyy/MM/dd" data-min><div class="input-group-append input-group-prepend"><span class="input-group-text">~</span></div><label class="sr-only">結束日期</label><input type="text" class="form-control datepicker" name="x" placeholder="yyyy/MM/dd" data-max></div>');
    });
    $('#addTimeRange').on('click', function(event) {
        $('#dynamic-zone').append('<label>時間範圍</label><div class="input-group time-range"><label class="sr-only">開始時間</label><input type="text" class="form-control timepicker" name="x" placeholder="HH:nn" data-min><div class="input-group-append input-group-prepend"><span class="input-group-text">~</span></div><label class="sr-only">結束時間</label><input type="text" class="form-control timepicker" name="x" placeholder="HH:nn" data-max></div>');
    });
});
