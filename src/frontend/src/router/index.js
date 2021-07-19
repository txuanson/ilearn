import { BrowserRouter as Router, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion";
import SplashRoute from "../components/animation/SplashRoute";
import Dashboard from "../pages/Dashboard";
import CourseDescription from "../pages/CourseDescription";

export default function MyRoute() {
    return(
        <Router>
            <AnimatePresence>
                <Route path="/dashboard">
                    <SplashRoute key="/dashboard">
                     <Dashboard />
                    </SplashRoute>
                </Route>
                <Route path="/coursedescription">
                    <SplashRoute key="/coursedescription">
                     <CourseDescription
                     name = "Welcome to our website"
                     category = "Category"
                     cover ="/logo512.png"
                     public = {false}
                     text = "Brief description about the course. Brief description about the course."
                     content ="## 📖 About this class"
                     />
                    </SplashRoute>
                </Route>
            </AnimatePresence>  
        </Router>
    )
}