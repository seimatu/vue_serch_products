<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

let key = process.env.NODE_ENV;
console.log(key);

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
