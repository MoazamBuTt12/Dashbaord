import React from "react";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import Dashboard from "./change file/Dashboard";
import Setting from "./change file/Setting";
import Goback_page_dashboard from "./change file/Goback_page_dashboard";
import Index from "./change file/Index";
import Blockapi from "./change file/Blockapi";
import Variation1simple from "./change file/Variation1simple";
import Variation2simple from "./change file/Variation2simple";
import Variation3simple from "./change file/Variation3simple";
import Variation4simple from "./change file/Variation4simple";
import Variation1image from "./change file/Variation1image";
import Variation2image from "./change file/Variation2image";
import Variation3image from "./change file/Variation3image";
import Variation4image from "./change file/Variation4image";
import Variation1video from "./change file/Variation1video";
import Variation2video from "./change file/Variation2video";


function RouteConfig(){
    return<>
    <div>
        <BrowserRouter>
        <Routes>
      
         <Route path="/" element={<Dashboard/>}/>
         <Route path="Setting" element={<Setting/>}/>
         <Route path="Goback_page_dashboard" element={<Goback_page_dashboard/>}/>
         <Route path="Index" element={<Index/>}/>
         <Route path="Blockapi" element={<Blockapi/>}/>
         <Route path="Variation1simple" element={<Variation1simple/>}/>
         <Route path="Variation2simple" element={<Variation2simple/>}/>
         <Route path="Variation3simple" element={<Variation3simple/>}/>
         <Route path="Variation4simple" element={<Variation4simple/>}/>
         <Route path="Variation1image" element={<Variation1image/>}/>
         <Route path="Variation2image" element={<Variation2image/>}/>
         <Route path="Variation3image" element={<Variation3image/>}/>
         <Route path="Variation4image" element={<Variation4image/>}/>
         <Route path="Variation1video" element={<Variation1video/>}/>
         <Route path="Variation2video" element={<Variation2video/>}/>


        </Routes>
        </BrowserRouter>
    </div>
    </>
}
export default RouteConfig;