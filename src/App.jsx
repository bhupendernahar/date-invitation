import {Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import YesPage from "./pages/YesPage";
import DatePage from "./pages/DatePage";
import FoodPage from "./pages/FoodPage";
import FinalPage from "./pages/FinalPage";
import "./style.css"


function App(){

return(
<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/yes" element={<YesPage/>}/>

<Route path="/date" element={<DatePage/>}/>

<Route path="/food" element={<FoodPage/>}/>

<Route path="/final" element={<FinalPage/>}/>


</Routes>
)

}


export default App;