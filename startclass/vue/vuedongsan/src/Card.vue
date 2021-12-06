<template>
    <div >
        <img :src="onerooms.image" class="room-img">
        <h4 @click="openModal">{{ onerooms.title }}</h4>
        <p>가격 : {{ onerooms.price }} 원</p>
    </div>
</template>

<script>
export default {
    name : "Card",
    props : {
        onerooms : Object,
    },
    methods : {
        openModal(){
            this.$emit('openModal', this.onerooms.id);
        }
    }
}
</script>

<style>
.room-img{
  width: 100%;
  margin-top: 40px;
}
</style>