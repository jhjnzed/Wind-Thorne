import {
  createStore
} from "vuex";
import axiso from "axios"
export default createStore({
  state() {
    return {
      level: '第一周',
      itemNum: 1,
      anwserId: [],
      questions: []
    }
  },
  mutations: {
    indata(state, pady) {
      state.questions = pady.data
    },
    remId(state, pady) {
      state.anwserId.push(pady)
    },
    additemNum(state) {
      state.itemNum++
    }
  },
  actions: {
    async getdata(context) {
      let res = await axiso.get('/data/question.json');
      context.commit('indata', res)
    },
    addNum(context, pady) {
      context.commit("remId", pady);
      context.commit("additemNum", 1);
    }
  },
  modules: {}
});