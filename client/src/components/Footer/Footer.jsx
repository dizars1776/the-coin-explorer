import { Logo } from "../Header"
import CreatedBy from "./CreatedBy"

const Footer = () => {
    return (
        <footer className="mt-auto text-white p-4 flex flex-row justify-between items-center">
            <div className="mb-[0.3rem]">
                <Logo textSizeClass="sm" />
            </div>
            <CreatedBy />
        </footer>
    )
}

export default Footer
