import { Logo } from "../Header"
import CreatedBy from "./CreatedBy"

const Footer = () => {
    return (
        <footer className="mt-auto text-white px-4 pt-8 pb-1 sm:pb-4 flex flex-col sm:flex-row justify-between items-center">
            <div className="sm:mb-[0.3rem] flex">
                <Logo textSizeClass="sm" />
                <span className="text-emerald-600">®</span>
            </div>
            <CreatedBy />
        </footer>
    )
}

export default Footer
