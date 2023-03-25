<template>
    <article className="gig-preview">

        <!-- <vueper-slides class="main-img" fade :touchable="false">
            <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" />
        </vueper-slides> -->

        <RouterLink :gig="gig" class="link" :to="'/gig/' + gig._id"><img class="main-img" :src="gig.imgUrl" />
        </RouterLink>

        <div class="inner-seller">
            <img :src="gig.owner.imgUrl" class="owner-img" alt="">
            <div class="owner-previwe">
                <div class="full-name">{{ gig.owner.fullname }}</div>
                <div>{{ gig.owner.level }}</div>
            </div>
        </div>

        <RouterLink class="link" :to="'/gig/' + gig._id">
            <h1 class="preview-title">{{ gig.title }}</h1>

        </RouterLink>
        <div class="content-info">
            <div class="rating-wrapper"><span class="gig-rating ">
                    <span class="svg" v-html="getSvg('goldStar')"></span></span><span class="owner-rate">{{ ownerRate
                    }}</span><span class="review-count">({{ sumOfReviews }})</span></div>
        </div>

        <div class="preview-footer">

            <span :class="heartColor" class="heart" @click="heartClick" v-html="getSvg('heart')"></span>


            <div><span class="starting-at">starting at </span><span class="gig-price">${{ gig.price }}</span></div>
        </div>
        <!-- <div @click="removeGig(gig._id)">x</div> -->


    </article>
</template>
  
  
<script>

import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import { svgServive } from '../services/svg.service.js'
export default {

    props: ['gig', 'user'],

    data() {
        return {


            slides: [
                {
                    title: 'El Teide Volcano, Spain',
                    content: 'Photo by Max Rive',
                    // You can also provide a URL for the image.
                    image: 'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/134290963/original/6c10882a3aa043e01338b4e26aed15bf1a356688.jpeg'
                },
                {
                    title: 'El Teide Volcano, Spain',
                    content: 'Photo by Max Rive',
                    // You can also provide a URL for the image.
                    image: 'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/275390527/original/68da5d5d026f7f8802f24056eb95a3c662b5f2dc.png'
                },
                {
                    title: 'dark life',
                    content: 'Photo by eli',
                    // You can also provide a URL for the image.
                    image: 'https://fiverr-res.cloudinary.com/video/upload/so_24.424506,t_gig_cards_web/cntx7wdyjiklz6hmbeao.png'
                    // Other slides.
                }
            ],

            like: false,
        }
    },

    methods: {
        heartClick() {
            this.like = !this.like
        },

        removeGig(gigId) {
            this.$emit('removeGig', gigId)
        },
        getSvg(iconName) {
            return (this.icon = svgServive.getGigSvg(iconName))
        },

    },

    computed: {

        sumOfReviews() {
            return this.gig.reviews?.length
        },
        ownerRate() {
            return this.gig.owner.rate
        },

        heartColor() {

            return {
                'like': this.like,
                'unlike': !this.like
            }

        },
    },

    components: {
        VueperSlides,
        VueperSlide
    },
    emits: ['removeGig']
}
</script>
<style>

</style>

