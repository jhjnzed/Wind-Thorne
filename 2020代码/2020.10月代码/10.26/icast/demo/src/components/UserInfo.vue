<template>
  <div>
    <h3>进入id世界：{{ id }}</h3>
    <button @click="hgo">返回</button>
  </div>
</template>

<script>
export default {
  props: ["id"],
  methods: {
    hgo() {
      this.$router.go(-1);
    }
  }
};
</script>

<style></style>
