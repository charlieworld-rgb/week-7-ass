import { Route,Routes } from "react-router"
import Button from "./Button"
export default function App(){
  return(
    <div>
      <h2 className="text">MY page</h2>
      <div>
       <Button/>
      </div>
      <Routes>
        <Route path="/" element ={<p className="mainP" >main page</p>} />
        <Route path="/posts" element ={<p className="posts">posts</p>} />
      </Routes>
    </div>
  )
}