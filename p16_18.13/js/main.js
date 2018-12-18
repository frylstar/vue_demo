/**
 * 组件通信之任意平行组件间的通信
 */
var Event = new Vue();

Vue.component('say', {
  template: `<div>
      我说：<input @keyup="onChange" v-model="words">
    </div>`,
  data: function() {
    return {
      words: '',
    }
  },
  methods: {
    onChange: function() {
      Event.$emit('say-something', this.words)//这里为啥要用Event?
    }
  }
});

Vue.component('listen', {
  template: `<div>
    花花说：{{flower_said}}
  </div>`,
  data: function() {
    return {
      flower_said: '',
    }
  },
  mounted: function() {
    var _this = this;
    Event.$on('say-something', data => { //这里为啥要用Event
      console.log(data)
      // 使用箭头函数可以不用先将当前实例this存在_this中
      _this.flower_said = data;
    })
    // Event.$on('say-something', function(data) {
    //   console.log(this)
    //   // 在这里使用this调用的是Event,而不是当前Vue实例，所以无法获取到当前data里的flower_said
    //   this.flower_said = data;
    // })
  }
})

var app = new Vue({
  el: '#app',
})