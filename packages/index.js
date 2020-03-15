import AutoCompleteMe from './auto-complete/AutoComplete.vue';
let normal = {};
normal.install = function(Vue, options) {
  console.log('options', options);
  Vue.prototype.$msg = 'Hello I am test message';
  Vue.component(AutoCompleteMe.name, AutoCompleteMe);
};
export default normal;
