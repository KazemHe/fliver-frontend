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
                                    <span v-html="getSvg('userProfile')"></span>
                                </div>
                            </label>
                        </form>
                        <h2>user</h2>
                    </div>
                    <section class="user-details">
                        <p>Seller</p>
                        <div class="flex">
                            <span class="svg-user-card" v-html="getSvg('location')"></span>
                            <p> From:</p>
                        </div>
                        <div class="flex">
                            <span class="svg-user-card" v-html="getSvg('userProfile')"></span>
                            <p> Member since:</p>
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
                        <button class="selectedTab"> My Gigs </button>
                        <button class=""> My Orders </button>
                        <button class=""> Received Orders </button>
                        <button class=""> Reviews </button>
                    </div>
                </div>

                <div class="gigs-tabs">
                    <section class="">
                        
                    </section>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import { svgServive } from '../services/svg.service.js'

export default {
    name: 'UserProfile',
    data() {
        return {}
    },
    computed: {
        gigs() {
            return this.$store.getters.gigs
        }
    },
    created() { },
    methods: {
        getSvg(iconName) {
            return (this.icon = svgServive.getGigSvg(iconName))
        },
    },
}
</script>
