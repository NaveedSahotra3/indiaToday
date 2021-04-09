import React from "react";
import "./style.css"
import img4 from "../../assets/images/sites/all/themes/itg/images/itg_image370x208.jpg"

export default function Card() {
    return (
        <div  class="col-md-4 col-sm-4 col-xs-12 mt-50 card_main_div" data-tb-region="HomeMovies">
            <div class="widget-help-text">Section Card</div>
            <div class="itg-widget">
                <div style={{minHeight:"0px",boxShadow:"1px 1px 1px #d0d0d0"}} class="droppable ">
                    <div class="widget-wrapper section_wise_order">

                        <div class="data-holder" id="itg-block-7">
                            <div class="section-ordering video-gif" data-id="undefined"
                                id="card_1206533_itg-block-7">
                                <div data-tb-region-item> <a class="pic-no-icon"
                                    href="movies/celebrities/story/priyanka-chopra-flaunts-her-love-for-bikini-and-bindi-in-throwback-pic-1783673-2021-03-25.html">
                                    <img data-preview-url='' class="lazyload" width="370"
                                        height="208"
                                        src={img4}
                                        data-src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202103/pp_0_1200x768.png?size=370:208"
                                        alt="Priyanka Chopra has shared an old picture of herself."
                                        title="Priyanka Chopra has shared an old picture of herself." />
                                </a>
                                    <h5>India</h5>
                                    <h3 title="Priyanka Chopra flaunts her love for bikini and bindi in throwback pic "
                                        class="frist-heading heading-1783673 story ">
                                        <a style={{textDecoration:"none"}}
                                            href="movies/celebrities/story/priyanka-chopra-flaunts-her-love-for-bikini-and-bindi-in-throwback-pic-1783673-2021-03-25.html"><b>Priyanka
                                            Chopra flaunts her love for bikini and bindi in
                                    throwback pic</b> </a>
                                    </h3>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}