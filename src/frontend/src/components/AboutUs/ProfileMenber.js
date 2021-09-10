import { FaFacebookSquare, FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

export default function ProfileMenber({child}) {
  
  return (
    <div>
        <img className="w-36 h-36 rounded-full mx-auto -mb-24 object-cover" src={child.srcImg} alt="Avatar"/>
        <div className="bg-gray-100 shadow-lg rounded-lg px-8 pt-32 pb-10 text-gray-400">
            <h3 className="font-title text-gray-800 text-xl mb-1">
                {child.name}
            </h3>
            <p className="font-body">
                {child.description}
            </p>
            <hr className="my-3"></hr>
            <ul >
                  <li
                    className="hover:text-gray-800 dark:hover:text-white transition-colors duration-200 flex"
                    style={{ justifyContent: "space-evenly" }}
                  >
                    <a href={child.linkFb} target="_blank" alt="Link Facebook">
                      <FaFacebookSquare style={{width: "2em", height:"2em"}}></FaFacebookSquare>
                    </a>
                    <a href={child.linkGit} target="_blank" alt="Link Github">
                      <FaGithub style={{width: "2em", height:"2em"}}></FaGithub>
                    </a>
                    <a href={child.linkedIn} target="_blank" alt="Link Linkedin">
                    <AiFillLinkedin style={{width: "2em", height:"2em"}}></AiFillLinkedin>
                    </a>
                  </li>
                </ul>
        </div>
    </div>
  );
}
