<template>
  <div>
    <h3 @click="Nname">{{ name }}</h3>
    <h3 @click="Aage(18)">{{ age }}</h3>
    <h3 @click="Num">{{ Nnum }}</h3>
    <h3 @click="SM(4)">{{ sum }}</h3>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["name", "age","sum"]),
    ...mapGetters(["Nnum"])
  },
  methods: {
    ...mapMutations(["Nname", "Aage", "Num"]),
    ...mapActions(["SM"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
