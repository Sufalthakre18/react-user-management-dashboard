import {BrowserRouter,Routes, Route} from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
 
  return (
    <BrowserRouter>
      <Toaster />
      <h1 className="text-5xl bg-blue-700 w-full">hello</h1>
    </BrowserRouter>
  )
}

export default App
