import { BrowserRouter, Route, Routes } from "react-router-dom"
import Employee from "./Employee";
import Home from "./Home";
import PageNotFound from "./PageNotFound";
import AddEmployee from "./AddEmployee";

const Router = () =>{
    return (
        <div>   
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home/>}/> 
                    <Route exact path="/employees" element={<Employee/>}/> 
                    <Route exact path="/add" element={<AddEmployee/>}/> 
                    <Route exact path="/edit/:employeeId" element={<AddEmployee/>}/> 
                    <Route exact path="*" element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Router;