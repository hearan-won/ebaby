import InventoryList from "./inventory-list";
import InventoryFormEditor from "./inventory-form-editor";
const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
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
