import sellerService from "./seller-service";
const {Link, useHistory} = window.ReactRouterDOM;
const {useState, useEffect} = React;

const SellerList = () => {
    const history = useHistory();
    const [sellers, setSellers] = useState([]);
    useEffect(() => {
        sellerService.findAllSellers().then(sellers => setSellers(sellers));
    }, []);

    return (
        <div>
            <h2>Seller List</h2>
            <button className="btn btn-success"
                    onClick={() => history.push("/sellers/new")}>
                Add Seller
            </button>

            <ul className="list-group">
                {
                    sellers.map(seller =>
                        <li className="list-group-item"
                            key={seller.id}>
                            <Link to={`/sellers/${seller.id}`}>
                                <label>Seller information</label><br/>
                                <label>First Name: {seller.firstName} </label><br/>
                                <label>Last Name: {seller.lastName}</label><br/>
                                <label>User Name: {seller.personName}</label>
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default SellerList;