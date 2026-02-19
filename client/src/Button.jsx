import { useState } from "react"

export default function Button(){
const [comments, setComments] = useState ('')

    return(
        <div>
            <form >
                <lable html="comments">Comments</lable>
                <input type="text"  id="comments" onChange={(e) =>{
                    console.log(e.target.value)
                }}/>
{/* 
            <button type="submit ">submit</button> */}
            </form>
        </div>
    )
}