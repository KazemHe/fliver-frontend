<template>
    
    <section>
        <div class="table-entity flex">
            <div class="buyer-col flex column align-center user-col">
              
                <p class="regular">{{ order.buyer.fullname }}</p>
            </div>
            <div class="gig-col flex column">
                <span class="table-span regular">{{ order.gig.name }}</span>
            </div>

            <div class="due-on-col flex column">
                <span class="table-span regular">
                    {{ new Date(order.createdAt).toLocaleDateString() }}
                </span>
            </div>

            <div class="total-col flex column">
                
                    <span class="table-span regular">US${{ order.gig.price }}</span>
                </div>
                <div class="flex column">

                <div @click="toggleSet()" class="status-col flex column">
                    <div class="status flex" :class="className(order.status)">
                        <span class="regular">{{ order.status }}</span>
                    </div>
                </div>
                <div>
                    <select class="status-select"  @change="changeStatus($event.target.value, order)">
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

        changeStatus(status, order) {
            console.log('order',status, order);
            event.stopPropagation()
              this.$emit('change', status, order)
            // this.toggleSet()
        },
    },
}
</script>

