<template>
  <div class="todo">
    <!-- 输入框及搜索按钮 -->
    <div class="todo-header">
      <!-- 输入框-->
      <input type="text" placeholder="请输入任务" v-model="task" />
      <!-- 按钮 -->
      <button @click="add">添加事项</button>
    </div>
    <!-- 列表 -->
    <ul class="todo-main">
      <li v-for="(item, index) in qiehuan" :key="item.id" :data-index="index">
        <input
          type="checkbox"
          :checked="item.done"
          @change="fuxk(item.id, $event)"
        />
        <span>{{ item.info }}</span>
        <a href="" @click.prevent="deldata(item.id)">删除</a>
      </li>
    </ul>
    <!-- 底部菜单 -->
    <div class="todo-footer">
      <p v-show="wancheng==='ywc'?false:true">{{ jisu }}条剩余</p>
      <div class="todo-footer-button">
        <button @click="dj('all')"  :class=" wancheng=='all'?'primary':''">全&nbsp;&nbsp;部</button>
        <button @click="dj('wwc')"   :class=" wancheng=='wwc'?'primary':''">未完成</button>
        <button  @click="dj('ywc')"  :class=" wancheng=='ywc'?'primary':''">已完成</button>
      </div>
      <a href="" @click.prevent="qc">清除已完成</a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["list","wancheng"]),
    ...mapGetters(["jisu","qiehuan"])
  },
  created() {
    this.$store.dispatch("zhanshi");
  },
  data() {
    return {
      task: ""
    };
  },
  methods: {
    add() {
      if (!this.task.trim()) {
        alert("补鞥呢为空");
        return;
      } else {
        this.$store.commit("createdata", this.task);
        this.task = "";
      }
    },
    deldata(id) {
      this.$store.commit("del", id);
    },
    fuxk(id, event) {
      let p = {
        id: id,
        stu: event.target.checked
      };
      this.$store.commit("fuxuank", p);
    },qc(){
      this.$store.commit("qingcu")
    },dj(Aall){
      this.$store.commit("chuanguoqu",Aall)
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.todo {
  margin: 0 auto;
  margin-top: 20px;
  width: 500px;
  min-height: 500px;
  box-sizing: border-box;
}

.todo-header {
  position: relative;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 3px;
}
.todo-header input {
  position: relative;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding: 0 5px;
  border-radius: 3px;
  vertical-align: text-bottom;
}

.todo-header button {
  border: none;
  outline: none;
  position: absolute;
  right: -100px;
  top: -2px;
  border-radius: 3px;
  width: 80px;
  height: 30px;
  background-color: rgb(64, 145, 247);
  line-height: 30px;
  color: #fff;
}

.todo-main {
  list-style: none;
  margin: 0;
  padding: 0;

  margin-top: 10px;
  border: 1px solid #ccc;
  line-height: 20px;
  text-align: left;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

.todo-main li {
  border-top: 1px solid #ccc;
  padding: 10px 15px;
}

.todo-main li:first-child {
  border: none;
}
.todo-main li input {
  position: relative;
  top: 1px;
  margin-right: 5px;
}
.todo-main li a {
  float: right;
}
.todo-footer {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-top: none;
  height: 50px;
  overflow: hidden;
}

.todo-footer p {
  line-height: 50px;
}

.todo-footer-button button {
  border: none;
  margin-top: 10px;
  line-height: 24px;
  padding: 0 15px;
  padding-top: 2px;
  background-color: #fff;
  color: #333;
}

.todo-footer-button button:focus {
  outline: none;
  border-color: transparent;
  box-shadow: none;
}

.todo-footer-button button:first-child {
  border: 1px solid #ccc;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
.todo-footer-button button:nth-child(2) {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  vertical-align: top;
}
.todo-footer-button button:last-child {
  border: 1px solid #ccc;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}

.todo-footer-button button.primary {
  background-color: rgb(69, 146, 239);
  color: #fff;
}

.todo-footer a {
  line-height: 50px;
}
</style>
