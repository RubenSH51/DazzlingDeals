import React from 'react'

export const TermsAndConditions = () => {
  return (
    <div className='text-black flex flex-col justify-center items-center'>
        <h1 className=' text-2xl mt-12 mb-4 font-bold'>Terms and Conditions</h1>

        <div className='w-3/4 flex flex-col justify-center items-center'>
            <p className="mb-4">Welcome to our marketplace! These terms and conditions outline 
                the rules and regulations for the use of our website. By accessing 
                this website, we assume you accept these terms and conditions in full.
                Do not continue to use our website if you do not agree with all of the 
                terms and conditions stated on this page.
            </p>
            
            <p className="mb-4">
            The following terminology applies to these Terms and Conditions, 
            Privacy Statement, and Disclaimer Notice and any or all 
            Agreements: "Client," "You," and "Your" refers to you, the person accessing 
            this website and accepting the Company's terms and conditions. "The Company," 
            "Ourselves," "We," "Our," and "Us" refers to our marketplace. "Party," "Parties," 
            or "Us" refers to both the Client and ourselves, or either the Client or ourselves.
            </p>

            <h2 className='font-bold text-lg'>Use of Our Website</h2>
            <p className="mb-4">By using our website, you warrant and represent that you are at least 18 years 
                of age and legally capable of entering into binding contracts. You agree to use
                this website only for lawful purposes and in accordance with all applicable
                laws and regulations.
            </p>

            <h2 className='font-bold text-lg'>Intellectual Property</h2>
            <p className="mb-4">The content, design, and logo of this website are the intellectual property of our
                marketplace and are protected by copyright laws. You are granted a limited 
                license only for the purpose of viewing the material contained on this website.
            </p>

            <h2 className='font-bold text-lg'>Limitation of Liability</h2>
            <p className="mb-4">In no event shall our marketplace, nor any of its officers, directors, and employees, 
                be liable to you for anything arising out of or in any way connected with your use 
                of this website. This includes, but is not limited to, any direct, indirect, incidental,
                consequential, or special damages.
            </p>

            <h2 className='font-bold text-lg'>Governing Law</h2>
            <p className="mb-4">These terms and conditions shall be governed by and construed in accordance with the 
                laws of Argentina, and any disputes relating to these terms and conditions will be 
                subject to the exclusive jurisdiction of the courts of Argentina.
            </p>
        </div>

    </div>
  )
}
