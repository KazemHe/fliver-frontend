<template>
  <section class="filter">
    <VDropdown>
      <button class="filter-btn">budget <span class="icon" v-html="getSvg('filterArrow')"></span></button>
      <template #popper>
        <section class="filter-mode" style="left: 0px;">
          <form id="filters" class="budget-modal" name="budget" @submit.prevent="setFilterBy">
            <div class="min">
              <p>MIN.</p>
              <div class="minmax-input"><input v-model="filterBy.bugdet.min" placeholder="Any$" type="number" name="min"
                  class="min-price">
              </div>
            </div>
            <div class="max">
              <p>MAX.</p>
              <div class="minmax-input"><input v-model="filterBy.bugdet.max" placeholder="Any$" type="number" name="max"
                  class="max-price">
              </div>
            </div>
          </form>
          <div class="filters-footer"><button class="clear" type="button">Clear All</button><button class="apply"
              form="filters" type="submit">Apply </button></div>
        </section>
      </template>
    </VDropdown>
    <VDropdown>
      <button class="filter-btn">Delivery Time <span class="icon arrow" v-html="getSvg('filterArrow')"></span></button>
      <template #popper>
        <section class="filter-mode " style="left: 301px;">
          <form id="filters" name="daysToMake" class="delivery" @submit.prevent="setFilterBy">
            <div class="delivery-option"><input class="delivery-input" type="radio" id="24h" name="delivery-time"
                v-model="filterBy.DeliveryTime" value="1"><label for="24h">Express 24H</label></div>
            <div class="delivery-option"><input class="delivery-input" type="radio" id="3d" name="delivery-time"
                v-model="filterBy.DeliveryTime" value="3"><label for="3d">Up to 3 days</label></div>
            <div class="delivery-option"><input class="delivery-input" type="radio" id="7d" name="delivery-time"
                v-model="filterBy.DeliveryTime" value="7"><label for="7d">Up to 7 days</label></div>
            <div class="delivery-option"><input class="delivery-input" type="radio" id="anytime" name="delivery-time"
                value="" checked=""><label for="anytime">Anytime</label></div>
          </form>
          <div class="filters-footer"><button class="clear" type="button">Clear All</button><button class="apply"
              form="filters" type="submit">Apply</button></div>
        </section>
      </template>
    </VDropdown>
  </section>



  <section class="sorting">
    <div class="count">11 services available</div>
    <VDropdown>
      <button class="sort-btn">Sort by {{ changeSortTxt }}<span class="icon arrow"
          v-html="getSvg('filterArrow')"></span></button>
      <template #popper>
        <div class="sort-modal">
          <button @click="sortTxtby" class="sort-btn">recomended</button>
          <button @click="sortTxtby" class="sort-btn">Best selling</button>
          <button @click="sortTxtby" class="sort-btn">News arrival</button>

        </div>
      </template>
    </VDropdown>
  </section>
</template>
<script>
import { svgServive } from '../services/svg.service.js'
export default {
  data() {
    return {
      sortTxt: '',
      filterBy: {
        title: '',
        bugdet: { min: 'Any', max: 'Any' },
        DeliveryTime: 0,


        sortBy: {
          recomended: '',
          BestSelling: '',
          NewsArrival: ''
        }
      }
    }
  },
  methods: {


    sortTxtby() {
      console.log('txt')
      this.sortTxt = 'reco'
    },
    setFilterBy() {
      console.log('check the filter', this.filterBy)

      // const key = this.filterBy
      // const value = this.filterBy.bugdet



      // $router.push({ path: '/explore', query: { key: value } })

      this.$router.push({
        query: {
          min: this.filterBy.bugdet?.min || '',
          max: this.filterBy.bugdet?.max || '',
          DeliveryTime: this.filterBy.DeliveryTime || ''
        }
      })


    },
    getSvg(iconName) {
      return (this.icon = svgServive.getGigSvg(iconName))
    },
  },
  computed: {

    changeSortTxt() {
      return this.sortTxt
    }
  },


  watch: {
    "$route.query.": {
      handler(newValue) {
        const filterBy = this.$route.query
        // console.log(filter)
        // this.filterBy = newValue 

        // filterBy = filter
        // console.log(this.filterBy)
        this.$emit('setFilterBy', { filterBy })
      },
      deep: true,
      immediate: true
    },
  },
}
</script>
