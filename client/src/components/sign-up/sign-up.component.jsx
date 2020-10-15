import React,{useState} from 'react';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import {
    SignUpContainer,
    TitleContainer
    } from './sign-up.styles';


import {connect} from 'react-redux';
import {signUpStart} from '../../redux/user/user.actions';

const SignUp = ({signUpStart}) => {
    
    const [userCredentials , setUserCredentials] = useState({
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''   
    });
    const {displayName , email , password , confirmPassword} = userCredentials;
    const handleSubmit = async(event) =>{
        event.preventDefault();

        
        if(password !== confirmPassword)
        {
            alert("Passwords Don't Match !");
            return;
        }
        signUpStart({email , password,displayName});
    }

    const handleChange = (event) =>
    {
        const {name , value} = event.target;
        setUserCredentials({...userCredentials,[name]:value});
        event.preventDefault();
    }

    return (
        <SignUpContainer>
            
            <TitleContainer> I do not have a Account </TitleContainer>
            <span>Sign up with your Email & Password </span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput type="text" name="displayName" value={displayName} onChange={handleChange} label="Name" required/>
                <FormInput type="email" name="email" value={email} onChange={handleChange} label="Email" required/>
                <FormInput type="password" name="password" value={password} onChange={handleChange} label="Password" required/>
                <FormInput type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange} label="Confirm Password" required/> 
                <CustomButton type="submit">SIGN UP</CustomButton>

            </form>

        </SignUpContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})
export default connect(null,mapDispatchToProps)(SignUp);