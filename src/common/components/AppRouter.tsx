import { Route, Routes} from "react-router-dom";
import {HomeFeature} from "../../pages"
import {PostFeature} from "../../pages" 

export const AppRouter = () => (
    <Routes>
      <Route path="/" element={< HomeFeature/>} />
     <Route path="currentPost/:postId" element={< PostFeature/>} />  
      
    </Routes>
)