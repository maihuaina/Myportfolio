import React from 'react'
import{FiMessageCircle} from 'react-icons/fi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaComment } from 'react-icons/fa'


const MessageComp = () => {
  return (
//     <div className="flex items-center">
//     <FontAwesomeIcon icon={FiMessageCircle} className="text-blue-500 mr-2" />
//     <span className="text-blue-900 font-medium">Copied.</span>
//   </div>
<div className="flex items-center">
      <div className="message-icon relative">
<FaComment/>
      </div>
      <span className="text-blue-900 font-medium ml-2">Hello! This is a message.</span>
    </div>
  )
}

export default MessageComp
