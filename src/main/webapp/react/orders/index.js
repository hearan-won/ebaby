import OrderList from "./order-list";
import OrderFormEditor from "./order-form-editor";

const {HashRouter, Route} = window.ReactRouterDOM; 

const App = () => {
    return (
        <div className="container-fluid">

            <HashRouter>
                <Route path={["/orders", "/", "/orders/buyer/:id"]} exact={true}>
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
