<template>
  <v-app>
    <v-main>
      <navigation-bar/>

      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavigationBar from "@/containers/NavigationBar.vue";

export default {
  name: "App",

  components: {
    NavigationBar,
  },

  data: () => ({
    //
  }),
};
</script>