<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <vue-markdown>
      {{ about }}
    </vue-markdown>
  </div>
</template>

<script>
// @ is an alias to /src
import hljs from 'highlight.js';
// import HelloWorld from '@/components/HelloWorld.vue';
import VueMarkdown from 'vue-markdown';
import about from '../../README.md';
// import 'highlight.js/styles/atom-one-light.css';
import 'highlight.js/styles/github.css';

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    VueMarkdown
  },
  data() {
    return {
      about: about
    };
  },
  mounted() {
    this.highlightCode();
  },
  methods: {
    highlightCode() {
      const preEl = document.querySelectorAll('pre');
      preEl.forEach(el => {
        hljs.highlightBlock(el);
      });
    }
  }
};
</script>
