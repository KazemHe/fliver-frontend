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
                       
                        <button
                                @click="selectedTab('My gigs')"
                                :class="{ 'selected-tab': selected === 'My gigs' }">
                                <router-link to="/user-gigs">My gigs</router-link> </button>
                        <button
                                @click="selectedTab('My orders')"
                                :class="{ 'selected-tab': selected === 'My orders' }">
                                <router-link to="/user-order">My orders</router-link> </button>
                    </div>
                </div>
                <RouterView/>
              
                <!-- <div v-if="selected === 'Received Orders'">received-orders</div>

                <div v-if="selected === 'Reviews'">
                    <h1>reviews</h1>
                </div> -->
            </section>
        </div>
    </div>
</template>

<script>
import { svgServive } from '../services/svg.service.js'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { getActionRemoveGig, getActionUpdateGig, getActionAddGigMsg } from '../store/gig.store'
import GigList from '../cmps/GigList.vue'
import GigPreview from '../cmps/GigPreview.vue'

export default {
    name: 'UserProfile',
    data() {
        return {
            selected: 'My Gigs',
            tabs: ['My Gigs', 'My Orders'],  // 'Received Orders', 'Reviews'
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
        },
        async removeGig(gigId) {
            try {
                await this.$store.dispatch(getActionRemoveGig(gigId))
                showSuccessMsg('Gig removed')

            } catch (err) {
                console.log(err)
                showErrorMsg('Cannot remove gig')
            }
        },
        async updateGig(gig) {
            console.log(gig )
            try {
                gig = { ...gig }
                // gig.price = +prompt('New price?', gig.price)
                this.$router.push(`/edit/${gig._id}`)
                await this.$store.dispatch(getActionUpdateGig(gig))
                showSuccessMsg('Gig updated')

            } catch (err) {
                console.log(err)
                showErrorMsg('Cannot update gig')
            }
        },
    },
    created() { 
        this.$store.dispatch({ type: 'loadGigs' })
    },
    components: {
        GigList,
        GigPreview
    }
}
</script>
