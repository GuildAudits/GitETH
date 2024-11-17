import { Card } from "flowbite-react";
import logo1 from "../../../assets/images/logo1.png";
import logo2 from "../../../assets/images/logo2.png";
import logo3 from "../../../assets/images/logo3.png";
import diamondBlur from "../../../assets/icons/diamondBlur.svg"
import diamond from "../../../assets/icons/diamond.png"
import featureIcon from "../../../assets/icons/feature.svg";
import { ArrowBigRight, ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
export default function FeaturedProjects() {
  const projects = [
    {
      title: "DeFi Protocol Enhancement",
      description: "Help improve the security and scalability of a cutting-edge decentralized finance protocol...",
      difficulty:"Intermediate",
      technology: ["Solidity", "Defi", "Security"],
      icon: logo1,
    },
    {
      title: "DAO Governance Dashboard",
      description: "Develop a user-friendly interface for DAO members to vote, propose changes, and track...",
      difficulty:"Beginner",
      technology: ["React", "DAO", "Governance"],
      icon: logo2,
    },
    {
      title: "NFT Marketplace Expansion",
      description: "Contribute to the development of new features for a popular NFT marketplace. Enhance smart...",
      difficulty:"Expert",
      technology: ["Web3", "NFTs", "SmartContracts"],
      icon: logo3,
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 pt-16 relative">
      <div className=" border border-blue-900 rounded-3xl p-3 pt-0 sm:p-11 sm:pt-0 backdrop-blur-md ">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="">
          <img src={featureIcon} alt="" className="mx-auto"/>
        </div>

        <div className="mb-12 flex items-center justify-center ">
          <div className="relative">
            <h2 className="text-center text-5xl font-bold mt-1 mb-10">Featured Projects</h2>
            {/* <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
              <img src="/divider-icon.svg" alt="" className="h-8 w-8" />
            </div> */}
          </div>
        </div>
        <div className="flex items-center justify-center mb-10">
          <Button className="rounded-full mx-auto py-3 px-4 text-base">View all Projects <ArrowRightIcon/></Button>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, id) => (
            <div  key={project.title} className={`backdrop-blur-lg ${ id % 2 == 0? "mb-7":"mt-7"}`}>
            <ProjectCard project={project}/>
            </div>
          ))}
        </div>

        {/* Background */}
      </div>
      <div className="absolute top-10 left-10 right-0 -z-10">
        <img src={diamondBlur} alt=""  className="rotate-45 w-56"/>
      </div>
      <div className="absolute top-10  -right-12 -z-10">
        <img src={diamond} alt="" className=" w-56"/>
      </div>
    </section>
  );
}