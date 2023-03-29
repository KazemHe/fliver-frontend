<template>

    <section v-for="category in order">
        <div class="table-entity flex">
            <div class="buyer-col flex column align-center user-col">
                <!-- <img :src="order.buyer.imgUrl" /> -->
                <p class="regular" >{{ category.buyer.name }}</p>
            </div>
            <div class="gig-col flex column">
                <span class="table-span regular">{{ category.gig.name }}</span>
            </div>
            <div class="due-on-col flex column">
                <span class="table-span regular">
                    {{ new Date(category.createdAt).toLocaleDateString() }}
                </span>
            </div>
            <div class="total-col flex column">
                <span class="table-span regular">US${{ category.gig.price }}</span>
            </div>
            <div @click="toggleSet()" class="status-col flex column">
                <div class="status flex" :class="className(category.status)">
                    <span class="regular">{{ category.status }}</span>
                </div>
            </div>
            <div>
                <select name="" id="">
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
                <!-- <div v-if="setOpen" class="set-status" @click="toggleSet">
                    <div class="completed status" @click="changeStatus('Completed')">
                        Completed
                    </div>
                    <div class="in-progress status" @click="changeStatus('In Progress')">
                        In Progress
                    </div>
                    <div class="rejected status" @click="changeStatus('Rejected')">
                        Rejected
                    </div>
                </div> -->
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        order: Object
    },
    data() {
        return {
            setOpen: false,
        }
    },
    methods: {
        className(str) {
            if (str === 'Pending') return 'pending'
            if (str === 'Completed') return 'completed'
            if (str === 'In Progress') return 'in-progress'
            if (str === 'Rejected') return 'rejected'
        },
        toggleSet() {
            console.log('hey');
            this.setOpen = !this.setOpen
        },
        changeStatus(status) {
            console.log('hey', status);
            this.$emit('change', { status, order: this.order })
            this.toggleSet()
        },
    },
}
</script>