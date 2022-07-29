<!-- TestState -->
<template>
  <div id="test-state">
    <h3>TestState</h3>
    <p>count: {{ count }}</p>
    <p>countAddOne: {{ countAddOne }}</p>
    <p>countAddSomenum(2): {{ countAddSomenum(2) }}</p>
    <button @click="INCREMENT">count 增加1</button>

    <p>query:{{ query }}</p>

    <router-view></router-view>

    <p v-for="(item, index) in 100" :key="index" class="scrollp">滚动</p>
  </div>
</template>

<script>
  // import { createNamespacedHelpers } from 'vuex'
  // const { mapState, mapGetters, mapMutations } = createNamespacedHelpers('moduleA')
  import { mapState, mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'TestState',
    props: ['query'],
    data() {
      return {

      }
    },
    computed: {
      ...mapState('moduleA', ['count']),
      ...mapGetters('moduleA', ['countAddOne', 'countAddSomenum'])
    },
    methods: {
      ...mapMutations('moduleA', ['INCREMENT'])
    },
//生命周期 - 创建完成（访问当前this实例）
    created() {

    },
//生命周期 - 挂载完成（访问DOM元素）
    mounted() {

    }
  }
</script>
<style scoped lang='scss'>
/* @import url(); 引入css类 */
  #test-state{
    height: 800px;
    .scrollp{
      height: 20px;
    }
  }
</style>