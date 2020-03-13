import AutoCompleteMe from './auto-complete/AutoComplete.vue';
let test = {};
test.install = function(Vue, options) {
  Vue.prototype.$msg = 'Hello I am test.js';
  console.log(options);
  Vue.prototype.$myMethod = function(arr) {
    if (arr.length < 0) {
      return false;
    } else {
      arr = arr.join('连接你我');
      return arr;
    }
  };
  Vue.component(AutoCompleteMe.name, AutoCompleteMe); // testPanel.name 组件的name属性
};
export default test;
