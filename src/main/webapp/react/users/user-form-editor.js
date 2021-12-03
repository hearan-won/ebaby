import userService from "./user-service"

const {useState, useEffect} = React;
const {useParams} = window.ReactRouterDOM;

const UserFormEditor = () => {
    const {id} = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        if (id !== "new") {
            findUserById(id);
        }
    }, []);

    const goBack = () => {
        history.back();
    }

    const updateUser = (id, newUser) =>
        userService.updateUser(id, newUser)
            .then(() => {goBack()});


    const createUser = (user) =>
        userService.createUser(user)
            .then(() => {
                goBack()
            });

    const findUserById = (id) =>
        userService.findUserById(id)
            .then(user => setUser(user));

    const deleteUser = (id) =>
        userService.deleteUser(id)
            .then(() => {
                goBack()
            });
    return (
        <div>
            <h2>User Editor</h2>
            <label>id</label>
            <input value={user.id}/><br/>
            <label>First Name</label>
            <input value={user.firstName}
                   onChange={(e) =>
                       setUser(user =>
                           ({...user, firstName: e.target.value}))}
            /><br/>
            <label>Last Name</label>
            <input value={user.lastName}
                   onChange={(e) =>
                       setUser(user =>
                           ({...user, lastName: e.target.value}))}/><br/>
            <label>Username</label>
            <input value={user.username}
                   onChange={(e) =>
                       setUser(user =>
                           ({...user, username: e.target.value}))}/><br/>
            <label>Password</label>
            <input value={user.password}
                   onChange={(e) =>
                       setUser(user =>
                           ({...user, password: e.target.value}))}/><br/>
            <button className="btn btn-warning"
                    onClick={() => {
                        goBack()
                    }}>
                Cancel
            </button>

            <button className="btn btn-danger"
                    onClick={() => deleteUser(user.id)}>
                Delete
            </button>

            <button className="btn btn-primary"
                    onClick={() => updateUser(user.id, user)}>
                Save
            </button>

            <button className="btn btn-success"
                    onClick={() => createUser(user)}>
                Create
            </button>

        </div>
    );
}

export default UserFormEditor;