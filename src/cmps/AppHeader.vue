<template>
  <div class="main-header main-container" :class="handleHeader">
    <header>
      <section>
        <nav class="flex first-scroll main-nav">
          <div class="flex align-center">

            <!-- <RouterLink to="/seller/orders">
             <button>orders</button>
            </RouterLink> -->

            <RouterLink to="/">
              <span aria-label="logo" class="logo first-scroll">winner</span>
            </RouterLink>

            <div class="search-container">
              <input type="text" v-model="userSearch" placeholder="What service are you looking for today?" />
              <button class="btn-serch" @click="search"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
          </div>

          <section class="header-links flex justify-center align-center">
            <RouterLink to="/explore">Explore</RouterLink>
            <RouterLink to="/gig/edit">Become a Seller</RouterLink>
            <!-- <RouterLink to="/">Sign in</RouterLink> -->
            <button @click="showSigninModal = !showSigninModal" class="btn-signin">
              Sign in</button>
            <!-- v-if="!loggedInUser" -->
            <button v-if="!loggedInUser" @click="showJoinModal = !showJoinModal" class="join">Join</button>
            <div v-else class="login" @click="showUserModal = !showUserModal">
              <img :src="loggedInUser.imgUrl" />
            </div>
          </section>
        </nav>
      </section>
    </header>

    <section class="full subheader main-container">
      <section class="main-container">
        <div class="categories-list ">
          <RouterLink to="/explore?category=Graphics+%26+Design">Graphics & Design</RouterLink>
          <RouterLink to="/explore?category=Digital+Marketing">Digital Marketing</RouterLink>
          <RouterLink to="/explore?category=Writing+%26+Translation">Writing & Translation</RouterLink>
          <RouterLink to="/explore?category=Video+%26+Animation">Video & Animation</RouterLink>
          <RouterLink to="/explore?category=Music+%26+Audio">Music & Audio</RouterLink>
          <RouterLink to="/explore?category=Programming+%26+Tech">Programming & Tech</RouterLink>
          <RouterLink to="/explore?category=Photography">Photography</RouterLink>
          <RouterLink to="/explore?category=Business">Business</RouterLink>
          <RouterLink to="/explore">AI Services</RouterLink>
        </div>
      </section>
    </section>
  </div>

  <!-- JOIN MODAL -->
  <div class="join-modal" v-if="showJoinModal">
    <LoginSignup :join="showJoinModal" />
  </div>

  <!-- SIGNIN MODAL -->
  <div class="join-modal" v-if="showSigninModal">
    <LoginSignup :signin="showSigninModal" />
  </div>

  <!-- USER MODAL -->
  <div class="user-modal" v-if="showUserModal">
    <!-- <div class="mini-modal"></div> -->
    <RouterLink @click="showUserModal = false" to="/user-profile">Profile</RouterLink>
    <RouterLink @click="showUserModal = false" to="/seller/orders">Dashboard</RouterLink>
    <button @click="doLogout">Logout</button>
  </div>
</template>

<script>
import LoginSignup from '../views/LoginSignup.vue'
import { emitToFilter } from '../services/event-bus.service'
export default {
  data() {
    return {
      showSigninModal: false,
      showUserModal: false,
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
      this.$router.push({ query: { title: this.userSearch }, path: '/explore' })
      this.userSearch = ''
    },
    doLogout() {
      this.showUserModal = false
      this.$router.push('/')
      this.$store.dispatch({ type: 'logout' })
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
  },
  components: {
    LoginSignup
  }
}
</script>