<template>
  <div class="home">
    <img class="home__image" :src="require('@/assets/images/homepage.jpg')"/>
  </div>
</template>

<script>
import { defineComponent } from "vue";

// Components

export default defineComponent({
  name: "HomeView",
});
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  &__image {
    max-width: 100%;
    height: 50%;
    object-fit: contain;
  }
}
</style>
