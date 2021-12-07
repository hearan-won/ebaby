import transactionService from "./transaction-service"

const {useState, useEffect} = React;
const {useParams} = window.ReactRouterDOM;

const TransactionFormEditor = () => {
    const {id} = useParams();
    //const [inventoryId, setInventoryId] = useState({});
    const [transaction, setTransaction] = useState({});
    useEffect(() => {
        if (id !== "new") {
            findTransactionById(id);
        }
    }, []);

    const goBack = () => {
        history.back();
    }

    const updateTransaction = (id, transaction) => {
        transactionService.updateTransaction(id, transaction)
            .then(() => {
                goBack()
            });
    }


    const createTransaction = (transaction) =>
        transactionService.createProduct(transaction)
            .then(() => {
                goBack()
            });

    const findTransactionById = (id) =>
        transactionService.findTransactionById(id)
            .then(transaction => {
                setTransaction(transaction)
            });

    const deleteTransaction = (id) =>
        transactionService.deleteTransaction(id)
            .then(() => {
                goBack()
            });

    return (
        <div>

            <h2>Transaction Editor</h2>
            <label>Transaction Id:</label>
            <input value={transaction.id}/><br/>
            <label>Buyer Id: </label>
            <input value = {transaction.buyerId}/><br/>
            <label>Seller Id: </label>
            <input value = {transaction.sellerId}/><br/>
            <label>Transaction Date: </label>
            <input type = "date" value={transaction.transactionDate}
                   onChange={(e) =>
                       setTransaction(transaction =>
                                      ({...transaction, transactionDate: e.target.value}))}
            /><br/>
            <label>Transaction Amount: </label>
            <input value={transaction.amount}
                   onChange={(e) =>
                       setTransaction(transaction =>
                                      ({...transaction, amount: e.target.value}))}
            /><br/>

            <button className="btn btn-warning"
                    onClick={() => {
                        goBack()
                    }}>
                Cancel
            </button>

            <button className="btn btn-danger"
                    onClick={() => deleteTransaction(transaction.id)}>
                Delete
            </button>

            <button className="btn btn-primary"
                    onClick={() => updateTransaction(transaction.id, transaction)}>
                Update
            </button>

            <button className="btn btn-success"
                    onClick={() => createTransaction(transaction)}>
                Create
            </button>

        </div>
    );
}

export default TransactionFormEditor;