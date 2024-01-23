import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getUsers, editUser } from '../Service/api';

const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, username, email, phone } = user;
    const { id } = useParams();

    let navigate = useNavigate();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async () => {
        const response = await getUsers(id);
        setUser(response.data);
    }

    const editUserDetails = async () => {
        const response = await editUser(id, user);
        navigate('/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <h2>Edit User</h2>
            <div className='mainForm'>
                <div className='labelInput'>
                    <label htmlFor="my-input">Name : </label>
                    <input type="text" name="name" value={name} id='my-input' onChange={(e) => onValueChange(e)} />
                </div>
                <div className='labelInput'>
                    <label htmlFor="my-input">Technology : </label>
                    <input type="text" name="username" value={username} id='my-input' onChange={(e) => onValueChange(e)} />
                </div>
                <div className='labelInput'>
                    <label htmlFor="my-input">Email : </label>
                    <input type="text" name="email" value={email} id='my-input' onChange={(e) => onValueChange(e)} />
                </div>
                <div className='labelInput'>
                    <label htmlFor="my-input">Phone : </label>
                    <input type="text" name="phone" value={phone} id='my-input' onChange={(e) => onValueChange(e)} />
                </div>
                <div className="submitBtn">
                    <button className='btnSubmit' onClick={() => editUserDetails()}>Update</button>
                </div>
            </div>
        </div>
    )
}

export default EditUser;