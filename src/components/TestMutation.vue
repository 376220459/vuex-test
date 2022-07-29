<!-- TestMutation -->
<template>
  <div>
    <h3>TestMutation</h3>
    <p>{{ person.name }}</p>
    <p>{{ person.age }}</p>
    <p>{{ person.sex }}</p>
    <button @click="addSex({sex: ($route.query.sex ?? '外星人')})">增加性别</button>
  </div>
</template>

<script>
    import { createNamespacedHelpers } from 'vuex'
    const { mapState, mapMutations } = createNamespacedHelpers('moduleA')
    // import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'TestMutation',

    props: {

    },

    data() {
      return {

      }
    },

    computed: {
        ...mapState(['person'])
    },

    methods: {
        ...mapMutations({
          addSex: 'ADD_SEX'
        })
    },

//生命周期 - 创建完成（访问当前this实例）
    created() {

    },

//生命周期 - 挂载完成（访问DOM元素）
    mounted() {

    }
  }
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>