import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";


const LoadingScreen = () => {
    const { progress } = useProgress()

    const [loading, setLoading] = useState(true)
    const [showBg, setShowBg] = useState(true);
    const [loadingTimeout, setLoadingTimeout] = useState(null)
    const [text, setText] = useState("");
    const sentence = "Hello World!";

    useEffect(() => {
        setLoadingTimeout(setTimeout(() => setLoading(false), 4000))
        setShowBg(false)
    }, [])

    useEffect(() => {
        let timer = setTimeout(() => {
            setText(sentence.slice(0, text.length + 1));
        }, 100);
        if (text.length === sentence.length) clearTimeout(timer);
        return () => clearTimeout(timer);
    }, [text]);


    return (
        <motion.div
            className={`${!loading ? 'hidden' : 'absolute inset-0'}`}>
            <motion.div
                animate={{ opacity: showBg ? 1 : 0 }}
                transition={{ duration: 1, delay: 3 }}
                className="h-[100%] flex justify-center items-center flex-col bg-gradient-to-l from-secondary via-transparent to-primary"
            >
                <motion.div
                    style={{ opacity: `${progress}%` }}
                    className="xl:text-8xl text-6xl font-thin text-center">
                    DAMNFOLIO.
                    <motion.h1
                        variants={textVariant}
                        initial="hidden"
                        animate="visible"
                        className="text-2xl font-light"
                    >
                        {text}
                    </motion.h1>
                </motion.div>
            </motion.div>
        </motion.div >
    )
}

export default LoadingScreen 