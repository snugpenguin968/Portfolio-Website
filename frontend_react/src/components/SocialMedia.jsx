import React from 'react'
import {BsTwitter,BsInstagram} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/bs'
const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <BsTwitter />
        </div>
        <div>
            <FaFacebookF></FaFacebookF>
        </div>
        <div>
            <BsInstagram />
        </div>
    </div>
  )
}

export default SocialMedia