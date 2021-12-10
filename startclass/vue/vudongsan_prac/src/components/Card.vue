<template>
  <div id="info">
    <div
      @click="$emit('openModal', object.id)"
      v-for="object in rooms"
      :key="object"
    >
      <div class="card" v-if="show(roomStatus, object)">
        <img :src="`${object.image}`" alt="방정보" />
        <h2>" {{ object.title }} "</h2>
        <!-- <p>가격 : {{ object.price }} 원</p> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    rooms: Array,
    roomStatus: String,
  },
  methods: {
    show(roomStatus, object) {
      return roomStatus == 'all' ? true : object.structure == roomStatus;
    },
  },
};
</script>

<style>
#info {
  width: 100%;
}
.card {
  margin: 30px 0;
  padding: 20px 0 30px 0;
  border-radius: 50px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
}
.card img {
  width: 90%;
  height: 90%;
}
</style>