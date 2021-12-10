// Declare URL where server listens for HTTP requests
const TRANSACTION_URL = "http://localhost:8000/api/transactions"
const SELLERS_URL = "http://localhost:8000/api/sellers"
// Retrieve all transactions from the server
export const findAllTransactions = () =>
    fetch(TRANSACTION_URL)
        .then(response => response.json());

// Retrieve a single transaction by their ID
export const findTransactionById = (id) =>
    fetch(`${TRANSACTION_URL}/${id}`)
        .then(response => response.json())


// Retrieve a single user by their ID
export const findSellerById = (id) =>
    //console.log(`${SELLERS_URL}/${id}`);

fetch(`${SELLERS_URL}/${id}`)
    .then(response => response.json())


// Delete a transaction by their ID
export const deleteTransaction = (id) =>
    fetch(`${TRANSACTION_URL}/${id}`, {
        method: "DELETE"
    })

// Create a new transaction
export const createTransaction = (transaction) =>
    fetch(TRANSACTION_URL, {
        method: 'POST',
        body: JSON.stringify(transaction),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

// Update a transaction by their ID
export const updateTransaction = (id, transaction) =>
    fetch(`${TRANSACTION_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(transaction),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

// Export all functions as the API to this service
export default {
    findAllTransactions,
    findTransactionById,
    deleteTransaction,
    createTransaction,
    updateTransaction,
    findSellerById
}