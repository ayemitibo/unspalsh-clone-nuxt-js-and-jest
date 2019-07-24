
export const state = () => ({
  apiKey: '10dc3438939e6c735debb175e9b1c51929fc70b3058dc69ff077c479c1f9c691'
})

export const mutations = {

}

export const actions = {
  getPhotos(context, payload) {
    this.$axios.$get(`https://api.unsplash.com/search/photos?page=1&query=africa`)
      .then((res) => {
        console.log(res)
        payload.imageUrl = res.results
        console.log(payload.imageUrl)
      })
  }
}
