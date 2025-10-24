// import { useState } from "react"

// function LikeButton() {
//     let [toggleLikeButton, setToggleLikeButton] = useState(false);
//     let [countLikeButton, setCountLikeButton] = useState(0);

//     function like() {
//         setToggleLikeButton(prevToggleLikeButton => !prevToggleLikeButton);
//         setCountLikeButton(prevCountLikeButton => prevCountLikeButton + 1);

//     }
    
//     function unlike() {
//         setToggleLikeButton(prevToggleLikeButton => !prevToggleLikeButton);
        
//         setCountLikeButton(prevCountLikeButton => {
            
//             if (prevCountLikeButton === 0){
//                 return prevCountLikeButton = 0;
//             } else{
//                 return prevCountLikeButton - 1;

//             };
//         })
//     }
  
//     return(
//         <div className="main">
//             <div className="cont">
//                  <h1>❤️ liked</h1>
//                 <h2>{countLikeButton} like</h2>

//             </div>
           
//             <div className="buttons">
//                 <button onClick={like}>Click to like</button>
//                 <button onClick={unlike}>Click to Unlike</button>
//             </div>
            
//             <div className="cont">
//                 <h1>🤍 like</h1>
//                 <h2>{toggleLikeButton} like</h2>
//             </div>
            

//         </div>
//     )

// }

// export default LikeButton;







import { useState } from "react";

function LikeButton() {

  const [liked, setLiked] = useState(false);

 
  const [likeCount, setLikeCount] = useState(0);


  const [disabled, setDisabled] = useState(false);


  function handleLike() {
    if (disabled) return; 

    setDisabled(true);

    setLiked((prevLiked) => {
      if (prevLiked) {

        setLikeCount((prevCount) => Math.max(prevCount - 1, 0));
      } else {

        setLikeCount((prevCount) => prevCount + 1);
      }
      return !prevLiked;
    });


    setTimeout(() => setDisabled(false), 1000);
  }

  return (
    <div className="main">
      <button
        onClick={handleLike}
        disabled={disabled}
        style={{
          fontSize: "20px",
          padding: "10px 20px",
          cursor: disabled ? "not-allowed" : "pointer",
          backgroundColor: liked ? "lightcoral" : "lightgray",
          border: "none",
          borderRadius: "10px",
          transition: "0.3s",
        }}
      >
        {liked ? "❤️ Liked" : "🤍 Like"}
      </button>

      <h2>{likeCount} {likeCount === 1 ? "like" : "likes"}</h2>
    </div>
  );
}

export default LikeButton;
