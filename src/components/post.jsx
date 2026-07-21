import { useState } from "react";
import { Heart, HeartFill } from "../assets/notification";
import { Message } from "../assets/message";

export default function Posts(props) {
    const [toggle, setToggle]= useState(false)
    return (
        <div className="flex justify-center">
            <div className="relative space-y-1 w-fit">
                <div className="flex items-center gap-2">
                    <img className="bg-bg rounded-full w-8" src={props.pfp} alt="pfp" />
                    <p>{props.Username}</p>
                </div>
                <img className="rounded-md border-[1px] border-gray-500/30" src={props.post} alt="post" />
                <div className="flex gap-3">
                    <div className="flex items-center gap-1" onClick={()=>setToggle(!toggle)}>
                {!toggle ? <Heart/>:<HeartFill/>}  
                 {props.likeCount}
                </div>  
                <Message/>
                </div>
                <p><strong className="mr-2">{props.Username}</strong> {props.caption}</p>
            </div>

        </div>
    );
}