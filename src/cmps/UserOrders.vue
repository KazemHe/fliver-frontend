<template>
    <div class=" main-container full">
        <!-- <div class=""> -->
            <section class="tabs-orders">
                <!--  v-if="selected === 'My Orders' && gigs" -->
                <div v-if="orders" v-for="(order, i) in orders" class="card-orders" >
                    <!-- {{ order }} -->
                    <div class="order">
                        <div class="user-gig">
                            <img :src="order.gig.img" />
                        </div>
                        <p>Order status: <span>{{ order.status }}</span></p>
                        <p>Title: <span>{{ order.gig.name }} </span></p>
                        <p>Price: <span>${{ order.gig.price }}</span></p>
                        <p>By: <span>{{ order.seller.fullname }} </span></p>
                        <!-- :class="statusStyle" -->
                        <!-- :style="{'yellow': order.status === 'Progress'} -->
                    </div>
                </div>
            </section>
        </div>
    <!-- </div> -->
</template>

<script>
import { svgServive } from '../services/svg.service.js'

export default {
    name: 'user-order',
    data() {
        return {
            status: 'Progress'
            //  ['Progress', 'Pending', 'Completed', 'Rejected']
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
        },
        statusStyle() {
            return {
                 'yellow': this.order.status === 'Progress'
            }
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

.order p{
    border-top: 1px solid #efefef;
    /* color: rgb(39, 38, 38); */
}
p span{
    /* color: red; */
    font-size: 15px;
}
.yellow {
    color: yellow;
}
</style>