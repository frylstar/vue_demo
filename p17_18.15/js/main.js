

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