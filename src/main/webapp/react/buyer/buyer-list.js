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

            <ul className="list-group">
                {
                    buyers.map(buyer =>
                        <li className="list-group-item"
                            key={buyer.id}>
                            <Link to={`/buyers/${buyer.id}`}>
                                <label>Buyer information</label><br/>
                                <label>First Name: {buyer.firstName} </label><br/>
                                <label>Last Name: {buyer.lastName}</label><br/>
                                <label>User Name: {buyer.personName}</label>
                            </Link>
                        </li>
                    )
                } :
            </ul>
        </div>
    );
}

export default BuyerList;