import TransactionList from "./transaction-list";
import TransactionFormEditor from "./transaction-form-editor";
import SellerFormEditor from "../seller/seller-form-editor";
const {HashRouter, Route} = window.ReactRouterDOM;
const App = () => {
    return (
        <div className="container-fluid">
            <a href="../seller/index.html"> Seller </a> |
            <a href="../buyer/index.html"> Buyer </a> |
            <a href="../orders/index.html"> Orders </a> |
            <a href="../inventory/index.html"> Inventory </a> |
            <a href="../product/index.html"> Products </a>
            <HashRouter>
                <Route path={["/transactions", "/"]} exact={true}>
                    <TransactionList/>
                </Route>
                <Route path="/transactions/:id" exact={true}>
                    <TransactionFormEditor/>
                </Route>
                <Route path="/sellers/:id" exact={true}>
                    <SellerFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
