import { useState, useEffect } from 'react';
import { getUsers, deleteUser } from '../Service/api';
import { Link } from 'react-router-dom';
import '../../src/App.css'

const AllUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, []);

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    }


    return (
        <div>
            <h2>List Of All Users</h2>
            <div className="mainTable">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((obj) => {
                                return (
                                    <tr key={obj.id}>
                                        <td>{obj._id}</td>
                                        <td>{obj.name}</td>
                                        <td>{obj.username}</td>
                                        <td>{obj.email}</td>
                                        <td>{obj.phone.toString()}</td>
                                        <td className='actionsBtns'>
                                            <button className='editBtn' component={Link} to={`/edit/${obj._id}`}>Edit</button>
                                            <button className='deleteBtn' onClick={() => deleteUserData(obj._id)}>Delete</button>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllUsers;