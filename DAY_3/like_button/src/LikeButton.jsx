import { useState } from "react"

function LikeButton() {
    let [toggleLikeButton, setToggleLikeButton] = useState(false);
    let [countLikeButton, setCountLikeButton] = useState(0);

    function like() {
        setToggleLikeButton(prevToggleLikeButton => !prevToggleLikeButton);
        setCountLikeButton(prevCountLikeButton => prevCountLikeButton + 1);

    }
    
    function unlike() {
        setToggleLikeButton(prevToggleLikeButton => !prevToggleLikeButton);
        
        setCountLikeButton(prevCountLikeButton => {
            
            if (prevCountLikeButton === 0){
                return prevCountLikeButton = 0;
            } else{
                return prevCountLikeButton - 1;

            };
        })
    }
  
    return(
        <div className="main">
            <div className="cont">
                 <h1>❤️ liked</h1>
                <h2>{countLikeButton} like</h2>

            </div>
           
            <div className="buttons">
                <button onClick={like}>Click to like</button>
                <button onClick={unlike}>Click to Unlike</button>
            </div>
            
            <div className="cont">
                <h1>🤍 like</h1>
                <h2>{toggleLikeButton} like</h2>
            </div>
            

        </div>
    )

}

export default LikeButton;