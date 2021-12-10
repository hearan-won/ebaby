// Declare URL where server listens for HTTP requests
const PRODUCT_URL = "http://localhost:8000/api/products"


// Retrieve all products from the server
export const findProductsByInventoryId = (id) =>
    fetch(`${PRODUCT_URL}/find/inventory/${id}`)
        .then(response => response.json());


// Retrieve all products from the server
export const findAllProducts = () =>
    fetch(PRODUCT_URL)
        .then(response => response.json());

// Retrieve a single product by their ID
export const findProductById = (id) =>
    fetch(`${PRODUCT_URL}/${id}`)
        .then(response => response.json())


// Delete a product by their ID
export const deleteProduct = (id) =>
    fetch(`${PRODUCT_URL}/${id}`, {
        method: "DELETE"
    })


// Create a new product
export const createProduct = (product) =>
    fetch(PRODUCT_URL, {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

// Update a user by their ID
export const updateProduct = (id, product) =>
    fetch(`${PRODUCT_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(product),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

// Export all functions as the API to this service
export default {
    findProductsByInventoryId,
    findAllProducts,
    findProductById,
    deleteProduct,
    createProduct,
    updateProduct
}