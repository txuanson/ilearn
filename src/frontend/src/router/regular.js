import { Route, Switch } from "react-router-dom"
import SplashRoute from "../components/animation/SplashRoute";

import Login from "../pages/Login";
import Register from "../pages/Register";
import CourseDescription from "../pages/CourseDescription";
import HomePage from "../pages/HomePage";
import HomeLayout from "../layout/HomeLayout";
import Profile from "../pages/Profile";
import Category from "../components/Category/Category";
import { useEffect, useState } from "react";
import { getAllCategory } from "../api/homePage";
import Search from "../components/search/Search";
import MyLearn from "../pages/MyLearn";

export default function RegularRoute() {
    const [category, setCategory] = useState([]);

  useEffect(async () => {
    try {
      const res = await getAllCategory()
      setCategory(res);
      console.log(res)
    } catch (err) {
      console.log("fail");
    }
  }, []);
    return (
        <HomeLayout>
            <Switch>
                <Route exact path="/login">
                    <SplashRoute key="/login">
                        <Login></Login>
                    </SplashRoute>
                </Route>

                <Route exact path="/register">
                    <SplashRoute key="/register">
                        <Register></Register>
                    </SplashRoute>
                </Route>

                <Route exact path="/course/:course_id">
                    <SplashRoute key="/course/:course_id">
                        <CourseDescription/>
                    </SplashRoute>
                </Route>
            

                <Route exact path="/register">
                    <SplashRoute key="/register">
                        <Register></Register>
                    </SplashRoute>
                </Route>

                <Route exact path="/">
                    <SplashRoute key="/">
                        <HomePage />
                    </SplashRoute>
                </Route>
                
                {category.map((item) => (
                    <Route path={"/category/" + item._id}>
                    <SplashRoute key={"/category/" + item._id}>
                        <Category idCategory = {item._id} nameCategory = {item.name}></Category>
                    </SplashRoute>
                    </Route>
            ))}

                <Route exact path="/profile/:user_id">
                    <SplashRoute key="/profile/:user_id">
                     <Profile></Profile>
                    </SplashRoute>
                </Route>

                <Route exact path="/search">
                    <SplashRoute key="/search">
                     <Search></Search>
                    </SplashRoute>
                </Route>

                <Route exact path="/learning">
                    <SplashRoute key="/learning">
                     <MyLearn></MyLearn>
                    </SplashRoute>
                </Route>
            </Switch>
        </HomeLayout>
    )
}