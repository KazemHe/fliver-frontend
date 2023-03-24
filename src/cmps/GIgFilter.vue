<template>
  <FloatingFilter class="filter" :gigs="gigs" @setFilterBy="setFilterBy" />
  <div class="sort-bar">
    <div class="count">11 services available</div>
    <div class="sort-by">
      <p>Sort by</p>
    </div>
  </div>
</template>
<script>

import FloatingFilter from './FloatingFilter.vue'
export default {
  data() {
    return {
      // filterBy: {
      //   title: '',
      //   bugdet: 0,
      //   DeliveryTime: '',
      // },
      sortBy: {
        rate: '',
        price: 0,
      }
    }
  },
  methods: {

    setFilterBy(filterBy) {

      console.log('check the filter', filterBy)

      this.$emit('setFilterBy', { ...filterBy })
    },
  },
  computed: {

    labels() {

      return this.$store.getters.labels
    }
  },
  components: {
    FloatingFilter
  }
}
</script>
