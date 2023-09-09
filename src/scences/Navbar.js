import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerPageCase = page.toLowerCase();
    return (
        <AnchorLink className=
            {`${selectedPage === lowerPageCase ? "text-yellow" : ""} hover:text-yellow transition duration-500`}
            href={`#${lowerPageCase}`}
            onClick={() => setSelectedPage(lowerPageCase)}
        >
            {page}
        </AnchorLink >

    )
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = React.useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
    const navbarBackground = isTopOfPage ? " " : "bg-red"
    console.log(isTopOfPage)
    return (
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
            <div className='flex items-center justify-between mx-auto w-5/6'>
                <h4 className='font-playfair text-3xl font-bold'>SBie</h4>
                {/*DESKTOP NAV*/}
                {isAboveSmallScreens ? (
                    <div className='flex justify-between gap-16 font-opensans text-sm font-semibold'>
                        <Link
                            page={"Home"}
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page={"Skills"}
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page={"Project"}
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page={"Testimonials"}
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page={"Contact"}
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>) :
                    <button
                        className='rounded-full bg-red py-2 px-3'
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        <i className="fa-solid fa-bars"></i>
                    </button>
                }
                {/*MOBILE MENU POPUP */}
                {!isAboveSmallScreens && isMenuToggled && (
                    <div className='fixed right-0 bottom-0 h-full bg-blue w-[280px]'>
                        <div className='flex justify-end p-8 pb-5 pr-9'>
                            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <i className="text-2xl fa-solid fa-xmark"></i>
                            </button>
                        </div>
                        <div className='flex flex-col gap-9 ml-[25%] text-xl text-deep-blue'>
                            <Link
                                page={"Home"}
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page={"Skills"}
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page={"Project"}
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page={"Testimonials"}
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page={"Contact"}
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        </div>
                    </div>
                )}
            </div>

        </nav>
    )
}

export default Navbar