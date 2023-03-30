<template>
    <section v-for="currOrder in order">
        <div class="table-entity flex">
            <div class="buyer-col flex column align-center user-col">
              
                <p class="regular">{{ currOrder.buyer.name }}</p>
            </div>
            <div class="gig-col flex column">
                <span class="table-span regular">{{ currOrder.gig.name }}</span>
            </div>

            <div class="due-on-col flex column">
                <span class="table-span regular">
                    {{ new Date(currOrder.createdAt).toLocaleDateString() }}
                </span>
            </div>

            <div class="total-col flex column">
                
                    <span class="table-span regular">US${{ currOrder.gig.price }}</span>
                </div>
                <div>

                <div @click="toggleSet()" class="status-col flex column">
                    <div class="status flex" :class="className(currOrder.status)">
                        <span class="regular">{{ currOrder.status }}</span>
                    </div>
                </div>
                <div>
                    <select  @change="changeStatus($event.target.value, currOrder)">
                        <option value="Completed">Completed</option>
                        <option value="Progress">Progress</option>
                        <option value="Rejected">Rejected</option>
                    </select>
                </div>
               
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
            if (str === 'Progress') return 'Progress'
            if (str === 'Rejected') return 'rejected'
        },
        // toggleSet() {
        //     console.log('hey');
        //     this.setOpen = !this.setOpen
        // },
        changeStatus(status, currOrder) {
            console.log('currOrder',currOrder);
              this.$emit('change', { status, currOrder })
            // this.toggleSet()
        },
    },
}
</script>

