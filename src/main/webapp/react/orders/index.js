import OrderList from "./order-list";
import OrderFormEditor from "./order-form-editor";

const {HashRouter, Route} = window.ReactRouterDOM; 

const App = () => {
    return (
        <div className="container-fluid">
            <a href="../buyer/index.html"> Buyer </a> |
            <a href="../inventory/index.html"> Inventory </a> |
            <a href="../product/index.html"> Products </a> |
            <HashRouter>
                <Route path={["/orders", "/"]} exact={true}>
                    <OrderList/>
                </Route>
                <Route path="/orders/:id" exact={true}>
                    <OrderFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
