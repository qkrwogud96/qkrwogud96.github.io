<template>

<!-- 모달 -->
<transition name="fade">
  <Modal @closeModal="모달창상태 = false" :onerooms="onerooms" :모달창상태="모달창상태" :id="id"/>
</transition>

<!-- 메뉴 -->
  <div class="menu">
    <a v-for="MENU in menu" :key="MENU">{{ MENU }}</a>
    <!-- <a v-for="(a, i) in menu" :key="i">{{ i }}</a> a :변수 출력 , i : 카운트-->
  </div>

  <!-- <div v-for="PRODUCT in products" :key="PRODUCT">
    <h4>{{ PRODUCT }}</h4>
    <p>50 만원</p>
  </div> -->

<!-- 할인 -->
  <Discount :percent ="percent" v-if="showDiscount == true"/>

<!-- 정렬기능 -->
  <button @click="priceSort">가격순정렬</button>
  <button @click="sortBack">되돌리기</button>

<!-- 상품 -->
  <Card @openModal="모달창상태 = true; id = $event" :onerooms="onerooms[i]" v-for="(obj,i) in onerooms" :key="i"/>

</template>

<script>
import data from './assets/oneroom.js';
// import {data} from './assets/oneroom.js';
import Discount from './Discount.vue';
import Modal from './Modal.vue';
import Card from './Card.vue';


export default {
  name: 'App',
  data(){
    return {
      percent : 30,
      showDiscount : true,
      original : [...data],
      id : 0,
      onerooms : data,
      모달창상태 : false,
      신고수 : [0,0,0],
      menu : ['Home', 'Shop', 'About'],
      products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
      timer : '',
    }
  },
  methods : {
    increase(){
      this.신고수 += 1;
    },
    priceSort(){
      // var array = [3,5,2];
      // array.sort(function(a,b){
      //   return a - b;
      // });
      this.onerooms.sort(function(a,b){
        return a.price - b.price
      });
    },
    sortBack(){
      this.onerooms = [...this.original];
    },
    
  },
  mounted(){
      this.timer = setInterval(() =>{
        this.percent -= 1;
      }, 1000);
      
  },
  beforeUpdate(){
    if(this.percent == 25){
        clearInterval(this.timer);
      }
  },
  components: {
    Discount,
    Modal,
    Card,
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

.fade-leave-from {opacity: 1;} 
.fade-leave-active {transition: all 1s;}
.fade-leave-to {opacity: 0;}

.fade-enter-from {transform: translateY(-500px);} 
.fade-enter-active {transition: all 1s;}
.fade-enter-to {transform: translateY(0px);}

body{
  margin: 0;
}
div{
  box-sizing: border-box;
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
