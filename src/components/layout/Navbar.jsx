import {useState} from 'react'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {

    const [open, setOpen] = useState(false)

    return <>
    
    <nav className="flex justify-between h-24 items-center w-[90%] mx-auto">
        <Link href={'/'}><a className='font-bold font-mono text-2xl'>ʀ3ᴅᴡ1ᴢᴢ</a></Link>
        <div className="z-30">
            { !open && <FaBars className="transform scale-125 cursor-pointer text-white text-xl" onClick={() => setOpen(true)}/> }
            { open && <FaTimes className="transform scale-125 cursor-pointer text-white text-xl" onClick={() => setOpen(false)}/> }
        </div>
        <ul className={`z-20 absolute top-0 right-0 h-full w-44 flex flex-col justify-center items-start gap-5 transform ${open ? 'translate-x-0' : 'translate-x-[200%]'} bg-[#3F0071] transition-all`}>
            {['Home', 'About me', 'Experience', 'Skills', 'Contact'].map((link, i) => {
                return <li key={i} className="w-full py-1 transition-colors hover:bg-[#8233FF]"><Link href={`${!i ? '/' : `/${link.toLowerCase().replace(' ', '')}`}`}><a className="ml-5">{link}</a></Link></li>
            })}
        </ul>
    </nav>
    </>
}

export default Navbar;