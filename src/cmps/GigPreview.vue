<template>
    <article className="gig-preview">



        <!-- <RouterLink :gig="gig" class="link" :to="'/gig/' + gig._id"><img class="main-img" :src="gig.imgUrl" />
        </RouterLink> -->
        <vueper-slides class="main-img" fade :touchable="false">
            <vueper-slide v-for="img in gig.images" :key="img" :image="img" />
        </vueper-slides>
        <div class="inner-seller">

            <img :src="gig.owner?.imgUrl" class="owner-img" alt="">
            <div class="owner-previwe">
                <div class="full-name">{{ gig.owner?.fullname }}</div>
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

        <div class="preview-footer" v-if="isExplorePage">
            <span class="heart" :class="heartColor" @click="heartClick" v-html="getSvg('heart')"></span>
            <div><span class="starting-at">starting at </span><span class="gig-price">US${{ gig.price }}</span></div>
        </div>

        <div class="preview-footer" v-if="isUserPage">
            <span class="btn-remove-gig" @click="removeGig(gig._id)">
                <i class="fa-regular fa-trash-can"></i>
            </span>
            <span class="btn-remove-gig" @click="updateGig(gig)">
                <i class="fa-solid fa-pencil"></i>
            </span>
        </div>

        <!-- <div><span class="starting-at">starting at </span><span class="gig-price">US${{ gig.price }}</span></div> -->
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


            like: false,
        }
    },

    methods: {
        heartClick() {
            this.like = !this.like
        },

        removeGig(gigId) {
            console.log(gigId)
            this.$emit('removeGig', gigId)
        },
        getSvg(iconName) {
            return (this.icon = svgServive.getGigSvg(iconName))
        },
        updateGig(gig) {
            console.log(gig)
            this.$emit('updateGig', gig)
        },


    },

    computed: {
        isExplorePage() {
            return this.$route.path === '/explore'
        },
        isUserPage() {
            return this.$route.path === '/user-profile'
        },
        gigImages() {
            // check if images 
            // if not return custom images array
            // this.gig.images ? [this.gig.imgUrl,]
        },
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
<style  lang="scss">
.gig-preview .vueperslides__inner {
    height: 100%;
}

.gig-preview .vueperslides__parallax-wrapper {
    height: 100%;
}

.vueperslides__arrows {
    margin: 3rem;
}




.gig-preview .vueperslides__parallax-wrapper {
    position: relative;
    overflow: hidden;
    // padding-bottom: 61.8% !important;
}

.gig-preview .vueperslides {
    position: relative;

    .vueperslides__arrow {
        width: 25px;
        padding: 0.2em 0.1em;
        transition: 0.2s;

        & svg {
            width: 1.6em;
            height: 1.4em;
            vertical-align: middle;
            stroke: currentColor;
            fill: none;
            padding: 0.3em 0;
            stroke-width: 2;
            color: transparent;
        }
    }

    .vueperslides__arrow--prev {
        border-radius: 0 50px 50px 0;

        & svg {
            width: 1em;
        }
    }

    .vueperslides__arrow--next {
        border-radius: 50px 0 0 50px;
    }

    &:hover .vueperslides__arrow {
        margin: 0 -9px;
        background-color: #ffffff;
        opacity: 1;
        border: 1px solid rgba(126, 125, 125, 0.6);

        & svg {
            color: rgba(99, 97, 97, 0.828);
        }
    }

    .vueperslides__arrow--prev {
        border-radius: 0 50px 50px 0;

        & svg {
            width: 1em;
        }

        .vueperslides__arrow--next {
            border-radius: 50px 0 0 50px;
        }
    }
}

.gig-preview .vueperslides__inner {
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}

.gig-preview .vueperslides__parallax-wrapper {
    position: relative;
    overflow: hidden;
}

.gig-preview .vueperslides__bullet {
    margin: 0.6em 0.2em;
    padding: 0;
    border: none;
    background: none;
}

.gig-preview .vueperslides__bullet .default {
    width: em(8px);
    height: em(8px);
    border-radius: em(8px);
    border: em(1px) solid currentColor;
    background-color: #fafafa;
    box-shadow: 0 0 1px #00000080, 0 0 3px #0000004d;
    transition: 0.4s ease-in-out;
    box-sizing: border-box;
}

.gig-preview .vueperslides__bullet--active .default {
    width: em(12px);
    height: em(12px);
    border-radius: em(12px);
}


.btn-remove-gig {
    cursor: pointer;
    width: 30px;
    fill: red;
}
</style>
 
