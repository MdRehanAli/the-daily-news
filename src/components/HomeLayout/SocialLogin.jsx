import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h1 className='font-bold mb-5'>Login With</h1>
            <div className='space-y-3'>
                <button className='btn btn-outline w-full btn-secondary'><FcGoogle className='text-2xl'></FcGoogle> Login with Google</button>
                <button className='btn btn-outline w-full btn-primary'><FaGithub className='text-2xl'></FaGithub> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;