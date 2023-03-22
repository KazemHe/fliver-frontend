<template>
    <section class="gig-nav">
        <ul class="nav-info" ref="nav-info">
            <li class="green">Overview</li>
            <li>About the seller</li>
            <li>Compare packages</li>
            <li>Reviews</li>
        </ul>
    </section>

    <section class="gig-info flex" ref="filter">
        <section class="main-gig">
            <div class="gig-overview">
                <h1>{{ gigs[1].title }}</h1>
                <div class=" seller-preview-short flex">
                    <div><img :src=gigs[1].owner.imgUrl class="info-img"></div>
                    <div>
                        <span class="seller-name">{{ gigs[1].owner.fullname }}</span>
                        <span class="seller-rate">{{ gigs[1].owner.rate }} |</span>
                    </div>
                </div>
                <hr>
                <div class=""><img :src=gigs[1].imgUrl></div>
                <div class="seller-overview">
                    <div class="flex">
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            <hr>

            <div class="about-the-gig">
                <h2>About the gig</h2>
                <p>{{ gigs[1].description }}</p>
            </div>

            <hr>

            ABOUT THE SELLER
            <div class="about-the-seller">
                <h1>{{ gigs[1].owner.fullname }}</h1>
                <div><img :src=gigs[1].owner.imgUrl></div>
                <h1>{{ gigs[1].owner.rate }}</h1>
                <h1>{{ gigs[1].owner.level }}</h1>
                <h1>{{ gigs[1].country }}</h1>
                <h1>{{ gigs[1].about }}</h1>
            </div>
            <hr>

            REVIEWS
            <section class="reviews grid">
                <section>
                    <ul class="reviews-list" v-for="review in gigs[1].reviews">
                        <li>
                            <h1>{{ review.name }}</h1>
                            <h1>{{ review.country }} {{ review.flag }}</h1>
                            <h1>Rate: 4</h1>
                            <h1>{{ review.review }}</h1>
                        </li>
                    </ul>
                </section>
            </section>
        </section>

        <aside class="selling-package">
            <div class="packages-tabs">
                <section class="package-header ">
                    <h3>your order</h3>
                    <h3>US$70</h3>
                </section>
                <p>1 Page Figma Web Design UI UX / Template Design (Max 3 Sections)</p>
                <section class="more-info flex">
                    <div class="delivery-wrapper flex"> 
                        <span class="glAQDp5 delivery-icon" aria-hidden="true" style="width: 16px; height: 16px;"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path><path d="M9 4H7v5h5V7H9V4z"></path></svg></span>
                        <b class="delivery" >1 Day Delivery</b>
                    </div>
                    <div class="revisions-wrapper">
                        <span class="glAQDp5 revisions-icon" aria-hidden="true" style="width: 16px; height: 16px;"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z"></path><path d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z"></path></svg></span>
                        <b>2 Revisions </b>
                    </div>
                </section>
                <ul class="ull">
                    <li class="regular"> 
                        <span><svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="#1dbf73"><path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path></svg></span>
                        1 page/screen</li>
                    <li class="regular"> <span><svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="#1dbf73"><path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path></svg></span>
                        Logo transparency</li>
                    <li class="regular"> <span><svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="#1dbf73"><path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path></svg></span>
                        Printable file</li>
                    <li class="regular"> <span> <svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="#1dbf73"><path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path></svg></span>
                        Include source file</li>
                </ul>
                <a href="">
                    <button class="continue-btn"> Continue </button>
                </a>
            </div>


            <div class="contact-seller">
                <section class="contact-btn">
                    <button>Contact seller</button>
                </section>
            </div>
        </aside>
    </section>
</template>
  
<script>
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { gigService } from '../services/gig.service.local'
import { getActionRemoveGig, getActionUpdateGig, getActionAddGigMsg } from '../store/gig.store'

export default {
    props: ['gig'],
    data() { },

    //     mounted(){
    // this.headerObserver = new IntersectionObserver(this.headerObserver,{
    //     rootMargin:"-91px 0px 0px"
    // });
    // this.headerObserver.observe(this.$refs.nav-info)
    //     },

    computed: {
        loggedInUser() {
            return this.$store.getters.loggedinUser
        },
        gigs() {
            return this.$store.getters.gigs
        }
    },
    created() {
        this.$store.dispatch({ type: 'loadGigs' })
    },

    methods: {
        onheaderObserver(entries) {
            entries.forEach((entry) => {
                this.stickyNav = entry.isIntersecthing ? false : true
            })
        },

        async addGigMsg(gigId) {
            try {
                await this.$store.dispatch(getActionAddGigMsg(gigId))
                showSuccessMsg('Gig msg added')
            } catch (err) {
                console.log(err)
                showErrorMsg('Cannot add gig msg')
            }
        },
        printGigToConsole(gig) {
            console.log('Gig msgs:', gig.msgs)
        }
    }
}
</script>
