import { FaTwitter, FaFacebook, FaInstagram, FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

export const NavBar = () => {
  return (
    <>
      <div className="bg-slate-600 p-2 text-white text-4xl font-bold flex justify-between items-center">
        <div>
          Lineup React Todo List
        </div>
        <div className="flex space-x-4">
          <a href="https://www.instagram.com/iry_daniel/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white text-xl hover:text-red-400" />
          </a>
          <a href="https://github.com/Daniel-IRYIVUZE" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white text-xl hover:text-red-400" />
          </a>
          <a href="mailto:danieliryivuze4@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="text-white text-xl hover:text-red-400" />
          </a>
          <a href="https://www.linkedin.com/in/daniel-iryivuze-992141278/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white text-xl hover:text-red-400" />
          </a>
        </div>
      </div>
    </>
  )
}
