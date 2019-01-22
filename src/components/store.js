import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    // 初始化 vuex
    state: {
      pageNum:10,
      left:10,
      childenname:'',
      name:'',
      widths:''
    },
    mutations: {
      setPageNum:function(state,info){
        state.pageNum=info;
      },
      setLeft:function(state,info){
        state.left=info;
      },
      setName:function(state,info){
        state.name=info;
      },
      setChildenname:function(state,info){
        state.childenname=info;
      },
      setWidths:function(state,info){
        state.widths=info;
      },
    },
    actions: {
  
    },
    getters: {
        pageNum: state=>state.pageNum,
        left: state=>state.left,
        widths: state=>state.widths,
        childenname: state=>state.childenname,
        name: state=>state.name,
        
    }
})

export default store