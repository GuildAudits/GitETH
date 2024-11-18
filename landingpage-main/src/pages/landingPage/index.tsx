import { Button } from "@/components/ui/button";
import { decrement, increment, RootState } from "@/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "@/components/Header";
import Landing from "../component/Land";
import FeaturedProjects from "../component/FeatureProjects";
import Login from "../component/Login";
import WhyYouChoose from "../component/WhyYouChoose";
import ProjectCategories from "../component/ProjectCategories";
import Footer from "@/components/Footer";

function LandingPage() {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div className="text-5xl text-red-700"></div>
      {/* <Button onClick={() => dispatch(decrement())}></Button>
      <div className="">{counter}</div> */}
      {/* <Button onClick={() => dispatch(increment())}></Button> */}
      <Header />
      <Landing />
      <FeaturedProjects />
      <Login />
      <WhyYouChoose />
      <ProjectCategories />
      <Footer />
    </>
  );
}
export default LandingPage;
