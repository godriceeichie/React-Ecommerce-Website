import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
    return (
        <footer>
            <div className='footer-container'>
                <p>2022 Simona's Headphones All rights reserverd</p>
                <p className='icons'>
                    <AiFillInstagram />
                    <AiOutlineTwitter />
                </p>
            </div>
        </footer>
    );
}

export default Footer;
