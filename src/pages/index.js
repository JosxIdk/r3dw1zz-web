import Typewriter from 'typewriter-effect'
import { motion, AnimatePresence } from 'framer-motion'
import { VscTwitter } from "react-icons/vsc"
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import Link from "next/link"

const Home = () => {
  return <>
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, y: '-50%', x: '-50%' }} exit={{ opacity: 0 }} className="absolute top-2/4 left-2/4">
        <img className='w-32 rounded-full mx-auto' src="https://media.discordapp.net/attachments/1003356525701627927/1003382761651978291/1_sin_titulo_20220722080448.png?width=473&height=473"></img>
        <h1 className="text-white font-extrabold font-mono text-center text-4xl mt-2"><Typewriter onInit={(typewriter) => {
          typewriter.typeString('ʀ3ᴅᴡ1ᴢᴢ - Ethical Hacker').callFunction(() => { console.log('String typed out!') }).pauseFor(2500).start()
        }} /></h1>
        <p className='text-center text-white mt-2 font-mono text-xl'>Bienvenido a mi <b className='font-bold underline decoration-[#8233FF]'>portafolio</b></p>
        <ul className='flex flex-wrap justify-center text-center mx-auto gap-5'>
          <li><Link href={'#'}><VscTwitter className='text-center text-white mx-auto text-2xl mt-6 hover:scale-75' /></Link></li>
          <li><Link href={'#'}><FaFacebook className='text-center text-white mx-auto text-2xl mt-6 hover:scale-75' /></Link></li>
          <li><Link href={'#'}><FaInstagram className='text-center text-white mx-auto text-2xl mt-6 hover:scale-75' /></Link></li>
          <li><Link href={'#'}><FaLinkedin className='text-center text-white mx-auto text-2xl mt-6 hover:scale-75' /></Link></li>
        </ul>
      </motion.div>
    </AnimatePresence>
  </>
}

export default Home;