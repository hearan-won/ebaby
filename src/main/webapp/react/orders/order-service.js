// Declare URL where server listens for HTTP requests
const ORDER_URL = "http://localhost:8000/api/orders"

// Retrieve all users from the server
export const findAllOrders = () =>
    fetch(ORDER_URL)
        .then(response => response.json());

// Retrieve a single user by their ID
export const findOrderById = (id) =>
    fetch(`${ORDER_URL}/${id}`)
        .then(response => response.json())


// Delete a user by their ID
export const deleteOrder = (id) =>
    fetch(`${ORDER_URL}/${id}`, {
        method: "DELETE"
    })


// Create a new order
export const createOrder = (order) =>
    fetch(ORDER_URL, {
        method: 'POST',
        body: JSON.stringify(order),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

// Update a user by their ID
export const updateOrder = (id, order) =>
    fetch(`${ORDER_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(order),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

// Export all functions as the API to this service
export default {
    findAllOrders,
    findOrderById,
    deleteOrder,
    createOrder,
    updateOrder
}