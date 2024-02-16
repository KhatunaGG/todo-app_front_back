import './App.css'
import { useState, useEffect } from 'react';
import Header from './components/Header';



type ScreenWidthType = number;

function App() {
  const [screenWidth, setScreenWidth] = useState<ScreenWidthType>(window.innerWidth)
  const [darkMode, setDarkMode] = useState(false)

  
  console.log(darkMode)

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
    <section className='App relative w-full -z-20  flex flex-col items-center justify-center dark:bg-[#393A4B] dark:text-[#C8CBE7] md:h-screen'>

      {screenWidth > 374
        ?
        <img className='fixed top-0  -z-10' src="/assets/bg-desktop-img.png" alt="" />
        : <img src="/assets/bg-mobile-img.jpg" alt="" />}

     


      <Header screenWidth={screenWidth} setDarkMode={setDarkMode} darkMode={darkMode}/>


    </section>
  )
}

export default App
