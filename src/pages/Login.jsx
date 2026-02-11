import React from 'react'
import { Input } from '../components/ui/Input'
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/16/solid";
import { Button, CodeButton } from '../components/ui/Button';
import { Or } from '../components/ui/Or';

const Login = () => {
  return ( 
  <div className='md:flex md:justify-center md:items-center md:min-h-screen lg:flex lg:justify-center lg:items-center lg:min-h-screen'>
    <div className='lg:max-w-150 md:max-w-150 w-full flex flex-col items-center'>
        <img 
            src='public/WhatsApp Image 2026-02-11 at 00.30.44.jpeg'
            className='my-5 w-70 md:w-90 lg:w-90'
        />
        <form action="#" className='m-2 max-w-[370px] md:max-w-85 lg:max-w-85'>
            <h1 className='text-xl font-semibold mb-3 md:text-2xl'>Se connecter</h1>
            <Input
                type="text"
                placeholder="Adresse e-mail"
                icone={<EnvelopeIcon className='w-3 opacity-50 md:w-3.5'/>}
            />

            <Input
                type="password"
                placeholder="Mot de passe"
                icone={<LockClosedIcon className='w-3 opacity-50 md:w-3.5'/>}
            />

            <span className='w-full text-[0.55rem] font-semibold leading-0.5 opacity-75 md:text-[0.65rem] md:leading-1'>
                <a href="#" className='float-end text-blue-800' >Mot de passe oublie ?</a>
            </span>

            <Button buttonText="Se connecter"/>

            <Or className="mb-3"/>

            <div className='text-center mb-2 whitespace-nowrap text-[0.85rem] font-medium leading-4 md:text-[0.95rem]'>
                Connexion securisee avec OTP <br />
                <span className='text-[0.65rem] font-light md:text-[0.70rem]'> En utilisant un code unique</span>
            </div>

            <CodeButton icone={<LockClosedIcon className="text-blue-800 hover:text-white w-3 mr-2 md:w-5"/>} text="Connexion avec un code unique" /> 

            <div 
                className='
                    text-center 
                    whitespace-nowrap 
                    text-[0.60rem] 
                    leading-3 my-3'
                >
                    En continuant, vous acceptez 
                    nos <a 
                        className='
                            text-blue-800 
                            font-semibold'
                    > Conditons</a>
                <br />
                    et notre <a 
                        className='
                            text-blue-800 
                            font-semibold'
                    >Politique de confidentialite</a>
            </div>

            <p className='text-xs text-center'>© 2026 MedAssist+</p>
        </form>
    </div>
</div>
)
}

export default Login
