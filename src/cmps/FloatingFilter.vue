<template>
  <section>
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
            <div class="delivery-option"><input class="delivery-input" type="radio" id="3d" name="delivery-time" v-model="filterBy.DeliveryTime"
                value="3"><label for="3d">Up to 3 days</label></div>
            <div class="delivery-option"><input class="delivery-input" type="radio" id="7d" name="delivery-time" v-model="filterBy.DeliveryTime"
                value="7"><label for="7d">Up to 7 days</label></div>
            <div class="delivery-option"><input class="delivery-input" type="radio" id="anytime" name="delivery-time" value="" checked=""><label
                for="anytime">Anytime</label></div>
          </form>
          <div class="filters-footer"><button class="clear" type="button">Clear All</button><button class="apply"
              form="filters" type="submit">Apply</button></div>
        </section>
      </template>
    </VDropdown>
  </section>
</template>
<script>
import { svgServive } from '../services/svg.service.js'
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
    getSvg(iconName) {
      return (this.icon = svgServive.getGigSvg(iconName))
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
  border: 1px solid black;
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

.filter-mode {
  background-color: #fff;
  border: 1px solid #dadbdd;
  border-radius: 4px;
  box-shadow: 0 12px 18px rgba(0, 0, 0, .14);
  color: #404145;
  font-size: 14px;
  /* line-height: 22px; */
  /* /* margin-top: 8px; */
  min-height: 150px;
  /* min-width: 250px; */
  /* position: absolute;  */
  top: 100%;
  z-index: 100;

}



.filter-btn {
  font: 400 16px/24px Macan-regular, Helvetica Neue, Helvetica, Arial, sans-serif;

  font-weight: 600;
  border: 1px solid #e4e5e7;
  border-radius: 8px;

  box-sizing: border-box;
  color: #222325;
  background-color: #fff;
  line-height: 24px;
  min-height: 48px;
  min-width: 50px;
  padding: 12px 16px;
  -webkit-transition: border-color .12s cubic-bezier(.215, .61, .355, 1);
  -o-transition: border-color .12s cubic-bezier(.215, .61, .355, 1);
  transition: border-color .12s cubic-bezier(.215, .61, .355, 1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* .filter-btn :hover {
  border: 1px solid #222325;
} */

.v-popper__wrapper {
  width: 100%;
}




.delivery {

  width: 260px;
  height: 232px;
  color: #404145;
  font-size: 14px;
  line-height: 22px;
  overflow-y: scroll;
  padding: 12px;
  font: 400 16px/24px Macan-regular, Helvetica Neue, Helvetica, Arial, sans-serif;
}


.budget-modal {
  display: flex;
  height: 127px;
  justify-content: space-between;
  width: 322px;
  overflow-y: scroll;
}

.budget-modal>* {
  width: 100px;
}


.min-price,
.max-price {
  width: 120px;
  height: 40px;
}


.filters-footer {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #e4e5e7;
  padding: 16px 24px;
}

.filters-footer>.apply {
  background-color: #222325;
}



.clear {
  border: none;
  line-height: 24px;
  padding: 0;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  background-color: #ffff;
  color: gray;
  font: 400 16px/24px Macan-regular, Helvetica Neue, Helvetica, Arial, sans-serif;
}



.apply {
  border: 1px solid transparent;
  border-radius: 4px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  line-height: 100%;
  padding: 12px 24px;
  position: relative;
  text-align: center;
  text-decoration: none;
  -webkit-transition: 70ms cubic-bezier(.75, 0, .25, 1);
  -o-transition: 70ms cubic-bezier(.75, 0, .25, 1);
  transition: 70ms cubic-bezier(.75, 0, .25, 1);
}


.v-popper :hover {
  cursor: pointer;
}

.delivery-input {
  height: 20px;
  width: 20px;
  margin: 8px;
}

.delivery-option {
  font-size: 14px;
  font-family: macan-bold;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>