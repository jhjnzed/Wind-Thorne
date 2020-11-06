import {
  createStore
} from "vuex";
import axios from "axios"
export default createStore({
  state() {
    return {
      level: '第二周',
      itemNum: 1,
      anwserId: [],
      questions: []
    }
  },
  mutations: {
    indata(state, payd) {
      state.questions = payd.data
    },
    remId(state, payd) {
      state.anwserId.push(payd)
    },
    additemNum(state, payd) {
      state.itemNum += payd
    },
    again(state) {
      state.itemNum = 1;
      state.anwserId = []
    }
  },
  actions: {
    async getdata(context) {
      let res = await axios.get("/data/question.json");
      context.commit("indata", res)
    },
    addNum(context, pady) {
      context.commit("remId", pady);
      if (context.state.itemNum < context.state.questions.length) {
        context.commit('additemNum', 1)
      }
    }
  },
  modules: {}
});