<template>
    <VDropdown>
        <div @click="toggleSet()" class="status-col flex column">
            <div class="status flex" :class="className(order.status)">
                <span class="regular">{{ order.status }}</span>
            </div>
        </div>
        <template #popper>
            <div class="dash-options">
                <button @click="changeStatus('Completed', order)" class="completed">Completed</button>
                <button @click="changeStatus('Progress', order)" class="Progress">Progress</button>
                <button @click="changeStatus('Rejected', order)" class="rejected">Rejected</button>
            </div>

        </template>
    </VDropdown>
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
            console.log('order', status, order);
            event.stopPropagation()
            this.$emit('change', status, order)
            // this.toggleSet()
        },
    },
}
</script>

<style>
.dash-options {
    display: flex;
    flex-direction: column;
    padding: .5em;
}

.pending {
    background-color: #62646a;
}

.Progress {
    background-color: #ffbe5b;
}

.completed {
    background-color: #1dbf73;
}

.rejected {
    background-color: #c43333;
}
</style>