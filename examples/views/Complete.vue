<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <AutoCompleteMe
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
    </AutoCompleteMe>

    <AutoCompleteMe
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
    </AutoCompleteMe>
  </div>
</template>

<script>
// import AutoCompleteMe from '../plugin/AutoCompleteMe';

export default {
  name: 'complete',
  components: {
    // AutoCompleteMe
  },
  methods: {
    handleSearch(value) {
      let result;
      if (!value || value.indexOf('@') >= 0) {
        result = [];
      } else {
        result = ['gmail.com', '163.com', 'qq.com'].map(
          domain => `${value}@${domain}`
        );
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
      console.log('选中是调用');
    }
  }
};
</script>
