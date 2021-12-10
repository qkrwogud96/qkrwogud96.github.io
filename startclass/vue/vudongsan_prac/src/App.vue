<template>
  <div id="wrap">
    <!-- 상단바 -->
    <div id="header">
      <h1>부동산 정보 확인하기</h1>
      <select
        @change="showDetailRoom"
        v-model="roomStatus"
      >
        <option value="all">전체</option>
        <option value="one">원룸</option>
        <option value="two">투룸</option>
        <option value="three">쓰리룸</option>
      </select>
    </div>

    <!-- 방정보 -->
    <div v-if="!state">
      <Card
        :rooms="rooms"
        :roomStatus="roomStatus"
        @openModal="
          state = !state;
          id = $event;
        "
      />
    </div>

    <!-- 모달창 -->
    <div v-if="state">
      <Modal :room="rooms[id]" @closeModal="state = !state" />
    </div>
  </div>
</template>

<script>
import rooms from "./assets/rooms.js";
import Card from "./components/Card.vue";
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  data() {
    return {
      id: 0,
      structure: 0,
      state: false,
      rooms: rooms,
      roomStatus: 'all'
    };
  },
  components: {
    Card,
    Modal,
  },
  methods: {
    showDetailRoom() {
      console.log(this.roomStatus);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
#wrap {
  max-width: 960px;
  margin: auto;
}
#header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
  padding-bottom: 5px;
  border-bottom: 1px solid #eee;
}
#header > h1 {
  font-size: 24px;
  color: #bebebe;
}
#header > select {
  width: 10%;
  height: 30px;
  text-align: center;
  border: none;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.05);
  outline: none;
}
#header > select > option {
  border: none;
  border-bottom: 1px solid #000;
}
</style>
