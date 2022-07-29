<!-- TestAction -->
<template>
    <div>
        <h3>TestAction</h3>
        <p>{{ asyncCount }}</p>
        <button @click="asyncAddAsyncCount({num: 100})">异步增加asyncCount</button>
        <button @click="asyncAddAsyncCountSubtractNum({addNum: 100, subtractNum: 99})">异步先增加再减少asyncCount</button>
    </div>
</template>

<script>
    import { createNamespacedHelpers } from 'vuex'
    const { mapState, mapActions } = createNamespacedHelpers('moduleA')
    // import { mapState, mapActions } from 'vuex'

    export default {
        name: 'TestAction',

        props: {

        },

        data() {
            return {

            }
        },

        computed: {
            ...mapState(['asyncCount'])
        },

        methods: {
            ...mapActions(['asyncAddAsyncCount', 'asyncAddAsyncCountSubtractNum'])
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