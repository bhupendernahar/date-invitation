import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import dateSticker from "../assets/stickers/love.webp";

import foodSticker from "../assets/stickers/food.webp";

function FoodPage() {

    const navigate = useNavigate();


    const [selected, setSelected] = useState(null);



    const foods = [

        {
            name: "Pizza",
            emoji: "🍕",
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591"
        },

        {
            name: "Burger",
            emoji: "🍔",
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
        },

        {
            name: "Chinese Noodles",
            emoji: "🍜",
            image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624"
        },

        {
            name: "Pasta",
            emoji: "🍝",
            image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601"
        },

        {
            name: "Sushi",
            emoji: "🍣",
            image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c"
        },

        {
            name: "Taco",
            emoji: "🌮",
            image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85"
        },

        {
            name: "French Fries",
            emoji: "🍟",
            image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877"
        },

        {
            name: "Cake",
            emoji: "🍰",
            image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587"
        },

        {
            name: "Ice Cream",
            emoji: "🍦",
            image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f"
        },

        {
            name: "Salad",
            emoji: "🥗",
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
        }

    ];



    return (

        <div className="food-page">


            <div className="food-card">


                <img

                    src={foodSticker}

                    className="food-sticker"

                    alt="food sticker"

                />
                <h1>
                    What would you like to eat? ❤️😋
                </h1>
                <p>
                    Choose one for our date ❤️
                </p>
                <div className="food-container">
                    {
                        foods.map((food, index) => (
                            <div

                                key={index}

                                className={
                                    selected === index
                                        ?
                                        "food-item active"
                                        :
                                        "food-item"
                                }

                                onClick={() => {

                                    setSelected(index);

                                    localStorage.setItem(
                                        "food",
                                        food.name
                                    );

                                }}

                            >
                                <img
                                    src={food.image}
                                    alt={food.name}
                                    onError={(e) => {
                                        e.target.style.display = "none"
                                    }}
                                />
                                <div className="food-emoji">
                                    {food.emoji}
                                </div>
                                <h3>
                                    {food.name}
                                </h3>
                            </div>
                        ))
                    }
                </div>

                {
                    selected !== null &&
                    <button
                        onClick={() => navigate("/final")}
                    >
                        Continue 💖
                    </button>
                }
            </div>
        </div>
    )
}


export default FoodPage;