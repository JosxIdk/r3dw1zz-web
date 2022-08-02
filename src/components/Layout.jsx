import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { motion } from 'framer-motion'
/**
 * @param {{ children: ReactNode }} param0
 */
const Layout = ({ children }) => {

    return <>
        <Navbar />
        <motion.main initial={{ opacity: 0}} animate={{ opacity: 1 }} className="bg-[#0F0E0E] text-white relative flex flex-col items-center min-h-[calc(100vh-9rem)]">
            { children }
        </motion.main>
        <Footer />
    </>;
}
 
export default Layout;