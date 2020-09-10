import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle , auth} from '../../firebase/firebase.utils';


class SignIn extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit= async (event) =>{
        event.preventDefault();

        const {email , password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email , password);
            this.setState({email:'', password:''});
        } catch(error)
        {
            console.log(error.message);
        }
        

        
    }

    handleChange = (event) => {
        
        const {value , name} = event.target;
        this.setState({[name] : value});
        event.preventDefault();
    }
    render(){
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign In with email & password </span>
                
                <form action="" method="post" onSubmit={this.handleSubmit}>
                    
                    <FormInput type="email" id="email" name="email"  value={this.state.email} required label="Email" handleChange={this.handleChange} />
                    <FormInput type="password" name="password" id="password" value={this.state.password} required label="Password" handleChange={this.handleChange}/>
                    <div className="buttons">
                        <CustomButton type="submit">SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >
                            
                            Sign In With Google
                        </CustomButton>
                    </div>
                </form>
                
            </div>
        )
    }


}
export default SignIn;