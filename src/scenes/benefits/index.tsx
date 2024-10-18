import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import { BenefitType } from "@/shared/types";
import BenefitPageGraphic from "@/assets/BenefitsPageGraphic.png"
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";


const benefits:Array<BenefitType> = [
   {
    icon: <HomeModernIcon className="h-6 w-6"/>,
    title: "State of the Art Facilities",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
   },
   {
    icon: <UserGroupIcon className="h-6 w-6"/>,
    title: "100's of Diverse Classes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
   },
   {
    icon: <AcademicCapIcon className="h-6 w-6"/>,
    title: "Expert and Pro Trainers",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
   },
];
const container ={
    hidden:{},
    visible:{
        transition:{ staggerChildren: 0.3}
    }
}


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
    id="benefits"
    className="mx-auto min-h-full w-5/6 py-20">
    <motion.div
    onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
    >
        {/* header */}
     <motion.div
     initial='hidden'
     whileInView="visible"
     viewport={{once: true, amount:0.5}}
     transition={{duration:0.5}}
     variants={{
         hidden:{opacity:0, x:-50 },
         visible:{opacity:1, x:0},
     }}
     className="md:my-5 md:w-3/5">
        <HText>MORE THAN JUST GYM.</HText>
        <p className="my-5 text-sm">We provide world-class fitness equipment , trainers and classes to get you to your ultimate goal with ease. We provide true care into each and every member. </p>
     </motion.div>
     {/* benefits */}
     <motion.div
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, amount:0.5}}
     variants={container}
     className="md:flex items-center justify-between gap-8 mt-5">
        {benefits.map((benefit: BenefitType) => (
            <Benefit
            key={benefit.title}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            setSelectedPage={setSelectedPage}
            />
        ))}
     </motion.div>

     {/* graphics and description */}
     <div className="mt-16 md:flex items-center justify-between gap-20 md:mt-28">

        {/* graphic */}
        <img src={BenefitPageGraphic} alt="benfitpagegraphic" className="mx-auto" />

        {/* description */}
        <div>
            {/* title */}
            <div className="relative">
                {/* for the image to position */}
                <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                    {/* for title writeup */}
                <motion.div
                initial='hidden'
                whileInView="visible"
                viewport={{once: true, amount:0.5}}
                transition={{duration:0.5}}
                variants={{
                    hidden:{opacity:0, x:50 },
                    visible:{opacity:1, x:0},
                }}
                >
                    <HText>
                        MILLIONS OF HAPPY MEMBERS GETTING{" "} <span className="text-primary-500">FIT</span>
                    </HText>
                </motion.div>
                </div>
            </div>

            {/* description text */}
            <motion.div
            initial='hidden'
            whileInView="visible"
            viewport={{once: true, amount:0.5}}
            transition={{delay: 0.2, duration:0.5}}
            variants={{
                hidden:{opacity:0, x:-50 },
                visible:{opacity:1, x:0},
            }}
            >
                <p className="my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>

                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </motion.div>
            {/*button  */}
            <div className="relative mt-16">
                {/* for the image postioned absolute to the button */}
                <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                    <ActionButton
                    setSelectedPage={setSelectedPage}
                    > Join Now</ActionButton>
                </div>
            </div>

        </div>
     </div>
    </motion.div>
    </section>
  )
}

export default Benefits