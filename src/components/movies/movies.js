import React from "react";
import "./movies.css"
import Movie_Card from "./moviecard";
import Movie_3rd_section from "./movieThird_sec"
import Carousel from "./crousalsection"
import Card from "./cards"
export default function Movies() {
    return (
        <div class="itg-layout-container itg-front movie-layout-page ">
            <div style={{ backgroundColor: "black" }} class="movies-top-section section-movies">
                <div class="container">
                    <div class="row itg-top-section itg-layout-580">
                        <div class="top-block">
                            <div class="col-md-8">
                                <div class="widget-help-text">Special widgets ( <strong>Manual Top Story</strong> )</div
                                ><div class="backbg">
                                    <div class="itg-widget">
                                        <div class="droppable ">
                                            <div id="movie-new-block" class="widget-wrapper movie_section_manual_widget">
                                                <div class="data-holder" id="itg-block-1">
                                                    <div id="block-itg-widget-movie-section-manual-widget" class="block block-itg-widget odd">
                                                        <div class="row"><div class="col-md-8"><div class="auto-block-1">
                                                            <div class="featured-news">
                                                                <div class="featured-post featured-post-first ">
                                                                    <a className="movie_top_section_a_tag" href="">
                                                                        <img width="483" height="271" src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202104/navya-naveli-abhishek-the-big-.jpg?size=483:271" alt="Navya Naveli Nanda calls Abhishek Bachchan the one and only Big Bull. " title="Navya Naveli Nanda calls Abhishek Bachchan the one and only Big Bull. " />
                                                                    </a>
                                                                    <h2 title="Navya Naveli is all praises for Abhishek Bachchan's The Big Bull">
                                                                        <a style={{ textDecoration: "none" }} className="movie_top_section_a_tag" href="">Navya Naveli is all praises for Abhishek Bachchan's The Big Bull</a>
                                                                    </h2>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                            <div class="col-md-4">
                                                                <div class="auto-block-2">
                                                                    <div class="movies-featured-news">
                                                                        <div class="movies-featured-post ">
                                                                            <a style={{ textDecoration: "none" }} className="movie_top_section_a_tag" href="">
                                                                                <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202104/Vakeel_Saab_reviews_Pawan_Kaly_1200x768.jpeg?size=237:133" alt="Pawan Kalyan's Vakeel Saab hit the theatres today, April 9." title="Pawan Kalyan's Vakeel Saab hit the theatres today, April 9." />
                                                                            </a>
                                                                            <h3 title="Abhishek Bachchan wishes Ma Jaya Bachchan on birthday with a throwback pic">
                                                                                <a style={{ textDecoration: "none" }} className="movie_top_section_a_tag" href="/movies/regional-cinema/story/vakeel-saab-first-reviews-out-pawan-kalyan-s-film-is-blockbuster-say-fans-1788917-2021-04-09">Vakeel Saab first reviews out. Pawan Kalyan's film is blockbuster</a>
                                                                            </h3>
                                                                        </div>
                                                                        <div class="movies-featured-post "> <a href="">
                                                                            <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202104/rt.jpg?size=237:133" alt="Abhishek Bachchan shared a vintage picture of Jaya Bachchan to wish her on birthday." title="Abhishek Bachchan shared a vintage picture of Jaya Bachchan to wish her on birthday." />
                                                                        </a>
                                                                            <h3 title="Abhishek Bachchan wishes Ma Jaya Bachchan on birthday with a throwback pic">
                                                                                <a style={{ textDecoration: "none" }} className="movie_top_section_a_tag" href="">Abhishek Bachchan wishes Ma Jaya Bachchan on birthday with a throwback pic</a>
                                                                            </h3>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }} class="itg-layout-container itg-front movie-layout-page ">
                <div style={{ width: "70%" }} class="row itg-common-section">
                    <Movie_Card />
                    <Movie_Card />
                    <Movie_Card />
                </div>
            </div>
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }} class="itg-layout-container itg-front movie-layout-page ">
                <div style={{ width: "70%" }} class="row itg-common-section">
                    <Movie_Card />
                    <Movie_Card />
                    <Movie_Card />
                </div>
            </div>
            {/* <div>
           <Movie_3rd_section />
            </div> */}
            <div style={{ padding: "30px", width: "100%", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>

                <div style={{ width: "", height: "350px" }}>
                    <Carousel />
                </div>

                {/* gggg */}
                <div className="Crousal_main_div_side_div" >
                    <div style={{ width: "90%", height: "100%", backgroundColor: "#f3f3f3", }}>
                        <div style={{ display: "flex", padding: "2px", borderBottom: "1px solid #dddddd", height: "25%" }}>
                            <div>
                                <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/video/202104/162172303_266771531574428_7998_1200x768.jpeg?gqEwIGEhPxjZX8qvm8qnraxqz2XowhMQ&size=170:96" />
                            </div>
                            <div style={{ padding: "10px" }}>
                                <span ><b> Katerina Test Possitive For Covid</b></span>
                            </div>
                        </div>
                        <div style={{ display: "flex", padding: "2px", borderBottom: "1px solid #dddddd", height: "25%" }}>
                            <div>
                                <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/video/202104/162172303_266771531574428_7998_1200x768.jpeg?gqEwIGEhPxjZX8qvm8qnraxqz2XowhMQ&size=170:96" />
                            </div>
                            <div style={{ padding: "10px" }}>
                                <span ><b> Katerina Test Possitive For Covid</b></span>
                            </div>
                        </div>
                        <div style={{ display: "flex", padding: "2px", borderBottom: "1px solid #dddddd", height: "25%" }}>
                            <div>
                                <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/video/202104/162172303_266771531574428_7998_1200x768.jpeg?gqEwIGEhPxjZX8qvm8qnraxqz2XowhMQ&size=170:96" />
                            </div>
                            <div style={{ padding: "10px" }}>
                                <span ><b> Katerina Test Possitive For Covid</b></span>
                            </div>
                        </div>
                        <div style={{ display: "flex", padding: "2px", borderBottom: "1px solid #dddddd", height: "25%" }}>
                            <div>
                                <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/video/202104/162172303_266771531574428_7998_1200x768.jpeg?gqEwIGEhPxjZX8qvm8qnraxqz2XowhMQ&size=170:96" />
                            </div>
                            <div style={{ padding: "10px" }}>
                                <span ><b> Katerina Test Possitive For Covid</b></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* 4thpart */}
            <div className="forth_section_most_main_div" >

                <div className="forth_section_main_movie_div" style={{}}>




                    <div style={{ width: "100%", height: "100%" }} class="">

                        <div class="">
                            {/* <span class="widget-title"><a href="">Hollywood</a>
                            </span> */}

                            <div class="row buying-guides tech-in-depth movie_sider_main_div">
                                <div class="col-md-6 col-sm-6 movie_sider_1st_div">
                                    <div style={{ width: "100%" }}>
                                        <img class=" lazyloaded" src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202104/black-adam-dwayne-johnson-1598_1200x768.jpeg?size=370:208" data-src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202104/black-adam-dwayne-johnson-1598_1200x768.jpeg?size=370:208" alt="" title="" />

                                        <h3 title="Dwayne Johnson to play titular DC supervillian in Black Adam, shoot begins this week">
                                            <a href="">Dwayne Johnson to play titular DC supervillian in Black Adam, shoot begins this week</a>
                                        </h3>
                                    </div>
                                    <div style={{ display: "flex", padding: "2px", borderBottom: "1px solid #dddddd", height: "70px" }}>
                                        <div style={{ width: "100px", height: "50px" }}>
                                            <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202104/Disney_Cruella_poster__1__1200x768.jpeg?size=88:50" />
                                        </div>
                                        <div style={{ padding: "10px" }}>
                                            <span ><b> Emma Stone turns villain in Disney's Cruella. New trailer out</b></span>
                                        </div>
                                    </div>


                                </div>
                                <div className="movie_sider_2nd_div" style={{}}>

                                    <div style={{ display: "flex", marginTop: "10px", padding: "2px", borderBottom: "1px solid #dddddd", height: "70px" }}>
                                        <div style={{ width: "110px", height: "60px" }}>
                                            <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202104/SUISQ2_Star_Tsr_1sht_VERT_2764.jpg?size=88:50" />
                                        </div>
                                        <div style={{ paddingLeft: "10px" }}>
                                            <span ><b> Emma Stone turns villain in Disney's Cruella. New trailer out</b></span>
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", marginTop: "10px", padding: "2px", borderBottom: "1px solid #dddddd", height: "70px" }}>
                                        <div style={{ width: "110px", height: "50px" }}>
                                            <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202104/SUISQ2_Star_Tsr_1sht_VERT_2764.jpg?size=88:50" />
                                        </div>
                                        <div style={{ paddingLeft: "10px" }}>
                                            <span ><b> Emma Stone turns villain in Disney's Cruella. New trailer out</b></span>
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", marginTop: "10px", padding: "2px", borderBottom: "1px solid #dddddd", height: "70px" }}>
                                        <div style={{ width: "110px", height: "50px" }}>
                                            <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202104/SUISQ2_Star_Tsr_1sht_VERT_2764.jpg?size=88:50" />
                                        </div>
                                        <div style={{ paddingLeft: "10px" }}>
                                            <span ><b> Emma Stone turns villain in Disney's Cruella. New trailer out</b></span>
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", marginTop: "10px", padding: "2px", borderBottom: "1px solid #dddddd", height: "70px" }}>
                                        <div style={{ width: "110px", height: "50px" }}>
                                            <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202104/SUISQ2_Star_Tsr_1sht_VERT_2764.jpg?size=88:50" />
                                        </div>
                                        <div style={{ paddingLeft: "10px" }}>
                                            <span ><b> Emma Stone turns villain in Disney's Cruella. New trailer out</b></span>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>















                </div>

                {/* gggg */}
                <div className="fourth_section_main_side_div" >
                    <div style={{ width: "90%", height: "fit-content", backgroundColor: "#f3f3f3", paddingTop: "15px" }}>
                        <div style={{ display: "flex", padding: "2px", borderBottom: "1px solid #dddddd", height: "70px" }}>
                            <div style={{ width: "100px", height: "50px" }}>
                                <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/video/202104/162172303_266771531574428_7998_1200x768.jpeg?gqEwIGEhPxjZX8qvm8qnraxqz2XowhMQ&size=170:96" />
                            </div>
                            <div style={{ padding: "10px" }}>
                                <span ><b> Katerina Test Possitive For Covid</b></span>
                            </div>
                        </div>
                        <div style={{ display: "flex", padding: "2px", borderBottom: "1px solid #dddddd", height: "70px" }}>
                            <div style={{ width: "100px", height: "50px" }}>
                                <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/video/202104/162172303_266771531574428_7998_1200x768.jpeg?gqEwIGEhPxjZX8qvm8qnraxqz2XowhMQ&size=170:96" />
                            </div>
                            <div style={{ padding: "10px" }}>
                                <span ><b> Katerina Test Possitive For Covid</b></span>
                            </div>
                        </div>
                        <div style={{ display: "flex", padding: "2px", borderBottom: "1px solid #dddddd", height: "70px" }}>
                            <div style={{ width: "100px", height: "50px" }}>
                                <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/video/202104/162172303_266771531574428_7998_1200x768.jpeg?gqEwIGEhPxjZX8qvm8qnraxqz2XowhMQ&size=170:96" />
                            </div>
                            <div style={{ padding: "10px" }}>
                                <span ><b> Katerina Test Possitive For Covid</b></span>
                            </div>
                        </div>
                        <div style={{ display: "flex", padding: "2px", borderBottom: "1px solid #dddddd", height: "70px" }}>
                            <div style={{ width: "100px", height: "50px" }}>
                                <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/video/202104/162172303_266771531574428_7998_1200x768.jpeg?gqEwIGEhPxjZX8qvm8qnraxqz2XowhMQ&size=170:96" />
                            </div>
                            <div style={{ padding: "10px" }}>
                                <span ><b> Katerina Test Possitive For Covid</b></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



             <Card />
        </div>
    );
}