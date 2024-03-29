// import {PageBackground} from '../components/background.js'
import {AccountHeader} from '../../components/accountHeader'
import {Footer} from '../../components/footer'
import Image from 'next/image';
import {LottieViewer} from '../../components/lottie'
import { SignInPopup } from '../../components/signin_popup';
import { useState } from 'react';
import { Account } from './index';
import { useAuth } from '../../context/AuthContext';
import {Login} from '../login'
import { Form } from 'react-bootstrap';

export default function Signin() {
  // const {data: session} = useSession();
  const {user,logout} =useAuth();
   
  const handleSignout = async (e) => {
    e.preventDefault()

    console.log(user)
    try {
      await logout(user)
      router.push('/')
    } catch (err) {
      console.log(err)
    }
  }
    return (
      <>
        {
          user ?
          <div style={{width: '100%', background: '#020221'}}>
        <AccountHeader/>
        <main style={{position: 'absolute', width: '100%', padding: '0% 5%'}}>
          <div style={{display: 'grid', placeItems: 'center', marginTop: '50px'}}>
            <h2>Account Settings</h2>
            <p>You are already signed in</p>
            <Form onSubmit={handleSignout}>
            <Button className="header_button" type='submit'>
                <p>Sign out</p>
            </Button>
            </Form>
          </div>
          <Footer />
        </main>
      </div> :
          <SignInPopup/> 
        }
      </>
    )
  }
  
