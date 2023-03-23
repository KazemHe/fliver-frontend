<template>
  <section class="trusted-by full">
    <span>Trusted by:</span>
    <img :src="img"  v-for="img in trustedByImgs" :key="img"/>
  </section>

  <section>
    <div class="popular-container">
      <h1 class="popular-title">Popular professional services</h1>
      <vueper-slides class="no-shadow"
        :visible-slides="5"
        slide-multiple
        :gap="3"
        :slide-ratio="1 / 4"
        :dragging-distance="200" 
        :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">
        <vueper-slide class="popular-imgs" v-for="(slide, i) in slides" :key="i" :image="slide.image" :title="slide.title" />
      </vueper-slides>
    </div>
  </section>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
  name: 'home',
  data() {
    return {
      trustedByImgs: [
        'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook.31d5f92.png',
        'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google.517da09.png',
        'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix.e3ad953.png',
        'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg.8b7310b.png',
        'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal.ec56157.png',
      ],
      slides: [
        {
          title:'Add talent to All Al Artists',
          image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/f27bec553efc12cc60baed89b8f2223e-1674661140708/ai-artists-2x.png',
        },
        {
          title: 'Build your brand Logo Design',
          image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png',
        },
        {
          title: 'Customize your site WordPress',
          image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png',
        },
        {
          title: 'Share your message Voice Over',
          image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png',
        },
        {
          title: 'Engage your audience Video Explainer',
          image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png',
        },
        {
          title: 'Reach more customers Social Media',
          image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png',
        },
        {
          title: 'Unlock growth online SEO',
          image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png',
        },
        {
          title:'Showcase your story Book Covers',
          image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png',
        },
        {
          title: 'Color your dreams Illustration',
          image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png',
        },
        {
          title: 'Go global Translation',
          image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png',
        },
        {
          title:'Learn your business Data Entry',
          image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png',
        },
      ],
    }
  },
  computed: {},
  created() {},
  methods: {},
  components: {
    VueperSlides,
    VueperSlide
  },
}
</script>
