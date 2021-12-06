<template>
  <div class="black-bg" v-if="모달창상태 == true ">
    <div class="white-bg">
      <img :src="onerooms[id].image" style="width:100%">
      <h4>{{ onerooms[id].title  }}</h4>
      <p>{{ onerooms[id].content }}</p>
      <!-- <input @input="month = $event.target.value"> -->
      <input v-model.number="month">
      <!-- <textarea v-model="month"></textarea> -->
        <!-- <select v-model="month">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select> -->
      <p>{{ month }}개월 선택함 : {{ onerooms[id].price / month }} 원</p>
      <Discount/>
      <button @click="closeModal">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Modal',
    data(){
        return{
            month : 1,
            // month : '1',
        }
    },
    watch : {
        month(obj){
        if(isNaN(obj) == true){
            alert('문자입력은 안됩니다.');
            this.month = 1;
        }


        }
    },
    props : {
        onerooms : Array,
        모달창상태 : Boolean,
        id : Number,
    },
    methods : {
        closeModal(){
            this.$emit('closeModal');
        },
    },
    beforeUpdate(){
        if (this.month == 2){
            alert("2개월보단 많이");
            this.month = 3;
        }
    }
}
</script>

<style>
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
</style>