/** 
 * 过滤器filter一般是做一些简单的事情，
 * 修饰/矫正，在到达用户面前的前一步？
 * 内部非常复杂，可以考虑写成计算属性，带有缓存，可重用性很强？
*/

Vue.filter('meter', function(val, unit) {
  val = val || 0;
  unit = unit || 'm';
})

Vue.filter('currency', function(val, unit) {
  // 如果val有值则等于val, 如果无值则为0
  val = val || 0;
  unit = unit || '元';
  return val + unit;
})

var app = new Vue({
  el: '#app',
  data: {
    price: 10,
    length: 10,
  }
})