import { Suspense } from "react"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import TechList from "./components/MainLayout.tsx/TechList"
import type { ITechList } from "./types/techListType"
import Footer from "./components/Footer"
import {ToastContainer} from"react-toastify";
import "react-toastify/dist/ReactToastify.css";

const techListFetch = async (): Promise<ITechList[]> => {
  const res = await fetch("/data.json")
  const data = await res.json()
  return data
}

function App() {
  const techListPromise = techListFetch()

  return (
    <>
      <Nav />
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <TechList techListPromise={() => techListPromise} />
      </Suspense>
      <Footer/>
      <ToastContainer 
      position="top-right" 
      autoClose={100}
      hideProgressBar={true}
      theme="light"
      />
    </>
  )
}

export default App
