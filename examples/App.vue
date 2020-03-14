<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Example</router-link> |
      <router-link to="/documentation">Documentation</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="app-wrap">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import url('./assets/vue.css');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.app-wrap {
  max-width: 1012px;
  margin: 0 auto;
}

#app {
  .hljs {
    background: #fff;
  }
  table {
    margin: 0 auto;
    border-spacing: 0;
    border-collapse: collapse;
  }
}
</style>
