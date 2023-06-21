import { motion } from "framer-motion";
  
const MenuItems = ({pageName, pageID}) => {
    return (
        <motion.div
            variants={{
                open: {
                    y: 0,
                    opacity: 1,
                    transition: {
                        y: { stiffness: 1000, velocity: -100 },
                    },
                    display: "block"
                },
            
                closed: {
                    y: "100%",
                    opacity: 0,
                    transition: {
                        y: { stiffness: 1000 },
                        display: { delay: 1.5, initial: 'hidden' }
                    },
                    display: "none"
                }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-xl mr-12"
        >
            <a href={`${pageID}`}> { pageName } </a>
        </motion.div>
    );
};

export default MenuItems