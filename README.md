# vue-auto-complete

## 项目安装

```
yarn add vue-auto-complete
```

或者

```
npm install vue-auto-complete --save
```

> 温馨提示：暂时未上传到 npm，请 github 下载使用！

## 项目使用

main.js

```js
import AutoComplete from 'vue-auto-complete';
Vue.use(AutoComplete);
```

### 网络资源

```xml
<AutoComplete
  inputClass="test-class"
  method="get"
  placeholder="请输入搜索内容"
  initial-value="海阔天空"
  :maxlength="5"
  :showNoResults="false"
  :show-focus-results="false"
  results-property="result.songs"
  results-display="name"
  source="http://musicapi.leanapp.cn/search?keywords="
  @blur="onBlur"
  @focus="onFocus"
  @change="onChange"
  @select="onSelect"
>
  <span slot="noResults">没有找到</span>
</AutoComplete>
```

### 自定函数

```xml
<AutoComplete
  inputClass="test-class"
  method="get"
  placeholder="请输入搜索内容"
  :maxlength="5"
  :showNoResults="false"
  results-property="result.songs"
  results-display="name"
  :source="handleSearch"
  :clear-button-icon="true"
>
  <span slot="noResults">没有找到</span>
</AutoComplete>
```

```js
export default {
  name: 'complete',
  methods: {
    handleSearch(value) {
      let result;
      if (!value || value.indexOf('@') >= 0) {
        result = [];
      } else {
        result = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
      }
      console.log('前台处理结果', result);
      return result;
    },
    onBlur() {
      console.log('失去了焦点');
    },
    onFocus() {
      console.log('获取了焦点');
    },
    onChange() {
      console.log('内容改变了');
    },
    onSelect() {
      console.log('选中时调用');
    }
  }
};
```

## 可用道具

| 道具             | 类型              | 是否必须 | 默认值     | 描述                                 |
| :--------------- | :---------------- | :------- | :--------- | :----------------------------------- |
| source           | `String|Function` | true     |            | 数据资源                             |
| method           | `String`          | false    | 'get'      | 请求方式                             |
| initialValue     | `String|Number`   | false    |            | 初始值                               |
| resultsProperty  | `String`          |          | 'name'     | 输入框默认提示                       |
| resultsDisplay   | `String|Function` |          | 'name'     | 输入框默认提示                       |
| placeholder      | `String`          | false    | '搜索内容' | 文本框输入提示                       |
| maxlength        | `Number`          | false    |            | 输入框默认提示                       |
| showNoResults    | `Boolean`         | false    | true       | 输入框默认提示                       |
| showFocusResults | `Boolean`         | false    | true       | 文本框获取焦点后是否显示上次搜索结果 |
| inputClass       | `String|Object`   | false    |            | 输入框默认提示                       |
| isUpperLower     | `Boolean`         | false    |            | 输入框默认提示                       |
| clearButtonIcon  | `Boolean`         | false    | false      | 输入框默认提示                       |

## 可用事件

| 事件   | 输出   | 描述                   |
| :----- | :----- | :--------------------- |
| blur   | Object | 失去焦点时的回调       |
| focus  | Object | 获得焦点时的回调       |
| change | Object | 输入框数据变化时的回调 |
| select | Object | 选择下拉列表后的回调   |

## 可用插槽

| 插槽      | 描述           |
| :-------- | :------------- |
| noResults | 没有搜索结果时 |

## 项目源码

请浏览[vue-auto-complete](https://github.com/nuochong/vue-auto-complete/)
