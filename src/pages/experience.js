import { motion } from 'framer-motion'

const Experience = () => {
    return <>
        <h1 className='text-4xl font-bold'>¿Qué he hecho?</h1>
        <motion.div animate={{ y: 20}} className='grid grid-rows-3 grid-flow gap-4'>
            <p className=' w-86 text-center'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies orci a felis malesuada, facilisis luctus odio porttitor. Nunc at mi id elit suscipit rhoncus sed hendrerit odio. Donec at diam at leo pulvinar molestie. Donec arcu massa, laoreet in cursus in, cursus at tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis id pharetra leo. Aenean non aliquam velit, ac efficitur lacus. Aenean consectetur, tellus sit amet efficitur tincidunt, leo mauris scelerisque ipsum, elementum interdum mi turpis vitae sem. Nam vulputate tristique nibh quis aliquet. Cras ut augue vel magna placerat vehicula.</p>
        </motion.div>
    </>
}

export default Experience