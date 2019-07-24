<template>
  <div class="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <img :src="currentImageUrl" alt="" srcset="">
    </div>
  </div>
</div>
</template>
<script>
export default {
  data(){
    return{
      currentImageUrl : ""
    }
  },
  methods : {
    getImage(id){
      this.$axios.$get(`https://api.unsplash.com/photos/${id}`)
     .then(res => {
        this.currentImageUrl = res.urls.regular
      })
    }
  }
}
</script>


