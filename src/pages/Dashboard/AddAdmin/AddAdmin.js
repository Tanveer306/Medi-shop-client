import { Alert, AlertTitle, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const AddAdmin = () => {
    const {token} = useAuth();
    const [success, setSuccess] = useState(false);
    const [email, setEmail] = useState('')

    const handleBlur = e => {
        setEmail(e.target.value)
    }

    const handleAdminSubmit = e => {
        const user = { email }
        fetch("http://localhost:5000/users/admin",
            {
                method: "PUT",
                headers: {
                    'authorization':`Bearer ${token}`,
                    "content-type": "application/json"
                },
                body: JSON.stringify(user)

            }
        )
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true)
                    console.log(data)
                }
            })

        e.preventDefault();

    }

    return (
        <div>
            <h2>Add some Admin here</h2>

            <form onSubmit={handleAdminSubmit}>
                <TextField
                    type="email"
                    label="Email"
                    onBlur={handleBlur}
                    variant="standard"
                />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>


            {success && <Alert severity="success">
                        <AlertTitle>Congrats</AlertTitle>
                        Successfully <strong>New Admin Created!</strong>
                    </Alert>}

        </div>
    );
};

export default AddAdmin;