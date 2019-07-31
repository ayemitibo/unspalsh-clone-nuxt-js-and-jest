<template>
  <div class="wrapper">
    <!-- search bar -->
    <section class="mb-5 pb-5 shadow">
      <nav class="navbar navbar-light bg-light fixed-top p-3">
        <div class="container">
          <form class="search-box d-flex justify-content-center align-items-center">
              <input 
                class="form-control mr-sm-2 search-field" type="text"
                v-model="search"
                @keyup.enter="searchField()"
                placeholder="What do you want to see?"
              >
              <button class="btn btn-danger" @click.prevent="searchField()">Go!</button>
            </form>
        </div>
      </nav>
    </section>
    <!-- display images -->
    <section class="mt-5 pt-3">
      <div class="container">
        <div class="card-columns">
          <div class="card border border-0 shadow" v-for="item in imageUrl" :key="item.id">
            <img :src="item.urls.regular" class="img-fluid"  data-toggle="modal" data-target="#imageModal" @click="view(item)" />
            <div class="bg-white p-3">
              <h6>
                <span class="mr-2">  <img :src="item.user.profile_image.medium" class="img-fluid round"/></span>
                <span>{{item.user.first_name}} {{item.user.last_name}}</span>
              </h6>
              <div class="d-flex justify-content-between align-items-center">
                <p class="text-muted" v-if="item.user.location"><span class="ti-map-alt mr-2"></span>{{item.user.location}}</p>
                <p class="text-muted" v-else><span class="ti-map-alt mr-2"></span>Nigeria</p>
                <p class="text-danger"><span class="ti-heart mr-2"></span>{{item.likes}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- modal for single image -->
    <section>
      <Modal :item='singleImage' />
    </section>
  </div>
</template>

<script>
export default {
  data(){
    return{
      imageUrl : [],
      singleImage: {},
      search : "",
      currentImageId : ""
    }
  },
  methods : {
    searchField(){
      this.$axios.$get(`https://api.unsplash.com/search/photos?page=1&query=${this.search}`)
      .then((res) => {
        console.log('res', res)
        this.search = "",
        this.imageUrl = res.results
      })
    },
    view (item) {
      this.singleImage = item
      console.log('item', item)
    },
  },
  created(){
    this.$store.dispatch("getphotos/getPhotos", this)
  }
}
</script>
<style scoped>
  .search-box{
    width: 50%;
    margin: auto;
  }
  .search-field{
    width : 100% !important;
  }
  img.round {
    height: 40px;
    width: 40px;
    border-radius: 100%;
  }
</style>


