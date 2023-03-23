<template>
  <section>
    <VDropdown>
      <button class="filter-btn">budget</button>
      <template #popper>
        <div class="menu-content">
          <div class="content-scroll" style="max-height: 331.753px;">
            <div class="budget-filter">
              <div class="price-range-filter">
                <div class="input-wrapper"><label>MIN.</label><input type="number" name="gig_price_range" class="min"
                    placeholder="Any" min="0" max="5000" value=""><i>$</i></div>
                <div class="input-wrapper"><label>MAX.</label><input type="number" name="gig_price_range" class="max"
                    placeholder="Any" min="0" max="5000" value=""><i>$</i></div>
              </div>
            </div>
          </div>
          <div class="button-row"><button class="ZQi_S8t YmeteBT a1WZUBV co-grey-1000 clear-all">Clear All</button><button
              class="ZQi_S8t mtfDr08 co-white apply bg-co-black">Apply</button></div>
        </div>

      </template>
    </VDropdown>
    <VDropdown>
      <button class="filter-btn">Delivery Time</button>
      <template #popper>
        <section class="filter-modal" style="left: 301px;">
          <form id="filters" name="daysToMake" class="delivery">
            <div><input type="radio" id="24h" name="delivery-time" value="1"><label for="24h">Express 24H</label></div>
            <div><input type="radio" id="3d" name="delivery-time" value="3"><label for="3d">Up to 3 days</label></div>
            <div><input type="radio" id="7d" name="delivery-time" value="7"><label for="7d">Up to 7 days</label></div>
            <div><input type="radio" id="anytime" name="delivery-time" value="" checked=""><label
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



.v-popper__wrapper{
  width: 100%;
}


.popper_gk90nxa9_l8juon{
  width: 900px;
}
</style>