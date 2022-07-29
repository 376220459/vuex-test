<!-- TestForm -->
<template>
    <div>
        <h3>TestForm</h3>
        <label for="ipt">
            测试双向绑定：
            <input
                type="text"
                id="ipt"
                v-model="iptData"
                placeholder="请输入..."
            >
        </label>
        <p>iptData:{{ iptData }}</p>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
        name: 'TestForm',

        props: {

        },

        data() {
            return {

            }
        },

        computed: {
            iptData: {
                get(){
                    return this.$store.state.moduleA.iptData
                },
                set(value){
                    this.UPDATE_INPUT_DATA(value)
                },
            }
        },

        methods: {
            ...mapMutations('moduleA', ['UPDATE_INPUT_DATA'])
        },

        beforeRouteEnter (to, from, next) {
            if(from.path === '/TestState' && to.params.ipt){
                next(vm=>vm.iptData = to.params.ipt)
            }else{
                console.log('beforeRouteEnter');
                next()
            }
        },

        beforeRouteUpdate(to, from, next) {
            console.log('beforeRouteUpdate')
            next()
        },

        beforeRouteLeave (to, from, next) {
            console.log('beforeRouteLeave')  
            next()
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