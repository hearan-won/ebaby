import ProductList from "./product-list";
import ProductFormEditor from "./product-form-editor";
const {HashRouter, Route} = window.ReactRouterDOM;
const App = () => {
    return (
        <div className="container-fluid">

            <HashRouter>
                <Route path={["/products/", "/", "/products/inventory/:id"]} exact={true}>
                    <ProductList/>
                </Route>
                {/*<Route path={["/products/inventory/:id"]} exact={true}>*/}
                {/*    <InventoryProductList/>*/}
                {/*</Route>*/}

                <Route path="/products/:id" exact={true}>
                    <ProductFormEditor/>
                </Route>

            </HashRouter>
        </div>
    );
}

export default App;
