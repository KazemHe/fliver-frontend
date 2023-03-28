<template>
    <div class="user-profile main-container full">
        <div class=" main-container">

            <section class="">

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
                        <div>
                            <span class="svg-user-card" v-html="getSvg('location')"></span>
                            <p> From:</p>
                        </div>
                       <div>
                           <span class="svg-user-card" v-html="getSvg('userProfile')"></span>
                           <p> Member since:</p>
                        </div>                                         
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
    computed: {},
    created() { },
    methods: {
        getSvg(iconName) {
            return (this.icon = svgServive.getGigSvg(iconName))
        },
    },
}
</script>
