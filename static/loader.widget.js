"use strict";
              (function () {
                  
                    function load(x, s) {
                        return new Promise(function (resolve, reject) {
                       //console.log("file-loading");
                    
                        s.onload = s.onreadystatechange = function () {
                            var r = false;
                    
                            if (!r && (!this.readyState || this.readyState == 'complete')) {
                            r = true;
                           //console.log("file-loading success");
                            return resolve();
                            }
                        };
                    
                        s.onerror = function (e) {
                           //console.log("file-loading failed");
                            return reject(e);
                        };
                        //console.log(s)
                        x.appendChild(s);
                        });
                    }

                async function loadJs(jsUrls) {
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;
                    var x = document.getElementsByTagName('head')[0];
                    try {
                        for (var _iterator = Object.keys(jsUrls)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var key = _step.value;

                            var _url = jsUrls[key];
                            if (!isMyScriptLoaded(_url)) {
                                //document.writeln("<script type='text/javascript' src='" + _url + "'></script>");
                                var s = document.createElement('script');
                                s.type = 'text/javascript';
                                s.src = _url;
                                s.async = true;
                                s.defer = true;
                                await load(x, s);
                            }
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                }
                function isMyScriptLoaded(url) {
                    var scripts = document.getElementsByTagName('script');
                    for (var i = scripts.length; i--;) {
                        if (scripts[i].src == url) return true;
                    }
                    return false;
                }

                function isMyCssLoaded(url) {
                    var scripts = document.getElementsByTagName('link');
                    for (var i = scripts.length; i--;) {
                        if (scripts[i].src == url) return true;
                    }
                    return false;
                }
                async function loadCss(cssUrls) {
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = Object.keys(cssUrls)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var key = _step2.value;

                            var _url2 = cssUrls[key];
                            if (!isMyCssLoaded(_url2)) {
                                var head = document.getElementsByTagName('head')[0];
                                var link = document.createElement('link');
                                link.rel = 'stylesheet';
                                link.type = 'text/css';
                                link.href = _url2;
                                link.media = 'all';
                                link.async = true;
                                link.defer = true;
                                //head.appendChild(link);
                                await load(head, link);
                            }
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return();
                            }
                        } finally {
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }
                }
                  loadCss({
          bootstrapFont: "https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css",
          muliFont: "https://fonts.googleapis.com/css?family=Muli:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i",
          owl: "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.css",
          bootstrap: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
          owlTheme: "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css",
          pmTheme: "https://parramato.com/bot-view/myproject_100911645983/dev/css/theme.widget.css"
      });
      loadJs({
          crypt: "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js",
          jQuery: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js",
          bootstrap: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js",
          carousel: "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js",
          socket: "https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.1.1/socket.io.js",
          responsiveVoice :"https://code.responsivevoice.org/responsivevoice.js",
          nluComponent:"https://unpkg.com/compromise@latest/builds/compromise.min.js",
          bundle: "https://parramato.com/bot-view/myproject_100911645983/dev/js/bundle.js",
          script: "https://parramato.com/bot-view/myproject_100911645983/dev/js/script.widget.js"
      });
                  window.jubiModal={
                static:{
                    images:{"logo":"https://parramato.com/bot-view/images/logo.png","sendIcon":"https://parramato.com/bot-view/images/icon_send.png","sendIconActive":"https://parramato.com/bot-view/images/iconRed_send.png","sendIconInPage":"https://parramato.com/bot-view/images/icon_send_in_page.png","loaderBotChat":"https://parramato.com/bot-view/images/response-loading.gif","userIcon":"https://parramato.com/bot-view/images/user.png","botIcon":"https://parramato.com/bot-view/images/boticon.png","botIconInPage":"https://parramato.com/bot-view/images/icon.png","logoIcon":"https://parramato.com/bot-view/images/logo-icon.png","voiceIcon":"https://parramato.com/bot-view/images/voice.png","closeWebView":"https://parramato.com/bot-view/images/closeWebView.png","attachment":"https://parramato.com/bot-view/images/attachment.png","permissionIcon":"https://parramato.com/bot-view/images/parrot_loader.gif","muteIcon":"https://parramato.com/bot-view/images/mute.png","unmuteIcon":"https://parramato.com/bot-view/images/unmute.png"}
                }
            };
                  window.runOnJubiStartEvent=true;
                  window.mainpage = '<section class="sec_main" id="jubisecmain" style="display: none;"></section>';
                  window.leftpanel = '';  
                  window.rightpanel = 
                      '<div class="" id="rightpanel">'+
                          '<section class="jubichatbot" id="jubichatbot" style="display: none;">'+                       
                          
                          '+</section>'+
                      '</div>'+
                      '<section class="jubi-secCloseMsg jubi-closemsg" id="jubi-secCloseMsg">'+
                          '<div class="btnClose" id="jubi-btnClose">'+
                              '<img src="https://parramato.com/bot-view/images/close.png" class="img-responsive">'+
                          '</div>'+
                          '<div class="closeMsg">'+
                              '<div class="triangle-down point_message" id="point_message">&nbsp;</div>'+
                          '</div>'+
                          '<p onclick="openChatbot()">Hi, Welcome to the Customer Experience economy. Here. customer delight means everything.'+
                      '</section>'+
  
                      '<section class="jubi-sec_closeview" id="jubi-secCloseview">'+
                          '<div class="jubi-bxCloseview ">'+
                              '<img src="https://parramato.com/bot-view/images/closegif.gif" id="jubi-closeImage" class="img-responsive">'+
                          '</div>'+
                      '</section>';
                  window.templateOpenView = 
                  '<aside id="jubi-aside_fullopenview">'+
                  '<section class="pm-sec_calliframe" id="pm-secIframe"  style="display:none">'+
                  '<section class="pm-sec_scroll2 pm-sec_openview" id="pm-mainSec">'+ 
  
                      '<div class="jubi-forhidechat">'+
                          '<section class="jubi-secHideChat" id="jubi-secHideChat">'+
                              '<svg class="jubi-headerdnarrow">'+
                                  '<path class="a1" d="M0 0 L5 5 L10 0"></path>'+
                              '</svg>'+
                          '</section>'+
                      '</div>'+
  
                      '<section id="pm-heading" class="pm-sec_newHeader">'+
                          '<div class="jubi-message-header">'+
                              '<h1 id="boldmsg-1-header">Hello,</h1>'+
                              '<h2 id="boldmsg-2-header">Delight</h2>'+
                          '</div>'+
                          '<div id="msgDescribe-header">'+
                              '<p>Welcome to the Customer Experience economy. Here, customer delight means everything.</p>'+
                          '</div>'+
                      '</section>'+
  
                      '<section class="pm-sec_chatbody" id="pm-data" >'+
                          '<div class="pm-bxChatbox pm-bxChat chatWindow" id="pm-buttonlock">'+
                          '</div>'+
                      '</section>'+
  
                      '<div id="jubi-recording-text" style="display:none">'+
                          '<p id="jubi-result-text">'+
                              '<span class="jubi-grey-text"><span>'+
                          '</p>'+
                      '</div>'+
  
                      '<section id="jubi-textInput" class="jubi-sec_newFooter footer-two" style="float:left;width:100%;">'+
  
                          '<aside class="jubi-muteUnmuteVoice">'+
                              '<div id="jubi-unmuteVoice">'+
                                  '<img src="https://parramato.com/bot-view/images/unmute.png">'+
                              '</div>'+
                              '<div id="jubi-muteVoice">'+
                                  '<img src="https://parramato.com/bot-view/images/mute.png">'+
                              '</div>'+
                          '</aside>'+
                      
                          '<div class="voice-buttons" id="voice-buttons">'+
                              '<div class="voiceIcon" id="button-play-ws" >'+
                                  '<img src="https://parramato.com/bot-view/images/voice.png" class="img-fluid">'+
                              '</div>'+
                              '<div class="voicePulse" id="button-stop-ws" >'+
                                  '<div class="sk-three-bounce">'+
                                      '<div class="sk-child sk-bounce1"></div>'+
                                      '<div class="sk-child sk-bounce2"></div>'+
                                      '<div class="sk-child sk-bounce3"></div>'+
                                  '</div>'+
                                  '<div class="stop-recording">Listening...</div>'+
                              '</div>'+
                          '</div>'+
                          '<div class="jubi-bxinput" id="jubi-bxinput" style="display:none;">'+
                              '<textarea id="jubi-answerBottom" placeholder="Type a message here..."></textarea> '+
                          '</div>'+
                          '<div class="datasendButtons">'+
                              '<div class="sendIcon" id="button-send">'+
                                  '<button id="jubi-bottomClick" type="submit" onclick="return false;">'+
                                      '<img src="https://parramato.com/bot-view/images/icon_send.png" id="jubi-graySend" class="img-responsive" style="display: block;">'+
                                      '<img src="https://parramato.com/bot-view/images/iconRed_send.png" id="jubi-redSend" class="img-responsive" style="display: none;">'+
                                  '</button>'+
                                  
                              '</div>'+
                              '<div class="uploadbox">' +
                                  '<label>' +
                                      '<div class="inputfile">' +
                                          '<img src="https://parramato.com/bot-view/images/attachment.png" class="img-responsive">' +
                                          '<input class="jubi-file-upload" type="file" name="fileName" >' +
                                      '</div>' +
                                      '<div class="button-section" style="display:none">' +
                                          '<button type="submit">Submit</button>' +
                                      '</div>' +
                                  '</label>'+
                              '</div>' +
                              '<div class="keyboard-icon" id="keyboard-icon" >'+
                                  '<i class="fa fa-keyboard-o" aria-hidden="true"></i>'+
                              '</div>'+        
                          '</div>'+
                          '<div class="jubi-new_copyright" id="jubi-new_copyright">' +
                              'Powered by <a href="https://www.jubi.ai/" target="_blank">jubi.ai</a>' +
                          ' </div>' +
                      '</section>'+
                  '</section>' +       
              '</section>';
              window.loadPermissionView = 
              '<section id="pm-permission-view" style="display:none" >'+                
                  '<section class="pm-sec_show_option_on_start" id="pm-sec_show_option_on_start" style="display:block">'+         
                      '<div class="chatProceed" id="chatProceed">'+
                          '<div class="chatProceed-botimg">'+
                              '<img src="https://parramato.com/bot-view/images/parrot_loader.gif" class="img-responsive">'+
                          '</div>'+
                          '<p>Welcome back! Let us begin...</p>'+
                          '<ul>'+
                              '<li>'+
                                  '<a href="javascript:void(0)" id="jubi-continue-storage" >Continue from where we left</a>'+
                              '</li>'+
                              '<li>'+
                                  '<a href="javascript:void(0)" id="jubi-start-fresh">Start fresh</a>'+
                              '</li>'+
                          '</ul>'+
                      '</div>'+
                  '</section>'+
              '</section>'+
              '</aside>';
      
              })();
              