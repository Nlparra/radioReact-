import React, { useCallback } from "react"




 export default function Radio (){
    // const [music , setMusic] = useState()

    
          let getMusic = () => {
            fetch('http://api.shoutcast.com/legacy/genresearch?k=${.env.APIKEY}&genre=classic')
            .then (res=>res.json())
            .then (data => {
                console.log(data);
                // this.setState({tweet:data.message})

                
            })
            .catch(err=>{console.log(err);
            })
        }

 return (
    <>
    <div>
        <button onClick={getMusic}></button>
        <audio controls>
            <source src="horse.ogg" type="audio/ogg" />
        <source src="horse.mp3" type="audio/mpeg" />
        </audio> 
    </div>
    </>
 )
}