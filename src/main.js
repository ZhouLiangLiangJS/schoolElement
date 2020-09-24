// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import VueResource from 'vue-resource'
require('./mock');
Vue.use(VueResource)
Vue.use(VueQuillEditor);
Vue.use(ElementUI)
Vue.config.productionTip = false
window.console.warn = () => {}
Vue.prototype.myAjax = (path, data, success, error) => {

  Vue.http.post(path, data, {
    emulateJSON: true
  }).then(res => {
    console.log(res)
    if (success) {
      success(res)
    }
  }, err => {
    console.log(err)
    if (error) {
      error(err)
    }
  });
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
