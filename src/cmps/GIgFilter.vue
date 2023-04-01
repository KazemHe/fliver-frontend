<template>
  <section class="up-filter">
    <h2>Explore</h2>
  </section>
  <FloatingFilter :gigs="gigs" @setFilterBy="setFilterBy" />
</template>
<script>

import FloatingFilter from './FloatingFilter.vue'
export default {
  props: ['gigs'],


  methods: {

    setFilterBy(filterBy) {

      console.log('check the filter', filterBy)

      this.$emit('setFilterBy', { ...filterBy })
    },
  },

  computed: {

    labels() {

      return this.$store.getters.labels
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


.up-filter h2 {
  margin-top: 1rem;
}
</style>
