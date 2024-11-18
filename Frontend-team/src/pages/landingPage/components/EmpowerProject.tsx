import React from "react";
import arrowLeftIcon from "../../../assets/icons/arrowLefttIcon.svg";
import arrowRightIcon from "../../../assets/icons/arrowRightIcon.svg";
import image1 from "../../../assets/images/frame0.png";
import image2 from "../../../assets/images/frame1.png";
import CustomBtn from "@/components/CustomBtn";
import CustomText from "./CustomText";
import diamond from "../../../assets/icons/diamond.png";

interface Category {
  title: string;
  image: string;
  desc: string;
  tag: string;
}

const categories: Category[] = [
  {
    title: "Empower Your Project on Ethereum",
    image: image1,
    desc: "Build the future of dApps, DAOs, and digital assets on Ethereum with the support of Eth Open Source. Connect with skilled contributors—developers, designers, and community managers—to bring your vision to life on a secure, open-source blockchain. Join us to create resilient, impactful projects that shape the blockchain space.",
    tag: "Maintainers",
  },
  {
    title: "Join Forces to Build the Future",
    image: image2,
    desc: "Contribute your skills and grow with Eth Open Source. Whether you’re a developer, designer, or community builder—beginner or expert—there’s a place for you here. Collaborate on innovative Ethereum projects, learn from seasoned maintainers, and make a real impact in Web3.",
    tag: "Collaborators",
  },
];

/**
 * The EmpowerProject component displays a section that showcases
 * the benefits of using Eth Open Source to empower projects on Ethereum.
 * It renders a list of categories with images, titles, and descriptions,
 * and provides a call-to-action button to encourage users to join the community.
 * The section also includes a floating diamond icon that adds a touch of visual interest.
 */
export default function EmpowerProject() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 relative">
      <div className="h-full">
        {categories.map((category, id) => (
          <div key={id} className="mb-16">
            <div className="flex items-center flex-wrap">
              <div className="md:w-[50%] h-full mb-12">
                <span className="text-sm mb-5 font-normal py-2 px-4 border-border border rounded-3xl">
                  {category.tag}
                </span>
                <CustomText text={category.title} style="font-medium text-5xl my-7" />
                <p className="text-lg font-normal text-grayBlue">{category.desc}</p>
              </div>
              <div className="md:w-[50%]">
                <img src={category.image} alt={category.title} className="w-full" />
              </div>
            </div>
            <div
              className={`flex my-7 ${
                id % 2 !== 0 ? "justify-end" : "justify-start"
              }`}
            >
              <CustomBtn
                text=""
                colored="yes"
                icon={id % 2 === 0 ? arrowLeftIcon : arrowRightIcon}
                style="w-[72px] h-[72px]"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-20 right-[50%] -z-10">
        <img
          src={diamond}
          alt="Floating diamond icon"
          className="w-56 blur-lg animate-float-slow"
        />
      </div>
    </section>
  );
}
