import React from 'react';
import { Navbar,FlexContent, Footer, Hero,Sales,Stories,Cart } from './components';
import { heroapi, popularsales,toprateslaes,highlight,sneaker,story,footerAPI } from './data/data';


const App = () => {
  
  return (
    <>
    <Navbar />
    <Cart />
    <main  className='grid items-center justify-center gap-32 '>
    <Hero heroapi={heroapi} />
    <Sales endpoint={popularsales} ifExists/>
    <FlexContent endpoint={highlight} ifExists />
    <Sales endpoint={toprateslaes} />
    <FlexContent endpoint={sneaker}/>
    <Stories story={story}/>
    <Footer footerAPI={footerAPI}/>

    </main>
    </>
  )
}

export default App