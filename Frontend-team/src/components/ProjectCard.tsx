import { Button } from './ui/button'
import skillIcon from "../assets/icons/skill.svg";
import { ArrowRightIcon } from 'lucide-react';
// import {IProjectItem} from "./types"
const ProjectCaard = ({ project }: any) => {
  return (
    <div className={` p-5 border border-border backdrop-blur-md  bg-white bg-opacity-5 rounded-3xl `}>
      <img src={project.icon} alt="" className="h-20 w-20 mb-5" />
      <h3 className="text-2xl font-bold text-white mb-5">{project.title}</h3>
      <p className="text-[#B3B8DB] text-base mb-5">{project.description}</p>

      <div className="flex gap-2 text-sm items-center mb-5 flex-wrap">
        <img src={skillIcon} alt="" className='w-4 h-4' />
        <div className="flex gap-1 ">
          {project.technology.map((item: string, id: number) => <span className='text-sm' key={id}>{`${item}${id + 1 < project.technology.length ? "," : ""}`}</span>)}
        </div>
        <div className="border-border border backdrop-blur-sm py-2 px-4 rounded-3xl">
          <p className="overflow-hidden">{project.difficulty}</p>
        </div>

      </div>
      <div className="flex justify-end">
        <Button className="rounded-full bg-transparent text-white hover:text-gray-700 justify-self-end text-base">
          Learn More <ArrowRightIcon/>
        </Button>
      </div>
    </div>
  )
}

export default ProjectCaard
