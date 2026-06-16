import { useState } from "react";
import { useNavigate } from "react-router-dom";

import dateSticker from "../assets/stickers/love.webp";


function DatePage() {

    const navigate = useNavigate();


    const [date, setDate] = useState("");
    const [time, setTime] = useState("");



    return (

        <div className="date-page">


            <div className="date-card">



                <img

                    src={dateSticker}

                    className="sticker"

                    alt="love sticker"

                />



                <h1>
                    Choose our date ❤️
                </h1>



                <p>
                    When should we make this special moment? ✨
                </p>



                <label>
                    Select Date
                </label>


                <input

                    type="date"

                    value={date}

                    onChange={(e) => setDate(e.target.value)}

                />



                <label>
                    Select Time
                </label>



                <select

                    value={time}

                    onChange={(e) => setTime(e.target.value)}

                >

                    <option value="">
                        Choose time
                    </option>


                    <option value="7 PM">
                        7 PM
                    </option>


                    <option value="8 PM">
                        8 PM
                    </option>


                    <option value="9 PM">
                        9 PM
                    </option>


                    <option value="10 PM">
                        10 PM
                    </option>


                    <option value="11 PM">
                        11 PM
                    </option>


                </select>



                <button

                    disabled={!date || !time}

                    onClick={() => {

                        localStorage.setItem("date", date);

                        localStorage.setItem("time", time);

                        navigate("/food");

                    }}

                >
                    Continue 💖
                </button>



            </div>


        </div>

    )

}


export default DatePage;