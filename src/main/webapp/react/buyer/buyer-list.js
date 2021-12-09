import buyerService from "./buyer-service";

const {Link, useHistory} = window.ReactRouterDOM;
const {useState, useEffect} = React;

const BuyerList = () => {
    const history = useHistory();
    const [buyers, setBuyers] = useState([]);
    useEffect(() => {
        buyerService.findAllBuyers().then(buyers => setBuyers(buyers));
    }, []);

    return (
        <div>
            <h2>Buyer List</h2>

            <button className="btn btn-success"
                    onClick={() => history.push("/buyers/new")}>
                Add Buyer
            </button>
            <h4>Buyer information</h4><br/>
            <ul className="list-group">
                    <table width="100%">
                        <tr>
                            <th>Buyer Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>User Name</th>
                            <th>See Orders</th>
                        </tr>
                        {buyers.map(buyer => <tr>
                            <td>{buyer.id}</td>
                            <td>{buyer.firstName}</td>
                            <td>{buyer.lastName}</td>
                            <td>{buyer.personName}</td>
                            <td><button className="wd-btn-primary">Orders</button></td>
                        </tr>
                        )}
                    </table>
                    {/*buyers.map(buyer =>*/}
                    {/*    <li className="list-group-item wd-buyer-bg"*/}
                    {/*        key={buyer.id}>*/}
                    {/*        <div className="row">*/}
                    {/*            <div className="col">*/}
                    {/*                    <tr>*/}
                    {/*                        <td>{buyer.id}</td>*/}
                    {/*                        <td>{buyer.firstName}</td>*/}
                    {/*                        <td>{buyer.lastName}</td>*/}
                    {/*                        <td>{buyer.personName}</td>*/}
                    {/*                    </tr>*/}
                    {/*                /!*<Link to={`/buyers/${buyer.id}`}>*!/*/}
                    {/*                /!*    <label>First Name: {buyer.firstName} </label><br/>*!/*/}
                    {/*                /!*    <label>Last Name: {buyer.lastName}</label><br/>*!/*/}
                    {/*                /!*    <label>User Name: {buyer.personName}</label>*!/*/}
                    {/*                /!*</Link>*!/*/}
                    {/*            </div>*/}
                    {/*
                    {/*        </div>*/}
                    {/*    </li>*/}
                    {/*)*/}
                    {/*</table>*/}

            </ul>
        </div>
    );
}

export default BuyerList;