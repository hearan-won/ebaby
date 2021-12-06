import SellerList from "./seller-list";
import SellerFormEditor from "./seller-form-editor";
const {HashRouter, Route} = window.ReactRouterDOM;
const App = () => {
    return (
        <div className="container-fluid">
            <a href="../buyer/index.html"> Buyer </a> |
            <a href="../inventory/index.html"> Inventory </a> |
            <a href="../orders/index.html"> Orders </a> |
            <a href="../product/index.html"> Products </a> |
            <HashRouter>
                <Route path={["/sellers", "/"]} exact={true}>
                    <SellerList/>
                </Route>
                <Route path="/sellers/:id" exact={true}>
                    <SellerFormEditor/>
                </Route>
            </HashRouter>

        </div>
    )
}

export default App;