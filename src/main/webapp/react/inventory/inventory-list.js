import inventoryService from "./inventory-service";
const {Link, useHistory} = window.ReactRouterDOM;
const {useState, useEffect} = React;

const InventoryList = () => {
    const history = useHistory();
    const [inventorys, setInventorys] = useState([]);
    useEffect(() => {
        inventoryService.findAllInventorys().then(inventorys => setInventorys(inventorys));
    }, []);

    return (
        <div>
            <h2>Inventory List</h2>
            <button className="btn btn-success"
                    onClick={() => history.push("/inventorys/new")}>
                Add Inventory
            </button>
            <h4>Inventory information</h4><br/>
            <ul className="list-group">

                    <table width="100%">
                        <tr>
                            <th>Inventory Id</th>
                            <th>Seller Id</th>
                            <th>Location</th>
                            <th>See Products</th>
                        </tr>
                        {inventorys.map(inventory => <tr>
                                        <td>{inventory.id}</td>
                                        <td>{inventory.sellerId}</td>
                                        <td>{inventory.location}</td>
                                        <td><button className="wd-btn-primary">Products</button></td>
                                    </tr>
                        )}
                    </table>
                    {/*// inventorys.map(inventory =>*/}
                    {/*//     <li className="list-group-item wd-buyer-bg"*/}
                    {/*//         key={inventory.id}>*/}
                    {/*//         <div className="row">*/}
                    {/*//             <div className="col">*/}
                    {/*//         <Link to={`/inventorys/${inventory.id}`}>*/}
                    {/*//             <label>Inventory  {inventory.id} </label><br/>*/}
                    {/*//             <label>Seller id: {inventory.sellerId}</label><br/>*/}
                    {/*//             <label>Company location: {inventory.location}</label>*/}
                    {/*//         </Link>*/}
                    {/*//             </div>*/}
                    {/*//             <div className="col">*/}
                    {/*//                 <button className="wd-btn-primary">*/}
                    {/*//                     Products*/}
                    {/*//                 </button>*/}
                    {/*//             </div>*/}
                    {/*//         </div>*/}
                    {/*//     </li>*/}
                    {/*// )*/}

            </ul>
        </div>
    );
}

export default InventoryList;