import React, { useContext, useState } from 'react'
import { FormField, Button, Checkbox, Form } from 'semantic-ui-react'
import LogInAPI from '../../api/LogInAPI';
import Dashboard from '../Home/Dashboard'
import { LogInContext } from '../../context/LogInContext';
import { useNavigate } from 'react-router-dom';

const LogInForm = (props) => {

    const {isLoggedIn, setIsLoggedIn} = useContext(LogInContext);
    const {userName, setUserName} = useContext(LogInContext);

    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleChangeUserName = (prop) => {
        console.log(prop.target.value);
        setUserName(prop.target.value);
    }

    const handleChangePassword = (prop) => {
        console.log(prop.target.value);
        setPassword(prop.target.value);
    }
 
    const handleSubmit = () => {
        const api = new LogInAPI();
        api.logIn({userName, password}).then(data => {
            if (data.token !== null) {
                setIsLoggedIn(true);
                console.log(isLoggedIn)
                isLoggedIn && navigate('/home');
            }
        });
    }

    return (
        <div className='login-form-container'>
            <Form>
                <FormField>
                    <label>username</label>
                    <input 
                    placeholder='username'
                    value={userName}
                    onChange={handleChangeUserName}
                    />
                </FormField>
                <FormField>
                    <label>password</label>
                    <input 
                    placeholder='password'
                    value={password}
                    onChange={handleChangePassword}
                    />
                </FormField>
                <Button primary type='submit' onClick={handleSubmit}>Giriş Yap</Button>
            </Form>    
        </div>
    )
}

export default LogInForm