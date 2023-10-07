var emoji = document.getElementById('emoji');
var mood = document.getElementById('mood');
var sliderValue = document.getElementById('range');

sliderValue.oninput = function () {
    var value = this.value;
    if (value <= 0) {
        emoji.innerHTML = '💜';
        mood.innerHTML = 'Heart';
    }

    else if (value <= 20) {
        emoji.innerHTML = '🍇';
        mood.innerHTML = 'Grape';
    }

    else if (value <= 40) {
        emoji.innerHTML = '🔮';
        mood.innerHTML = 'Orb';
    }

    else if (value <= 60) {
        emoji.innerHTML = '👾';
        mood.innerHTML = 'Alien Monster';
    }

    else if (value <= 80) {
        emoji.innerHTML = '🍆';
        mood.innerHTML = 'Eggplant';
    }

    else if (value <= 100) {
        emoji.innerHTML = '💁‍♀️';
        mood.innerHTML = 'Thanks for watching';
    }

}