import {Hero, Header, Features, Pricing, Faq, Download, Testimonials, Footer} from "./sections"

function App() {

  return (
    <main className="overflow-hidden">
      <Header/>
      <Hero/>
      <Features/>
      <Pricing/>
      <Faq/>
      <Testimonials/>
      <Download/>
      <Footer/>
    </main>
  )
}

export default App
