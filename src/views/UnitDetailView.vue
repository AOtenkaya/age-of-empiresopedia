<template>
  <unit-details-container/>
</template>

<script>
import { defineComponent } from "vue";

// Containers
import UnitDetailsContainer from '@/containers/UnitDetailsContainer'

export default defineComponent({
  name: "UnitDetailView",

  components: {
    UnitDetailsContainer,
  },
});
</script>

