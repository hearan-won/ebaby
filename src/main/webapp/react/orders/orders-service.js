// Declare URL where server listens for HTTP requests

const ORDERS_URL = "http://localhost:8080/api/orders"

export const findAllOrders = () =>
    fetch(ORDERS_URL)
        .then(response => response.json())

// Retrieve a single order by its ID
export const findOrdersById = (id) =>
    fetch(`${ORDERS_URL}/${id}`)
        .then(response => response.json())


// Delete an order by its ID
export const deleteOrders = (id) =>
    fetch(`${ORDERS_URL}/${id}`, {
        method: "DELETE"
    })

// Create a new Order
export const createOrders = (order) =>
    fetch(ORDERS_URL, {
        method: 'POST',
        body: JSON.stringify(order),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

// Update a order by their ID
export const updateOrders = (id, order) =>
    fetch(`${ORDERS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(order),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


export default {
    findAllOrders,
    findOrdersById,
    deleteOrders,
    createOrders,
    updateOrders
}

