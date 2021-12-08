<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step != 2" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>


<!-- mutations 함수 부탁하기 -->
  <p>{{ $store.state.name }}</p>
  <button @click="$store.commit('이름변경')">이름</button>
  <p>{{ $store.state.more }}</p>
  <!-- actions함수 부탁하기 -->
  <button @click="$store.dispatch('getData')">더보기버튼</button>



  <Container
    @write="작성한글 = $event"
    :url="imgURL"
    :step="step"
    :postingData="postingData"
  />


  <div class="footer">
    <ul class="footer-button-plus">
      <input
        @change="upload"
        multiple
        type="file"
        id="file"
        class="inputfile"
      />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>



</template>

<script>
import Container from "./components/Container.vue";
import postingData from "./assets/postingData.js";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      작성한글: "",
      step: 0,
      imgURL: "",
      count: 0,
      wearfilter: "",
      postingData: postingData,
    };
  },

  components: {
    Container,
  },
  mounted() {
    this.emitter.on("filter", (e) => {
      this.wearfilter = e;
    });
  },
  methods: {
    publish() {
      var upload = {
        name: "Park Jae",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.imgURL,
        likes: 99999,
        date: "Dec 08",
        liked: false,
        content: this.작성한글,
        filter: this.wearfilter,
      };
      this.postingData.unshift(upload);
      this.step = 0;
    },
    more() {
      // axios.post('URL', {name : 'kim'}).then((res)=>{}).catch((err)=>{}) then : 성공 / err : 실패시
      if (this.count > 1) {
        this.count = 0;
      }
      axios
        .get(`https://codingapple1.github.io/vue/more${this.count}.json`)
        .then((res) => {
          this.postingData.push(res.data);
        });
      this.count++;
    },
    upload(e) {
      let imageFile = e.target.files;
      let url = URL.createObjectURL(imageFile[0]);
      this.imgURL = url;
      this.step++;
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
