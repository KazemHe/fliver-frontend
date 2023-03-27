<template>
    <footer class="main-container full">
        <div class="flex space-between align-center">
            <div class="flex">
                <h3> <span aria-label="logo" class="logo">winner</span></h3>
                <h4 class="flex align-center justify-center">© Winner International Ltd. 2023</h4>
            </div>

            <div class="flex footer-links">
                <a class="flex-center" href="https://twitter.com/fiverr">
                    <span class="flex-center" v-html="getSvg('twitter')"></span></a>
                <a class="flex-center" href="https://www.facebook.com/Fiverr/">
                    <span class="flex-center" v-html="getSvg('facebook')"></span></a>
                <a class="flex-center" href="https://www.linkedin.com/company/fiverr-com">
                    <span class="flex-center" v-html="getSvg('linkedIn')"></span></a>
                <a class="flex-center" href="https://www.pinterest.com/fiverr/">
                    <span class="flex-center" v-html="getSvg('pinterest')"></span></a>
                <a class="flex-center" href="https://www.instagram.com/fiverr/">
                    <span class="flex-center" v-html="getSvg('instagram')"></span></a>
            </div>
        </div>
    </footer>
</template>


<script>
import { svgServive } from '../services/svg.service.js'

export default {
    // name: 'footer',
    data() {
        return {}
    },
    computed: {},
    created() {},
    methods: {
        getSvg(iconName) {
            return (this.icon = svgServive.getGigSvg(iconName))
        },
    },
}
</script>

<style>
.icon {
    /* width: 30px;
    height: 30px; */
}
</style>