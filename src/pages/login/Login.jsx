import "./Login.scss"

import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';


const Login = () => {

  const [loggedIn, setLoggedIn] = useState(false);
    const {t,i18n}=useTranslation();
const number=useRef();
const textTest= useRef();


const de =500;
          const showText =()=>{
            if(number.current)
            textTest.current.hidden=false

          }


  return (
    <div>
      {loggedIn ? (
        <div>
          <h1> {t('welcom')} </h1>
          <button >Logout</button>
          {/* Home page content */}
        </div>
      ) : (
        <div>
          <h1>Login</h1>
          <input
            type="text"
            placeholder="Username"
 
          />
          <br />
          <input
            type="password"
            placeholder="Password"
           
            
          />
          <br />
          <button onClick={()=>{
            setLoggedIn(true);
            i18n.changeLanguage("fr")}} 
            >Login fr</button>

               <button onClick={()=>{
            setLoggedIn(true);
            i18n.changeLanguage("en")}} 
            >Login en </button>
        </div>
      )}

      <div>
        <input type="number" name="" onChange={()=> showText()} id="" ref={number} />
        <button onClick={()=>{
  console.log(number)
  console.log(number.current.value)
    


        }
         
        } >Clik me </button>


          <p ref={textTest}  hidden={true} defaultValue={de}> hi oualid </p>


      </div>
    </div>
  );
};

export default Login;


