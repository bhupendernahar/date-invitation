import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Home() {
    const navigate = useNavigate();
    const [noMove, setNoMove] = useState({
        x: 0,
        y: 0
    });

    const moveNoButton = ()=>{


    // Minimum and maximum movement range

    const minX = 120;
    const maxX = 250;

    const minY = 80;
    const maxY = 180;



    // random direction (+ or -)

    const directionX = Math.random() > 0.5 ? 1 : -1;
    const directionY = Math.random() > 0.5 ? 1 : -1;



    const randomX =
    (Math.random()*(maxX-minX)+minX)
    * directionX;



    const randomY =
    (Math.random()*(maxY-minY)+minY)
    * directionY;



    setNoMove({

        x:randomX,
        y:randomY

    });



    // return after some time

    setTimeout(()=>{

        setNoMove({

            x:0,
            y:0

        });


    },1500);



};

    return (
        <div className="home">
            {/* Floating hearts */}
            <div className="hearts">
                <span>❤️</span>
                <span>💖</span>
                <span>💕</span>
                <span>❤️</span>
                <span>💗</span>
                <span>💘</span>
            </div>

            <div className="card">
                <div className="main-heart">
                    ❤️
                </div>
                <h1>
                    Will you go on a date with me?
                </h1>
                <p>
                    I have something special planned for you ✨
                </p>

                <div className="buttons">
                    <button
                        className="yes"
                        onClick={() => navigate("/yes")}
                    >
                        YES 💖
                    </button>

                    <button
                        className="no"
                        style={{
                            transform: `translate(${noMove.x}px, ${noMove.y}px)`
                        }}
                        onMouseEnter={moveNoButton}
                    >
                        NO 😭
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home;