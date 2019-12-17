import React from 'react'
import TextField from '@material-ui/core/TextField'
import './login.less'

const Login: React.FC = () => {
    return (
        <div className="login-content">
            <div className="login-form">
                <form>
                    <TextField 
                        id="standard-search"
                        label="Search field"
                        type="search"
                        margin="normal"/>
                </form>
            </div>
        </div>
    )
}

export default Login