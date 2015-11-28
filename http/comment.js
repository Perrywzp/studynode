/**
 * Created by perry on 15/9/26.
 */

var http = require('http');

var queryString = require('querystring');

var postData = queryString.stringify({
    'content':'学习scoot的nodejs-http-request',
    'cid': 348
});

var options = {
    hostname:'www.imooc.com',
    port:80,
    path:'/course/docomment',
    method:'POST',
    headers:{
         'Accept':'application/json, text/javascript, */*; q=0.01',
         'Accept-Encoding':'gzip, deflate',
         'Accept-Language':'zh-CN,zh;q=0.8,en;q=0.6',
         'Cache-Control':'no-cache',
         'Connection':'keep-alive',
         'Content-Length':postData.length,
         'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
         'Cookie':'imooc_uuid=da2193bc-4cd4-4c5a-8f28-1cbbe82b07ec; loginstate=1; apsid=cyMTc5Y2ZiZmI3NmZhY2YzYjgyMGM2NTA5ZWJhZjAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjY1Njc0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB3YW5nemhpcGVpMTEyMUAxNjMuY29tAAAAAAAAAAAAADJlOGQzMGQzYWM4NTAyNjgzMGEyN2JkZWE5Nzk3YjM1I2fpUyNn6VM%3DND; PHPSESSID=6l3d6o4cerl93gi7e0b0qriub3; jwplayer.qualityLabel=é«æ¸; cvde=5604d83b4876e-52; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1442628044,1442663324,1443090662,1443158077; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1443208693',
         'Host':'www.imooc.com',
         'Origin':'http://www.imooc.com',
         'Pragma':'no-cache',
         'RA-Sid':'70105987-20150608-050453-b62fe6-0bca72',
         'RA-Ver':'3.0.7',
         'Referer':'http://www.imooc.com/comment/348',
         'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36',
         'X-Requested-With':'XMLHttpRequest'
    }
};

var req = http.request(options,function(res){
    console.log('Status' + res.statusCode);
    console.log('headers' + JSON.stringify(res.headers));

    res.on('data',function(chunk){
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof chunk);
    });

    res.on('end',function(){
        console.log('评论完毕');
    });


});

req.on('error',function(e){
    console.log('ERROR' + e.message);
});

req.write(postData);

req.end();