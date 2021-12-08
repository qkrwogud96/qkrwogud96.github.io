import { createStore } from 'vuex'
import axios from 'axios'
const store = createStore({
    state() {
        return {
            name : 'Park',
            age : 20,
            likes : 30,
            clickedLike : false,
            more : {},
        }
    },
    //함수 요청
    mutations : {
        setMore(state, data){
            state.more = data
        },
        이름변경(state){
            state.name = 'Kim';
        },
        나이증가(state){
            state.age++;
        },
        좋아요(state){
            !state.clickedLike ? state.likes++ : state.likes-- ;
            state.clickedLike = !state.clickedLike;
        }
    },
    //ajax 요청
    actions: {
        getData(context){
            axios.get(`https://codingapple1.github.io/vue/more0.json`).then((a) =>{
                console.log(a.data);
              context.commit('setMore',a.data);
            })
        },

    },
  })

export default store;