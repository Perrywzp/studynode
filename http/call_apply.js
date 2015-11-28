/**
 * Created by perry on 15/9/25.
 */

var pet = {
    words: '...',
    speak: function(say){
        console.log(say + ' ' + this.words);
    }
};


pet.speak('speak');

var dog = {
    words: "Wang"
};

pet.speak.call(dog,'Speak');