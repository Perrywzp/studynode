var url = require('url');
console.log(url);

console.log(url.parse('http://hz.58.com/hezu/'));
console.log(url.parse('http://hz.58.com/hezu/22955421538442x.shtml?adtype=1&entinfo=22955421538442_0&psid=184676521189883466635183621&iuType=q_2&ClickID=1&version=&PGTID=0d30000a-0004-f49d-ab34-24b402ec061e'));
console.log(url.resolve('http://hz.58.com/','hezu/'));