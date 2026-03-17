import './App.css'
import Login from './features/auth/Login'
import Routing from './routes/Route'
import Navber from './components/Navber'
import Leftmenu from './components/Leftmenu'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getCurrentLogin } from './features/getCurrentLogin/user.find'
import { errorMsgState, likeMoviesState, loginErrMsg, loginUserSuccess } from './toolkit/slice'
import { useNavigate } from 'react-router';
import 'react-loading-skeleton/dist/skeleton.css'
import Footer from './components/Footer'
import { getLikeMovie } from './features/likeMovies/getLikeMovies.api'

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  //geeting current login user
  const currentUser = useSelector(state => state.loginUser);
  const errorMessage = useSelector(state => state.errMessage)
  const currentLoginFunc = async () => {
    const response = await getCurrentLogin();
    if (!response.success) {
      dispatch(loginErrMsg(response.message));
      return;
    }
    dispatch(loginErrMsg('Success'));
    dispatch(loginUserSuccess(response.data));
  }
  //geeting like movies apis;
  // getting like movies from api;
  const getLikeMoviesFunc = async () => {
    const response = await getLikeMovie();
    if (!response.success) {
      dispatch(errorMsgState(response.message));
      return;
    }
    dispatch(likeMoviesState(response.data.data))
  }

  useEffect(() => {
    currentLoginFunc();
    getLikeMoviesFunc();
    console.log('run');

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
  // remove err message
  useEffect(() => {
    setTimeout(() => {
      dispatch(errorMsgState(''))
    }, 3000);
  }, [errorMessage])
  return (
    <div class="w-full h-screen overflow-hidden font-montserrat">
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
          </div>
          <div>
            <Routing />
            <Footer />
          </div>

        </div>
      </div>
      {/* erro message showing */}
      <div class={`space-y-12 p-4 transition duration-300 z-40 fixed bottom-20 right-5 ${errorMessage !== '' ? 'translate-x-0' : 'translate-x-[150%]'} `}>

        <div class="flex items-center gap-4 p-5 rounded-md max-w-4xl mx-auto shadow-[0_2px_16px_-3px_rgba(144,144,144,0.4)] bg-blue-600" role="alert">
          <div class="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="shrink-0 w-5 h-5 fill-white" viewBox="0 0 512 512">
              <path d="M256 0C114.509 0 0 114.496 0 256c0 141.489 114.496 256 256 256 141.491 0 256-114.496 256-256C512 114.511 397.504 0 256 0zm26.289 357.621c0 8.088-11.794 16.174-26.284 16.174-15.164 0-25.946-8.086-25.946-16.174V229.234c0-9.435 10.783-15.839 25.946-15.839 14.49 0 26.284 6.404 26.284 15.839v128.387zm-26.283-175.225c-15.501 0-27.631-11.457-27.631-24.263 0-12.805 12.131-23.925 27.631-23.925 15.164 0 27.296 11.12 27.296 23.925 0 12.806-12.133 24.263-27.296 24.263z" data-original="#000000" />
            </svg>
            <p class="text-white text-base">{errorMessage}</p>
          </div>
          <svg onClick={() => dispatch(errorMsgState(''))} xmlns="http://www.w3.org/2000/svg" class="shrink-0 w-[14px] h-[14px] ml-auto cursor-pointer fill-white hover:fill-gray-100" viewBox="0 0 320.591 320.591">
            <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" data-original="#000000" />
            <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" data-original="#000000" />
          </svg>
        </div>

      </div>
    </div>

  )
}

export default App
