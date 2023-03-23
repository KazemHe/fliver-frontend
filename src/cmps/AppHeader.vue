<template>
  <div class="main-header main-container" :class="{ 'full-expand': isFirstScroll }">
    <header>
      <section>
        <nav class="flex justify-center first-scroll">
          <RouterLink to="/">
            <span aria-label="logo" class="logo first-scroll">fiverr</span>
          </RouterLink>

          <div class="search-container">
            <input type="text" v-model="userSearch" placeholder="What service are you looking for today?" />
            <button class="btn-serch" @click="search"><i class="fa-solid fa-magnifying-glass"></i></button>
          </div>

          <RouterLink class="fiverr-nav" to="/explore">Fiverr Business</RouterLink>
          <RouterLink to="/explore">Explore</RouterLink>
          <RouterLink to="/explore">Become a Seller</RouterLink>
          <RouterLink to="/login">Sign in</RouterLink>
          <RouterLink class="join" to="/login">Join</RouterLink>
        </nav>
      </section>
    </header>

    <section class="full subheader">
      <section class="main-container">
        <div class="categories-list ">
          <RouterLink to="/explore">Graphics & Design</RouterLink>
          <RouterLink to="/explore">Digital Marketing</RouterLink>
          <RouterLink to="/explore">Writing & Translation</RouterLink>
          <RouterLink to="/explore">Video & Animation</RouterLink>
          <RouterLink to="/explore">Music & Audio</RouterLink>
          <RouterLink to="/explore">Programming & Tech</RouterLink>
          <RouterLink to="/explore">Business</RouterLink>
          <RouterLink to="/explore">AI Services</RouterLink>
        </div>
      </section>
    </section>
<<<<<<< HEAD
  </header>

  <section class="full subheader">
    <section class="main-container">
      <div class="categories-list ">
        <RouterLink to="/explore">Graphics & Design</RouterLink>
        <RouterLink to="/explore">Digital Marketing</RouterLink>
        <RouterLink to="/explore">Writing & Translation</RouterLink>
        <RouterLink to="/explore">Video & Animation</RouterLink>
        <RouterLink to="/explore">Music & Audio</RouterLink>
        <RouterLink to="/explore">Programming & Tech</RouterLink>
        <RouterLink to="/explore">Business</RouterLink>
        <RouterLink to="/explore">AI Services</RouterLink>
      </div>
    </section>
  </section>

  <!--  v-for="(img, idx) in heroImgs" -->
  <section class="container hero-container home text-center full">
  </section>
</template>

<script>
import { emitToFilter } from '../services/event-bus.service'

=======

  </div>
</template>

<script>
import { svgServive } from '../services/svg.service.js'
>>>>>>> fadd008d7a4a62f320406e1a436c931548943b64
export default {
  data() {
    return {
      isFirstScroll: false,
      isSecondScroll: false,
      userSearch: '',
      heroImgs: [
        'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/93085acc959671e9e9e77f3ca8147f82-1599427734108/bg-hero-4-1792-x1.png',
        'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049983/bg-hero-1-1792-x1.png',
        'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/2413b8415dda9dbd7756d02cb87cd4b1-1599595203045/bg-hero-2-1792-x1.png',
        'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/d14871e2d118f46db2c18ad882619ea8-1599835783966/bg-hero-3-1792-x1.png',
        'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049970/bg-hero-5-1792-x1.png',
      ]
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  mounted() {

  },
  methods: {
<<<<<<< HEAD
    handleScroll(event) {
      // console.log('window.scrollY ', window.scrollY)
      // breakPoints: window.scrollY <= 100 | window.scrollY <= 200
=======
    getSvg(iconName) {
      return (this.icon = svgServive.getGigSvg(iconName))
    },
    handleScroll(event) {
      if (window.scrollY > 50 && window.scrollY < 200) {
        // console.log('100')
        this.isFirstScroll = true
      } else if (window.scrollY > 200) {
        this.isSecondScroll = true
        // console.log('200')
      } else if (window.scrollY < 50) {
        this.isSecondScroll = false
        this.isFirstScroll = false
      }
>>>>>>> fadd008d7a4a62f320406e1a436c931548943b64
    },
    search() {
      console.log('search', this.userSearch)
      const txt = this.userSearch

      console.log(txt)
      emitToFilter(txt)
    }
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser
    },
    // headerStyle() {
    //   if(this.isSecondScroll) return opacity
    // }
  }
}
</script>