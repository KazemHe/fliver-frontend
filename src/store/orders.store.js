import { orderService } from '../services/order.service.local'


export const ordersStore = {
    state: {
        orders:[],
    },
    getters: {},
    mutations: {
        saveOrder(state, { order }) {
            console.log('order', order);
            
            const idx = state.orders.findIndex(o => o._id === order._id)
            if (idx !== -1) {
              state.orders.splice(idx, 1, order)
              return
            }
            state.orders.unshift(order)
          },
    },

    actions: {
        async saveOrder(context, { order }) {
            console.log('order', {order});
            
            try {
                order = await orderService.save(order);
                context.commit({ type: 'saveOrder', order })
                return order
            } catch (err) {
                console.log('orderStore: Error in addOrder', err)
                throw err
            }
        }
    }
}