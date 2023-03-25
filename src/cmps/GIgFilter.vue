<template>
  <FloatingFilter  :gigs="gigs" @setFilterBy="setFilterBy" />

</template>
<script>

import FloatingFilter from './FloatingFilter.vue'
export default {
  
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
