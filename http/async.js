/**
 * Created by perry on 15/9/24.
 */
//script a.js
//script b.js
//script c.js
//
//var i = 0;
//while(true){
//    i++;
//}

var c = 0;

function printIt(){
    console.log(c);
}

//function plus(){
//    c += 1;
//}


function plus(callback){
    setTimeout(function(){
        c += 1;
        callback();
    },1000);

}

plus(printIt);
