import InventoryList from "./order-list";
import InventoryFormEditor from "./order-form-editor";
const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/orders", "/"]} exact={true}>
                    <InventoryList/>
                </Route>
                <Route path="/orders/:id" exact={true}>
                    <InventoryFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
