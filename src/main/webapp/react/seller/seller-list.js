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
            <h4>Seller information</h4><br/>
            <ul className="list-group">

                <table width="100%">
                    <tr>
                        <th>Seller Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>User Name</th>
                        <th>See Inventory</th>
                    </tr>
                    {sellers.map(seller => <tr>
                                    <td>{seller.id}</td>
                                    <td>{seller.firstName}</td>
                                    <td>{seller.lastName}</td>
                                    <td>{seller.personName}</td>
                                    <td><a href={`http://localhost:63342/ebaby/spring-template/src/main/webapp/react/inventory/index.html#/inventorys/seller/${seller.id}`}><button className="wd-btn-primary"> See Inventory</button></a></td>
                        <td><Link to={`/sellers/${seller.id}`}><button className="wd-btn-primary">Edit Seller</button></Link></td>
                                </tr>
                    )}
                </table>
                {
                    // sellers.map(seller =>
                    //     <li className="list-group-item wd-buyer-bg"
                    //         key={seller.id}>
                    //         <div className="row">
                    //             <div className="col">
                    //                 <Link to={`/sellers/${seller.id}`}>
                    //                     <label>Seller information</label><br/>
                    //                     <label>First Name: {seller.firstName} </label><br/>
                    //                     <label>Last Name: {seller.lastName}</label><br/>
                    //                     <label>User Name: {seller.personName}</label>
                    //                 </Link>
                    //             </div>
                    //             <div className="col">
                    //                 <button className="wd-btn-primary">
                    //                     Inventory
                    //                 </button>
                    //             </div>
                    //         </div>
                    //     </li>
                    // )
                }
            </ul>
        </div>
    )
}

export default SellerList;