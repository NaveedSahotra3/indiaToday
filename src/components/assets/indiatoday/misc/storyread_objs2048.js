! function() {Array.prototype.contains = function(t) {return this.indexOf(t) > -1};var t = {storyRead_count: 0,stroyRead_max: 10000,refresharray: [],domain_include: ["https://www.indiatoday.in/"],include_cat: ["magazine"],sso_loginurl: "https://auth.indiatoday.in/saml_login/other/",magazine_param: "#ssologin=1#source=magazine",exclude_url: [],is_read: function() {document.cookie.indexOf("storyRead_count=") > -1 && (t.storyRead_count = parseInt(t.getCookie("storyRead_count"))), t.storyRead_count = t.storyRead_count + 1, document.cookie = "storyRead_count=" + t.storyRead_count + ";path=/magazine"},getQueryStringValue: function(key) {return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));},read_url: function() {var t = document.URL;return t.indexOf("?") > -1 ? t.substring(0, t.indexOf("?")) : document.URL},getCookie: function(t) {return document.cookie.length > 0 && (c_start = document.cookie.indexOf(t + "="), -1 != c_start) ? (c_start = c_start + t.length + 1, c_end = document.cookie.indexOf(";", c_start), -1 == c_end && (c_end = document.cookie.length), unescape(document.cookie.substring(c_start, c_end))) : ""},URLToArray: function() {return t.read_url().split("../../../index.html").filter(function(t) {return null != t})},thval_cookie: function() {parseInt(t.getCookie("storyRead_count"))},callback: function(t) {console.log(t)},magazine_img: function(t) {var e = new XMLHttpRequest;e.overrideMimeType("application/json"), e.open("GET.html", "https://akm-img-a-in.tosshub.com/indiatoday/latest-issue/latest_issue.json", !0), e.onreadystatechange = function() {4 == e.readyState && "200" == e.status && t(e.responseText)}, e.send(null)},return_id: function() {return document.querySelector("meta[name='branch:deeplink:canonical_identifier']").getAttribute("content")},return_url: function() {return window.location.href.split("#").indexOf("ssologin=1") > -1},show_popup: function() {if (1 != t.return_url())if (null == t.getCookie("itg_forced_login") || "null" == t.getCookie("itg_forced_login") || "" == t.getCookie("itg_forced_login")) {var e = "";t.magazine_img(function(o) {! function(e) {var utm_campaign=t.getQueryStringValue("utm_campaign");var _campaign_str = '';if(utm_campaign !== undefined && utm_campaign != '' && utm_campaign != 'null' && utm_campaign !== null){_campaign_str='#utm_campaign='+utm_campaign;}var o = btoa(t.read_url() + t.magazine_param + _campaign_str),n = '<div style="box-sizing:border-box;display:block;max-width:755px;width:100%;height:100%;margin:0 auto;background-color:transparent;overflow:hidden"><style>.ck-container{position: relative;box-sizing: border-box;padding: 35px 27px 35px;background-color: #ffffff;}.ck-info_container h2{font-size:32px;font-weight:600;line-height:37px;margin-bottom:11px}.mkw_para_txt,p.ck_desc_txt{text-align:left;font-size:16px;font-weight:400;line-height:24px;margin:0 auto}.ck_btn-wrapper,p.mkw_desc_txt{margin-left:auto;margin-right:auto}.ck_btn-wrapper{margin-top:16px;display:block;text-align:left;}.ck_btn-wrapper .ck_signup_mk,.ck_btn-wrapper .ck_subscribe_mk{display:inline-block;max-width:130px;width:100%;line-height:1;transition:background-color .2s;text-decoration:none;text-align:center;position:relative;box-sizing:border-box}.ck_btn-wrapper .ck_subscribe_mk{padding:9px 20px;font-family:"Open Sans",sans-serif;font-size:18px;font-weight:600;color:#fff;background-color:#a2020d;border-radius:6px;margin-bottom:10px;cursor:pointer}.ck_btn-wrapper .ck_signup_mk{background-color:transparent;border:1px solid #3e4ebc;color:#3e4ebc;padding:13px 15px;font-family:"Open Sans",sans-serif;font-size:16px;font-weight:400;border-radius:6px;margin-bottom:30px;cursor:pointer}.ck_btn-wrapper .ck_signup_mk:hover,.ck_btn-wrapper .ck_subscribe_mk:hover{color:#fff;background-color:rgba(177, 43, 52, 0.9686274509803922);text-decoration:none}.ck_signup_mk .ck_info-btn-link-marker{font-weight:700}h2.mkw_title{font-size:16px;line-height:15px;margin-bottom:5px}p.mkw_subtitle{font-weight:600;font-size:23px;margin-bottom:10px}p.mkw_desc_txt{font-size:16px;line-height:22px;font-weight:400;max-width:71%}.mkw_product_img{display:block;max-width:100%;text-align:center;flex-basis: 24%;order: 1;position:relative;max-height: 245px}.txt_ck_container{flex-basis: 72%;order: 2;padding-left:18px}img.img_mkw_product_img{max-width:100%;margin:5px auto 0;z-index: 99;position: relative;}.mkw_product_img:before{content:"";width: 100%;height: calc(100% - 2px);background: #d6d6d6;z-index: 2;position: absolute;left: 0px;top: 4px;transform: rotate(6deg);}.mkw_product_img:after{content: "";width: 100%;height: calc(100% - 2px);background: #afadad;z-index: 2;position: absolute;left: 0px;top: 4px;transform: rotate(-6deg);}.mkw_enjoy_txt{margin-top:20px}.mkw_info_enjoy_list{box-sizing:border-box;display:inline-block;width:77%;text-align:left;margin:19px 0 0;padding:0;border:0;outline:0}.mkw_info_enjoy_list li{position:relative;box-sizing:border-box;display:block;font-size:15px;line-height:27.86px;padding-left:6px;font-family:"Open Sans",sans-serif;letter-spacing:-.025em;font-weight:400;font-style:normal}.mkw_info_enjoy_list li:before{background-repeat:no-repeat;background-size:auto;content:"";background-color:transparent;position:absolute;left:-16px;top:3px;width:5px;border-bottom:3px solid #0b0b0b;height:11px;border-right:3px solid #000;transform:rotate(45deg);-o-transform:rotate(45deg);-ms-transform:rotate(45deg);-webkit-transform:rotate(45deg)}.mkw_info_enjoy_list li p{line-height:23px;margin:0 0 10px}.mkw_info_enjoy_list li p b{font-family:Arial,sans-serif;font-weight:700}.txt-center{display: flex;flex-wrap: wrap;flex-direction: row;justify-content: flex-start;align-items: stretch}.mkw_para_ul{padding: 0px; margin: 0px; font-size: 15px; line-height: 22px;text-align:left;}.mkw_para_ul ol{list-style-position: outside; padding-left: 20px;font-size: 14px;font-weight: 400;line-height: 26px;}span.mkw_signupnow-get{font-weight: bold; display: block; margin-bottom: 5px;}@media only screen and (max-width:655px){.mkw_product_img:before{width: 172px;height: 240px;left: 50%;top: 10px;transform: rotate(6deg) translateX(-50%)}.mkw_product_img:after{height: 240px;left: 50%;top: -7px;width: 172px;transform: rotate(-6deg) translateX(-50%);}.mkw_product_img,.txt_ck_container{flex-basis:100%}.txt_ck_container{padding: 17px 0px 0px; text-align: center;}.mkw_para_txt, p.ck_desc_txt,.ck_btn-wrapper{text-align:center;}}</style><div class="ck-container"><div class="ck-info_container txt-center"><div class="mkw_product_img"><img class="img_mkw_product_img" src="' + e.cover_large_img + '" alt=""></div><div class="txt_ck_container"><h2>'+ (t.getQueryStringValue("utm_signup") == "show" ? 'Get Access To Unlimited Articles' :'You\'ve reached your article limit')+'</h2><p class="ck_desc_txt">'+ (t.getQueryStringValue("utm_signup") == "show" ? 'Log in using your Facebook account or email to keep reading India Today' : 'Sign in to keep reading India Today')+'</p><div class="ck_btn-wrapper"><a target="_parent" class="ck_subscribe_mk" href="' + t.sso_loginurl + o + "\" onclick=\"ga('send', 'event', 'magazinestoryloginbtn', 'click','1', 1, {'nonInteraction': 1});return true;\"><span class=\"ck_btn-link-marker\">"+ (t.getQueryStringValue("utm_signup") == "show" ? 'Log in' :'Sign in')+"</span></a></div><div class=\"mkw_para_ul\"><span class=\"mkw_signupnow-get\">Sign up NOW to get:</span><ol><li>Premium content on Aaj Tak HD Channel</li><li>Unrestricted access to India Today magazine content</li></ol></div></div></div></div></div>",i = '<div class="description">' + document.querySelector("div[itemprop='articleBody']").innerText.replace(/\s{2,}/g, " ").split(" ").slice(0, 50).join(" ") + "</div>";document.querySelector("div[itemprop='articleBody']").style.display = "none", document.querySelector("div[itemprop='articleBody']").insertAdjacentHTML("afterend", n), document.querySelector("div[itemprop='articleBody']").insertAdjacentHTML("beforebegin", i)}(e = JSON.parse(o))})} else console.log("user already logged in.")},init_read: function() {if (t.getQueryStringValue("utm_signup") == "show" && null == localStorage.getItem("urlspush")){var e = t.return_id();localStorage.setItem("urlspush", e),t.URLToArray().contains("magazine") && t.is_read()}if (null == localStorage.getItem("urlspush")) {var e = t.return_id();localStorage.setItem("urlspush", e), t.URLToArray().contains("magazine") && t.is_read()} else {var o = localStorage.getItem("urlspush").split(",").length;console.log("length localstor " + o);var n = [];n.push(t.return_id()), n.push(JSON.parse(JSON.stringify(localStorage.getItem("urlspush"))));var i = localStorage.getItem("urlspush").split(",");t.getQueryStringValue("utm_signup") == "show" ? t.show_popup() : o < 10000 ? (console.log("if condition"), -1 == i.indexOf(t.return_id()) && null != localStorage.getItem("urlspush") && o < 10000 && t.URLToArray().contains("magazine") && (localStorage.setItem("urlspush", n), t.is_read())) : 0 == i.indexOf(t.return_id()) || 1 == i.indexOf(t.return_id()) ? (console.log("previous opened stories"), console.log("else if condition")) : (console.log("else condition"), t.show_popup())}}};t.init_read()}();