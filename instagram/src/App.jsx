import Feed from "./component/Feed";
import Sidebar from "./component/Sidebar";
import Suggestions from "./component/Suggestions";
import "./index.css";
import React from "react";

function App() {
     return (
      <div className="cointainer h-lvh flex bg-black">
        <div className="w-2/6  hidden md:block"><Sidebar/></div>
        
        <div className=" w-full px-5 md:px-0 md:w-4/6"><Feed/></div>
        <div className="w-2/6 hidden lg:block"><Suggestions/> </div>
      </div>
     )
    
}

export default App;
