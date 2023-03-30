
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

const STORAGE_KEY = 'order'

export const orderService = {
    query,
    getById,
    save,
    remove,
    getEmptyOrder,
    addOrderMsg
}
window.cs = orderService


async function query(filterBy = { txt: '', price: 0 }) {
    // var orders = await storageService.query(STORAGE_KEY)
    // // if (filterBy.txt) {
    // //     const regex = new RegExp(filterBy.txt, 'i')
    // //     orders = orders.filter(order => regex.test(order.title) || regex.test(order.description))
    // // }
    // // if (filterBy.price) {
    // //     orders = orders.filter(order => order.price <= filterBy.price)
    // // }
    // return orders

    return httpService.get(STORAGE_KEY, filterBy)
}

function getById(orderId) {
    // return storageService.get(STORAGE_KEY, orderId)
    return httpService.get(`order/${orderId}`)
}

async function remove(orderId) {
    // await storageService.remove(STORAGE_KEY, orderId)
    return httpService.delete(`order/${orderId}`)

}

async function save(order) {
    // console.log(order);
    // var savedOrder
    // if (order._id) {
    //     savedOrder = await storageService.put(STORAGE_KEY, order)
    // } else {
    //     // Later, owner is set by the backend
    //     // order.owner = userService.getLoggedinUser()
    //     savedOrder = await storageService.post(STORAGE_KEY, order)
    // }
    // return savedOrder




    var savedOrder
    if (order._id) {
        // savedOrder = await storageService.put(STORAGE_KEY, order)
        savedOrder = await httpService.put(`order/${order._id}`, order)

    } else {
        // Later, owner is set by the backend
        order.owner = userService.getLoggedinUser()
        // savedOrder = await storageService.post(STORAGE_KEY, order)
        savedOrder = await httpService.post('order', order)
    }
    return savedOrder




    
}

async function addOrderMsg(orderId, txt) {
    // Later, this is all done by the backend
    const order = await getById(orderId)
    if (!order.msgs) order.msgs = []

    const msg = {
        id: utilService.makeId(),
        by: userService.getLoggedinUser(),
        txt
    }
    order.msgs.push(msg)
    await storageService.put(STORAGE_KEY, order)

    return msg
}

function getEmptyOrder() {
    return {
        buyer: '',
        seller: '',
    }
}


// TEST DATA
// ; (async () => {
//     await storageService.post(STORAGE_KEY, { buyer: 'mini user', seller: 'mini user' })
//     await storageService.post(STORAGE_KEY, { buyer: 'mini user', seller: 'mini user' })
// })()
