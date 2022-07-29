<!-- TestAllPage -->
<template>
    <div>
        <p>name: {{ name }}</p>
        <p>age:{{ age }}</p>
    </div>
</template>

<script>
    import _ from 'lodash'
    
    export default {
        name: 'TestAllPage',

        props: {

        },

        data() {
            return {
                name: 'loading...',
                age: 'loading...',
            }
        },

        computed: {

        },

        methods: {
            getName(){
                return this.$http.get('/getName', {
                    params: {
                        fromName: 'Hole'
                    }
                })
            },
            getAge(){
                return this.$http({
                    url: '/getAge',
                    method: 'post',
                    data: {
                        fromName: 'Hole'
                    },
                    // transformResponse: [function (data) {
                    //     data = {
                    //         ...data,
                    //         age: 'abc' + JSON.parse(data).age
                    //     }

                    //     return data;
                    // }],
                })
            }
        },

//生命周期 - 创建完成（访问当前this实例）
        created() {
            Promise.all([this.getName(), this.getAge()]).then(resList=>{
                const [{data:{name='nothing'}}, {data:{age='nothing'}}] = resList
                this.name = name
                this.age = age
            })
        },

//生命周期 - 挂载完成（访问DOM元素）
        mounted() {
            console.log(_.chunk([1,2,3,4,5,6], 4))
            console.log(_.difference([1,3,5], [2,3,6,7,8,9]))
            var users = [
            { 'user': 'barney',  'active': false  },
            { 'user': 'fred',    'active': false },
            { 'user': 'pebbles', 'active': true }
            ];
            
            console.log(_.dropRightWhile(users, {'active': false}));

            let mapData = new Map([['name', 'Hole'], ['age', 24]])
            let o = _.fromPairs([...mapData])
            console.log(new Map(_.toPairs(o)))
            console.log('git测试')
            console.log('继续测试')
            console.log('继续测试')
            console.log('我正在test分支上开发一个功能，此时突然让我去处理bugFix分支上的bug。')
            console.log('test分支上继续给stash中存内容。')
        }
    }
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>