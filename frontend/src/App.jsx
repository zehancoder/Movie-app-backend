import './App.css'
import Login from './features/auth/Login'
import Routing from './routes/Route'
import Navber from './components/Navber'
import Leftmenu from './components/Leftmenu'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getCurrentLogin } from './features/getCurrentLogin/user.find'
import { loginErrMsg, loginUserSuccess } from './toolkit/slice'
import { useNavigate } from 'react-router';
import 'react-loading-skeleton/dist/skeleton.css'
import Footer from './components/Footer'

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const currentUser = useSelector(state => state.loginUser);
  const currentLoginFunc = async () => {
    const response = await getCurrentLogin();
    if (!response.success) {
      dispatch(loginErrMsg(response.message));
      return;
    }
    dispatch(loginErrMsg('Success'));
    dispatch(loginUserSuccess(response.data));
  }
  useEffect(() => {
    currentLoginFunc()
  }, []);
  useEffect(() => {
    if (currentUser?.message !== 'Success') {
      navigate('/login');
      return;
    }
    navigate('/')
  }, [currentUser]);
  //left menu toggling state
  const toggleMenu = useSelector(state => state.toggleLeftMenu)

  return (
    <div class="w-full h-screen overflow-hidden font-montserrat ">
      {/* <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div> */}
      <div className=' flex h-full  w-full'>
        <div className={` lg:w-[22%] lg:static z-50 transform ${toggleMenu ? '-translate-x-full' : 'translate-x-0'} absolute left-0 top-0 xl:w-[18%] h-full px-4 md:px-8 py-5 md:py-9 bg-[#1B1B1B]`}>
          <Leftmenu />
        </div>
        <div className='w-full h-full scroll-smooth overflow-scroll overflow-x-hidden'>
          <Navber />
          <div className='h-24'>
            <button onClick={() => dispatch()}></button>
          </div>
          <div>
            <Routing />
            <Footer/>
          </div>
          
        </div>
      </div>
    </div>

  )
}

export default App
