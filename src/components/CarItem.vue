<template>
  <div class="my-car my-card">
    <h1>{{ car.name }}</h1>
    <!-- METADATA -->
    <div class="my-car__metadata">
      <span>Engine: {{ car.engine }}</span>
      <span>Year: {{ car.year }}</span>
    </div>

    <!-- ACTIONS -->
    <button>Favourite</button>
    <button>Remove</button>
  </div>
</template>

<script type="ts">
import { Car } from "../types";
export default {
  name: 'CarItem',
  props: {
    car: Car
  },
  setup(props, context) {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.my-car {
}
</style>
