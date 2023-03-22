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
        <h1>{{gigs[1].title}}</h1>
        <div>{{gigs[1].owner.fullname}}</div>
        <div><img :src=gigs[1].imgUrl></div>
        <div class="seller-overview">
            <div class="flex">
                <div></div>
                <div></div>
            </div>
        </div>
      </div>
      <hr>
      ABOUT THE GIG
      <h1>{{gigs[1].description}}</h1>

      <hr>
      ABOUT THE SELLER
      <div class="about-the-seller">
        <h1>{{gigs[1].owner.fullname}}</h1>
        <div><img :src=gigs[1].owner.imgUrl></div>
        <h1>{{gigs[1].owner.rate}}</h1>
        <h1>{{gigs[1].owner.level}}</h1>
        <h1>{{gigs[1].country}}</h1>
        <h1>{{gigs[1].about}}</h1>
      </div>
<hr>
REVIEWS
      <div class="reviews">
        <ul class="reviews-list" v-for="review in gigs[1].reviews">
            <li>
             <h1>{{review.name}}</h1>
             <h1>{{review.country}} {{review.flag}}</h1>
             <h1>Rate: 4</h1>
             <h1>{{review.review}}</h1>
            </li>
        </ul>
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
