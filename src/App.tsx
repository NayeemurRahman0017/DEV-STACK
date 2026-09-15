import { Suspense } from "react"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import TechList from "./components/MainLayout.tsx/TechList";
import type { ITechList } from "./types/techListType";
const techListFetch = async(): Promise<ITechList[]> => {
  const res =await fetch('/data.json')
  const data= await res.json();
  return data;
};

function App() {
  console.log(techListFetch())
  
  
  return (
    <>
    <Nav />
    <Hero />
    <Suspense>
      <TechList techListPromise={techListFetch} />
    </Suspense>
    </>
  )
}

export default App
