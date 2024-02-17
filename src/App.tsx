import './App.css'
import { useEffect, useState } from 'react';
import Header from './components/Header';



type ScreenWidthType = number;

function App() {
  const [screenWidth, setScreenWidth] = useState<ScreenWidthType>(window.innerWidth)
  const [darkMode, setDarkMode] = useState(false)


  const changeMode = () => {
    document.documentElement.classList.toggle('dark')
    setDarkMode(!darkMode)
  }



  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])



  return (
    <section className='App flex justify-center h-screen dark:bg-[#25273D] dark:duration-300'>



      {screenWidth > 374
        ?
        <div >
          <img className='' src="/assets/bg-desktop-img.png" alt="" />
        </div>

        :
        <div>
          <img className='' src="/assets/bg-mobile-img.jpg" alt="" />
        </div>

      }
{/* <div className='h-[70vh] bg-green-500'></div> */}
      <Header screenWidth={screenWidth} changeMode={changeMode} darkMode={darkMode}/>

      










    </section>
  )
}

export default App
