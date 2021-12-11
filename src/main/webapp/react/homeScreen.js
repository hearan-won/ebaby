const App = () => {
    return (
       <div className="wd-body">
           <h1 className="container-fluid text-center">Welcome to eBaby</h1>
           <div className="container-fluid text-center">
               <h3>Welcome! Are you a buyer or seller?</h3>
               <button className="wd-btn-primary"><a href="./buyer/index.html"> Buyer </a> </button>
               <button className="wd-btn-primary"><a href="./seller/index.html"> Seller </a> </button>
               <button className="wd-btn-primary"><a href="./transaction/index.html"> Admin </a> </button>
           </div>
           <br/>
           <br/>
           <br/>

           <div className="container-fluid">
               <p>
                   <h3>A brief description of the relationships</h3>
                   <ul>
                       <li>
                           Seller to Inventory : Each seller has a big inventory. So the Seller table and the Inventory table
                           have a One-to-One relationship.
                       </li>
                       <li>
                           Inventory to Products : Each inventory of a seller has many products. So the Inventory table and the
                           Products table have a One-to-Many relationship (aggregation -> if seller
                           deletes inventory, all products should disappear)
                       </li>
                       <li>
                           Buyer to Orders : Each buyer can have multiple orders on eBaby. So the Buyer table and the
                           Orders table have a One-to-Many relationship
                       </li>
                       <li>
                           Buyer to Seller : Mapped by the Transaction table. A Buyer can purchase items from many sellers, and a Seller can sell to many
                           buyers -> linked through Orders table.
                           <ul>
                               <li>
                                   Buyer to Transaction (1: Many)
                               </li>
                               <li>
                                   Seller: Transaction (1: Many)
                               </li>
                           </ul>
                       </li>
                       <li>
                           People table : Buyer and Seller inherit from people table
                       </li>
                   </ul>
               </p>
           </div>
       </div>
    )
}

export default App;