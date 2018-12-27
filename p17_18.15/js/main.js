/**
 * 函数简写
 * 在很多时候，你可能想在 bind 和 update 时触发相同行为，而不关心其它的钩子。比如这样写:
 * el: 指令所绑定的元素，可以用来直接操作DOM
 * binding: 一个对象，包含以下属性：name, value, oldValue, expression, arg, modifiers
 * 注意：除了el之外，其他参数应该都是只读的，切勿进行修改。
 */

Vue.directive('pin', function(el, binding) {

  var pinned = binding.value; //即自定义指令绑定值，这里是true or false
  var  position = binding.modifiers; // 一个包含修饰符的对象 ，此处为 {bottom: true, right: true }
  var warning = binding.arg; // 传给指令的参数，例如 v-my-directive:foo 中，参数为 "foo"
  console.log('position:', position)

  console.log('pinned', pinned);
  if(pinned) {
    el.style.position = 'fixed';

    // 设置bottom, right为10px
    for (var key in position) {
      if(position[key]) {
        el.style[key] = '10px';
      }
    }
    // 传给指令的参数
    if(warning === 'true') {
      el.style.background = 'yellow';
    }

    // el.style.top = '10px';
    // el.style.left = '10px;'
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