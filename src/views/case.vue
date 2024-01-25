<template>
  <div class="case-001">
    <div class="background">
      <particleEffect />
    </div>
    <div class="content">
      <project :Active="$route.query.active"></project>
    </div>
  </div>
</template>

<script>
import project from "@/components/Project";
import particleEffect from "@/components/ParticleEffect";

export default {
  name: "case",
  components:{
     project,
    particleEffect
  },

}
</script>

<style scoped>

.background {
  position: relative;
  width: 100%;
  height: 500px;

}

.content{
  position: relative;
  margin-top: -500px;
  z-index: 2;
}



</style>