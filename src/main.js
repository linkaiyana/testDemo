const aaa = 'hello';
console.log(aaa);

import {bbb} from "./js/app"

console.log(bbb);

// 要想css文件生效，必须引用他，可能由于版本原因，css-loader不能装太高版本
require('./css/index.css');
// 引用less文件
require('./css/style.less');

import App from './js/tmp';
import Vue from 'vue';
import cpn from './vue/cpn.vue'

const app = new Vue({
    el: '#app',
    template: '<cpn/>',
    components: {
        cpn
    }
})