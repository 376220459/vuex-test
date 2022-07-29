import types from './moduleA-mutation-types'

const state = ()=>({
    count: 0,
    person: {
        name: 'Hole',
        age: 24
    },
    asyncCount: 0,
    iptData: '',
})

const getters = {
    countAddOne(state){
        return state.count + 1
    },
    countAddSomenum(state){
        return somenum => state.count + somenum
    }
}

const actions = {
    async asyncAddAsyncCount({ commit }, { num=1 } = {}){
        commit(types.ADD_ASYNC_COUNT, await getNum())
        
        function getNum(){
            return new Promise(resolve=>{
                setTimeout(() => {
                    resolve({ num })
                }, 1000);
            })
        }
    },
    async asyncAddAsyncCountSubtractNum({ dispatch, state }, { addNum=1, subtractNum=1 } = {}){
        await dispatch('asyncAddAsyncCount', await getAddNum())
        state.asyncCount = state.asyncCount - await getSubtractNum()
        console.log('finily')

        function getAddNum(){
            return new Promise(resolve=>{
                resolve({ num: addNum })
            })
        }

        function getSubtractNum(){
            return new Promise(resolve=>{
                setTimeout(() => {
                    resolve(subtractNum)
                }, 1000);
            })
        }
    }
}

const mutations = {
    [types.INCREMENT](state){
        state.count++
    },
    [types.ADD_SEX](state, { sex='femail' } = {}){
        state.person = {
            ...state.person,
            sex
        }
    },
    [types.ADD_ASYNC_COUNT](state, { num=1 } = {}){
        state.asyncCount = state.asyncCount + num
    },
    [types.UPDATE_INPUT_DATA](state, newValue){
        state.iptData = newValue
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}