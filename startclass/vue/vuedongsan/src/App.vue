<template>

<!-- 모달 -->
  <div class="black-bg" v-if="모달창상태 == true ">
    <div class="white-bg">
      <h4>{{ onerooms[id].title  }}</h4>
      <p>{{ onerooms[id].content }}</p>
      <button @click="모달창상태 = false">닫기</button>
    </div>
  </div>


<!-- 메뉴 -->
  <div class="menu">
    <a v-for="MENU in menu" :key="MENU">{{ MENU }}</a>
    <!-- <a v-for="(a, i) in menu" :key="i">{{ i }}</a> a :변수 출력 , i : 카운트-->
  </div>

  <!-- <div v-for="PRODUCT in products" :key="PRODUCT">
    <h4>{{ PRODUCT }}</h4>
    <p>50 만원</p>
  </div> -->


<!-- 상품 -->
  <div v-for="(obj,i) in onerooms" :key="i">
    <img :src="onerooms[i].image" class="room-img">
    <h4 @click="모달창상태 = true; id = i">{{ onerooms[i].title }}</h4>
    <p>가격 : {{ onerooms[i].price }}</p>
  </div>
</template>

<script>
import data from './assets/oneroom.js';
// import {data} from './assets/oneroom.js';
export default {
  name: 'App',
  data(){
    return {
      id : 0,
      onerooms : data,
      모달창상태 : false,
      신고수 : [0,0,0],
      menu : ['Home', 'Shop', 'About'],
      products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
    }
  },
  methods : {
    increase(){
      this.신고수 += 1;
    }
  },

  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0;
}
div{
  box-sizing: border-box;
}
.black-bg{
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg{
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
.room-img{
  width: 100%;
  margin-top: 40px;
}
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}
</style>
