import { mount } from '@vue/test-utils',
import indexPage from '@/pages/index.vue',
import { actions } from '@/store/getphotos.js'


let url = ''
let data = ''
const mockUp = {
  get: (_url, _data) => {
    return new Promise((resolve, reject) => {
      url = _url
      data = _data
      resolve()
    })
  }
}

describe('indexpage', () => {
  it('takes a list of images from the api', async () => {
    let payload = mount(indexPage,{
      mocks: {
        $http : mockUp
      }
    })
    expect(payload.vm.imageUrl).toBe([])
  })
})
