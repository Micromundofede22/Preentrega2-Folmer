import "./Portada.scss"
import isocolor from "./../../assets/isocolor.png"
import { motion } from "framer-motion"


const Portada = () => {

    return (
        <motion.div className="portada-contenedor">
            <motion.div className="contenedor-img">
                <motion.img
                    whileinview={{}}
                    transition={{ duration: 2 }}
                    viewport={{}}
                    animate={{ x: -380, }}
                    drag="x" dragConstraints={{ right: 0, left: -5 }} 
                    className="portada-img" src={isocolor} alt="Hojas" />
            </motion.div>

            <motion.h1
                whileinview={{color:"black"}}
                initial={{y:0}} animate={{ y: -200, x:50, scale:2.5, style:{fontStyle:"italic"}}}
                transition={{ duration: 2 }}
                // viewport={{}}
                
                drag="y" 
                className="portada-titulo">Micromundo</motion.h1>

            <hr />
            <motion.h3 
            initial={{ x: 0, y: 0, opacity:0}} animate={{ x: 200, y:-200, opacity:1 }}
            transition={{ duration: 2 }}
            className="portada-subt">Decoración y reflexión...</motion.h3>



        </motion.div>
    )
}

export default Portada