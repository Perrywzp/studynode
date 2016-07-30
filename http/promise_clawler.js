/**
 * [desc]
 * @author wangzhipei
 * @date 2016/7/30/0030.
 */
/**
 * Created by perry on 15/9/25.
 */
//爬虫
var http = require('http');
var Promise = require('promise');
var cheerio = require('cheerio');
var baseUrl = 'http://www.imooc.com/learn/';
var url = 'http://www.imooc.com/learn/348';

function filterChapters(html) {
  var $ = cheerio.load(html);

  var chapters = $(".chapter");
  //[{
  //    chapterTitle: '',
  //    videos:[
  //        title:'',
  //        id:''
  //    ]
  //}]

  var courseData = [];

  chapters.each(function () {
    var chapter = $(this);
    var chapterTitle = chapter.find('strong').text();
    var videos = chapter.find('.video').children('li');
    var chapterData = {
      chapterTitle: chapterTitle,
      videos: []
    };
    videos.each(function () {
      var video = $(this).find('.studyvideo');
      var videoTitle = video.text();
      var id = video.attr('href').split('video/')[1];

      chapterData.videos.push({
        title: videoTitle,
        id: id
      })

    });

    courseData.push(chapterData);


  });
  //console.log(courseData);
  return courseData;
}

function printCourseInfo(courseData) {
  courseData.forEach(function (item) {
    var chapterTitle = item.chapterTitle;

    console.log(chapterTitle + '\n');

    item.videos.forEach(function (video) {
      console.log(' [' + video + '] ' + video.title + '\n');
    });


  });
}

function getPageAsync(url) {
  return new Promise(function (resolve, reject) {
    console.log('正在爬取...' + url);

    http.get(url, function (res) {
      var html = '';

      res.on('data', function (data) {
        html += data;
      });

      res.on('end', function () {

        resolve(html);
        //var courseData = filterChapters(html);
        //
        //printCourseInfo(courseData);
      });
    }).on('error', function (e) {
      reject(e);
      //console.log('获取课程数据出错');
    });
  });

}

var fetchCourseArray = [];

vedioIds.forEach(function(id){
  fetchCourseArray.push(getPageAsync(baseUrl + id));
});

Promise
  .all(fetchCourseArray)
  .then(function(pages){
    var coursesData = [];
    page.forEach(function(html){
      coursesData
    });
  });

