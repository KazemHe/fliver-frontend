<template>

<section class="gig-info full">
     <ul>
        <li>Overview</li>
        <li>Description</li>
        <li>Reviews</li>
        <li>About the seller</li>
        <li>Compare packages</li>
        <li>Recommendations</li> 
</ul>
</section> 

<section class="gig-page">
    <section class="main-gig">
      <div class="gig-overview">
        <h1>{{gig.title}}</h1>
        <!-- <img :src=gigs[0].img alt=""> -->
        <div class="seller-overview">
            <div class="flex">
                <div></div>
                <div></div>
            </div>
        </div>
      </div>
    
    </section>

    <section class="selling-package"></section>
</section>





</template>
  
<script>
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { gigService } from '../services/gig.service.local'
import { getActionRemoveGig, getActionUpdateGig, getActionAddGigMsg } from '../store/gig.store'

export default {
    props:['gig'],
    data() {},

    computed: {
        loggedInUser() {
            return this.$store.getters.loggedinUser
        },
        gigs() {
            return this.$store.getters.gigs
        }
    },
    created() {
        this.$store.dispatch({ type: 'loadGigs' })
    },

    methods: {
        async addGigMsg(gigId) {
            try {
                await this.$store.dispatch(getActionAddGigMsg(gigId))
                showSuccessMsg('Gig msg added')
            } catch (err) {
                console.log(err)
                showErrorMsg('Cannot add gig msg')
            }
        },
        printGigToConsole(gig) {
            console.log('Gig msgs:', gig.msgs)
        }
    }
}
</script>
