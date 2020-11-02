import {
  createStore
} from "vuex";
import axios from "axios";
export default createStore({
  state() {
    return {
      list: [],
      wancheng:'all'
    };
  },
  mutations: {
    indata(state, payload) {
      state.list = payload.data;
    },
    createdata(state, payload) {
      state.list.push({
        id: new Date().valueOf(),
        info: payload,
        done: false
      });
    },
    del(state, payload) {
      let index = state.list.findIndex(item => item.id == payload);
      state.list.splice(index, 1)
    },
    fuxuank(state, payload) {
      let index = state.list.findIndex(item => item.id == payload.id);
      state.list[index].done = payload.stu
    },
    qingcu(state) {
     state.list = state.list.filter(item => item.done === false)
    }, chuanguoqu(state, payload) {
      state.wancheng=payload
    }
  },
  actions: {
    async zhanshi(context) {
      let res = await axios.get("/list.json");
      context.commit("indata", res);
    }
  },
  getters: {
    jisu(state) {
      return state.list.filter(item => item.done === false).length;
    },
    qiehuan(state) {
      if (state.wancheng === "all") {
        return state.list 
      }
      if (state.wancheng === "wwc") {
      return  state.list.filter(item => item.done === false)
      }
      if (state.wancheng === "ywc") {
      return  state.list.filter(item => item.done === true)
      }
    }
  }
});