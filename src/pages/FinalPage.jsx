import { useState } from "react";
import cuteSticker from "../assets/stickers/cute.webp";


function FinalPage() {


    const [open, setOpen] = useState(false);
    const [rotate, setRotate] = useState(0);


    const date = localStorage.getItem("date");
    const time = localStorage.getItem("time");
    const food = localStorage.getItem("food");



    const surprise = ()=>{

        setRotate(prev => prev + 360);

        setTimeout(()=>{

            setOpen(true);

        },700);

    }



    return (


        <div className="final-page">



            <div className="heart-rain">

                <span>❤️</span>
                <span>💖</span>
                <span>💕</span>
                <span>💗</span>
                <span>💘</span>
                <span>💝</span>

            </div>





            <div

                className="surprise-card"

                style={{
                    transform:`rotateY(${rotate}deg)`
                }}

            >



                <div className="circle-sticker">


                    <img

                        src={cuteSticker}

                        alt="cute"

                    />


                </div>





                {

                !open ?

                <>


                <h1>
                    Hey Baby ❤️
                </h1>


                <p>
                    I have a little surprise for you ✨
                </p>



                <button

                    onClick={surprise}

                >

                    Open Surprise 🎁

                </button>


                </>



                :



                <div className="final-content">


                    <h1>
                        Our Date is Fixed 🥰
                    </h1>



                    <p>
                        You made me really happy ❤️
                    </p>



                    <div className="info">


                        <h3>
                            📅 Date
                        </h3>

                        <p>
                            {date}
                        </p>



                        <h3>
                            🕖 Time
                        </h3>

                        <p>
                            {time}
                        </p>



                        <h3>
                            🍽 Food
                        </h3>

                        <p>
                            {food}
                        </p>


                    </div>



                    <h2>
                        Can't wait to see you 💖
                    </h2>


                </div>


                }


            </div>


        </div>

    )


}


export default FinalPage;