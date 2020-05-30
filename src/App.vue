<template>
  <div id="app">
    <PxPresentation background=""></PxPresentation>
    <PxEducation></PxEducation>
    <PxComponents></PxComponents>
  </div>
</template>

<script>
import PxPresentation from "@/components/PxPresentation";
import PxEducation from "@/components/PxEducation";
import PxComponents from "@/components/PxComponents"

export default {
  name: "App",
  components: {
    PxPresentation,
    PxEducation,
    PxComponents
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0;
}
</style>
