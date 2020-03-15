<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Example</router-link> | <router-link to="/documentation">Documentation</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <img alt="Vue logo" src="./assets/logo.png" />
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
  .app-wrap {
    max-width: 1012px;
    margin: 0 auto;
    table {
      margin: 0 auto;
      border-spacing: 0;
      border-collapse: collapse;
    }
    pre {
      text-align: left;
    }
    h3 {
      margin: 40px 0 0;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    a {
      color: #42b983;
    }
  }
}
</style>
