<template>
  <div class="container-fliud contain">
    <!-- <div ref="show">
      <content-loader
        :height="600"
        :width="500"
        :speed="2"
        primaryColor="#f0ebf2"
        secondaryColor="#f5ebf0"
      >
        <circle cx="-78" cy="-53" r="30" />
        <rect x="238.03" y="0.27" rx="5" ry="5" width="160" height="228" />
        <rect x="335" y="-33" rx="4" ry="4" width="100" height="13" />
        <rect x="36.03" y="-6.73" rx="5" ry="5" width="164" height="228" />
        <rect x="235.03" y="241.27" rx="5" ry="5" width="160" height="228" />
        <rect x="38.03" y="231.27" rx="5" ry="5" width="160" height="228" />
      </content-loader>
    </div> -->
    <nav class="navbar navbar-light bg-light w-100 nav-height w-100">
            <!-- <form class="form-inline search-box"> -->
            <div class="search-box">
              <input class="form-control mr-sm-2 search-field" type="text"
              v-model="search"
              @keyup.enter="searchField()"
              placeholder="Search">
            </div>
            <!-- </form> -->
            <div v-if="show == true">
              <h3>search Result for {{search}}</h3>
            </div>
    </nav>
    <div class="space-around" ref="hide">
      <masonry
        :cols="{default: 3, 1000: 3, 700: 2, 400: 1}"
        :gutter="{default: '15px', 700: '10px'}"
        class="position"
        >
        <div v-for="(item, index) in imageUrl" :key="index" class="no-border">
          <div class="relative">
             <img :src="item.urls.thumb"
              data-toggle="modal"
              @click="getCurrentImage(item.id)"
             data-target=".bd-example-modal-xl"/>
             <div class="absolute">
               <span style="display : block"><p>{{item.user.name}}</p></span>
               <span style="display : block"><p>{{item.user ? item.user.location : "Nigeria"}}</p></span>
             </div>
          </div>
        </div>
      </masonry>
    </div>
    <Modal ref="modal"></Modal>
  </div>
</template>

<script>
import Modal from '@/components/modal'
import { ContentLoader } from 'vue-content-loader'
export default {
  components : {
    Modal,
    ContentLoader
  },
  data(){
    return{
      imageUrl : [],
      search : "",
      show : false,
      currentImageId : ""
    }
  },
  methods : {
    searchField(){
      // e.preventDefault()
      this.$axios.$get(`https://api.unsplash.com/search/photos?page=1&query=${this.search}`)
      .then((res) => {
        this.show = true
        this.imageUrl = res.results
        // console.log(payload.imageUrl)
      })
    },
    getCurrentImage(id){
      console.log(id)
      // this.currentImageId = id
      this.$refs.modal.getImage(id)
    }
  },
  created(){
    // this.$refs.hide.style.display = "none"
    // this.$refs.show.style.display = "block"
    this.$store.dispatch("getphotos/getPhotos",this)
    // setTimeout(() => {
    //   this.$refs.hide.style.display = "block"
    //   this.$refs.show.style.display = "none"
    // })

  }
}
</script>
<style scoped>
img{
  width: 250px;
  margin-bottom: 20px;
  margin-right: 10px;
  margin-left: 10px;
  /* margin : 5px 10px; */
  /* height : 300px; */
}
.space-around{
  width: 70%;
  margin : 0 auto;
}
.no-border{
  border-width: 0 !important;
}
.position{
  position : absolute;
  top : calc(100% - 20px);
  z-index : 2;
  box-shadow : 20px 20px 10px transparent;
}
.relative{
  position: relative;
}
.absolute{
  position: absolute;
    top: 75%;
    left: 6%;
    color: white;
}
</style>


