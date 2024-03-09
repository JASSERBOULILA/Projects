import React from 'react'
import elyess from '../assets/elyess.png'
import '../styles/Productowner.css'

const ProductOwner = () => {
    return (
        <div className='containerproducto' id='aboutus'>
            <img className='poel' src={elyess} alt="" />
            <div className='thetalk'>
                <h4>Ilyes Ben Smida    </h4>
                <h5>I envision a comprehensive website for billing that addresses the common challenges individuals and businesses face in managing their invoicing and financial transactions. The existing solutions and manual processes often lead to inefficiencies, prompting the need for a more streamlined approach. Our website for billing aims to provide a user-friendly platform with key features such as easy invoice creation, customizable templates, and efficient tracking of payments and outstanding invoices. The platform will also facilitate client management, enabling users to organize client information and streamline communication.</h5>
            
            </div>
        </div>
    )
}

export default ProductOwner