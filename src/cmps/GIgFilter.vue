<template>
  <section class="up-filter">
    <h1 class="explore-title">{{ explore }}</h1>
  </section>
  <FloatingFilter :gigs="gigs" @setFilterBy="setFilterBy" />
</template>
<script>

import FloatingFilter from './FloatingFilter.vue'
export default {
  props: ['gigs'],



  data() {
    return {
      category: 'ALL'
    }
  },

  methods: {

    setFilterBy(filterBy) {

      console.log('check the filter', { ...filterBy })

      if (filterBy.filterBy.category) this.category = filterBy.filterBy.category
      else this.category = 'ALL'

      this.$emit('setFilterBy', { ...filterBy })
    },
  },

  computed: {

    explore() {

      return this.category
    },

  },
  components: {
    FloatingFilter
  }
}
</script>
<style>
.up-filter {
  padding: 40px 0 0;
  margin-bottom: 10px;
  color: #222325;
  font-size: 25px;
  font-family: macan-regular;
  font-weight: 700;
  line-height: 36px;
  padding: 8px 0;
  text-transform: none !important;


}

.explore-title {
  font-family: macan-regular;
  font-weight: 700;
  font-size: 2rem;
}

.up-filter h1 {
  margin-top: 1rem;
}
</style>
