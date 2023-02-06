import { Route, Routes } from "react-router"
import Logout from "./Pages/Logout"
import New from "./Pages/New"
import Patient from "./Pages/Patient"
import Report from "./Pages/Report"
import Setting from "./Pages/Setting"
import Upload from "./Pages/Upload"
import Folder from "./Pages/Folder"
// import Design from "./Design"
import Navbar from  "./Navbar"


 


const Appu = () =>
{

        

    return(
        <>
             {/* <Navbar /> */}
             <Routes>
                {/* <Route path="/" element={<Design />} /> */}
                <Route path="new" element={<New />} />
                <Route path="patient" element={<Patient />} />
                <Route path="folder" element={<Folder />} />
                <Route path="Upload" element={<Upload />} />
                <Route path="Report" element={<Report />} />
                <Route path="Setting" element={<Setting />} />
                <Route path="Logout" element={<Logout />} />



             </Routes> 
 
        </>
    )
}

export default Appu;