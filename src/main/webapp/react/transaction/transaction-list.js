import transactionService from "./transaction-service";
import sellerService from '../seller/seller-service'
import TransactionsBySID from "./TransactionsBySID";
import * as constants from "constants";

const {Link, useHistory} = window.ReactRouterDOM;
const {useState, useEffect} = React;

const TransactionList = () => {
    const history = useHistory();
    const [transactions, setTransactions] = useState([]);
    useEffect(() => {
        transactionService.findAllTransactions().then(transactions => setTransactions(transactions));
    }, []);

    const [render, setRender] = useState(true)
    const [localSeller, setLocalSeller] = useState({})
    const handleSellerClick = (id) => {
        // transactionService.findSellerById(id).then((seller) => {
        //     setRender(!render);
        //     setLocalSeller(seller);
        // }).then(() => window.location.reload());

        history.push(`/sellers/${id}`);
        //window.location.reload()
    }

    return (
        <div>
            <h2>Transactions List</h2>
            <button className="btn btn-success"
                    onClick={() => history.push("/transactions/new")}>
                Add Transaction
            </button>
            <h4>Transactions Information</h4><br/>
            <ul className="list-group">
                <table width="100%">
                    <tr>
                        <th>Transaction Id</th>
                        <th>Buyer Id</th>
                        <th>Seller Id</th>
                        <th>Transaction Date</th>
                        <th>Transaction Amount</th>
                    </tr>
                    {transactions.map(transaction => <tr>
                            <td>{transaction.id}</td>
                            <td><h5>{transaction.buyerId}</h5></td>
                            <td><h5 onClick={() => {
                                console.log("Clicking on ", transaction.sellerId)
                                handleSellerClick(transaction.sellerId)
                                //history.push(`/sellers/${transaction.sellerId}`);
                            }}>{transaction.sellerId}</h5></td>

                            <td>{transaction.transactionDate}</td>
                            <td>{transaction.amount}</td>

                        </tr>
                    )}
                </table>
                {/*{*/}
                {/*    render ? <TransactionsBySID seller={localSeller}/> : <></>*/}
                {/*}*/}
                {
                    // transactions.map(transaction =>
                    //                  <li className="list-group-item wd-buyer-bg"
                    //                      key={transaction.id}>
                    //                      <Link to={`/transactions/${transaction.id}`}>
                    //                          <label>Transaction Id:  {transaction.id} </label><br/>
                    //                          {/*<label>Buyer Id:  {transaction.buyerId} </label><br/>*/}
                    //                          <label>Seller Id: {transaction.sellerId}</label><br/>
                    //                          <label>Transaction Date: {transaction.transactionDate} </label><br/>
                    //                          <label>Transaction Amount: {transaction.amount}</label>
                    //                      </Link>
                    //                  </li>
                    // )
                }
            </ul>
        </div>
    );
}
// <Link to={`/sellers/${transaction.sellerId}`}> </Link>

export default TransactionList;