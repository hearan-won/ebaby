import SellerList from "./seller-list";
import SellerFormEditor from "./seller-form-editor";
const {HashRouter, Route} = window.ReactRouterDOM;
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/sellers", "/"]} exact={true}>
                    <SellerList/>
                </Route>
                <Route path="/sellers/:id">
                    <SellerFormEditor/>
                </Route>
            </HashRouter>

        </div>
    )
}

export default App;