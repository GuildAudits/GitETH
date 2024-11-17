// import { Button, Card, Carousel } from "flowbite-react";
import arrowLeftIcon from "../../../assets/icons/arrowLefttIcon.svg";
import arrowRightIcon from "../../../assets/icons/arrowRightIcon.svg";
import image1 from "../../../assets/images/frame0.png";
import image2 from "../../../assets/images/frame1.png";
import CustomBtn from "@/components/CustomBtn";
import CustomText from "./CustomText";
import diamond from "../../../assets/icons/diamond.png"
const categories = [
  {
    title: "Empower Your Project on Ethereum",
    image: image1,
    desc: "Build the future of dApps, DAOs, and digital assets on Ethereum with the support of Eth Open Source. Connect with skilled contributors—developers, designers, and community managers—to bring your vision to life on a secure, open-source blockchain. Join us to create resilient, impactful projects that shape the blockchain space.",
    tag: "Maintainers"
  },
  {
    title: "Join Forces to Build the Future",
    image: image2,
    desc: "Contribute your skills and grow with Eth Open Source. Whether you’re a developer, designer, or community builder—beginner or expert—there’s a place for you here. Collaborate on innovative Ethereum projects, learn from seasoned maintainers, and make a real impact in Web3.",
    tag: "Collaborators"
  },
];
export default function EmpowerProject() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 relative">
      <div className="h-full">

        {categories.map((category, id) => (
          <>
            <div className="flex items-center flex-wrap ">
              <div className="md:w-[50%] h-full mb-12 ">
                <span className="text-sm mb-5 font-normal py-2 px-4 border-border border rounded-3xl">{category.tag}</span>
                <CustomText text={category.title} style="font-medium text-5xl my-7" />
                <p className="text-lg font-normal text-grayBlue">{category.desc}</p>
              </div>
              <div className="md:w-[50%]">
                <img src={category.image} alt="" className="w-full" />
              </div>
            </div>
            <div className={`flex my-7 ${id % 2 !== 0 ?"justify-end":"justify-start"}`}>
              {id % 2 === 0 ? <CustomBtn text="" colored="yes" icon={arrowLeftIcon} style={"w-[72px] h-[72px]"} /> : <CustomBtn text="" colored="yes" icon={arrowRightIcon} style={"w-[72px] h-[72px]"} />}
            </div>
          </>
        ))}
      </div>
      <div className="absolute top-20  right-[50%] -z-10">
        <img src={diamond} alt="" className=" w-56 blur-lg animate-float-slow" />
      </div>

    </section>
  );
}