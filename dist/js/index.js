"use strict";function jQuery111103156899720718771_1529912092141(a){var s=a.resultList,n=$(".input_sec");n.css("display","block");for(var e="",l=0;l<s.length;l++)e+=' <li class="sous">\n                                    <a href="http://list.jiuxian.com/search.htm?key='+s[l].word+'">\n                                        <span>'+s[l].word+"</span>\n                                        <em>\n                                            <b>约"+s[l].count+"件商品</b>\n                                        </em>\n                                    </a>\n                                </li>";n.html(e)}$(function(){var a=$(".ban_wrap"),s=$(".ban_ul"),n=$(".nav_ol"),e=document.getElementsByClassName("btn");touMing(s[0],e,n[0],a[0]);var l=$(".first_left_ul"),t=$(".first_left_ol"),o=$(".first_left"),c=$(".first_left_btn");lunBoTu(l[0],t[0],c,o[0]);var i=$(".second_left_ul"),r=$(".second_left_ol"),h=$(".second_left_btn");lunBoTu(i[0],r[0],h,o[0]);var p=$(".sou"),d=$(".sec"),f=$(".input_sec");p.on("click",function(){var a=d.val();console.log(a),location.href="http://list.jiuxian.com/search.htm?key="+a}),d[0].oninput=function(){var a=d.val();console.log(a);var s=document.createElement("script");s.src="http://list.jiuxian.com/assKeyWords.htm?t="+a+"&callback=jQuery111103156899720718771_1529912092141&wd=ma&area=2&searchUserKey=a6b74202-a49e-1a38-b76b-26d12a147e95&randomTest=0.07557344683881717&_=1529912092142",$("body").append(s)},d[0].onblur=function(){f.css("display","none")},$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",function(a){}),$.get("http://datainfo.duapp.com/shopdata/getclass.php",function(c){$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",function(a){for(var s=$(".nav_shop_ul"),n=JSON.parse(c),e=a,l="",t=0;t<n.length;t++)for(var o=0;o<3;o++)l+='  <li class="nav_shop_ul_li">\n                       <h3> <i class="icon"></i>'+n[t][1]+'</h3>\n                        <div>\n                            <p>\n                                <a href=""><span class="diff">'+n[t].className+'</span></a>\n                                <a href="">'+e[o].goodsName+'</a>\n                                <a href="">'+n[t].className+'</a>\n                            </p>\n                            <p>\n                                <a href="">'+e[o].goodsName+'</a>\n                                <a href="">'+n[t].className+'</a>\n                                <a href="">'+e[o].goodsName+"</a>\n                            </p>\n\n                        </div>\n                    </li>";s.html(l)})}),$.ajax({url:"js/tuzi.json",dataType:"json",success:function(a){for(var s=0;s<a.length;s++){var n=$('<div class="n_s-tit"> <div class="n_s_left"> <h4>'+a[s].name+'</h4> </div> <div class="n_s_right"> <p> <a href="">'+a[s].class+' </a> <a href="">'+a[s].class2+'</a> <a href="">'+a[s].class3+' </a> <a href="">'+a[s].class4+"</a> </p> </div> </div> ");$(".nav_sile").append(n)}for(var e in a){var l=$('  <div class="s2_tit"> <div class="s_t_left"> <h3>'+a[e].name+'</h3> </div> <div class="s_t_right"> <a href=""><span>'+a[e].class3+'</span></a> <a href="">'+a[e].class2+'</a> <a href=""><span>'+a[e].class3+'</span></a> <a href="">'+a[e].class4+'</a> <a href=""><span>'+a[e].class6+'</span></a> <a href="">'+a[e].class5+'</a> <a href=""><span>'+a[e].class7+'</span></a> <a href="">'+a[e].class8+'</a> <a href=""><span>'+a[e].class9+'</span></a> <a href="">'+a[e].class6+'</a> <a href="">'+a[e].class4+"</a> </div> </div>");$(".sile2").append(l)}var t=$(".nav_shop_ul").children("li"),o=$(".nav_shop").children("div");console.log(t,o),$("body").delegate(".nav_shop_ul_li","mouseenter",function(){var a=$(this).index(),s=o.eq(a);s.css("display","block")}),$("body").delegate(".nav_shop_ul_li","mouseleave",function(){var a=$(this).index(),s=o.eq(a);s.css("display","none")})}})});