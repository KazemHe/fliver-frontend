<template>
   <pre>
   </pre> 
    <h2 class="headline">{{ loggedUser.fullname }}'s - Dashboard profile</h2>
   <div class="row g-6 mb-6 flex">
        <div class="col-xl-3 col-sm-6 col-12">
            <div class="card shadow border-0">
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <span class="h6 font-semibold text-muted text-sm d-block mb-2">Annual Revenue - </span>
                            <span class="h3 font-bold mb-0">${{ annualIncome }}</span>
                        </div>
                        <div class="col-auto">
                            <div class="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                                <i class="bi bi-credit-card"></i>
                            </div>
                        </div>
                    </div>
                    <div class="mt-2 mb-0 text-sm">
                        <span class="badge badge-pill bg-soft-success text-success me-2">
                        </span>
                        <span class="text-nowrap text-xs text-muted">Since last year</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12">
            <div class="card shadow border-0">
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <span class="h6 font-semibold text-muted text-sm d-block mb-2">Monthly Revenue - </span>
                            <span class="h3 font-bold mb-0">${{ monthIncome }}</span>
                        </div>
                        <div class="col-auto">
                            <div class="icon icon-shape bg-primary text-white text-lg rounded-circle">
                                <i class="bi bi-people"></i>
                            </div>
                        </div>
                    </div>
                    <div class="mt-2 mb-0 text-sm">
                        <span class="badge badge-pill bg-soft-success text-success me-2">
                            <i class="bi bi-arrow-up me-1"></i>
                        </span>
                        <span class="text-nowrap text-xs text-muted">Since last month </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12">
            <div class="card shadow border-0">
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <span class="h6 font-semibold text-muted text-sm d-block mb-2">Completed Orders - </span>
                            <span class="h3 font-bold mb-0">{{ annualOrdersComplete }}</span>
                        </div>
                        <div class="col-auto">
                            <div class="icon icon-shape bg-info text-white text-lg rounded-circle">
                                <i class="bi bi-clock-history"></i>
                            </div>
                        </div>
                    </div>
                    <div class="mt-2 mb-0 text-sm">
                        <span class="badge badge-pill bg-soft-danger text-danger me-2">
                            <i class="bi bi-arrow-down me-1"></i>
                        </span>
                        <span class="text-nowrap text-xs text-muted">Since you join </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12">
            <div class="card shadow border-0">
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <span class="h6 font-semibold text-muted text-sm d-block mb-2">Pending Orders - </span>
                            <span class="h3 font-bold mb-0">{{ pendingOrders }}</span>
                        </div>
                        <div class="col-auto">
                            <div class="icon icon-shape bg-warning text-white text-lg rounded-circle">
                                <i class="bi bi-minecart-loaded"></i>
                            </div>
                        </div>
                    </div>
                    <div class="mt-2 mb-0 text-sm">
                        <span  class="text-nowrap text-xs text-muted">Still waiting your
                            reference</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card shadow border-0 mb-7">
                <div class="card-header">
                    <h5 class="mb-0">Orders data</h5>
                </div>
                <div class="table-responsive" >
                    <table class="table table-hover table-nowrap">
                        <thead class="thead-light">
                            <tr>
                                <th scope="col">Buyer</th>
                                <th scope="col">Gig name</th>
                                <th scope="col">Order Date</th>
                                <th scope="col">Total</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="order in orders" :key="order._id">
                                <td >
                                    <img 
                                        :src="order.buyer.imgUrl"
                                        class="avatar avatar-sm rounded-circle me-2">
                                    <a class="text-heading font-semibold" href="#">
                                        {{order.buyer.fullname}} 
                                    </a>
                                </td>
                                <td>
                                    {{order.gig.name}} 
                                </td>
                                <td>
                                    {{ new Date(order.createdAt).toLocaleDateString() }}
                                </td>
                                <td>
                                 US${{ order.gig.price }}
                                </td>
                                <td>
                                    <dashboard @change="change" :order="order" />
                                </td>
                                <td class="text-end">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>       
            </div>
</template>

<script>
import { socketService } from '../services/socket.service'

import dashboard from '../cmps/Dashboard.vue'
export default {
    name: 'SellerOrders',
    components: {
        dashboard,
    },
    data() {
        return {
            selectedOrder: null,
            deliveredOnTime: 95,
            responseRate: 98,
            loggedUser: null,
            

        }
    },
    created() {
        this.loadOrders()
        this.loggedUser = this.$store.getters.loggedinUser
        window.scrollTo({ top: 0, behavior: 'smooth' })
        socketService.on('user-ordered-gig', (msg) => {
    //   showSuccessMsg(msg)
      this.loadOrders()
    //   console.log(msg)
    })
        
    },
    methods: {
        loadOrders() {
            this.$store.dispatch({ type: 'loadOrders' })
            console.log('hi from loader')
        },
        selectOrder(status, order) {
            this.selectedOrder = { ...order }
            this.selectedOrder.status = status
            console.log('this.selectedOrder', this.selectedOrder);
        },

        change(status, order) {
            this.selectOrder(status, order)
            this.$store.dispatch({ type: 'saveOrder', order: this.selectedOrder })
            socketService.emit('order-change-status', this.selectedOrder.buyer)

        },
    },
    computed: {
        orders() {
            console.log('hello');
            return this.$store.getters.sellerOrders
        },

        annualIncome() {
            var income = 0
            this.orders.forEach(order => {
                if (order.status === "Completed") { income += order.gig.price }
            })
            return income
        },
        monthIncome() {
            var income = 0
            this.orders.forEach(order => {
                if (order.status === "Completed") { income += order.gig.price }
            })
            return income
        },
        pendingOrders() {
            var pending = 0
            this.orders.forEach(order => {
                if (order.status === "Pending") { pending++ }
            })
            return pending
        },
        annualOrdersComplete() {
            var complete = 0
            this.orders.forEach(order => {
                if (order.status === "Completed") { complete++ }
            })
            return complete
        },
        monthOrdersComplete() {
            var complete = 0
            this.orders.forEach(order => {
                if (order.status === "Complete") { complete++ }
            })
            return complete
        },
        completedOrderPercent() {
            return Math.round(((this.annualOrdersComplete / this.orders.length) * 100))
        },

        InprogresOrders() {
            var Inprogres = 0
            this.orders.forEach(order => {
                if (order.status === "Progress") { Inprogres++ }
            })
            return Inprogres
        },

    },
}
</script>

   