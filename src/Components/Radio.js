import React from "react"



 export default function Radio (){
 return (
    <>
    <div>
        <audio controls>
            <source src="horse.ogg" type="audio/ogg" />
        <source src="horse.mp3" type="audio/mpeg" />
        </audio> 
    </div>
    </>
 )
}