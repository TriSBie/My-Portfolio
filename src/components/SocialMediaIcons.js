import React from 'react'

const SocialMediaIcons = () => {
    return (
        <div className='flex justify-center md:justify-start gap-7 my-10'>
            <a className='hover:opacity-50 transition duration-500'
                href='https://www.facebook.com/'
                target='_blank'
                rel="noreferrer"
            >
                <i className="fa-brands fa-facebook text-3xl"></i>
            </a>
            <a className='hover:opacity-50 transition duration-500'
                href='https://github.com/TriSBie'
                target='_blank'
                rel="noreferrer"
            >
                <i className="fa-brands fa-github text-3xl"></i>
            </a>
            <a className='hover:opacity-50 transition duration-500'
                href='https://twitter.com/'
                target='_blank'
                rel="noreferrer"
            >
                <i className="fa-brands fa-x-twitter text-3xl"></i>
            </a>
            <a className='hover:opacity-50 transition duration-500'
                href='https://www.instagram.com/?hl=en'
                target='_blank'
                rel="noreferrer"
            >
                <i className="fa-brands fa-instagram text-3xl"></i>
            </a>

        </div>
    )
}

export default SocialMediaIcons