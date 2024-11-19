import arrowLeftIcon from "../../../assets/icons/arrowLefttIcon.svg";
import arrowRightIcon from "../../../assets/icons/arrowRightIcon.svg";
import image1 from "../../../assets/images/frame0.png";
import image2 from "../../../assets/images/frame1.png";
import CustomBtn from "@/components/CustomBtn";
import CustomText from "./CustomText";
import diamond from "../../../assets/icons/diamond.png";
import framem2 from "../../../assets/images/Framem22.svg";
import framem3 from "../../../assets/images/Framem3.svg";

interface Category {
  title: string;
  image: string;
  image2: any;
  desc: string;
  tag: string;
}


const categories: Category[] = [
  {
    title: "Empower Your Project on Ethereum",
    image: image1,
    image2: framem2,
    desc: "Build the future of dApps, DAOs, and digital assets on Ethereum with the support of Eth Open Source. Connect with skilled contributors—developers, designers, and community managers—to bring your vision to life on a secure, open-source blockchain. Join us to create resilient, impactful projects that shape the blockchain space.",
    tag: "Maintainers",
  },
  {
    title: "Join Forces to Build the Future",
    image: image2,
    image2: framem3,
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
    <section className="mx-auto max-w-7xl px-4 py-16 relative max-sm:pb-0">
      <div className="h-full">
        {categories.map((category, id) => (
          <div key={id} className="mb-16">
            <div className="flex items-center flex-wrap">
              <div className="md:w-[50%] h-full mb-12 max-sm:mb-0 max-sm:w-[345px] max-sm:mx-auto">
                <span className="text-sm mb-5 font-normal py-2 px-4 border-border border rounded-3xl max-sm:text-sm max-sm:font-normal ">
                  {category.tag}
                </span>
                <CustomText text={category.title} style="font-medium text-5xl max-sm:mb-2 my-7 max-sm:text-2xl max-sm:font-medium max-sm:text-center" />
                <p className="text-lg font-normal text-grayBlue max-sm:hidden">{category.desc}</p>
                <p className="sm:hidden text-grayBlue max-sm:text-[10px] max-sm:text-center">Build the future of dApps, DAOs, and digital assets on Ethereum with the support of Eth Open Source. </p>
              </div>
              <div className="md:w-[50%]">
                <img src={category.image} alt={category.title} className="w-full max-sm:hidden" />
                <img src={category.image2} alt={category.title} className="w-full sm:hidden" />
              </div>
            </div>
            <div
              className={`flex my-7 max-sm:my-0 ${
                id % 2 !== 0 ? "justify-end" : "justify-start"
              }`}
            >
              <CustomBtn
                text=""
                colored="yes"
                icon={id % 2 === 0 ? arrowLeftIcon : arrowRightIcon}
                style="w-[72px] h-[72px] max-sm:hidden"
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
