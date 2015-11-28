/**
 * Created by perry on 15/9/25.
 */
function clickIt(e){
    window.alert('Button is clicked');
}

var button = document.getElementById('#button');

button.addEventListener('click',clickIt);

//EventEmitter