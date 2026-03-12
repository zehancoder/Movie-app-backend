import './App.css'
import Login from './features/auth/Login'
import Routing from './routes/Route'
import Navber from './components/Navber'
import Leftmenu from './components/Leftmenu'

function App() {

  return (
    <div class=" w-full h-screen overflow-hidden font-montserrat ">
      {/* <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div> */}
      <div className='z-50 flex h-full  w-full'>
        <div className=' lg:w-[33%] lg:static absolute left-0 top-0 xl:w-[20%] h-full px-8 py-9 bg-[#1B1B1B]'>
          <Leftmenu />
        </div>
        <div  className='w-full h-full scroll-smooth overflow-scroll overflow-x-hidden px-5'>
          <Navber />
          <div className='h-24'>

          </div>
          <Routing />
        </div>
      </div>
    </div>

  )
}

export default App
