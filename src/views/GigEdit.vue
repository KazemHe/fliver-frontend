<template>
    <section>
        <h1>
            gig edit
        </h1>

        <form @submit.prevent="addGig">
            <input type="text" placeholder="gig name" v-model="gigToEdit.name" />
            <input type="number" placeholder="Price" v-model.number="gigToEdit.price" />
            <button>Save</button>
        </form>
        <router-link to="/gig">Back</router-link>
    </section>
</template>
   
<script>

import { gigService } from '../services/gig.service.local'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
export default {
    name: 'GigEdit',
    data() {
        return {
            gig: null,
            gigToEdit: '',
        }
    },
    created() {
        console.log(this.$route.params)
        const { gigId } = this.$route.params
        if (gigId) {
            gigService.getById(gigId).then((gig) => {
                this.gigToEdit = gig
            })
        }
        else this.gigToEdit = gigService.getEmptyGig()
    },
    methods: {
        async addGig() {
            console.log('saving gig')
            try {
                const save = await this.$store.dispatch({ type: 'addGig', gig: this.gigToEdit })

                showSuccessMsg('gig Added')
                this.gigToEdit = gigService.getEmptyGig()
            }

            catch {
                showErrorMsg('Cannot add gig')
                this.$router.push('/gig')
            }
        },
    },
    computed: {
        gigs() {
            return this.$store.getters.gigs
        }
    },
    components: {
    }
}
</script>
   
<style></style>