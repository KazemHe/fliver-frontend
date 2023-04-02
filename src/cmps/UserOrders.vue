<template>
    <div class=" main-container full">
        <div class="">
            <section class="tabs-orders">
                <!--  v-if="selected === 'My Orders' && gigs" -->
                <div v-if="orders" v-for="order in orders"  class="card-orders">
                    <!-- {{ order }} -->
                        <div class="order">
                            <div class="user-gig">
                                <img :src="order.gig.img" />
                            </div>
                            <p>Price: ${{ order.gig.price }}</p>
                            <p>Status: {{ order.status }}</p>
                            <p>Seller: {{ order.seller.fullname }}</p>
                        </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import { svgServive } from '../services/svg.service.js'

export default {
    name: 'user-order',
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
            return this.$store.getters.buyerOrders
        }
    },
    methods: {
        getSvg(iconName) {
            return (this.icon = svgServive.getGigSvg(iconName))
        },
    },
    created() {
        this.$store.dispatch({ type: 'loadOrders' })
        this.buyerOrders = this.orders
        console.log('in orders')
        // this.$store.dispatch({ type: 'loadGigs' })

        socketService.on('order-approved', (msg) => {
            this.$store.dispatch({ type: 'loadOrders' })
        })
        socketService.on('order-status-update', (msg) => {
            this.$store.dispatch({ type: 'loadOrders' })
        })

    },
    components: {

    }
}
</script>

<style>
.tabs-orders {
    display: flex;
    gap: 26px;
}

.user-gig-img {
    width: 256px;
    height: 155px;
}
</style>