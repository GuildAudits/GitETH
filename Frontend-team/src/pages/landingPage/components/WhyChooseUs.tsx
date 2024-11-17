
import teamIcon from "../../../assets/icons/teamIcon.svg";
import diamonIcon from "../../../assets/icons/diamondIcon.svg";
import fastIcon from "../../../assets/icons/fastIcon.svg";
import womanLaptop from "../../../assets/images/womanLaptop.png";
import CustomText from "./CustomText";
import diamond from "../../../assets/icons/diamond.png"

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: teamIcon,
      title: "Collaborate with Leading Developers",
      description: "Access a community of experienced contributors.",
    },
    {
      icon: diamonIcon,
      title: "Contribute and Earn",
      description: "Get paid for your contributions through cryptocurrency or custom payment options.",
    },
    {
      icon: fastIcon,
      title: "Build Your Skills",
      description: "Access learning resources, mentorship programs, and growth opportunities.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 ">
      <div className="grid gap-8 md:grid-cols-2 items-center relative backdrop-blur-md">

        <div className=""><img src={womanLaptop} alt="" className="max-w-[787px] w-full" /></div>
        <div className="">
          <div className=" ">
            <CustomText style={"text-3xl mb-8 font-bold leading-tight md:text-5xl"}  text="Why Choose Us"/>
            <div className="">
              {benefits.map((benefit, id)=> (
                <div className="flex mb-5 items-start gap-5" key={id}>
                  <img src={benefit.icon} alt="" className="w-14" />
                  <div className="">
                    <h3 className="text-2xl mb-2">{benefit.title}</h3>
                    <p className="text-grayBlue text-lg">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
          <div className="absolute top-0  right-10 -z-10">
              <img src={diamond} alt="" className=" w-56 blur-lg animate-float-slow" />
            </div>
      </div>
    </section>
  );
}