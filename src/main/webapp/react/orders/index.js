import OrderList from "./order-list";
import OrderFormEditor from "./order-form-editor";
import OrdersList from "./orders-list";
const {HashRouter, Route} = window.ReactRouterDOM;

const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/orders", "/"]} exact={true}>
                    <OrdersList/>
                </Route>
                <Route path="/orders/:id" exact={true}>
                    <OrderFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;