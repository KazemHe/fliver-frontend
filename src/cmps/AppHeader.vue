<template>
  <header class="">
    <section>
      <nav>
          <RouterLink to="/">
            <span aria-label="logo" class="logo">fiverr</span>
          </RouterLink>

          <div>
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

  <section class="categories-list ">
    <RouterLink to="/explore">Graphics & Design</RouterLink>
    <RouterLink to="/explore">Digital Marketing</RouterLink>
    <RouterLink to="/explore">Writing & Translation</RouterLink>
    <RouterLink to="/explore">Video & Animation</RouterLink>
    <RouterLink to="/explore">Music & Audio</RouterLink>
    <RouterLink to="/explore">Programming & Tech</RouterLink>
    <RouterLink to="/explore">Business</RouterLink>
    <RouterLink to="/explore">AI Services</RouterLink>
  </section>


  <!-- <RouterLink to="/details">GigDetails</RouterLink> -->
</template>

<script>
export default {
  data() {
    return {
      userSearch: '',
    }
  },
  methods: {
    search() {
      console.log('search', this.userSearch)
      this.userSearch = ''
    }
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser
    },
  }
}
</script>