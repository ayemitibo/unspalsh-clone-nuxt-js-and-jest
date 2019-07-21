<template>
  <div class="container-fliud contain">
    <nav class="navbar navbar-light bg-light w-100 nav-height w-100">
            <form class="form-inline search-box">
              <input class="form-control mr-sm-2 search-field" type="search" placeholder="Search" aria-label="Search">
            </form>
    </nav>
    <div v-for="images in imageUrl" :key="images.id">

      <img :src="images.urls.thumb" />
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      imageUrl : []
    }
  },
  methods : {

  },
  created(){
    this.$store.dispatch("getphotos/getPhotos",this)
    console.log(this.imageUrl)
  }
}
</script>

