
// Assets
import logo from "../assets/images/sites/all/themes/itg/logo2048.png?v=1.5"
// Components

function LandingPage() {
    return (
        <div className="LandingPage">
            <header class="header" id="header" role="banner">
                <section class="header-top">
                    <div class="header__region region region-header">

                        <div id="block-itg-layout-manager-header-block" class="block block-itg-layout-manager even">
                            <div class="branch-journeys-top"></div>
                            <div class="itg-logo-container">
                                <div class="container top-nav">
                                    <div class="main-nav">
                                        <div class="desktop-hide"><a class="mobile-nav nochange" href="javascript:void(0)"
                                            title="navigation">
                                            <div class="bar1"></div>
                                            <div class="bar2"></div>
                                            <div class="bar3"></div>
                                        </a></div>
                                        <div class="nav-container-menu">
                                            <div class="nav-centerall">
                                                <ul class="menu">
                                                    <li class="menu__item is-leaf first leaf"><a href="index.html"
                                                        title="News" class="menu__link active">News</a></li>
                                                    <li class="menu__item is-leaf last leaf"><a href="livetv.html"
                                                        title="TV" class="menu__link">LIVE TV</a></li>
                                                </ul>
                                                <div class="container headeritg-logo">
                                                    <div class="logo"> <a href="index.html" title="Home" rel="home"
                                                        class="header__logo" id="logo"><img
                                                            src={logo}
                                                            alt="Home" class="header__logo-image" /></a></div>
                                                </div>
                                                <ul class="menu">
                                                    <li class="menu__item is-leaf first leaf"><a href="our-apps.html"
                                                        title="APP" target="_blank" class="menu__link">APP</a></li>
                                                    <li class="menu__item is-leaf last leaf"><a href="magazine.html"
                                                        title="Magazine" class="menu__link">Magazine</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <nav class="navigation">
                                    <div class="container">
                                        <ul class="second-level-menu before-load menu">
                                            <li class="userlogin-icon-parent-mobile">
                                                <div class="user-menus"> <a
                                                    href="https://auth.indiatoday.in/saml_login/other/aHR0cHM6Ly93d3cuaW5kaWF0b2RheS5pbi8jc3NvbG9naW49MQ=="
                                                    class="user-icon sso-click"><i class="fa fa-user"></i> Login</a>
                                                </div>
                                            </li>
                                            <li class="search-icon-parent-mobile">

                                                <div class="scc_inGssHomeSbOnly"></div>
                                            </li>
                                            <li class="nav-items "> <a href="index.html" style={{background: 'transparent'}}
                                                class="second-level-child second-level-child-0 notactive notactive url-type-external">Home</a>
                                            </li>
                                            <li class="nav-items "> <a href="foryou.html" style={{background: 'transparent'}}
                                                class="second-level-child second-level-child-1 notactive notactive url-type-external">MY
                                                FEED</a></li>
                                            <li class="nav-items "> <a href="videos.html" style={{background: 'transparent'}}
                                                target="_self"
                                                class="second-level-child second-level-child-2 notactive notactive url-type-internal">Videos
                                            </a></li>
                                            <li class="nav-items "> <a href="https://malayalam.indiatoday.in/"
                                                style={{background: 'transparent'}} target="_self"
                                                rel="noopener noreferrer"
                                                class="second-level-child second-level-child-3 notactive notactive url-type-external">Malayalam</a>
                                            </li>
                                            <li class="nav-items "> <a href="india.html" style={{background: 'transparent'}}
                                                target="_self"
                                                class="second-level-child second-level-child-4 notactive notactive url-type-internal">India
                                            </a></li>
                                            <li class="nav-items "> <a href="https://play.indiatodaygaming.com/"
                                                style={{background: 'transparent'}} target="_blank"
                                                rel="noopener noreferrer"
                                                class="second-level-child second-level-child-5 notactive notactive url-type-external">Gaming</a>
                                            </li>
                                            <li class="nav-items "> <a href="fact-check.html"
                                                style={{background: 'transparent'}} target="_self"
                                                class="second-level-child second-level-child-6 notactive notactive url-type-internal">Fact
                                                Check </a></li>
                                            <li class="nav-items "> <a
                                                href="https://quiz.indiatodaygaming.com/intro;jsessionid=6C780D9EEC12A32F011AF2822C5166EC"
                                                style={{background: 'transparent'}} target="_blank"
                                                rel="noopener noreferrer"
                                                class="second-level-child second-level-child-7 notactive notactive url-type-external">Quiz</a>
                                            </li>
                                            <li class="nav-items "> <a href="movies.html" style={{background: 'transparent'}}
                                                target="_self"
                                                class="second-level-child second-level-child-8 notactive notactive url-type-internal">Movies
                                            </a></li>
                                            <li class="nav-items "> <a href="lifestyle/health.html"
                                                style={{background: 'transparent'}}
                                                class="second-level-child second-level-child-9 notactive notactive url-type-external">Health</a>
                                            </li>
                                            <li class="nav-items "> <a href="technology.html"
                                                style={{background: 'transparent'}}
                                                class="second-level-child second-level-child-10 notactive notactive url-type-external">Tech</a>
                                            </li>
                                            <li class="nav-items "> <a href="sports.html" style={{background: 'transparent'}}
                                                target="_self"
                                                class="second-level-child second-level-child-11 notactive notactive url-type-internal">Sports
                                            </a></li>
                                            <li class="nav-items "> <a href="data-intelligence-unit.html"
                                                style={{background: 'transparent'}}
                                                class="second-level-child second-level-child-12 notactive notactive url-type-external">DIU</a>
                                            </li>
                                            <li class="nav-items "> <a href="newsmo.html" style={{background: 'transparent'}}
                                                target="_self"
                                                class="second-level-child second-level-child-13 notactive notactive url-type-internal">NewsMo
                                            </a></li>
                                            <li class="nav-items "> <a href="cities.html" style={{background: 'transparent'}}
                                                target="_self"
                                                class="second-level-child second-level-child-14 notactive notactive url-type-internal">Cities
                                            </a></li>
                                            <li class="nav-items "> <a href="education-today.html"
                                                style={{background: 'transparent'}}
                                                class="second-level-child second-level-child-15 notactive notactive url-type-external">Education</a>
                                            </li>
                                            <li class="nav-items "> <a href="trending-news.html"
                                                style={{background: 'transparent'}}
                                                class="second-level-child second-level-child-16 notactive notactive url-type-external">Trending</a>
                                            </li>
                                            <li class="nav-items "> <a href="binge-watch.html"
                                                style={{background: 'transparent'}} target="_self"
                                                class="second-level-child second-level-child-17 notactive notactive url-type-internal">Binge
                                                Watch </a></li>
                                            <li class="nav-items "> <a href="auto.html" style={{background: 'transparent'}}
                                                target="_self"
                                                class="second-level-child second-level-child-18 notactive notactive url-type-internal">Auto
                                            </a></li>
                                            <li class="nav-items "> <a href="lifestyle.html"
                                                style={{background: 'transparent'}} target="_self"
                                                class="second-level-child second-level-child-19 notactive notactive url-type-internal">Lifestyle
                                            </a></li>
                                            <li class="nav-items "> <a href="business.html" style={{background: 'transparent'}}
                                                target="_self"
                                                class="second-level-child second-level-child-20 notactive notactive url-type-internal">Business
                                            </a></li>
                                            <li class="nav-items "> <a href="television.html"
                                                style={{background: 'transparent'}} target="_self"
                                                class="second-level-child second-level-child-21 notactive notactive url-type-internal">Television
                                            </a></li>
                                            <li class="nav-items "> <a href="world.html" style={{background: 'transparent'}}
                                                target="_self"
                                                class="second-level-child second-level-child-22 notactive notactive url-type-internal">World
                                            </a></li>
                                            <li class="nav-items "> <a href="programmes.html"
                                                style={{background: 'transparent'}} target="_self"
                                                class="second-level-child second-level-child-23 notactive notactive url-type-internal">Programme
                                            </a></li>
                                            <li class="nav-items "> <a href="airquality/index.html"
                                                style={{background: 'transparent'}}
                                                class="second-level-child second-level-child-24 notactive notactive url-type-external">AQI</a>
                                            </li>
                                            <li class="nav-items "> <a
                                                href="india/story/dnpa-code-of-ethics-1733696-2020-10-21.html"
                                                style={{background: 'transparent'}}
                                                class="second-level-child second-level-child-25 notactive notactive url-type-external">CODE
                                                OF ETHICS</a></li>
                                            <li class="nav-items "> <a href="https://www.aajtak.in/rate-card"
                                                style={{background: 'transparent'}} target="_self"
                                                rel="noopener noreferrer"
                                                class="second-level-child second-level-child-26 notactive notactive url-type-external">Rate
                                                Card</a></li>
                                            <li class="drkmode nav-items"> <label for="switch"><span>Dark
                                                    Mode</span></label></li>
                                        </ul>
                                        <div class="menu-login mhide">
                                            <div class="social-nav mhide">
                                                <dl class="social-nav mhide">
                                                    <dt class="livetv-icon-parent"><a href="livetv.html">
                                                        text
                                                    </a>
                                                    </dt>
                                                    <dt class="share-icon-parent"> <a href="javascript:void(0)"
                                                        class="share-icon-default"><i class="fa fa-share-alt"
                                                            aria-hidden="true"></i></a>
                                                        <div class="social-dropdown">
                                                            <dl>
                                                                <dt><a rel="noopener noreferrer"
                                                                    href="https://www.facebook.com/IndiaToday/"
                                                                    class="user-activity def-cur-pointer" data-rel="1"
                                                                    data-tag="homepage" data-activity="fb_follow"
                                                                    data-status="1" title="Follow us" target="_blank"><i
                                                                        class="fa fa-facebook"></i></a></dt>
                                                                <dt><a rel="noopener noreferrer"
                                                                    href="https://twitter.com/indiatoday"
                                                                    class="user-activity def-cur-pointer" data-rel="1"
                                                                    data-tag="homepage" data-activity="twitter_follow"
                                                                    data-status="1" title="Follow us" target="_blank"><i
                                                                        class="fa fa-twitter"></i></a></dt>
                                                                <dt><a href="rss.html" title=""><i
                                                                    class="fa fa-rss"></i></a></dt>
                                                            </dl>
                                                        </div>
                                                    </dt>
                                                    <dt class="search-icon-parent"> <a href="javascript:void(0)"
                                                        class="search-icon-default" title=""><i
                                                            class="fa fa-search"></i></a> <a href="javascript:void(0)"
                                                                class="search-icon-search" title=""><i
                                                                    class="fa fa-search"></i></a>
                                                        <div class="globle-search">

                                                            <div class="scc_inGssHomeSbOnly"></div>
                                                        </div>
                                                    </dt>
                                                    <dt>
                                                        <div class="user-menu"> <a
                                                            href="https://auth.indiatoday.in/saml_login/other/aHR0cHM6Ly93d3cuaW5kaWF0b2RheS5pbi8jc3NvbG9naW49MQ=="
                                                            class="user-icon sso-click"><i class="fa fa-user"></i></a>
                                                        </div>
                                                    </dt>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                            <div class='scc_overlay'  style={{display: 'none'}}>
                                <div class='scc_overlayWrapper'>
                                    <div class='scc_overlayTitle trn'>
                                        <p>Speak Now</p>
                                    </div>
                                    <div class='scc_overlayContent'>
                                        text
                                    <br /> <span class='scc_spk_stat_txt_hsb trn'
                                        style={{display: 'none'}}
                                        >Listening</span> <br />
                                        <div class='scc_ppButtonWrap'><a name='re_speak' type='submit' href='#'
                                            class='scc_btn scc_btn-success scc_ppBtnReSpeak scc_tlkHsbNw trn'
                                            style={{display: 'none'}}>Re Speak</a><a name='submit' type='submit' href='#'
                                                class='scc_btn scc_btn-success scc_ppBtnSubmit scc_search_home_mic_btn trn'
                                                style={{display: 'none'}}>Submit</a></div>
                                    </div>
                                    <div class='scc_closeOlay speech_recognitionEnd'>x</div>
                                </div>
                            </div>
                        </div>
                        <div id="block-itg-ads-ads-super-banner-top-nav-728x90" class="block block-itg-ads last odd">
                            <div class="container">
                                <div class="home-page-728-ads">
                                    <div class='adtext'>advertisement</div>
                                    <div id='div-gpt-ad-1514896195242-0'>
                                        {/* <!-- <script>
                                        googletag.cmd.push(function () { googletag.display('div-gpt-ad-1514896195242-0'); });
                                    </script> --> */}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </header>
        </div>
    );
}

export default LandingPage;
