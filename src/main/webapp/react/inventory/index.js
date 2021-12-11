import InventoryList from "./inventory-list";
import InventoryFormEditor from "./inventory-form-editor";
import InventoryProductList from "../product/Inventory-product-list";
import ProductList from "../product/product-list";
const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">

            <HashRouter>
                <Route path={["/inventorys", "/", "/inventorys/seller/:id"]} exact={true}>
                    <InventoryList/>
                </Route>

                <Route path="/inventorys/:id" exact={true}>
                    <InventoryFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
