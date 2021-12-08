<template>
  <div
    @click="wearFilter"
    :class="filter + ' filter-item'"
    :style="`background-image : url(${url})`"
  >
    <slot name="a"></slot>
    <!-- <slot name="b"></slot> -->
  </div>
</template>

<script>
export default {
  name: "filterbox",
  methods: {
    wearFilter() {
      this.emitter.emit("filter", this.filter);
      //this.emitter.on();
    },
  },
  props: {
    url: String,
    filter: String,
  },
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>