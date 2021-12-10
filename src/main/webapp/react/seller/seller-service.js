// Declare URL where server listens for HTTP requests
const SELLERS_URL = "http://localhost:8000/api/sellers"

// Retrieve all users from the server
export const findAllSellers = () =>
    fetch(SELLERS_URL)
        .then(response => response.json());

// Retrieve a single user by their ID
export const findSellerById = (id) =>
    //console.log(`${SELLERS_URL}/${id}`);

    fetch(`${SELLERS_URL}/${id}`)
        .then(response => response.json())

// Delete a user by their ID
export const deleteSeller = (id) =>
    fetch(`${SELLERS_URL}/${id}`, {
        method: "DELETE"
    })

// Create a new seller
export const createSeller = (seller) =>
    fetch(SELLERS_URL, {
        method: 'POST',
        body: JSON.stringify(seller),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

// Update a user by their ID
export const updateSeller = (id, seller) =>
    fetch(`${SELLERS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(seller),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

// Export all functions as the API to this service
export default {
    findAllSellers,
    findSellerById,
    deleteSeller,
    createSeller,
    updateSeller
}