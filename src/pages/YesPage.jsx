import { useNavigate } from "react-router-dom";


function YesPage(){

const navigate = useNavigate();


return(

<div className="yes-page">


<div className="yes-card">


<div className="emoji">
🥰
</div>


<h1>
Are you really saying YES? ❤️
</h1>


<p>
I hope you mean it because I am already excited 😍
</p>



<button

onClick={()=>navigate("/date")}

>
Okay Okay 💖
</button>



</div>


</div>

)

}


export default YesPage;