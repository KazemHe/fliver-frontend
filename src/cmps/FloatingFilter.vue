<template>
  <section>
    <VDropdown>
      <button class="filter-btn">budget</button>
      <template #popper>
        <section class="filter-modal" style="left: 0px;">
          <form id="filters" class="budget" name="budget" @submit.prevent="setFilterBy">
            <div class="min">
              <p>MIN.</p>
              <div class="minmax-input"><input v-model="filterBy.bugdet.min" placeholder="Any" type="number" name="min"
                  class="min-price"><span>$</span>
              </div>
            </div>
            <div class="max">
              <p>MAX.</p>
              <div class="minmax-input"><input v-model="filterBy.bugdet.max" placeholder="Any" type="number" name="max"
                  class="max-price"><span>$</span>
              </div>
            </div>
          </form>
          <div class="filters-footer"><button class="clear" type="button">Clear All</button><button class="apply"
              form="filters" type="submit">Apply</button></div>
        </section>
      </template>
    </VDropdown>
    <VDropdown>
      <button class="filter-btn">Delivery Time</button>
      <template #popper>
        <section class="filter-modal" style="left: 301px;">
          <form id="filters" name="daysToMake" class="delivery" @submit.prevent="setFilterBy">
            <div><input type="radio" id="24h" name="delivery-time" v-model="filterBy.DeliveryTime" value="1"><label
                for="24h">Express 24H</label></div>
            <div><input type="radio" id="3d" name="delivery-time" v-model="filterBy.DeliveryTime" value="3"><label
                for="3d">Up to 3 days</label></div>
            <div><input type="radio" id="7d" name="delivery-time" v-model="filterBy.DeliveryTime" value="7"><label
                for="7d">Up to 7 days</label></div>
            <div><input type="radio" id="anytime" name="delivery-time" value="" checked=""><label
                for="anytime">Anytime</label></div>
          </form>
          <div class="filgitters-footer"><button class="clear" type="button">Clear All</button><button class="apply"
              form="filters" type="submit">Apply</button></div>
        </section>
      </template>
    </VDropdown>
  </section>
</template>
<script>
export default {
  data() {
    return {
      filterBy: {
        title: '',
        bugdet: { min: 'Any', max: 'Any' },
        DeliveryTime: 0,
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
}
</script>
<style scoped>
.v-popper {
  display: inline-block;

}


.filter-modal {
  background-color: #fff;
  /* border: 1px solid #dadbdd; */
  /* border-radius: 50%; */
  box-shadow: 0 12px 18px rgba(0, 0, 0, .14);
  /* color: #404145; */
  font-size: 14px;
  line-height: 22px;
  margin-top: 8px;
  min-height: 150px;
  min-width: 250px;
  /* position: absolute; */
  /* top: 100%; */
  /* z-index: 3; */
}



.filter-btn {
  background-color: #fff;
  color: black;
  font-weight: bolder;
}



.v-popper__wrapper {
  width: 100%;
}


.popper_gk90nxa9_l8juon {
  width: 900px;
}
</style>