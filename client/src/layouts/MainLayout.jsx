import Header from '../components/Header'
import Footer from '../components/Footer'

const MainLayout = ({ children }) => {
    return (
        <div className='container mx-auto flex flex-col gap-4 min-h-screen'>
            <Header />
            <div className='flex-1'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout
