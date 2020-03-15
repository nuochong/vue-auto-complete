<template>
  <section class="auto-complete-container">
    <div class="auto-complete-wrap" v-clickoutside="outsideClose">
      <input
        class="auto-complete-input auto-complete-input-padding"
        :class="inputClass"
        :placeholder="placeholder"
        :maxlength="maxlength"
        v-model.trim="value"
        @input="initSearch"
        @blur="blur"
        @focus="focus"
        @keyup.enter="invoiceDropdownClick(listSelectedName)"
        @keyup.up="upClick"
        @keyup.down="downClick"
        type="text"
        autocomplete="off"
      />
      <div class="auto-complete-btn" @click="search" v-if="!clearButtonIcon && !loading">
        <i slot="suffix" aria-label="icon: search" class="anticon anticon-search">
          <svg viewBox="64 64 896 896" data-icon="search" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false">
            <path
              d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"
            ></path>
          </svg>
        </i>
      </div>

      <span class="auto-complete-btn" v-if="loading">
        <span role="img" aria-label="loading" class="anticon anticon-loading">
          <svg
            viewBox="0 0 1024 1024"
            focusable="false"
            class="anticon-spin"
            data-icon="loading"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"
            ></path>
          </svg>
        </span>
      </span>

      <span class="auto-complete-btn auto-complete-clear" @click="clear" v-if="isShowClear && clearButtonIcon">
        <span role="img" aria-label="close-circle" class="anticon anticon-close-circle">
          <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true">
            <path
              d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"
            ></path>
          </svg>
        </span>
      </span>

      <ul v-if="isShowContent && isFocussed" ref="ul-container">
        <li
          v-for="(item, index) in results"
          :key="index"
          @click="operate(liContent(item))"
          :title="liContent(item)"
          :class="{ active: listSelected == index ? true : false }"
          :ref="'li-' + index"
        >
          {{ liContent(item) }}
        </li>
      </ul>
      <ul v-show="isNoResult && showNoResults && isFocussed">
        <li><slot name="noResults">暂无搜索结果</slot></li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AutoComplete',
  props: {
    source: {
      type: [String, Function],
      required: true
    },
    method: {
      type: String,
      default: 'get',
      required: false
    },
    // 初始值
    initialValue: {
      type: [String, Number],
      required: false
    },
    resultsProperty: {
      type: String,
      required: false,
      default: 'name'
    },
    resultsDisplay: {
      type: [String, Function],
      default: 'name'
    },
    placeholder: {
      default: '搜索内容',
      required: false
    },
    maxlength: {
      type: Number,
      required: false
    },
    showNoResults: {
      type: Boolean,
      default: true,
      required: false
    },
    // 文本框获取焦点后是否显示上次搜索结果
    showFocusResults: {
      type: Boolean,
      default: true
    },
    inputClass: {
      type: [String, Object],
      required: false
    },
    isUpperLower: {
      type: Boolean,
      required: false
    },
    // 是否显示清除按钮
    clearButtonIcon: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data() {
    return {
      value: '',
      isNoResult: false,
      loading: false,
      error: '',
      results: null,
      isShowContent: false,
      isFocussed: false,
      listSelected: 0, //当前激活的选项
      boundaryUp: 0,
      boundaryDown: 0,
      tempHeight: 0,
      isShowClear: false,
      currentScrollTop: 0
    };
  },
  watch: {},
  computed: {},
  mounted() {
    this.clearState();
    this.value = this.initialValue ? this.initialValue : '';
    console.log('this.value', this.value);
  },
  methods: {
    initSearch() {
      console.log('触发了搜索');
      this.resetValueState();
      this.clearState();
      this.$emit('change', this.value);
      switch (true) {
        case typeof this.source === 'string':
          this.liKey = this.resultsDisplay;
          console.log('点击了搜索', this.liKey);
          this.search();
          break;
        case typeof this.source === 'function':
          console.log('使用函数搜索');
          this.searchFunction();
          break;
        default:
          throw new TypeError();
      }
    },
    resetValueState() {
      this.value.length == 0 && (this.results = null);
    },
    autoScroll(key, type) {
      let currentNode = this.$refs['li-' + key][0];
      console.log('获取到的ref', currentNode);
      // offsetTop 表示该元素到父元素顶部的距离
      let top = currentNode.offsetTop;
      console.log('当前元素距离顶部的距离', top);
      let height = this.$refs['ul-container'].offsetHeight;
      console.log('获取滚动容器的高度', height);
      let liHeight = currentNode.offsetHeight;
      if (type == 'down') {
        this.boundaryUp = 0;
        this.boundaryDown++;
        if (this.checkScrollState(top, height)) {
          console.log('下，第一次，或者返回置顶超出视窗后');
          console.log('需要调整滚动条');
          this.$refs['ul-container'].scrollTop = top - height + liHeight;
        } else if (this.boundaryDown >= 6) {
          console.log('下，第一次，或者返回置顶超出视窗后');
          console.log('需要调整滚动条');
          this.$refs['ul-container'].scrollTop = top - height + liHeight;
        }
      } else if (type == 'up') {
        this.boundaryDown = 0;
        this.boundaryUp++;
        if (this.checkScrollState(top, height)) {
          console.log('上，第一次，或者返回置顶超出视窗后');
          console.log('需要调整滚动条');
          this.$refs['ul-container'].scrollTop = top;
        } else if (this.boundaryUp >= 6) {
          console.log('上，第一次，或者返回置顶超出视窗后');
          console.log('需要调整滚动条');
          this.$refs['ul-container'].scrollTop = top;
        }
      }
    },
    checkScrollState(currentTop, ulHeight) {
      const scrollTop = this.$refs['ul-container'].scrollTop;
      // scrollTop是到ul-container顶部的距离
      console.log('包含信息scrollTop', scrollTop);
      console.log('包含信息currentTop', currentTop);
      console.log('包含信息ulHeight', ulHeight);
      if (currentTop > scrollTop && currentTop < scrollTop + ulHeight) {
        console.log('包含');
        // 当前元素在可视窗口ul-container内
        return false;
      } else {
        console.log('未包含');
        return true;
      }
    },
    rememberCurrentLi(state) {
      if (this.isShowContent && this.isFocussed) {
        if (state == 'focus') {
          this.$nextTick(function() {
            this.$refs['ul-container'].scrollTop = this.currentScrollTop;
          });
        } else if (state == 'blur') {
          this.currentScrollTop = this.$refs['ul-container'].scrollTop;
        }
      }
    },
    searchFunction() {
      this.results = this.source(this.value);
      this.isShowContent = true;
      console.log('temp', this.results);
    },
    liContent(item) {
      if (typeof this.source === 'string') {
        return item[this.resultsDisplay];
      } else if (typeof this.source === 'function') {
        return item;
      }
    },
    //listSelectedName接受的是组件:name属性的"item.id"的值。根据需求可能绑定的值不一样。这块的name是根据选中项的ID给其他输入框填充信息
    //下方向键
    downClick() {
      console.log('下');
      let listLength = this.results.length;
      if (this.listSelected < listLength - 1) {
        this.listSelected++;
      } else {
        this.listSelected = 0;
      }
      this.resValue(this.listSelected);
      this.autoScroll(this.listSelected, 'down');
    },
    //上方向键
    upClick() {
      console.log('上');
      let listLength = this.results.length;
      if (this.listSelected <= 0) {
        this.listSelected = listLength - 1;
      } else {
        if (this.listSelected < listLength) {
          this.listSelected--;
        } else {
          this.listSelected = listLength - 1;
        }
      }
      this.resValue(this.listSelected);
      this.autoScroll(this.listSelected, 'up');
    },
    resValue(key) {
      this.value = this.results[key].name;
    },
    //回车事件、单击事件。回车事件和单击事件根据具体需求可以写成一个。
    invoiceDropdownClick(e) {
      //将选中项ID传过来，通过for循环进行对比，匹配成功后给需要填充值的输入框填充对应的值即可。
      console.log('回车', e);
    },
    outsideClose() {
      this.isFocussed = false;
    },
    blur() {
      this.$emit('blur', this.value);
      this.rememberCurrentLi('blur');
      // this.isFocussed = false;
    },
    focus() {
      this.$emit('focus', this.value);
      this.isFocussed = true;
      this.results != null && (this.isShowContent = this.showFocusResults);
      this.rememberCurrentLi('focus');
      console.log('this.isShowContent', this.isShowContent);
    },
    search() {
      console.log('点击了搜索');
      this.debounce(() => {
        this.value.length != 0 && this.request(this.source + this.value);
      }, 1000);
    },
    clear() {
      this.value = '';
      this.results = null;
      this.isShowClear = false;
    },
    clearState() {
      this.isShowClear = this.value.length == 0 ? false : true;
    },
    operate(value) {
      console.log('点击了操作');
      this.$emit('select', value);
      this.value = value;
      this.reset();
    },
    // 输入框请求防抖
    debounce(fn, wait) {
      this.fun !== null && clearTimeout(this.fun);
      this.fun = setTimeout(fn, wait);
    },
    reset() {
      this.isShowContent = false;
    },
    request(url) {
      console.log('请求方式', this.method);
      let promise = fetch(url, {
        method: this.method
      });
      this.loading = true;
      return promise
        .then(response => {
          console.log('请求的初始结果', response);
          if (response.ok) {
            this.error = null;
            let jsonPromise = response.json();
            console.log('第一步处理的结果：', jsonPromise);
            return jsonPromise;
          }
          throw new Error('网络响应不正常');
        })
        .then(response => {
          console.log('第二部处理', response);
          this.results = this.setResults(response);
          console.log('返回的结果是', this.results);
          this.isNoResult = false;
          this.isShowContent = true;
          this.loading = false;
        })
        .catch(error => {
          console.log('错误了');
          this.isShowContent = false;
          this.isNoResult = true;
          this.error = error.message;
          this.loading = false;
        });
    },
    getHeaders() {
      const headers = {
        Accept: 'application/json, text/plain, */*'
      };
      return headers;
    },
    setResults(response) {
      console.log('处理结果', response);
      console.log('this.resultsProperty', this.resultsProperty);
      console.log('处理结果', response[this.resultsProperty]);
      let temp = eval('response.' + this.resultsProperty);
      console.log('object', temp);
      if (this.resultsProperty && temp) {
        return temp;
      }
      return [];
    }
  },
  directives: {
    clickoutside: {
      bind(el, binding) {
        function documentHandler(e) {
          if (el.contains(e.target)) {
            return false;
          }
          if (binding.expression) {
            binding.value(e);
          }
        }

        function KeyUp(e) {
          if (e.keyCode == 27) {
            if (binding.expression) {
              binding.value(e);
            }
          }
        }
        el.__vueClickOutSize__ = documentHandler;
        el.__vueKeyup__ = KeyUp;

        document.addEventListener('keyup', KeyUp);
        document.addEventListener('click', documentHandler);
      },
      unbind(el) {
        document.removeEventListener('click', el.__vueClickOutSize__);
        delete el.__vueClickOutSize__;

        document.removeEventListener('keyup', el.__vueKeyup__);
        delete el.__vueKeyup__;
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import url('./assets/scroll.scss');

.auto-complete-container {
  .auto-complete-wrap {
    position: relative;
    display: inline-block;
    .auto-complete-input {
      height: 32px;
      line-height: 1.5;
      background: transparent;
      border-width: 1px;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), height 0s;
      border-radius: 4px;

      box-sizing: border-box;
      margin: 0;
      display: inline-block;
      padding: 4px 11px;
      color: rgba(0, 0, 0, 0.65);
      border: 1px solid #d9d9d9;
      &:hover {
        border-color: #40a9ff;
        border-right-width: 1px !important;
      }
      &:focus {
        border-color: #40a9ff;
        border-right-width: 1px !important;
        outline: 0;
        box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
      }
    }
    .auto-complete-input-padding {
      padding-right: 30px;
    }
    .auto-complete-btn {
      position: absolute;
      right: 10px;
      top: 8px;
      cursor: pointer;
      // .anticon {
      //   display: inline-block;
      //   font-style: normal;
      //   line-height: 0;
      //   text-align: center;
      //   text-transform: none;
      //   vertical-align: -0.125em;
      //   text-rendering: optimizeLegibility;
      //   -webkit-font-smoothing: antialiased;
      //   -moz-osx-font-smoothing: grayscale;
      // }
      .anticon-spin {
        display: inline-block;
        -webkit-animation: loadingCircle 1s infinite linear;
        animation: loadingCircle 1s infinite linear;
      }
    }
    .auto-complete-clear {
      color: gray;
    }
    ul {
      max-height: 256px;
      overflow-y: auto;
      margin: 0;
      padding: 0;
      color: rgba(0, 0, 0, 0.65);
      line-height: 1.5715;
      list-style: none;
      position: absolute;
      box-sizing: border-box;
      font-size: 14px;
      background-color: #fff;
      border-radius: 4px;
      outline: none;
      box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
      margin-top: 3px;
      width: 100%;
      z-index: 10;

      &::-webkit-scrollbar {
        display: none; //Safari and Chrome
      }
      &:hover::-webkit-scrollbar {
        display: block; //Safari and Chrome
      }

      li {
        position: relative;
        display: block;
        min-height: 32px;
        padding: 5px 12px;
        color: rgba(0, 0, 0, 0.65);
        font-weight: normal;
        font-size: 14px;
        line-height: 32px;
        cursor: pointer;
        transition: background 0.3s ease;
        text-align: left;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        &:hover {
          background-color: #f5f5f5;
        }
        &.active {
          color: rgba(0, 0, 0, 0.65);
          background-color: #e6f7ff;
        }
      }
    }
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
