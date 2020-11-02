<template>
  <div>
    <h3>进入内部</h3>
    <table>
      <thead>
        <th>白闹</th>
        <th>懂</th>
        <th>都是靠给你</th>
        <th>大概</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="item.id" :data-index="index">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td><a href="" @click.prevent="hlink(item.id)">详情</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, name: "张三", age: 10 },
        { id: 2, name: "李四", age: 20 },
        { id: 3, name: "王五", age: 30 },
        { id: 4, name: "赵六", age: 40 }
      ]
    };
  },
  methods: {
    hlink(id) {
      this.$router.push("/userinfo/" + id);
    }
  }
};
</script>

<style></style>
