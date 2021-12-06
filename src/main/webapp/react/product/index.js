import ProductList from "./product-list";
import ProductFormEditor from "./product-form-editor";
const {HashRouter, Route} = window.ReactRouterDOM;
const App = () => {
    return (
        <div className="container-fluid">
            <a href="../seller/index.html"> Seller </a> |
            <a href="../buyer/index.html"> Buyer </a> |
            <a href="../orders/index.html"> Orders </a> |
            <a href="../inventory/index.html"> Inventory </a> |
            <HashRouter>
                <Route path={["/products", "/"]} exact={true}>
                    <ProductList/>
                </Route>
                <Route path="/products/:id" exact={true}>
                    <ProductFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
