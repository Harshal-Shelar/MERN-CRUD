import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../Service/api';

const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: '',
}

const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, username, email, phone } = user;

    let navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const addUserDetails = async () => {
        await addUser(user);
        navigate('/all');
    }

    return (
        <div>
            <h2>Add New User</h2>
            <div className='mainForm'>
                <div className='labelInput'>
                    <label htmlFor="my-input">Name : </label>
                    <input placeholder='Enter Name' type="text" name="name" value={name} id='my-input' onChange={(e) => onValueChange(e)} />
                </div>
                <div className='labelInput'>
                    <label htmlFor="my-input">Technology : </label>
                    <input placeholder='Enter Technology' type="text" name="username" value={username} id='my-input' onChange={(e) => onValueChange(e)} />
                </div>
                <div className='labelInput'>
                    <label htmlFor="my-input">Email : </label>
                    <input placeholder='Enter Email' type="text" name="email" value={email} id='my-input' onChange={(e) => onValueChange(e)} />
                </div>
                <div className='labelInput'>
                    <label htmlFor="my-input">Phone : </label>
                    <input placeholder='Enter Phone' type="text" name="phone" value={phone} id='my-input' onChange={(e) => onValueChange(e)} />
                </div>
                <div className="submitBtn">
                    <button className='btnSubmit' onClick={() => addUserDetails()}>Submit</button>
                </div>
            </div>
        </div>

    )
}

export default AddUser;