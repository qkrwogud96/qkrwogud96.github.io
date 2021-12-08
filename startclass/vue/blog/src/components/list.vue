<template>
    <div @click="$router.push('/detail/' + i)" v-for="(obj,i) in blog" :key="i">
      <h5>{{blog[i].title}}</h5>
      <p>{{blog[i].date}}</p>  
    </div>
  <!-- <div @click="$router.push('/detail/0')">
      <h5>{{blog[0].title}}</h5>
      <p>{{blog[0].date}}</p>
  </div>
  <div @click="$router.push('/detail/1')">
      <h5>{{blog[1].title}}</h5>
      <p>{{blog[1].date}}</p>
  </div>
  <div @click="$router.push('/detail/2')">
      <h5>{{blog[2].title}}</h5>
      <p>{{blog[2].date}}</p>
  </div> -->
</template>

<script>
export default {
    name : 'list',
    props : {
        blog : Array,
    }
}
</script>

<style>

</style>