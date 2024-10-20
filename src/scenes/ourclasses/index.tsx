import { SelectedPage } from '@/shared/types'
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import { ClassType } from '@/shared/types'
import Class from "./Class";



const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sun",
        image:image1
    },
    {
        name: "Yoga Classes",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sun",
        image:image2
    },
    {
        name: "Abs Core Classes",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sun",
        image:image3
    },
    {
        name: "Adventure Classes",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sun",
        image:image4
    },
    {
        name: "Fitness Classes",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sun",
        image:image5
    },
    {
        name: " Training Classes",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sun",
        image:image6
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section className='w-full bg-primary-100 py-40' id='ourclasses'>
      <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
        initial='hidden'
        whileInView="visible"
        viewport={{once: true, amount:0.5}}
        transition={{duration:0.5}}
        variants={{
            hidden:{opacity:0, x:-50 },
            visible:{opacity:1, x:0},
        }}
        className="mx-auto w-5/6">
            <div className='md:w-3/5'>
                <HText>OUR CLASSES</HText>
                <p className='py-5'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sun
                </p>
            </div>
        </motion.div>
        {/* overflow for the images */}
        <div className='mt-10 h-[355px] w-full overflow-x-auto overflow-y-hidden'>
        <ul className='w-[2800px] whitespace-nowrap'>
           {classes.map((item: ClassType, index) => (
            <Class
            key={`${item.name}-${index}`}
            name={item.name}
            description={item.description}
            image={item.image}
            />
           ))} 
        </ul>
        </div>
        </motion.div>   
    </section>
  )
}

export default OurClasses