import { Button } from "flowbite-react";
import ethIcon from "../../../assets/icons/eth.svg";
import tetherIcon from "../../../assets/icons/tether.svg";
import CustomBtn from "@/components/CustomBtn";
import githubIcon from "../../../assets/icons/githubIcon.png"
import CustomText from "./CustomText";
export default function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24 mb-32">
      <div className="space-y-8 text-center">
        <CustomText style={"text-4xl font-bold leading-tight md:text-6xl"} text={"Fueling Ethereum Community with  Open-Source Contribution"}/>
        <p className="mx-auto max-w-2xl text-lg text-gray-400">
          Join our thriving community of developers and contribute to the future of Ethereum ecosystem
        </p>
        <div className="flex justify-center gap-4 items-center">
          <CustomBtn text="Login with GIthub" icon={githubIcon} colored="yes"/>
          <CustomBtn text="Learn More" icon={githubIcon}/>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute left-0 top-64 -z-50 opacity-15 sm:opacity-100">
        <img src={tetherIcon} alt="" className="w-72 animate-float-slow" />
      </div>
      <div className="absolute right-0 top-64 -z-50 opacity-15 sm:opacity-100">
        <img src={ethIcon} alt="" className="animate-pulse  w-72" />
      </div>
      {/* <div className="absolute -left-20 top-40">
        <div className="h-64 w-64 rounded-full bg-purple-500/20 blur-3xl"></div>
      </div>
      <div className="absolute -right-20 top-60">
        <div className="h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"></div>
      </div> */}
    </section>
  );
}