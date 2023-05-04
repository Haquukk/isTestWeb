import react from "react"
import { AiOutlineCopyrightCircle, AiOutlineInstagram, AiOutlineGithub, AiOutlineTwitter, AiOutlineLinkedin } from 'react-icons/ai'

const Footer = () => {
    return (
        <div className=" w-full flex items-end justify-between relative bg-gradient-to-t h-[20vh] from-secondary to-gray-600 font-light xl:text-[12px] text-[10px] p-5 gap-5 ">
            <div className=" flex flex-wrap items-center gap-1 bottom-5  ">
                <h1>updated </h1>
                <AiOutlineCopyrightCircle /> 
                <span> 2023 | Rizqi Al-Haq </span>
            </div>
            <div className=" xs:text-3xl flex flex-wrap xs:w-auto w-20 items-center text-2xl gap-2 ">
                <a href="https://www.instagram.com/alhaqnst/"> <AiOutlineInstagram  className="hover:blur-[1px] hover:animate-spin" /></a>
                <a href="https://github.com/Haquukk"> <AiOutlineGithub  className="hover:blur-[1px] hover:animate-pulse" /></a>
                <a href=""> <AiOutlineTwitter  className="hover:blur-[1px] hover:animate-pulse" /></a>
                <a href=""> <AiOutlineLinkedin  className="hover:blur-[1px] hover:animate-pulse" /></a>
                
            </div>
            <p className=" pl-5">BE INSPIRED. &nbsp; <span>BE_INSPIRING</span></p>
        </div>
    )
}

export default Footer