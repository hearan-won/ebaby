import BuyerList from "./buyer-list";
import BuyerFormEditor from "./buyer-form-editor";
const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <a href="../seller/index.html"> Seller </a> |
            <a href="../inventory/index.html"> Inventory </a> |
            <a href="../orders/index.html"> Orders </a> |
            <a href="../product/index.html"> Products </a> |
            <HashRouter>
                <Route path={["/buyers", "/"]} exact={true}>
                    <BuyerList/>
                </Route>
                <Route path="/buyers/:id" exact={true}>
                    <BuyerFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
