

<template>
    <article className="gig-preview">

        <img :src="gig.imgUrl" />
        <div class="inner-seller">
            <img :src="gig.owner.imgUrl" class="owner-img" alt="">
            <div>{{ gig.owner.fullname }}</div>
            <div>{{ gig.owner.level }}</div>
        </div>
        <h1>{{ gig.title }}</h1>


        <div class="content-info">
            <div class="rating-wrapper"><span class="gig-rating text-body-2"><svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1792 1792" width="15" height="15">
                        <path fill="currentColor"
                            d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                        </path>
                    </svg>4.9<span class="review-count">(<!-- -->130<!-- -->)</span></span></div>
        </div>


        <h5>price:${{ gig.price }}</h5>

        <button>
            <RouterLink class="link" :to="'/gig/details/' + gig._id">Details</RouterLink>
        </button>

    </article>
</template>
  


  
<script>

export default {

    props: ['gig', 'user'],


    methods: {
        removeGig(gigId) {
            this.$emit('removeGig', gigId)
        },

    },

    emits: ['removeGig']
}
</script>