
<template>
    <footer class="flex">
        <div class="flex">
            <h3> <span aria-label="logo" class="logo">fiverr</span></h3>
            <h4>© Fiverr International Ltd. 2023</h4>

        </div>
        <span class="icon" v-html="getSvg('twitter')"></span>
        <span class="icon" v-html="getSvg('facebook')"></span>
        <span class="icon" v-html="getSvg('linkedIn')"></span>
        <span class="icon" v-html="getSvg('pinterest')"></span>
        <span class="icon" v-html="getSvg('instagram')"></span>
        <div>

        </div>
    </footer>
</template>


<script>
import { svgServive } from '../services/svg.service.js'

export default {
    // name: 'footer',
    data() {
        return {

        }
    },
    computed: {
    },
    created() {
    },
    methods: {
        getSvg(iconName) {
            return (this.icon = svgServive.getGigSvg(iconName))
        },
    },
    components: {

    },

}
</script>

<style>
.icon {
  width: 30px;
  height: 30px;
}
</style>