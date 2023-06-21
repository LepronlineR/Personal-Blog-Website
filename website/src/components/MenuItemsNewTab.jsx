import { motion } from "framer-motion";
import openNewTabLink from "../hooks/openNewTabLink";

const MenuItemsNewTab = ({ pageName, websiteName }) => {
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
            className="text-xl mr-1 ml-10"
        >
            <button 
                onClick={() => openNewTabLink(websiteName)}
            > 
                { pageName } 
            </button>
        </motion.div>
    );
};

export default MenuItemsNewTab