// Declare URL where server listens for HTTP requests
const BUYERS_URL = "http://localhost:8000/api/buyers"

// Retrieve all users from the server
export const findAllBuyers = () =>
    fetch(BUYERS_URL)
        .then(response => response.json());

// Retrieve a single user by their ID
export const findBuyerById = (id) =>
    fetch(`${BUYERS_URL}/${id}`)
        .then(response => response.json())


// Delete a user by their ID
export const deleteBuyer = (id) =>
    fetch(`${BUYERS_URL}/${id}`, {
        method: "DELETE"
    })


// Create a new buyer
export const createBuyer = (buyer) =>
    fetch(BUYERS_URL, {
        method: 'POST',
        body: JSON.stringify(buyer),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

// Update a user by their ID
export const updateBuyer = (id, buyer) =>
    fetch(`${BUYERS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(buyer),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

// Export all functions as the API to this service
export default {
    findAllBuyers,
    findBuyerById,
    deleteBuyer,
    createBuyer,
    updateBuyer
}