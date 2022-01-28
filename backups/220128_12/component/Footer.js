import React from 'react';
import logo from '../img/logo.png';

export default function Footer() {
    const thisYear = () => {
        const year = new Date().getFullYear();
        return year
    };
    
    return (
        <div>
            <div style={{ verticalAlign: 'middle', display: 'flex', justifyContent: 'center' }}>
                <a href="/">
                    <img
                        alt="logo"
                        src={logo}
                        style={{ width:210, height:140, margin:'auto' }}
                        
                    />
                </a>
            </div>
            <p style={{ textAlign: 'center', color: 'gray' }}>
                Copyright &copy; <span>{thisYear()}</span> NFT PRO CLOUD All rights reserved
            </p>
        </div>
            
    )
}