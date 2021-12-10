<template>
  <div id="modal">
    <div class="modal-wrap">
      <div class="modal-popup">
        <div>
          <img :src="`${room.image}`" alt="" />
          <h2>" {{ room.title }} "</h2>
          <h4>{{ room.content }}</h4>
          <div>
            <input
              @input="saveValue"
              type="text"
              id="month"
              name="month"
              placeholder="할부"
            />
            <label for="month"> 개월</label>
            <p>가격 : {{ calc }} 원</p>
          </div>
          <button @click="$emit('closeModal')">→</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  data() {
    return {
      calc: this.room.price,
      value: 0,
    };
  },
  props: {
    room: Object,
  },
  methods: {
    saveValue(e) {
      this.value = e.target.value;
      if (this.value > 0) {
        this.calc = Math.floor(this.room.price / this.value);
      } else {
        this.calc = this.room.price;
      }
    },
  },
};
</script>

<style>
body {
  overflow-y: scroll;
}
#modal {
  height: 80vh;
}
.modal-wrap {
  width: 100%;
  height: 100%;
  margin: 30px 0;
  position: relative;
  border-radius: 50px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
}
.modal-popup {
  width: 80%;
  height: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.modal-popup input {
  width: 50px;
  padding-bottom: 5px;
  padding-right: 2px;
  border: none;
  border-bottom: 2px solid #000;
  text-align: center;
}
.modal-popup input:focus {
  border: none;
  outline: none;
  border-bottom: 2px solid #000;
}
.modal-popup img {
  width: 100%;
  height: 80%;
}
.modal-popup button {
  width: 50px;
  height: 50px;
  border: none;
  outline: none;
  background-color: transparent;
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 30px;
  font-weight: bolder;
  cursor: pointer;
}
</style>