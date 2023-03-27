<template>
  <section class="hero-container home text-center full" :style="{ 'background-image': `url(${heroImgs[currIdx].img})` }">

    <div class="hero-search-container main-container flex">
      <h1>Find the perfect<span>freelance</span> services for your business</h1>
      <div class="hero-search flex">
        <div class="flex input-container">
          <div class="search-icon"><span class="flex" v-html="getSvg('search')"></span></div>
          <input placeholder="Try &quot;building mobile app&quot; ">
        </div>
        <button class="el-button" aria-disabled="false" type="button">
          <span class="">Search</span>
        </button>
      </div>
      <div class="categories flex"> Popular:
        <div class="tag">Website Design</div>
        <div class="tag">WordPress</div>
        <div class="tag">Logo Design</div>
        <div class="tag">Video Editing</div>
      </div>

      <div class="test">
        <div class="hero-name flex">
          <div v-if="heroImgs[currIdx].reviews">
            <span v-for="n in 5" v-html="getSvg('goldStar')" class="svg"></span>
          </div>
          <p>{{ heroImgs[currIdx].owner }}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="trusted-by full">
    <span>Trusted by:</span>
    <img :src="img" v-for="img in trustedByImgs" :key="img" />
  </section>

  <section class="popular-container">
    <h1 class="popular-title">Popular professional services</h1>
    <vueper-slides fixed-height="345px" :visible-slides="5" slide-multiple :gap="3" :slide-ratio="1 / 4"
      :dragging-distance="200" :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }" class="no-shadow">
      <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" :title="slide.title"
        :content="slide.content" @click="popularFilter(slide.content)" class="popular-imgs" />
    </vueper-slides>
  </section>

  <div class="main-container full bgc-video">
    <section class="video-section">
      <div class="text-side">
        <p>
        <h2>A whole world of freelance talent at your fingertips</h2>
        <ul>
          <li>
            <section class="flex align-center"><span class="icon" v-html="getSvg('videoUl')"></span>
              <h6>The best for every budget</h6>
            </section>
            <p> Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
          </li>
          <li>
            <section class="flex align-center"><span class="icon" v-html="getSvg('videoUl')"></span>
              <h6>Quality work done quickly</h6>
            </section>
            <p> Find the right freelancer to begin working on your project within minutes.</p>
          </li>
          <li>
            <section class="flex align-center"><span class="icon" v-html="getSvg('videoUl')"></span>
              <h6>Protected payments, every time</h6>
            </section>
            <p> Always know what you'll pay upfront. Your payment isn't released until you approve the work.</p>
          </li>
          <li>
            <section class="flex align-center"><span class="icon" v-html="getSvg('videoUl')"></span>
              <h6>24/7 support</h6>
            </section>
            <p> Questions? Our round-the-clock support team is available to help anytime, anywhere.</p>
          </li>
        </ul>
        </p>
      </div>

      <div class="video-side">
        <img :src="imgVideo" />
      </div>
    </section>
  </div>

  <section class="marketplace-container">
    <p class="marketplace-title">Explore the marketplace</p>
    <section class="marketplace-svg">
      <div>
        <span class="flex" v-html="getSvg('GraphicsAndDesign')"></span>
        <h4 class="svg-type">Graphics &amp; Design</h4>
      </div>
      <div>
        <span class="flex" v-html="getSvg('digitalMarketing')"></span>
        <h4 class="svg-type">Digital Marketing</h4>
      </div>
      <div>
        <span class="flex" v-html="getSvg('writingAndTranslation')"></span>
        <h4 class="svg-type">Writing & Translation</h4>
      </div>
      <div>
        <span class="flex" v-html="getSvg('videoAndAnimation')"></span>
        <h4 class="svg-type">Video & Animation</h4>
      </div>
      <div>
        <span class="flex" v-html="getSvg('musicAndAudio')"></span>
        <h4 class="svg-type">Music & Audio</h4>
      </div>
      <div>
        <span class="flex" v-html="getSvg('programmingAndTech')"></span>
        <h4 class="svg-type">Programming & Tech</h4>
      </div>
      <div>
        <span class="flex" v-html="getSvg('business')"></span>
        <h4 class="svg-type">Business</h4>
      </div>
      <div>
        <span class="flex" v-html="getSvg('lifestyle')"></span>
        <h4 class="svg-type">Lifestyle</h4>
      </div>
      <div>
        <span class="flex" v-html="getSvg('data')"></span>
        <h4 class="svg-type" :style="{ 'line-height': 4 }">Data</h4>
      </div>
      <div>
        <span class="flex" v-html="getSvg('photography')"></span>
        <h4 class="svg-type">Photography</h4>
      </div>
    </section>
  </section>
