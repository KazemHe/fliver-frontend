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
            <div class="rating-wrapper"><span class="gig-rating "><svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1792 1792" width="15" height="15">
                        <path fill="currentColor"
                            d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                        </path>
                    </svg></span><span class="owner-rate">{{ ownerRate }}</span><span class="review-count">({{ sumOfReviews
                    }})</span></div>
        </div>

        <div class="preview-footer">
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z">
                </path>
            </svg>
            <!-- <span class="icon" v-html="getSvg('heart')"></span> -->

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

    data: () => ({
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
        ]
    }),

    methods: {
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
        }

    },

    components: {
        VueperSlides,
        VueperSlide
    },
    emits: ['removeGig']
}
</script>

