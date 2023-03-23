<template>
  <FloatingFilter :gigs="gigs" @setFilterBy="setFilterBy" />
</template>
<script>

import FloatingFilter from './FloatingFilter.vue'
export default {
  data() {
    return {
      filterBy: {
        title: '',
        bugdet: 0,
        DeliveryTime: '',
      },
      sortBy: {
        rate: '',
        price: 0,
      }
    }
  },
  methods: {
    setFilterBy() {
      console.log('check the filter', this.filterBy)

      this.$emit('setFilterBy', { ...this.filterBy })
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
