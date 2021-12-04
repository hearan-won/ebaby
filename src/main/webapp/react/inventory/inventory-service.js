// Declare URL where server listens for HTTP requests
const INVENTORY_URL = "http://localhost:8090/api/inventorys"

// Retrieve all users from the server
export const findAllInventorys = () =>
    fetch(INVENTORY_URL)
        .then(response => response.json());

// Retrieve a single user by their ID
export const findInventoryById = (id) =>
    fetch(`${INVENTORY_URL}/${id}`)
        .then(response => response.json())


// Delete a user by their ID
export const deleteInventory = (id) =>
    fetch(`${INVENTORY_URL}/${id}`, {
        method: "DELETE"
    })


// Create a new inventory
export const createInventory = (inventory) =>
    fetch(INVENTORY_URL, {
        method: 'POST',
        body: JSON.stringify(inventory),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

// Update a user by their ID
export const updateInventory = (id, inventory) =>
    fetch(`${INVENTORY_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(inventory),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

// Export all functions as the API to this service
export default {
    findAllInventorys,
    findInventoryById,
    deleteInventory,
    createInventory,
    updateInventory
}