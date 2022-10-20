import React, {useState} from "react";
import Monthly from "./Monthly";
import Annually from "./Annually";



function Button() {
let [changeText, setChangeText] = useState(true);
const handleChange = () => {
return setChangeText(!changeText);
};

return (
<div>
  <div className="cta">

    <div className="cta">Monthly</div>
  


    <div className="cta form-check form-switch">

      <label className="switch">
      <input type="checkbox" onClick={()=>handleChange()} />
      <span className="slider round"></span>
      </label>
    </div>
   <div className="cta">Annually</div>


  </div>

  <div>{!changeText?
    <Annually />:
    <Monthly />}
  </div>


</div>)};


export default Button;