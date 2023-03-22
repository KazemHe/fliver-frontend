

<template>
    <article className="gig-preview">

        <img :src="gig.imgUrl" />n
        <div>
            <img :src="gig.owner.imgUrl" alt="">
        </div>
        <div>{{ gig.owner.fullname }}</div>
        <div>{{ gig.owner.level }}</div>
        <h1>{{ gig.title }}</h1>
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