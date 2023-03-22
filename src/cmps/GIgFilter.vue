<template>
  <section class="filter">



    <input class="el-input__inner" type="text" readonly="" autocomplete="off" tabindex="0" placeholder="Budget"
      id="el-id-1056-2">

    <select @change="setFilterBy" v-model="sortBy.value">
      <option value="blog">blog </option>
      <option value="price">e-commers</option>
      <option value="createdAt">prototype</option>
    </select>
    <select @change="setFilterBy" v-model="sortBy.value">
      <option value="blog">blog </option>
      <option value="price">e-commers</option>
      <option value="createdAt">prototype</option>
    </select>
  </section>
  <section class="sort-bar">
    55 Services available


    <div class="menu-title sort-filter">Best Selling<span class="nFghBOe chevron-icon-down" style="width:10px;height:10px"
        aria-hidden="true"><svg width="16" height="16" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg"
          fill="currentFill">
          <path
            d="M5.464 6.389.839 1.769a.38.38 0 0 1 0-.535l.619-.623a.373.373 0 0 1 .531 0l3.74 3.73L9.47.61a.373.373 0 0 1 .531 0l.619.623a.38.38 0 0 1 0 .535l-4.624 4.62a.373.373 0 0 1-.531 0Z">
          </path>
        </svg></span></div>

    <!-- <select @change="setFilterBy" v-model="sortBy.value">   
      sort by:
      <option value="blog">blog </option>
      <option value="price">e-commers</option>
      <option value="createdAt">prototype</option>
    </select>  -->




  </section>
</template>
<script>
export default {
  data() {
    return {
      filterBy: {
        name: '',
        inStock: false,
        labels: []
      },
      sortBy: {
        name: '',
        price: 1,
        createAt: ''
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
  }
}

</script>
