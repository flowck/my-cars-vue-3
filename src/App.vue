<template>
  <Header></Header>
  <div class="my-grid-container">
    <div class="my-grid-row">
      <div class="my-grid-column" v-for="car in cars" :key="car.id">
        <CarItem :car="car" />
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script lang="ts">
import { Car } from "./types";
import CarItem from "./components/CarItem.vue";
import Header from "./components/Header.vue";

export default {
  components: { CarItem, Header },
  setup() {
    /**
     * State properties
     */
    const cars: Car[] = [
      { id: 0, name: "Mercedes-Benz C63", engine: "v8", year: 2012 },
      { id: 0, name: "Mercedes-Benz C63", engine: "v8", year: 2012 },
      { id: 0, name: "Mercedes-Benz C63", engine: "v8", year: 2012 },
      { id: 0, name: "Mercedes-Benz C63", engine: "v8", year: 2012 },
    ];

    return { cars };
  },
};
</script>

<style lang="scss"></style>
