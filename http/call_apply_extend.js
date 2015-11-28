/**
 * Created by perry on 15/9/25.
 */

function Pet(words){
    this.words = words;
    this.speak = function(){
        console.log(this.words);
    }
}

function Dog(words){
    Pet.call(this,words);
    //Pet.apply(this,arguments);
}

var dog = new Dog('Wang');

dog.speak();
