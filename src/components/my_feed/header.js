import React from "react"
import "./header.css";
import {Link} from 'react-router-dom'
export default function Header(){
    return(
        <div class="container foryou_main_menu">
            <ul className="myul">
                <li class="for-you-title-main active">
                    <Link to="/my_feed" title="Newsfeeed">My News Feed</Link>
                    </li>
                    <li class="sectionitem " attrid="0000000">

                    <Link to="/my_feed" title="Newsfeeed">Recommended For You</Link>

                    </li>
                    <li class="setting icon ">
                        <a  title="Setting">
                            <svg viewBox="0 0 18 18" width="14px" height="14px" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.3701 0.84375C14.7158 0.84375 15.041 0.911133 15.3457 1.0459C15.6504 1.1748 15.9141 1.35352 16.1367 1.58203C16.3652 1.81055 16.5439 2.07715 16.6729 2.38184C16.8076 2.68652 16.875 3.01172 16.875 3.35742C16.875 3.69727 16.8105 4.0166 16.6816 4.31543C16.5586 4.61426 16.377 4.88379 16.1367 5.12402L5.85352 15.4072L1.125 16.5938L2.31152 11.8564L12.5947 1.58203C12.835 1.3418 13.1045 1.16016 13.4033 1.03711C13.708 0.908203 14.0303 0.84375 14.3701 0.84375ZM3.40137 11.9619C3.68848 12.0381 3.95801 12.1523 4.20996 12.3047C4.46191 12.4512 4.6875 12.627 4.88672 12.832C5.0918 13.0312 5.26758 13.2568 5.41406 13.5088C5.56641 13.7607 5.68066 14.0303 5.75684 14.3174L14.3086 5.76562L11.9531 3.41016L3.40137 11.9619ZM2.28516 15.4336L4.99219 14.7568C4.94531 14.499 4.86035 14.2588 4.7373 14.0361C4.62012 13.8076 4.4707 13.6055 4.28906 13.4297C4.11328 13.248 3.91113 13.0986 3.68262 12.9814C3.45996 12.8584 3.21973 12.7734 2.96191 12.7266L2.28516 15.4336ZM14.9062 5.16797C15.0469 5.0332 15.1846 4.90137 15.3193 4.77246C15.4541 4.64355 15.5742 4.50879 15.6797 4.36816C15.7852 4.22754 15.8701 4.07812 15.9346 3.91992C15.999 3.75586 16.0312 3.56836 16.0312 3.35742C16.0312 3.12891 15.9873 2.91504 15.8994 2.71582C15.8115 2.51074 15.6914 2.33203 15.5391 2.17969C15.3926 2.02734 15.2168 1.90723 15.0117 1.81934C14.8125 1.73145 14.5986 1.6875 14.3701 1.6875C14.1592 1.6875 13.9717 1.71973 13.8076 1.78418C13.6436 1.84863 13.4912 1.93359 13.3506 2.03906C13.21 2.14453 13.0752 2.26465 12.9463 2.39941C12.8232 2.53418 12.6914 2.67188 12.5508 2.8125L14.9062 5.16797Z"></path>
                                </svg> 
                                <Link to="/my_feed" title="Newsfeeed">Personalise</Link>
                                </a>
                                </li>
                                <li class="sectionitem" attrid="1206578"><Link to="/personalize">India</Link></li>
                                <li class="sectionitem" attrid="1206533"><Link to="/personalize">Movies</Link></li>
                                <li class="sectionitem" attrid="1206577"><Link to="/personalize">World</Link></li>
                                <li class="sectionitem" attrid="1206688"><Link to="/personalize">Technology</Link></li>
                                <li class="sectionitem" attrid="1206550"><Link to="/personalize">Sports</Link></li>
                                <li class="sectionitem" attrid="1206689"><Link to="/personalize">Auto</Link></li>
                                <li class="sectionitem" attrid="1206553"><Link to="/personalize">Programmes</Link></li>
                                </ul>
                                </div>
    );
}