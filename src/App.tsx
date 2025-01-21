import { useEffect, useState } from "react";
import {Hero, Header, Features, Pricing, Faq, Download, Testimonials, Footer} from "./sections"
import {DemoVideo} from "./components";

function App() {
  const [displayVideo, setDisplayVideo] = useState(false);
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("user-preferred-theme") !== null ? localStorage.getItem("user-preferred-theme") : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" :"light");

  const toggleThemeMode =()=> {
    setThemeMode(theme => theme === "dark" ? "light" : "dark")
  }

  const darkLightStyles = (dark:string, light:string) : string => {
    return themeMode === "dark" ? dark : light;
 } 

  useEffect(()=> {
    displayVideo ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "auto"
  },[displayVideo])

  useEffect(()=> {
    localStorage.setItem("user-preferred-theme", themeMode!);    
    document.querySelector('html')?.setAttribute("data-theme", themeMode!);
  },[themeMode])

  return (
    <main>
      <Header 
        themeMode={themeMode as string} 
        toggleThemeMode={toggleThemeMode}
      />
      <Hero themeStyle={darkLightStyles}/>
      <Features 
        setDisplayVideo={setDisplayVideo} 
        themeStyle={darkLightStyles}
      />
      <Pricing 
        themeStyle={darkLightStyles} 
        theme={themeMode as string}
      />
      <Faq themeStyle={darkLightStyles}/>
      <Testimonials themeStyle={darkLightStyles}/>
      <Download 
        setDisplayVideo={setDisplayVideo} 
        theme={themeMode as string} themeStyle={darkLightStyles}
      />
      <Footer themeStyle={darkLightStyles}/>
      {displayVideo && (<DemoVideo displayVideo={displayVideo} setDisplayVideo={setDisplayVideo}/>)}
    </main>
  )
}

export default App
