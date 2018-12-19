/**
 * 函数简写
 * 在很多时候，你可能想在 bind 和 update 时触发相同行为，而不关心其它的钩子。比如这样写:
 * el: 指令所绑定的元素，可以用来直接操作DOM
 * binding: 一个对象，包含以下属性：name, value, oldValue, expression, arg, modifiers
 * 注意：除了el之外，其他参数应该都是只读的，切勿进行修改。
 */

Vue.directive('pin', function(el, binding) {

  var pinned = binding.value; //即自定义指令里的值，这里是true or false
  console.log('pinned', pinned);
  if(pinned) {
    el.style.position = 'fixed';
    el.style.top = '10px';
    el.style.left = '10px;'
  } else {
    el.style.position = 'static';
  }
})

var app = new Vue({
  el: '#app',
  data: {
    card1: {
      pinned: false,
    },
    card2: {
      pinned: false,
    }
  }
})