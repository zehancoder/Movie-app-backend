import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import axios from 'axios'
import { register } from '../apiLayers/auth.api';
import { useDispatch, useSelector } from 'react-redux';
import { registerErrMsg, registerUserState, registerUserSuccess } from '../../toolkit/slice';
function Register() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registerData = useSelector(state => state.registerUser);
  const registerFunc = async () => {

    if (name === '' && email === '' && password === '') {
      alert('please fills all inputs')
      return;
    }
    if (password.length < 8) {
      alert('Password minimum 8 charcter')
      return;
    }
    dispatch(registerUserState())
    try {
      const response = await register(username, email, password);
      if (!response?.success) {
        dispatch(registerErrMsg(response?.message));
        return
      }
      dispatch(registerUserSuccess(response?.data?.newUser));
      dispatch(registerErrMsg('Success'));
      window.location.reload()
    } catch (error) {
      return error.response.data.message
    }

  }
  if (registerData.message === 'Success') {
    navigate('/')
  }


  const loading = useSelector(state => state.loading)
  if (loading) {
    return <main>
      <h1 className='text-4xl font-medium mt-20 ml-20'>Loading...</h1>
    </main>
  }

  return (
    <div class="min-h-screen flex fle-col items-center justify-center p-6">
      <div class=" max-w-6xl max-lg:max-w-lg w-full ">
        <form class="lg:max-w-md mx-auto w-full border bg-[#BFC9D1] border-slate-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-lg:mx-auto">
          <h1 class="text-slate-900 text-3xl font-semibold mb-8">Create an account</h1>
          <div class="space-y-6">
            <div>
              <label class="text-slate-900 text-sm mb-2 block">Name</label>
              <input required value={username} onChange={(e) => setUserName(e.target.value)} name="name" type="text" class="bg-gray-100 w-full text-slate-900 text-sm px-4 py-3 focus:bg-transparent border border-gray-100 focus:border-black outline-none transition-all" placeholder="Enter name" />
            </div>
            <div>
              <label class="text-slate-900 text-sm mb-2 block">Email</label>
              <input required value={email} onChange={(e) => setEmail(e.target.value)} name="email" type="text" class="bg-gray-100 w-full text-slate-900 text-sm px-4 py-3 focus:bg-transparent border border-gray-100 focus:border-black outline-none transition-all" placeholder="Enter email" />
            </div>
            <div>
              <label class="text-slate-900 text-sm mb-2 block">Password</label>
              <input required value={password} onChange={(e) => setPassword(e.target.value)} name="password" type="password" class="bg-gray-100 w-full text-slate-900 text-sm px-4 py-3 focus:bg-transparent border border-gray-100 focus:border-black outline-none transition-all" placeholder="Enter password" />
            </div>
            <div class="flex items-center">
              <input required id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 shrink-0 border-gray-300 rounded" />
              <label for="remember-me" class="ml-3 block text-sm text-slate-600">
                I accept the <a href="javascript:void(0);" class="text-blue-600 font-semibold hover:underline ml-1">Terms and Conditions</a>
              </label>
            </div>
          </div>

          <div onClick={registerFunc} class="!mt-12">
            <button type="button" class="w-full shadow-xl py-2.5 px-4 text-[15px] font-medium tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer">
              Register
            </button>
          </div>
          <Link to={'/login'} class="text-sm text-slate-600 mt-6">Already have an account? <a href="javascript:void(0);" class="text-blue-600 font-semibold hover:underline ml-1">Login here</a></Link>
        </form>


      </div>
    </div>
  )
}

export default Register