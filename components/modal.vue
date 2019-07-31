<template>
  <div>
    <!-- Modal -->
    <div class="modal fade show" id="imageModal" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <span class="modal-close" data-dismiss="modal" aria-label="Close"><em class="ti ti-close"></em></span>
          <div v-if="item.urls">
            <figure class="imghvr-flip-vert mb-0 pb-0">
              <img :src="item.urls.full" alt="" class="img-fluid">
              <figcaption>
                <h3>Oscar Wilde</h3>
                <p class="mb-0 pb-0">
                  <i>"I have the simplest tastes, I am always satisfied with the best."</i>
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
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

<style scoped>
.modal-close {
  position: absolute;
  top: -22px;
  right: -22px;
  display: inline-block;
  cursor: pointer;
}
.modal-close .ti {
  font-size: 20px;
  height: 44px;
  width: 44px;
  line-height: 44px;
  text-align: center;
  background: #fff;
  border-radius: 50%;
  color: #495463;
  text-shadow: none;
  display: block;
  transition: all .4s;
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.3);
}
.text-muted {
  font-size: 15px;
}
</style>

