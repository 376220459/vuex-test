<template>
  <div id="app">
    <div id="routes">
      <router-link 
        class="routes-item"
        v-for="(componentNmae, index) in routes" 
        :key="index" 
        :to="'/' + componentNmae"
      >
        {{ componentNmae }}
      </router-link>
    </div>

    <div id="buttons">
      <button @click="changeRoute(-1)">后退</button>
      <button @click="changeRoute(1)">前进</button>
      <router-link to='/TestForm/999'>测试组价内守卫</router-link>
      <router-link to='/TestForm/888'>测试组价内守卫2</router-link>
    </div>

    <p>当前的路由：{{ $route.path }}</p>

    <transition name="default-router" mode="out-in">
      <router-view />
    </transition>

    <router-view name="err" />
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      routes: [
        'TestState', 
        'TestMutation', 
        'TestAction', 
        'TestForm',
        'ErrorPage',
      ]
    }
  },
  methods: {
    changeRoute(num){
      if(window.history.length){
        this.$router.go(num)
      }
    }
  },
}
</script>

<style scope lang='scss'>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  #routes{
    .routes-item{
      margin-right: 20px;
    }
  }
  #buttons{
    button{
      margin: 20px 10px;
    }
  }
}
.default-router-enter-active, .default-router-leave-active{
  transition: all .2s;
}
.default-router-enter, .default-router-leave-to{
  opacity: 0;
}
</style>
