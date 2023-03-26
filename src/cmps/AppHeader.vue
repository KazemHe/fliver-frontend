<template>
  <div class="main-header main-container" :class="handleHeader">
    <header>
      <section>
        <nav class="flex first-scroll main-nav">
          <RouterLink to="/">
            <span aria-label="logo" class="logo first-scroll">winner</span>
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
          <RouterLink to="/explore">Photography</RouterLink>
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
        this.isFirstScroll = true
      } else if (window.scrollY > 100) {
        this.isSecondScroll = true
      } else if (window.scrollY < 50) {
        this.isFirstScroll = false
        this.isSecondScroll = false
      }
    },
    search() {
      console.log('search', this.userSearch)
      emitToFilter(txt)
      this.userSearch = ''
    },
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser
    },
    isHomePage() {
      return this.$route.path === '/'
    },
    handleHeader() {
      return {
        'first-expansion': !this.isHomePage || this.isFirstScroll,
        'second-expansion': !this.isHomePage || this.isSecondScroll,
        'static-pos': !this.isHomePage
      }
    },
  }
}
</script>