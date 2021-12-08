import BuyerList from "./buyer-list";
import BuyerFormEditor from "./buyer-form-editor";
const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">

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
