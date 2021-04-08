 (function() {
        "use strict";
        var Module = (function() {
            return {
                init: function() {
                    this.initZoom();
                    this.imgZoomIn();
                    this.imgZoomOut();
                },
                initZoom : function(){
                    var zoomStyle = '.zoomIcon{position:absolute;top:10px;right:10px;cursor:pointer;background-color:rgba(0,0,0,0.5);width:60px;height:60px;text-align:center;border-radius:100%;padding-top:19px;box-sizing:border-box;display:none}.zoomIcon img,.itgimage.zoomImage img{width:auto}.itgimage.zoomImage{text-align:center}.zoomout{position:fixed;top:10px;right:10px;cursor:pointer;background-color:rgba(250,250,250,0.5);width:60px;height:60px;text-align:center;border-radius:100%;padding-top:19px;box-sizing:border-box;display:none;border:1px solid #ababab}.itgimage.zoomImage{position:fixed;top:calc(50% - 10px);left:50%;max-width:100%;height:100%;width:100%;max-height:calc(100vh - 60px);cursor:pointer;z-index:9999992;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.zoomImage > img.lazyloaded{max-width:100%;max-height:100%;width:auto;height:auto}.itgimage .zoomIcon img{width:auto}.itgimage{cursor:pointer}.itgimage.zoomImage{cursor:default}.zoomImage .body_caption{padding:10px}.itgimage:hover .zoomIcon{display:block}.zoomImage:hover .zoomIcon{display:none}.zoomout{right:6px}.overlay{background-color:#fff;position:fixed;width:100%;height:100%;z-index:9999991;top:0;display:none}@media screen and (max-width:768px){.zoomImage .zoomIcon{display:none}.zoomIcon,.zoomout{width:40px;height:40px;padding-top:10px}.zoomout{top:6px}.zoomIcon{display:block}}@media screen and (max-width:479px),(min-width:767px) and (max-width:780px){.itgimage.zoomImage{max-height:none;height:auto}}@media screen and (min-device-width:480px) and (max-device-width:767px),(min-device-width:800px) and (max-device-width:900px){.itgimage.zoomImage > img{height:100%!important}}@media screen and (max-width:479px){.itgimage.zoomImage{height:auto}}';
                    var iconEl = '<div class="zoomIcon"><img src="https://smedia2.intoday.in/mailer/testing/zoomin-icon.png" alt=""></div><div class="zoomout" style="display: none;"><img src="https://smedia2.intoday.in/mailer/testing/zoomout-icon.png" alt=""></div>';
                    var styleEl = document.createElement('style');
                    var imgWrapper = document.querySelectorAll(".itgimage");
                    var textnode = document.createTextNode(zoomStyle);
                    var body = document.querySelector("body");
                    var overlayEl = document.createElement("div");
                    overlayEl.classList = "overlay";
                    styleEl.appendChild(textnode);
                    body.appendChild(styleEl);
                    body.appendChild(overlayEl);
                     imgWrapper.forEach(function(item){
                      if(item.children.length == 2){
                         item.innerHTML +=iconEl;
                       }
                     })
                },
                preventDefault : function(e){
                    e.preventDefault();
                },
                disableScroll: function(){
                    document.body.addEventListener('touchmove', this.preventDefault, { passive: false });
                },
                enableScroll: function(){
                    document.body.removeEventListener('touchmove', this.preventDefault);
                },
                imgZoomIn: function() {
                    var imgWrapper = document.querySelectorAll(".itgimage");
                    var overlay = document.querySelector(".overlay");
                    var body = document.querySelector("body");
                    var that = this;
                    imgWrapper.forEach(function(item){
                        item.addEventListener('click', function(){
                            var _winheight = window.innerHeight;
                            body.style.overflow = 'hidden';
                            overlay.style.display = "block";
                            if(!this.classList.contains('zoomImage')){
                               this.className +=" zoomImage"; 
                            }
                            for(let i = 0; i < this.children.length; i++){
                                if(this.children[i].classList == 'zoomout'){
                                    this.children[i].style.display="block";
                                }
                            }
                            that.disableScroll();
                        })
                    })
                },
                imgZoomOut: function() {
                     var imgWrapper = document.querySelectorAll(".itgimage");
                     var overlay = document.querySelector(".overlay");
                     var body = document.querySelector("body");   
                     var zoomOut = document.querySelectorAll(".zoomout");
                     var that = this;
                     zoomOut.forEach(function(item){
                        item.addEventListener('click', function(e){
                            e.stopPropagation();
                            body.style.overflow= "visible";
                            this.style.display = "none";
                            overlay.style.display = "none";
                            this.parentNode.classList = "itgimage";
                            that.enableScroll();
                        })
                    })
                }
            }
        }());
    var hasEl= document.querySelectorAll(".itgimage"); 
     if(hasEl.length){
        Module.init(); 
     }    
    })();