<template>
    <div class=" main-container full">
        <div class=" user-profile">
            <section class="tabs-side">
                <div v-if="selected === 'My Orders' && gigs">
                    <!-- {{ orders }} -->
                    <article class="card-orders">
                        <div class="flex">
                            <img class="user-img" :src="gigs[0].imgUrl" />
                            <p>Price: ${{ gigs[0].price }}</p>
                            <p>Order date: {{ gigs[0].memberSince }}</p>
                            <p>Status: approved</p>
                        </div>
                        <div class="user-gig">
                            <img :src="gigs[0].images[0]" />
                        </div>
                    </article>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import { svgServive } from '../services/svg.service.js'

export default {
    name: 'UserOrders',
    data() {
        return {
          
        }
    },
    computed: {
        gigs() {
            return this.$store.getters.gigs
        },
        loggedInUser() {
            return this.$store.getters.loggedinUser
        },
        orders() {
            return this.$store.getters.orders
        }
    },
    methods: {
        getSvg(iconName) {
            return (this.icon = svgServive.getGigSvg(iconName))
        },
    },
    created() {
        this.$store.dispatch({ type: 'loadGigs' })
    },
    components: {
      
    }
}
</script>
