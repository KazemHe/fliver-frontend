<template>
    <h2 class="headline">{{ loggedUser.fullname }}'s - Dashboard profile</h2>
    <section class="dashboard flex">
        <section class="profile-progress">
            <div class="profile flex">
                <div v-if="loggedUser" class="img-container">
                    <img :src="loggedUser.imgUrl">
                </div>
            
            </div>
            <div class="progress">
                <article class="progress-item">
                    <div class="progress-txt flex">
                        <p class="bold">Response Rate</p>
                        <p v-if="(orders.length > 0)">{{ responseRate }}%</p>
                    </div>
                    <div class="el-progress el-progress--line" role="progressbar" aria-valuenow="95" aria-valuemin="0"
                        aria-valuemax="100">
                        <div class="el-progress-bar">
                            <div class="el-progress-bar__outer" style="height: 6px;">
                                <div class="el-progress-bar__inner"
                                    style="width: 95%; animation-duration: 3s; background-color: rgb(29, 191, 115);">
                                    <!--v-if-->
                                </div>
                            </div>
                        </div>
                        <div class="el-progress__text" style="font-size: 14.4px;"><span>95%</span></div>
                    </div>
                    <el-progress v-if="(orders.length > 0)" :percentage="responseRate" color="#1dbf73" />
                </article>
                <article class="progress-item">
                    <div class="progress-txt flex">
                        <p class="bold">Orders Completed</p>
                        <p v-if="(orders.length > 0)">{{ completedOrderPercent }}%</p>
                    </div>
                    <div class="el-progress el-progress--line" role="progressbar" aria-valuenow="95" aria-valuemin="0"
                        aria-valuemax="100">
                        <div class="el-progress-bar">
                            <div class="el-progress-bar__outer" style="height: 6px;">
                                <div class="el-progress-bar__inner"
                                    style="width: 95%; animation-duration: 3s; background-color: rgb(29, 191, 115);">
                                    <!--v-if-->
                                </div>
                            </div>
                        </div>
                        <div class="el-progress__text" style="font-size: 14.4px;"><span>95%</span></div>
                    </div>
                    <el-progress v-if="(orders.length > 0)" :percentage="completedOrderPercent" color="#1dbf73" />
                </article>
                <article class="progress-item">
                    <div class="progress-txt flex">
                        <p class="bold">Delivered on Time</p>
                        <p v-if="(orders.length > 0)">{{ deliveredOnTime }}%</p>
                    </div>
                    <div class="el-progress el-progress--line" role="progressbar" aria-valuenow="95" aria-valuemin="0"
                        aria-valuemax="100">
                        <div class="el-progress-bar">
                            <div class="el-progress-bar__outer" style="height: 6px;">
                                <div class="el-progress-bar__inner"
                                    style="width: 95%; animation-duration: 3s; background-color: rgb(29, 191, 115);">
                                    <!--v-if-->
                                </div>
                            </div>
                        </div>
                        <div class="el-progress__text" style="font-size: 14.4px;"><span>95%</span></div>
                    </div>
                    <el-progress v-if="(orders.length > 0)" :percentage="deliveredOnTime" color="#1dbf73" />
                </article>
            </div>
        </section>
        <section class="seller-orders flex">
            <div class="income-order-dashboard flex">
                <div class="dashboard-item">
                    <span class="light">Annual Revenue</span>
                    <h3 v-if="(orders.length > 0)">${{ annualIncome }}</h3>
                </div>
                <div class="dashboard-item">
                    <span class="light">Monthly Revenue</span>
                    <h3 v-if="(orders.length > 0)">${{ monthIncome }}</h3>
                </div>
                <div class="dashboard-item ">
                    <span class="light Completed">Completed Orders </span>
                    <h3 class="Completed" v-if="(orders.length > 0)">{{ annualOrdersComplete }}</h3>
                </div>
                <div class="dashboard-item">
                    <span class="light Progres">In-Progres Orders</span>
                    <h3 class="Progres" v-if="(orders.length > 0)">{{ InprogresOrders }}</h3>
                </div>
                <div class="dashboard-item">
                    <span class="light">Pending Orders </span>
                    <h3 v-if="(orders.length > 0)">{{ pendingOrders }}</h3>
                </div>
            </div>
            <div class="order-table">
                <div class="table-head flex">
                    <div class="buyer-col">
                        <h4>Buyer</h4>
                    </div>
                    <div class="gig-col">
                        <h4>Gig</h4>
                    </div>
                    <div class="due-on-col">
                        <h4>Order Date</h4>
                    </div>
                    <div class="total-col">
                        <h4>Total</h4>
                    </div>
                    <div class="status-col">
                        <h4>Status</h4>
                    </div>
                </div>
                <div v-for="order in orders" :key="order._id">
                    <dashboard @change="change" :order="order" />
                </div>
            </div>

            <div class="card-body">
                <div class="row">
                    <div class="col">
                        <span class="h6 font-semibold text-muted text-sm d-block mb-2">Total hours</span>
                        <span class="h3 font-bold mb-0">1.400</span>
                    </div>
                    <div class="col-auto">
                        <div class="icon icon-shape bg-info text-white text-lg rounded-circle">
                            <i class="bi bi-clock-history"></i>
                        </div>
                    </div>
                </div>
                <div class="mt-2 mb-0 text-sm">
                    <span class="badge badge-pill bg-soft-danger text-danger me-2">
                        <i class="bi bi-arrow-down me-1"></i>-5%
                    </span>
                    <span class="text-nowrap text-xs text-muted">Since last month</span>
                </div>
            </div>

        </section>
    </section>
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
    },
    methods: {
        loadOrders() {
            this.$store.dispatch({ type: 'loadOrders' })
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
<style></style>
    <!-- <div class="user-desc flex">
                    <div class="profile-item">
                        <p class="regular">Positive Rating</p>
                        <p class="bold">100%</p>
                    </div>
                    <div class="profile-item">
                        <p class="regular">Response Time</p>
                        <p class="bold">1 Hrs.</p>
                    </div>
                </div> -->

                <h2 class="headline">{{ loggedUser.fullname }}'s - Dashboard profile</h2>
                <div class="row g-6 mb-6 flex">
                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card shadow border-0">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col">
                                        <span class="h6 font-semibold text-muted text-sm d-block mb-2">Annual Revenue - </span>
                                        <span class="h3 font-bold mb-0" >${{ annualIncome }}</span>
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
                                    <span class="text-nowrap text-xs text-muted">Since last month  </span>
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
                                <div class="mt-2 mb-0 text-sm" >
                                    <span class="badge badge-pill bg-soft-danger text-danger me-2">
                                        <i class="bi bi-arrow-down me-1"></i>
                                    </span>
                                    <span class="text-nowrap text-xs text-muted">Since you join  </span>
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
                                    <span v-if="(orders.length = 0)" class="text-nowrap text-xs text-muted">Still waiting your reference</span>
                                    <span class="text-nowrap text-xs text-muted">There are no orders </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            
                <div class="card shadow border-0 mb-7">
                                <div class="card-header">
                                    <h5 class="mb-0">Orders data</h5>
                                </div>
                                <div class="table-responsive">
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
                                            <tr>
                                                <td>
                                                    <img alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=256&amp;h=256&amp;q=80" class="avatar avatar-sm rounded-circle me-2">
                                                    <a class="text-heading font-semibold" href="#">
                                                        Robert Fox
                                                    </a>
                                                </td>
                                                <td>
                                                    Feb 15, 2021
                                                </td>
                                                <td>
                                                   
                                                </td>
                                                <td>
                                                    $3.500
                                                </td>
                                                <td>
                                                    <span class="badge badge-lg badge-dot">
                                                        <i class="bg-success"></i>Scheduled
                                                    </span>
                                                </td>
                                                <td class="text-end">
                                                  
                                                </td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        <div class="card-footer border-0 py-5">
                            <span class="text-muted text-sm">Showing {{orders.length}} items out of {{ orders.length }} results found</span>
                        </div>
            
                        <div v-for="order in orders" :key="order._id">
                                <dashboard @change="change" :order="order" />
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
                            <tr >
                                <td >
                                    <img alt="..."
                                        src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=256&amp;h=256&amp;q=80"
                                        class="avatar avatar-sm rounded-circle me-2">
                                    <a class="text-heading font-semibold" href="#">
        
                                    </a>
                                </td>
                                <td>
                                     order 
                                </td>
                                <td>
                                   
                                </td>
                                <td>
                                 
                                </td>
                                <td>
                                    <span class="badge badge-lg badge-dot">
                                        <i class="bg-success"></i>
                                    </span>
                                </td>
                                <td class="text-end">
        
                                </td>
                            </tr>
        
                        </tbody>
        
                    </table>
                </div>
        
                
            </div>