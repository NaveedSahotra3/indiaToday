import React from "react";
import Carousel from "./carousel";
import NavBar from "./navBar";
import "./video.css";
import Cards from "./cards";
const Videos = () => {
  let array = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10, 11];
  return (
    <div>
      <div
        className="container-fluid"
        style={{ marginBottom: "200px", backgroundColor: "#171717" }}
      >
        <Carousel />
      </div>
      <div className="container">
        <div className="navbar">
          <NavBar />
        </div>
        <div className="row twoBox">
          <div className="col-md-8 col-xs-12 col-sm-12 col-lg-8  left">
            <div className="row cards">
              {array.map((item) => {
                return (
                  <div className="col-md-3 col-lg-3 individualCard">
                    {" "}
                    <Cards />{" "}
                  </div>
                );
              })}
              <div class="item-list">
                <ul class="pager">
                  <li class="pager-current first">1</li>
                  <li class="pager-item">
                    <a
                      title="Go to page 2"
                      href="/videos?field_story_category_tid=1206552&amp;page=1"
                    >
                      2
                    </a>
                  </li>
                  <li class="pager-item">
                    <a
                      title="Go to page 3"
                      href="/videos?field_story_category_tid=1206552&amp;page=2"
                    >
                      3
                    </a>
                  </li>
                  <li class="pager-item">
                    <a
                      title="Go to page 4"
                      href="/videos?field_story_category_tid=1206552&amp;page=3"
                    >
                      4
                    </a>
                  </li>
                  <li class="pager-item">
                    <a
                      title="Go to page 5"
                      href="/videos?field_story_category_tid=1206552&amp;page=4"
                    >
                      5
                    </a>
                  </li>
                  <li class="pager-item">
                    <a
                      title="Go to page 6"
                      href="/videos?field_story_category_tid=1206552&amp;page=5"
                    >
                      6
                    </a>
                  </li>
                  <li class="pager-item">
                    <a
                      title="Go to page 7"
                      href="/videos?field_story_category_tid=1206552&amp;page=6"
                    >
                      7
                    </a>
                  </li>
                  <li class="pager-item">
                    <a
                      title="Go to page 8"
                      href="/videos?field_story_category_tid=1206552&amp;page=7"
                    >
                      8
                    </a>
                  </li>
                  <li class="pager-item">
                    <a
                      title="Go to page 9"
                      href="/videos?field_story_category_tid=1206552&amp;page=8"
                    >
                      9
                    </a>
                  </li>
                  <li class="pager-ellipsis">…</li>
                  <li class="pager-next">
                    <a
                      title="Go to next page"
                      href="/videos?field_story_category_tid=1206552&amp;page=1"
                    >
                      Next
                    </a>
                  </li>
                  <li class="pager-last last">
                    <a
                      title="Go to last page"
                      href="/videos?field_story_category_tid=1206552&amp;page=98"
                    >
                      last »
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-xs-12 col-sm-12 col-lg-4 right">
            <div class="may-be-suggest-container">
              <h3>
                <span>READ THIS</span>
              </h3>
              <ul>
                <li class="may-we-suggest">
                  <a
                    href="https://www.indiatoday.in/india/story/union-ministers-bjp-leaders-social-media-condemn-tweets-farmers-protest-rihanna-greta-1765518-2021-02-03?utm_source=rhs&amp;utm_medium=It&amp;utm_campaign=readthis&amp;t_source=rhs&amp;t_medium=It&amp;t_campaign=readthis"
                    class="pic"
                    title="Top BJP leaders take to social media to condemn tweets on farmers' stir by Rihanna, Greta"
                  >
                    {" "}
                    <img
                      class=" lazyloaded"
                      alt="BJP chief JP Nadda "
                      title="BJP chief JP Nadda "
                      data-src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202102/Nadda_1200x768.jpeg?size=88:50"
                      src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202102/Nadda_1200x768.jpeg?size=88:50"
                      width="88"
                      height="50"
                    />{" "}
                  </a>
                  <p
                    title="Top BJP leaders take to social media to condemn tweets on farmers' stir by Rihanna, Greta"
                    class="title may-be-suggest-1765518"
                  >
                    {" "}
                    <a
                      href="https://www.indiatoday.in/india/story/union-ministers-bjp-leaders-social-media-condemn-tweets-farmers-protest-rihanna-greta-1765518-2021-02-03?utm_source=rhs&amp;utm_medium=It&amp;utm_campaign=readthis&amp;t_source=rhs&amp;t_medium=It&amp;t_campaign=readthis"
                      title="Top BJP leaders take to social media to condemn tweets on farmers stir by Rihanna, Greta"
                    >
                      Top BJP leaders take to social media to condemn tweets on
                      farmers' stir by Rihanna, Greta
                    </a>
                  </p>
                </li>
                <li class="may-we-suggest">
                  {" "}
                  <a
                    href="https://www.indiatoday.in/news-analysis/story/the-efficacy-of-double-masking-what-health-experts-have-to-say-1765551-2021-02-03?utm_source=rhs&amp;utm_medium=It&amp;utm_campaign=readthis&amp;t_source=rhs&amp;t_medium=It&amp;t_campaign=readthis"
                    class="pic"
                    title="The efficacy of double masking: What health experts have to say "
                  >
                    {" "}
                    <img
                      class=" lazyloaded"
                      alt=""
                      title=""
                      data-src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202102/PTI_corona_PPE_1200x768.png?size=88:50"
                      src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202102/PTI_corona_PPE_1200x768.png?size=88:50"
                      width="88"
                      height="50"
                    />{" "}
                  </a>
                  <p
                    title="The efficacy of double masking: What health experts have to say "
                    class="title may-be-suggest-1765551"
                  >
                    {" "}
                    <a
                      href="https://www.indiatoday.in/news-analysis/story/the-efficacy-of-double-masking-what-health-experts-have-to-say-1765551-2021-02-03?utm_source=rhs&amp;utm_medium=It&amp;utm_campaign=readthis&amp;t_source=rhs&amp;t_medium=It&amp;t_campaign=readthis"
                      title="The efficacy of double masking: What health experts have to say "
                    >
                      The efficacy of double masking: What health experts have
                      to say{" "}
                    </a>
                  </p>
                </li>
                <li class="may-we-suggest">
                  {" "}
                  <a
                    href="https://www.indiatoday.in/magazine/nation/story/20210208-silenced-minority-1763812-2021-01-30?utm_source=rhs&amp;utm_medium=It&amp;utm_campaign=readthis&amp;t_source=rhs&amp;t_medium=It&amp;t_campaign=readthis"
                    class="pic"
                    title="Silenced Minority?"
                  >
                    {" "}
                    <img
                      class=" lazyloaded"
                      alt=""
                      title=""
                      data-src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202101/Republic-Minorities-Feb8-1_1200x768.jpeg?size=88:50"
                      src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202101/Republic-Minorities-Feb8-1_1200x768.jpeg?size=88:50"
                      width="88"
                      height="50"
                    />{" "}
                  </a>
                  <p
                    title="Silenced Minority?"
                    class="title may-be-suggest-1763812"
                  >
                    {" "}
                    <a
                      href="https://www.indiatoday.in/magazine/nation/story/20210208-silenced-minority-1763812-2021-01-30?utm_source=rhs&amp;utm_medium=It&amp;utm_campaign=readthis&amp;t_source=rhs&amp;t_medium=It&amp;t_campaign=readthis"
                      title="Silenced Minority?"
                    >
                      Silenced Minority?
                    </a>
                  </p>
                </li>
                <li class="may-we-suggest">
                  {" "}
                  <a
                    href="https://www.indiatoday.in/technology/news/story/airtel-jio-vi-best-prepaid-plans-with-streaming-and-data-benefits-under-rs-500-1765585-2021-02-03?utm_source=rhs&amp;utm_medium=It&amp;utm_campaign=readthis&amp;t_source=rhs&amp;t_medium=It&amp;t_campaign=readthis"
                    class="pic"
                    title="Airtel, Jio, Vi best prepaid plans with streaming and data benefits under Rs 500"
                  >
                    {" "}
                    <img
                      class=" lazyloaded"
                      alt=""
                      title=""
                      data-src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202102/IMG_20210203_174806_1200x768.jpeg?size=88:50"
                      src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202102/IMG_20210203_174806_1200x768.jpeg?size=88:50"
                      width="88"
                      height="50"
                    />{" "}
                  </a>
                  <p
                    title="Airtel, Jio, Vi best prepaid plans with streaming and data benefits under Rs 500"
                    class="title may-be-suggest-1765585"
                  >
                    {" "}
                    <a
                      href="https://www.indiatoday.in/technology/news/story/airtel-jio-vi-best-prepaid-plans-with-streaming-and-data-benefits-under-rs-500-1765585-2021-02-03?utm_source=rhs&amp;utm_medium=It&amp;utm_campaign=readthis&amp;t_source=rhs&amp;t_medium=It&amp;t_campaign=readthis"
                      title="Airtel, Jio, Vi best prepaid plans with streaming and data benefits under Rs 500"
                    >
                      Airtel, Jio, Vi best prepaid plans with streaming and data
                      benefits under Rs 500
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            <div class="watch-right-now-video">
              <h3>
                <span>Watch Right Now</span>
              </h3>
              <ul>
                <li class="watch-right-now-list watch-right-now-0">
                  <a
                    class="pic"
                    href="https://www.indiatoday.in/elections/west-bengal-assembly-polls-2021/video/mithun-chakraborty-holds-3-roadshows-in-bengal-1784616-2021-03-28?utm_source=rhs&amp;utm_medium=It&amp;utm_campaign=watchrightnow&amp;t_source=rhs&amp;t_medium=It&amp;t_campaign=watchrightnow"
                  >
                    <img
                      alt=""
                      class=" lazyloaded"
                      data-preview-url="https://indiatoday-pdelivery.akamaized.net/indiatoday/video/2021_03/tooltips/28_mar_21_west_bengal_poll_wrap_1024_512-preview.mp4"
                      data-src="https://akm-img-a-in.tosshub.com/indiatoday/images/video/202103/mithun_0_1200x768.png?size=88:50"
                      src="https://akm-img-a-in.tosshub.com/indiatoday/images/video/202103/mithun_0_1200x768.png?size=88:50"
                      title=""
                    />
                    <div class="playIconThumbContainer">
                      <div class="platDetailVideoIcon"></div>
                      <div class="platDetailVideoTime">01:00</div>
                    </div>
                  </a>
                  <p
                    class="title"
                    title="Mithun Chakraborty holds 3 roadshows in Bengal"
                  >
                    <a
                      href="https://www.indiatoday.in/elections/west-bengal-assembly-polls-2021/video/mithun-chakraborty-holds-3-roadshows-in-bengal-1784616-2021-03-28?utm_source=rhs&amp;utm_medium=It&amp;utm_campaign=watchrightnow&amp;t_source=rhs&amp;t_medium=It&amp;t_campaign=watchrightnow"
                      title="Mithun Chakraborty holds 3 roadshows in Bengal"
                    >
                      Mithun Chakraborty holds 3 roadshows in Bengal
                    </a>
                  </p>
                </li>
                <li class="watch-right-now-list watch-right-now-1">
                  <a
                    class="pic"
                    href="https://www.indiatoday.in/elections/west-bengal-assembly-polls-2021/video/tmc-releases-audio-clip-of-bjp-s-mukul-roy-discussing-ways-to-influence-ec-1784488-2021-03-28?utm_source=rhs&amp;utm_medium=It&amp;utm_campaign=watchrightnow&amp;t_source=rhs&amp;t_medium=It&amp;t_campaign=watchrightnow"
                  >
                    <img
                      alt=""
                      class=" lazyloaded"
                      data-preview-url="https://indiatoday-pdelivery.akamaized.net/indiatoday/video/2021_03/tooltips/28_mar_21_audio_released_by_tmc_1024_512-preview.mp4"
                      data-src="https://akm-img-a-in.tosshub.com/indiatoday/images/video/202103/Screenshot_2021-03-28_at_10.45_0_1200x768.png?size=88:50"
                      src="https://akm-img-a-in.tosshub.com/indiatoday/images/video/202103/Screenshot_2021-03-28_at_10.45_0_1200x768.png?size=88:50"
                      title=""
                    />
                    <div class="playIconThumbContainer">
                      <div class="platDetailVideoIcon"></div>
                      <div class="platDetailVideoTime">00:50</div>
                    </div>
                  </a>
                  <p
                    class="title"
                    title="TMC releases audio clip of BJP's Mukul Roy discussing ways to 'influence' EC"
                  >
                    <a
                      href="https://www.indiatoday.in/elections/west-bengal-assembly-polls-2021/video/tmc-releases-audio-clip-of-bjp-s-mukul-roy-discussing-ways-to-influence-ec-1784488-2021-03-28?utm_source=rhs&amp;utm_medium=It&amp;utm_campaign=watchrightnow&amp;t_source=rhs&amp;t_medium=It&amp;t_campaign=watchrightnow"
                      title="TMC releases audio clip of BJPs Mukul Roy discussing ways to influence EC"
                    >
                      TMC releases audio clip of BJP's Mukul Roy discussing ways
                      to 'influence' EC
                    </a>
                  </p>
                </li>
                <li class="watch-right-now-list watch-right-now-2">
                  <a
                    class="pic"
                    href="https://www.indiatoday.in/india/video/punjab-bjp-mla-thrashed-clothes-torn-by-protesting-farmers-1784469-2021-03-28?utm_source=rhs&amp;utm_medium=It&amp;utm_campaign=watchrightnow&amp;t_source=rhs&amp;t_medium=It&amp;t_campaign=watchrightnow"
                  >
                    <img
                      alt=""
                      class=" lazyloaded"
                      data-preview-url="https://indiatoday-pdelivery.akamaized.net/indiatoday/video/2021_03/tooltips/28_mar_21_punjab_bjp_mla_assault_1024_512-preview.mp4"
                      data-src="https://akm-img-a-in.tosshub.com/indiatoday/images/video/202103/Screenshot_2021-03-28_at_09.29_0_1200x768.png?size=88:50"
                      src="https://akm-img-a-in.tosshub.com/indiatoday/images/video/202103/Screenshot_2021-03-28_at_09.29_0_1200x768.png?size=88:50"
                      title=""
                    />
                    <div class="playIconThumbContainer">
                      <div class="platDetailVideoIcon"></div>
                      <div class="platDetailVideoTime">02:33</div>
                    </div>
                  </a>
                  <p
                    class="title"
                    title="Punjab BJP MLA thrashed, clothes torn by protesting farmers"
                  >
                    <a
                      href="https://www.indiatoday.in/india/video/punjab-bjp-mla-thrashed-clothes-torn-by-protesting-farmers-1784469-2021-03-28?utm_source=rhs&amp;utm_medium=It&amp;utm_campaign=watchrightnow&amp;t_source=rhs&amp;t_medium=It&amp;t_campaign=watchrightnow"
                      title="Punjab BJP MLA thrashed, clothes torn by protesting farmers"
                    >
                      Punjab BJP MLA thrashed, clothes torn by protesting
                      farmers
                    </a>
                  </p>
                </li>
                <li class="watch-right-now-list watch-right-now-3">
                  <a
                    class="pic"
                    href="https://www.indiatoday.in/india/video/watch-exclusive-cctv-footage-of-mansukh-hiren-1783480-2021-03-25?utm_source=rhs&amp;utm_medium=It&amp;utm_campaign=watchrightnow&amp;t_source=rhs&amp;t_medium=It&amp;t_campaign=watchrightnow"
                  >
                    <img
                      alt=""
                      class=" lazyloaded"
                      data-preview-url=""
                      data-src="https://akm-img-a-in.tosshub.com/indiatoday/images/video/202103/ma_1_1200x768.jpeg?size=88:50"
                      src="https://akm-img-a-in.tosshub.com/indiatoday/images/video/202103/ma_1_1200x768.jpeg?size=88:50"
                      title=""
                    />
                    <div class="playIconThumbContainer">
                      <div class="platDetailVideoIcon"></div>
                      <div class="platDetailVideoTime">07:09</div>
                    </div>
                  </a>
                  <p
                    class="title"
                    title="Watch: Exclusive CCTV footage of Mansukh Hiren"
                  >
                    <a
                      href="https://www.indiatoday.in/india/video/watch-exclusive-cctv-footage-of-mansukh-hiren-1783480-2021-03-25?utm_source=rhs&amp;utm_medium=It&amp;utm_campaign=watchrightnow&amp;t_source=rhs&amp;t_medium=It&amp;t_campaign=watchrightnow"
                      title="Watch: Exclusive CCTV footage of Mansukh Hiren"
                    >
                      Watch: Exclusive CCTV footage of Mansukh Hiren
                    </a>
                  </p>
                </li>
                <li class="watch-right-now-list watch-right-now-4">
                  <a
                    class="pic"
                    href="https://www.indiatoday.in/india/video/devendra-fadnavis-led-bjp-delegation-meets-governor-bhagat-singh-koshyari-1782988-2021-03-24?utm_source=rhs&amp;utm_medium=It&amp;utm_campaign=watchrightnow&amp;t_source=rhs&amp;t_medium=It&amp;t_campaign=watchrightnow"
                  >
                    <img
                      alt=""
                      class=" lazyloaded"
                      data-preview-url="https://indiatoday-pdelivery.akamaized.net/indiatoday/video/2021_03/tooltips/24_mar_21_inside_scoop_on_meet_1024_512-preview.mp4"
                      data-src="https://akm-img-a-in.tosshub.com/indiatoday/images/video/202103/Devendra_Fadpti_0_1200x768.jpeg?size=88:50"
                      src="https://akm-img-a-in.tosshub.com/indiatoday/images/video/202103/Devendra_Fadpti_0_1200x768.jpeg?size=88:50"
                      title=""
                    />
                    <div class="playIconThumbContainer">
                      <div class="platDetailVideoIcon"></div>
                      <div class="platDetailVideoTime">04:14</div>
                    </div>
                  </a>
                  <p
                    class="title"
                    title="Devendra Fadnavis-led BJP delegation meets Governor Bhagat Singh Koshyari"
                  >
                    <a
                      href="https://www.indiatoday.in/india/video/devendra-fadnavis-led-bjp-delegation-meets-governor-bhagat-singh-koshyari-1782988-2021-03-24?utm_source=rhs&amp;utm_medium=It&amp;utm_campaign=watchrightnow&amp;t_source=rhs&amp;t_medium=It&amp;t_campaign=watchrightnow"
                      title="Devendra Fadnavis-led BJP delegation meets Governor Bhagat Singh Koshyari"
                    >
                      Devendra Fadnavis-led BJP delegation meets Governor Bhagat
                      Singh Koshyari
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Videos;
