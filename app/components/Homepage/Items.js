import React from 'react'
import Heading from './Heading'
import Item from './Item'


const Items = () => {
    return (
        <div className='border-t'>
            <Heading />
            <Item logo='/wix.png' brand='Wix' chatCount='7' desc='Developed a personalized fit' categories={['Automation']} tags={['#DigitalTransformation']} meeting='in 30 minutes' 
            images={['/profile.jpeg', '/profile.jpeg', '/profile.jpeg']}/>
            <Item logo='/wix.png' brand='Shopify' chatCount='0' desc='Introduce a cloud based product' categories={['Ecommerce', 'B2B']} tags={['#DigitalTransformation']} meeting='in 30 minutes' 
            images={['/profile.jpeg', '/profile.jpeg', '/profile.jpeg']}/>
            <Item logo='/wix.png' brand='MailChimp' chatCount='0' desc='Introduce a cloud based product' categories={['Ecommerce', 'B2B']} tags={['#DigitalTransformation']} meeting='in 30 minutes' 
            images={['/profile.jpeg', '/profile.jpeg', '/profile.jpeg']}/>
            <Item logo='/wix.png' brand='PayPal' chatCount='0' desc='Introduce a cloud based product' categories={['Ecommerce', 'B2B','C2B']} tags={['#DigitalTransformation']} meeting='in 30 minutes' 
            images={['/profile.jpeg', '/profile.jpeg', '/profile.jpeg']}/>
            <Item logo='/wix.png' brand='Disney' chatCount='0' desc='Introduce a cloud based product' categories={['Ecommerce', 'B2B']} tags={['#DigitalTransformation']} meeting='in 30 minutes' 
            images={['/profile.jpeg', '/profile.jpeg', '/profile.jpeg']}/>
            <Item logo='/wix.png' brand='Intercom' chatCount='0' desc='Introduce a cloud based product' categories={['Ecommerce', 'B2B']} tags={['#DigitalTransformation']} meeting='in 30 minutes' 
            images={['/profile.jpeg', '/profile.jpeg', '/profile.jpeg']}/>
            <Item logo='/wix.png' brand='Google' chatCount='0' desc='Introduce a cloud based product' categories={['Ecommerce', 'B2B']} tags={['#DigitalTransformation']} meeting='in 30 minutes' 
            images={['/profile.jpeg', '/profile.jpeg', '/profile.jpeg']}/>
            <Item logo='/wix.png' brand='Evernote' chatCount='0' desc='Introduce a cloud based product' categories={['Ecommerce', 'B2B']} tags={['#DigitalTransformation']} meeting='in 30 minutes' 
            images={['/profile.jpeg', '/profile.jpeg', '/profile.jpeg']}/>
            
        </div>
    )
}

export default Items
