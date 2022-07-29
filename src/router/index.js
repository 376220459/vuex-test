
import Vue from 'vue'
import VueRouter from 'vue-router'
import TestState from '../components/TestState.vue'
import TestMutation from '../components/TestMutation.vue'
import TestAction from '../components/TestAction.vue'
import TestForm from '../components/TestForm.vue'
import ErrorPage from '../components/ErrorPage.vue'
import TestAllPage from '../components/TestAllPage.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '*',
        component:  ErrorPage,
    },
    {
        path: '/TestState',
        component: TestState,
        props(route){
            return {query: route.query}
        },
        children: [
            {
                path: '',
                component: ErrorPage,
            },
            {
                path: 'mutation',
                component: TestMutation,
            },
        ],
        // beforeEnter: (to, from, next) => {
        //     console.log(from.fullPath)
        //     console.log(to.fullPath)
        //     next()
        // },
    },
    {
        path: '/TestMutation',
        alias: '/TestMutationAlias',
        component: TestMutation,
    },
    {
        path: '/TestAction',
        component: TestAction,
        redirect: {
            path: '/TestMutation',
            query: {
                redirectFrom: 'TestAction',
            },
        }
    },
    {
        path: '/TestForm/:ipt?',
        components: {
            default: TestForm,
            err: ErrorPage,
        },
    },
    {
        path: '/',
        component: TestAllPage
    }
]

const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior(to, from, savedPositon){
        if(savedPositon){
            return {
                ...savedPositon,
                behavior: 'smooth',
            }
        }
    },
})

// router.beforeEach((to, from, next)=>{
//     console.log(from)
//     console.log(to)
//     next()
// })

// router.afterEach((to, from)=>{
//     console.log(from)
//     console.log(to)
// })

export default router