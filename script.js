var emoji = document.getElementById('emoji');
var mood = document.getElementById('mood');
var sliderValue = document.getElementById('range');

sliderValue.oninput = function () {
    var value = this.value;
    if (value <= 0) {
        emoji.innerHTML = '🥰';
        mood.innerHTML = 'Lovely';
    }

    else if (value <= 20) {
        emoji.innerHTML = '😭';
        mood.innerHTML = 'Cry';
    }

    else if (value <= 40) {
        emoji.innerHTML = '🥲';
        mood.innerHTML = 'Fear';
    }

    else if (value <= 60) {
        emoji.innerHTML = '🥳';
        mood.innerHTML = 'Happy';
    }

    else if (value <= 80) {
        emoji.innerHTML = '🥺';
        mood.innerHTML = 'Oppressed';
    }

    else if (value <= 100) {
        emoji.innerHTML = '💜';
        mood.innerHTML = 'Thanks for watching';
    }

}