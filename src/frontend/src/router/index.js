import { BrowserRouter as Router, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion";
import SplashRoute from "../components/animation/SplashRoute";
import Dashboard from "../pages/Dashboard";
<<<<<<< HEAD
import Login from "../pages/Login";
import Register from "../pages/Register";
=======
import CourseDescription from "../pages/CourseDescription";
>>>>>>> de52ff9b0945b7ee789757c9338e2e47419f0ea6

export default function MyRoute() {
    return(
        <Router>
            <AnimatePresence>

                <Route path="/dashboard">
                    <SplashRoute key="/dashboard">
                     <Dashboard />
                    </SplashRoute>
                </Route>
<<<<<<< HEAD

                <Route exact path="/login">
                    <SplashRoute key="/login">
                     <Login></Login>
                    </SplashRoute>
                </Route>

                <Route exact path="/register">
                    <SplashRoute key="/register">
                     <Register></Register>
=======
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
>>>>>>> de52ff9b0945b7ee789757c9338e2e47419f0ea6
                    </SplashRoute>
                </Route>
            </AnimatePresence>  
        </Router>
    )
}