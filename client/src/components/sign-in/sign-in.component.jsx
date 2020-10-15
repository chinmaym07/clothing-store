import React , {useState} from 'react';
import { googleSignInStart , emailSignInStart } from '../../redux/user/user.actions';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {connect} from 'react-redux';
import {
    SignInContainer,
    ButtonsContainer,
    TitleContainer
    } from './sign-in.styles';  

const SignIn = ({emailSignInStart,googleSignInStart}) => {
    const [userCredentials , setuserCredentials] = useState({email:'' , password:''});
    const {email , password} = userCredentials;
    const handleSubmit= async (event) =>{
        event.preventDefault();

        emailSignInStart(email ,password);
    }

    const handleChange = (event) => {
        
        const {value , name} = event.target;
        setuserCredentials({...userCredentials,[name] : value})

        event.preventDefault();
    }

    
    return (
        <SignInContainer>
            <TitleContainer>I already have an account</TitleContainer>
            <span>Sign In with email & password </span>
            
            <form action="" method="post" onSubmit={handleSubmit}>
                
                <FormInput type="email" id="email" name="email"  value={email} required label="Email" handleChange={handleChange} />
                <FormInput type="password" name="password" id="password" value={password} required label="Password" handleChange={handleChange}/>
                <ButtonsContainer>
                    <CustomButton type="submit">SIGN IN</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn >
                        
                        Sign In With Google
                    </CustomButton>
                </ButtonsContainer>
            </form>
            
        </SignInContainer>
        )
    }

const mapDispatchToProps = dispatch =>({
    googleSignInStart:() => dispatch(googleSignInStart()),
    emailSignInStart:(email , password) => dispatch(emailSignInStart({email , password}))
})


    export default connect(null , mapDispatchToProps)(SignIn);