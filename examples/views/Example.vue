<template>
  <div class="home">
    <h1>网络资源</h1>
    <AutoComplete results-property="result.songs" results-display="name" source="https://musicapi.leanapp.cn/search?keywords=">
      <span slot="noResults">没有找到</span>
    </AutoComplete>
    <h1>自定函数</h1>
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
  </div>
</template>

<script>
// import AutoComplete from '../../packages;

export default {
  name: 'complete',
  components: {
    // AutoComplete
  },
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
</script>
