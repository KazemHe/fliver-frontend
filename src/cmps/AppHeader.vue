<template>
  <div class="main-header " :class="{ 'first-expansion': isFirstScroll }">
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

          <section class="header-links flex justify-center align-center">
            <RouterLink to="/explore">Explore</RouterLink>
            <RouterLink to="/gig/edit">Become a Seller</RouterLink>
            <RouterLink to="/login">Sign in</RouterLink>
            <button @click="showJoinModal = !showJoinModal" class="join">Join</button>
          </section>
        </nav>
      </section>

    </header>

    <section class="full subheader main-container">
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

  </div>

  <div class="modal" v-if="showJoinModal">
    <h1>Join Fiverr</h1>
    <div class="user-picture"></div>
    <input type="text" placeholder="Your full name" />
    <input type="text" placeholder="Username" />
    <input type="password" placeholder="Password" />
    <button @click="showJoinModal = false">Signup</button>
  </div>
</template>

<script>
import { emitToFilter } from '../services/event-bus.service'
export default {
  data() {
    return {
      showJoinModal: false,
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
    },
    search() {
      console.log('search', this.userSearch)
      emitToFilter(txt)
      this.userSearch = ''
    },
    joinModal() {
      console.log('open-modal')
    }
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser
    },
  }
}
</script>