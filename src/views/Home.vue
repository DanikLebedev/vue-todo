<template>
  <div class="home">
    <h1>Welcome to Todo List</h1>
    <div class="image-wrapper">
      <img class="home-image" src="../../src/assets/images/1_encF5EeouyEH8YTANng4Aw.png" alt=""/>
      <div class="bg-image"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Home"
});
</script>
<style lang="scss" scoped>
.home {
  .home-image {
    width: 70%;
    height: 500px;
    object-fit: cover;
  }
  .image-wrapper {
    display: flex;
    align-items: center;
  }
  .bg-image {
    width: 500px;
    height: 500px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-image: url("../assets/images/2020_07_02_99202_1593661562._large.jpg");
  }
}
</style>
