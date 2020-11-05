import {
  createStore
} from "vuex";

// 引入axios
import axios from "axios";

export default createStore({
  state() {
    return {
      // 活动周数
      level: "第一周",
      // 题号
      itemNum: 1,
      // 用户所选答案id的数组
      anwserId: [],
      questions: []
    };
  },
  mutations: {
    // 初始化数据
    indata(state, payload) {
      state.questions = payload.data;
    },
    remId(state, payload) {
      state.anwserId.push(payload);
    },
    additemNum(state, payload) {
      state.itemNum += payload;
    },
    again(state) {
      state.itemNum = 1;
      state.anwserId = []
    }
  },
  actions: {
    // 获取数据
    async getdata(context) {
      let res = await axios.get("/data/question.json");
      context.commit("indata", res);
    },
    addNum(context, payload) {
      // 把id存储到anwserId这个数组中
      context.commit("remId", payload);

      // 如果itemNum小于questions.length的话 让num自增
      if (context.state.itemNum < context.state.questions.length) {
        context.commit("additemNum", 1);
      }
    }
  },
  modules: {}
});