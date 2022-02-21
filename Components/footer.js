import React from 'react';
import './footer.css'


const Footer = () => {
    return(
        <>
          <section className='footer'>
                <div className='leftFooter'>
                    <p className='Pp'>Acme Web Solutions</p>
                </div>
                <div className='rightFooter'>
                    <p className='Pp'>Project By <a className='nav' href='https://traversymedia.com/' target='_blank'>Traversy Media</a></p>
                </div>
          </section>        
        </>
    )
}

export default Footer