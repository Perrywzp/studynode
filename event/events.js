/**
 * Created by perry on 15/9/26.
 */

var EventEmitter = require('events').EventEmitter;

var life = new EventEmitter();

//设置最大监听数，默认为10
life.setMaxListeners(10);

function water(who){
    console.log('给 '+ who + ' 倒水');
}

// addEventListener
life.on('求安慰',water);

life.on('求安慰',function (who){
    console.log('给 '+ who + ' 做饭');
});

life.on('求安慰',function (who){
    console.log('给 '+ who + ' 揉肩膀');
});

life.on('求安慰',function (who){
    console.log('给 '+ who + ' 。。。8');
});

life.on('求安慰',function (who){
    console.log('给 '+ who + ' 你想累死我呀');
});

life.on('求溺爱',function (who){
    console.log('给 '+ who + ' 买衣服');
});

life.on('求溺爱',function (who){
    console.log('给 '+ who + ' 交工资');
});
//移除监听
//life.removeListener("求安慰",'汉子');无效

life.removeListener("求安慰",water);

//全部移除
life.removeAllListeners("求溺爱");


var hasConfortListener = life.emit("求安慰",'汉子');

var hasLovedListener = life.emit("求溺爱",'妹子');

var hasPlayedListener = life.emit("求玩坏",'妹子和汉子');

//获取所监听事件的数量的两种方式
console.log(life.listeners("求安慰").length);
console.log(life.listeners("求溺爱").length);
//console.log(EventEmitter.listenerCount(life,"求安慰"));

//console.log(hasConfortListener);
//console.log(hasLovedListener);
//console.log(hasPlayedListener);