</template>

<script>
import { utilService } from '../services/util.service.js'
import { svgServive } from '../services/svg.service.js'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
  name: 'home',
  data() {
    return {
      filterParams: {
        subCategory:'subCategory',
        category:'category',
        search: 'title'
      },
      currIdx: 0,
      heroImgs: [
        {
          img: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/93085acc959671e9e9e77f3ca8147f82-1599427734108/bg-hero-4-1792-x1.png',
          owner: 'Zach, Bar Owner',
        },
        {
          img: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049983/bg-hero-1-1792-x1.png',
          owner: 'Andrea, Fashion Designer',
        },
        {
          img: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/2413b8415dda9dbd7756d02cb87cd4b1-1599595203045/bg-hero-2-1792-x1.png',
          owner: 'Moon, Marketing Expert',
          reviews: 5
        },
        {
          img: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/d14871e2d118f46db2c18ad882619ea8-1599835783966/bg-hero-3-1792-x1.png',
          owner: 'Ritika, Shoemaker and Designer',
        },
        {
          img: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049970/bg-hero-5-1792-x1.png',
          owner: 'Gabrielle, Video Editor',
          reviews: 5
        },
      ],
      trustedByImgs: [
        'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/meta.12b5e5c.png',
        'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google.517da09.png',
        'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix.e3ad953.png',
        'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg.8b7310b.png',
        'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal.ec56157.png',
      ],
      slides: [
        {
          title: 'Add talent to All',
          content: 'Al Artists',
          image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/f27bec553efc12cc60baed89b8f2223e-1674661140708/ai-artists-2x.png',
        },
        {
          title: 'Build your brand',
          content: 'Logo Design',
          image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png',
        },
        {
          title: 'Customize your site',
          content: 'WordPress',
          image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png',
        },
        {
          title: 'Share your message',
          content: 'Voice Over',
          image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png',
        },
        {
          title: 'Engage your audience',
          content: 'Video Explainer',
          image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png',
        },
        {
          title: 'Reach more customers',
          content: 'Social Media',
          image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png',
        },
        {
          title: 'Unlock growth online',
          content: 'SEO',
          image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png',
        },
        {
          title: 'Showcase your story',
          content: 'Book Covers',
          image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png',
        },
        {
          title: 'Color your dreams',
          content: 'Illustration',
          image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png',
        },
        {
          title: 'Go global',
          content: 'Translation',
          image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png',
        },
        // {
        //   title: 'Learn your business',
        //   content: 'Data Entry',
        //   image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png',
        // },
      ],
      imgVideo: 'https://res.cloudinary.com/dhsdxj3y3/image/upload/v1670793711/gigs/ostlxosopzlu6ccomezg.webp'
    }
  },
  computed: {},
  created() {
    setInterval(() => {
      this.currIdx++
      if (this.currIdx === this.heroImgs.length) this.currIdx = 0
    }, 5000)
  },
  methods: {
    getSvg(iconName) {
      return (this.icon = svgServive.getGigSvg(iconName))
    },
    popularFilter(content) {
      utilService.setQueryStringParams(this.filterParams.subCategory, content)
      // this.$router.push('/explore')
    },
    
  },
  components: {
    VueperSlides,
    VueperSlide
  },
}
</script>
