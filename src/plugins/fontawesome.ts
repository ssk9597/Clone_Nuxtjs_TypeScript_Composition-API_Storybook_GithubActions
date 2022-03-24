import Vue from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
// solid Style
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// regular Style
import {} from '@fortawesome/free-regular-svg-icons';
// brands Style
import {} from '@fortawesome/free-brands-svg-icons';

// nuxt.config.jsでCSSファイルを追加
config.autoAddCss = false;

// 利用するアイコンを配列に追加
const solidIcons = [faArrowRight];
const regularIcons = [];
const brandsIcons = [];

// 利用するアイコンをlibraryに追加
solidIcons.forEach((icon) => library.add(icon));
regularIcons.forEach((icon) => library.add(icon));
brandsIcons.forEach((icon) => library.add(icon));

// グローバルコンポーネントに登録
Vue.component('fa', FontAwesomeIcon);
