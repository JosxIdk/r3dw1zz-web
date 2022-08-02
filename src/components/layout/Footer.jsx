import Link from 'next/link'

const Footer = () => {
    return <>
        <footer className="pt-5">
            <p className="text-center text-white">Designed by <Link href={'#'}><a className="text-[#8233FF]">Leonel Vásquez</a></Link> & <b className="text-[#8233FF]">EL TITO</b></p>
        </footer>
    </>
}

export default Footer;