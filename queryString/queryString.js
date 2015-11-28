var querystring = require('querystring');
var val1 = querystring.parse('foo=bar&baz=qux&baz=quux&corge','&','=');
var val2 = querystring.stringify({ foo: 'bar', baz: [ 'qux', 'quux' ], corge: '' },',',':');
console.log(val1);
console.log(val2);
//escape转义
var val3 = querystring.escape('哈哈');
console.log(val3);
var val4 = querystring.unescape('%E5%93%88%E5%93%88');
console.log(val4);