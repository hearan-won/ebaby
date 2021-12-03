const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const InlineBuyerEditor = ({buyer, deleteBuyer, updateBuyer}) => {
    const [buyerCopy, setBuyerCopy] = useState(buyer)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={buyerCopy.firstName}
                            onChange={(e)=>setBuyerCopy(buyerCopy => ({...buyerCopy, firstName: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={buyerCopy.lastName}
                            onChange={(e)=>setBuyerCopy(buyerCopy => ({...buyerCopy, lastName: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={buyerCopy.username}
                            onChange={(e)=>setBuyerCopy(buyerCopy => ({...buyerCopy, username: e.target.value}))}/>
                    </div>
                    <div className="col-1">
                        <Link to={`/buyers/${buyerCopy.id}/blogs`}>
                            Blogs
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateBuyer(buyerCopy.id, buyerCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
    onClick={() => setEditing(false)}/>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
    onClick={() => deleteBuyer(buyer.id)}/>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/buyers/${buyerCopy.id}`}>
                            {buyerCopy.firstName}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/buyers/${buyerCopy.id}`}>
                            {buyerCopy.lastName}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/buyers/${buyerCopy.id}`}>
                            {buyerCopy.username}
                        </Link>
                    </div>
                    <div className="col-1">
                        <Link to={`/buyers/${buyerCopy.id}/blogs`}>
                            Blogs
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-cog fa-2x float-right"
                           onClick={() => setEditing(true)}></i>
                    </div>
                </div>
            }
        </div>
    )
}

export default InlineBuyerEditor;