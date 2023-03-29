<template>
    <div class=" main-container full">
        <div class=" user-profile">

            <section class="user-side">
                <div class="user-card">
                    <div class="form-user-profile">
                        <form>
                            <label for="imgupload">
                                <input type="file" id="imgupload" style="display: none;">
                                <div class="user-img">
                                    <!-- <img :src="gigs[0].imgUrl"/> -->
                                    <span v-html="getSvg('userProfile')"></span>
                                </div>
                            </label>
                        </form>
                        <h2>Pablopietro</h2>
                    </div>
                    <section class="user-details">
                        <div class="flex">
                            <span class="svg-user-card" v-html="getSvg('location')"></span>
                            <p> From: United-state </p>
                        </div>
                        <div class="flex">
                            <span class="svg-user-card" v-html="getSvg('userProfile')"></span>
                            <p> Member since: June 2018</p>
                        </div>
                    </section>
                </div>

                <div class="description-card">
                    <h1>Description</h1>
                    <div class="user-description-text">
                        Your website is the actual face of your business,
                        and if it is not perfect, then it's alarming because with each passing day,
                        clients will not convert, and here we will come up to play the vital role.
                        We are a team of Professional website designer experts
                        and have been in this ecosystem for more than 2 years.
                    </div>
                </div>
            </section>

            <section class="tabs-side">
                <div>
                    <div class="tab-btns">
                        <button v-for="tab in tabs" @click="selectedTab(tab)" :class="{ 'selected-tab': selected === tab }">
                            {{ tab }} </button>
                    </div>
                </div>

                <div class="gigs-tabs" v-if="selected === 'My Gigs'">
                    <section>
                        <ul class="flex">
                            <li class="gigs-user">
                                <router-link to="/gig/edit">
                                    <div class="card-new-gig">
                                        <span class="btn-add-gig">+</span>
                                        <p>Create a new Gig</p>
                                    </div>
                                </router-link>
                            </li>
                            <li class="gigs-user" v-for="gig in gigs" :key="gig._id">
                                <GigPreview :gig="gig" @removeGig="removeGig" />
                            </li>
                        </ul>
                    </section>
                </div>

                <div v-if="selected === 'My Orders' && gigs">
                    <!-- {{ orders }} -->
                    <article class="card-orders">
                        <div class="flex">
                            <img class="user-img" :src="gigs[0].imgUrl"/>
                            <p>Price: ${{ gigs[0].price }}</p>
                            <p>Order date: {{ gigs[0].memberSince }}</p>
                            <p>Status: approved</p>
                        </div>
                        <div class="user-gig">
                           <img :src="gigs[0].images[0]"/>
                        </div>
                    </article>
                </div>
                <div v-if="selected === 'Received Orders'">received-orders</div>
                <div v-if="selected === 'Reviews'">
                    <h1>reviews</h1>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import { svgServive } from '../services/svg.service.js'
import GigList from '../cmps/GigList.vue'
import GigPreview from '../cmps/GigPreview.vue'

export default {
    name: 'UserProfile',
    data() {
        return {
            selected: 'My Gigs',
            tabs: ['My Gigs', 'My Orders', 'Received Orders', 'Reviews'],
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
        selectedTab(selected) {
            this.selected = selected
            console.log(this.selected)
        }
    },
    created() { 
        // console.log(orders)
    },
    components: {
        GigList,
        GigPreview
    }
}
</script>
