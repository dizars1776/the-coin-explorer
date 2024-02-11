import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className='relative h-[calc(100vh-220px)] overflow-hidden flex flex-col gap-y-4 p-7 justify-center items-center'>
            <div className='container mt-8 mb-12'>
                <center>
                    <div className='max-w-xs'>
                        <img className="w-full max-w-lg lg:mx-auto" src="/images/not_found_illustration.svg" alt="not found 404" />
                    </div>
                    <div className='tracking-widest mt-4'>
                        <div className='text-gray-500 text-lg my-4'>
                            Sorry, the page you are looking for doesnt't exist.
                        </div>
                    </div>
                </center>
                <center className='mt-10'>
                    <Link
                        to={'/'}
                        className='text-gray-500 font-mono text-lg bg-gray-700 p-3 rounded-lg transition-colors hover:shadow-md hover:text-gray-200 hover:bg-gray-600'
                    >
                        Home
                    </Link>
                </center>
            </div>
        </div>
    )
}

export default NotFound

