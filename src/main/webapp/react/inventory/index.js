import InventoryList from "./inventory-list";
import InventoryFormEditor from "./inventory-form-editor";
const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <a href="../buyer/index.html"> Buyer </a> |
            <a href="../orders/index.html"> Orders </a> |
            <a href="../product/index.html"> Products </a> |
            <HashRouter>
                <Route path={["/inventorys", "/"]} exact={true}>
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
