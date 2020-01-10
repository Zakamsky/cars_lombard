
let $inputMonth = $(".js-input-month"),
    $inputDay = $(".js-input-day"),
    $inputTotal = $(".js-input-total"),
    // $value = $(".js-value"),
    // $value_h = $(".js-value-half"),
    $valueMonth = $(".js-value-month"),
    $valueDay = $(".js-value-day"),
    min = 10000,
    max = 2000000,
    flag = 1000000,
    from = 300000,
    step = 10000;

$(".ion-slider").ionRangeSlider({
    skin: "round",
    min: min,
    max: max,
    from: from,
    step: step,
    postfix: ' ₽',
    onStart: function(data){
        addFlag(data.slider);
        let month = Math.round(data.from / 12),
            day = Math.round(month / 30),
            loanMonth = new Intl.NumberFormat().format(month),
            loanDay = new Intl.NumberFormat().format(day);

        $inputTotal.prop("value", data.from_pretty + ' ₽');
        $inputMonth.prop("value", loanMonth + ' ₽');
        $inputDay.prop("value", loanDay + ' ₽');
        $valueMonth.text(loanMonth + ' ₽');
        $valueDay.text(loanDay + ' ₽');
    },
    onChange: function(data) {
        let month = Math.round(data.from / 12),
            day = Math.round(month / 30),
            loanMonth = new Intl.NumberFormat().format(month),
            loanDay = new Intl.NumberFormat().format(day);

        $inputTotal.prop("value", data.from_pretty + ' ₽');
        $inputMonth.prop("value", loanMonth + ' ₽');
        $inputDay.prop("value", loanDay + ' ₽');
        $valueMonth.text(loanMonth + ' ₽');
        $valueDay.text(loanDay + ' ₽');
    },

});
function convertToPercent (num) {
    var percent = (num - min) / (max - min) * 100;

    return percent;
}

function addFlag ($slider) {
    var html = '';
    var left = 0;
    var i;

    //   for (i = 0; i < marks.length; i++) {
    left = convertToPercent(flag);
    html += '<span class="flag" style="left: ' + left + '%"><svg class="flag__ico" width="15.989" height="16"><use xlink:href="#flag"></use></svg> Клуб «Первый»</span>';
    //   }

    $slider.append(html);
}