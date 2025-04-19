import { motion } from "framer-motion";
import Logo from "../sections/Logo";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";

export default function Navbar() {
    const [responsiveNavVisible, setResponsiveNavVisible] = useState(false);
    const sectionLinks = [
        { name: 'About', link: '/#about' },
        { name: 'Experience', link: '/#experience' },
        { name: 'Work', link: '/#work' },
        { name: 'Contact', link: '/#contact' },
    ];
    return (
        <nav>
            <div className={`wrapper`}>
                <motion.div
                    className="brand"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.5,
                        ease: 'easeInOut',
                    }}
                >
                    <Logo />
                </motion.div>
                <motion.div
                    className="nav-responsive-toggle"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.3,
                        ease: 'easeInOut',
                    }}
                >
                    {responsiveNavVisible ? (
                        <X
                            onClick={(e) => {
                                e.stopPropagation();
                                setResponsiveNavVisible(false);
                                
                            }}
                            size={24} // Customize size if needed
                        />
                    ) : (
                        <Menu
                            onClick={(e) => {
                                e.stopPropagation();
                                setResponsiveNavVisible(true);
                            }}
                            size={24} // Customize size if needed
                        />
                    )}
                </motion.div>
                <motion.div
                    className={`${responsiveNavVisible && 'nav-responsive'} nav-items`}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{
                        duration: 0.3,
                        ease: 'easeInOut',
                    }}
                >
                    <ul className="nav-items-list">
                        {sectionLinks.map(({ name, link }, index) => (
                            <motion.li
                                key={name}
                                className="nav-items-list-item"
                                initial={{ opacity: 0, y: -25 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.3,
                                    ease: 'easeInOut',
                                    delay: 0.1 + index * 0.1,
                                }}
                                onClick={() => {
                                    const sectionId = link.replace('/#', '');
                                    const element = document.getElementById(sectionId);
                                    // If element exists, scroll to it
                                    if (element) {
                                        console.log("element 2342", element)
                                        element.scrollIntoView({ behavior: 'smooth' });
                                        // Close responsive nav if open
                                        setResponsiveNavVisible(false);
                                    }
                                }}
                                style={{ cursor: 'pointer' }}
                            >
                                {name}
                            </motion.li>
                        ))}
                    </ul>
                    <motion.div
                        className="nav-items-button"
                        initial={{ opacity: 0, y: -25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.3,
                            ease: 'easeInOut',
                            delay: 0.6,
                        }}
                    >
                        <Button
                            text="Resume"
                            link="https://drive.google.com/file/d/1KwoW5uTW2aUEoi14CnM6JGQatup_5aAf/view?usp=sharing"
                        />
                    </motion.div>
                </motion.div>

            </div>
        </nav>
    );
}
