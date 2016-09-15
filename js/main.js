function showTimer() {
    var now = new Date();
    var eventDate = new Date(2015, 7, 31);
    var span = document.getElementById('timetoevent');
    var text = "До ближайшего полета: ";
    var div = $('#event-mess');
    if (now < eventDate) {
        div.text(text);
        window.setInterval(function () {
            span.innerHTML = timeToEvent(eventDate);
        }, 1000);
    }
}

function showCarousels() {
    var carousel = $("#carousel-photo");

    carousel.owlCarousel({
        navigation: true,
        navigationText: [
            '<div class="prev-carousel"/>',
            '<div class="next-carousel"/>'
        ],
        items: 4
    });
    var carouselFeed = $("#carousel-feedback");
    carouselFeed.owlCarousel({
        navigation: true,
        navigationText: [
            '<div class="prev-carousel"/>',
            '<div class="next-carousel"/>'
        ],
        items: 2
    });
}

function toBigSpan(value){
    return '<span class="time-big">'+value+'</span>'
}

function getDateForm(value, form1, form2, form3) {
    if (value % 10 == 1 && value != 11) {
         value = toBigSpan(value) + ' ' + form1
    } else {
        if (value < 21 && value > 10) {
            value = toBigSpan(value) + " " + form3
        } else {
            if (value % 10 > 4 || value % 10 == 0) {
                value = toBigSpan(value) + " " + form3
            } else {
                value = toBigSpan(value) + " " + form2
            }
        }
    }
    return value
}

function timeToEvent(eventDate) {
    var now = new Date();
    var output = '';
    var daystoED = Math.floor(Math.round(eventDate - now) / 86400000);
    daystoED = (daystoED < 1) ? "0" + daystoED : daystoED;
    var hourstoED = 24 - now.getHours() - 1;
    hourstoED = (hourstoED < 10) ? "0" + hourstoED : hourstoED;
    var minutestoED = 60 - now.getMinutes() - 1;
    minutestoED = (minutestoED < 10) ? "0" + minutestoED : minutestoED;
    var secondstoED = 60 - now.getSeconds() - 1;
    secondstoED = (secondstoED < 10) ? "0" + secondstoED : secondstoED;

    daystoED = getDateForm(daystoED, "день", "дня", "дней");
    hourstoED = getDateForm(hourstoED, "час", "часа", "часов");
    minutestoED = getDateForm(minutestoED, "минута", "минуты", "минут");
    secondstoED = getDateForm(secondstoED, "секунда", "секунды", "секунд");

    //сообщение
    output = [daystoED, hourstoED, minutestoED, secondstoED].join('  <span class="time-clearfix">&nbsp;</span>');
    return output;
}

$(document).ready(function () {
    showCarousels();
    showTimer();
});

