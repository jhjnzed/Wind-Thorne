import {
  createStore
} from "vuex";

export default createStore({
  state() {
    return {
      name: "害怕",
      age: 14,
      num: 0,
    sum:0
}
  },
  mutations: {
    Nname(state) {
      state.name="那就对了"
    },
    Aage(state, val) {
      state.age=val
    },
    Num(state) {
      state.num+=2
    },
    Ssum(state, val) {
      state.sum+=val
    }
 
  },
  actions: {
    SM(context, val) {
      setInterval(() => {
        context.commit("Ssum",val)
      }, 100);
}
  },
  //computed
  getters: {
    Nnum(state) {
      return state.num
}
  }
});