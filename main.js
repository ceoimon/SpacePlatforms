(function() {
  var demo = {
    divSelectExpand: function(e) {
      e.stopPropagation();
      var t = e.target,
          s = t.parentNode,
          l = s.getElementsByTagName("li"),
          sl = s.getElementsByClassName("selectList")[0],
          ls = l.length,
          maxL = 3;
      ls > maxL?ls = maxL:ls;
      if(s.classList.contains("notExpand")){
        if(ls === 0) {
          console.error("There should have one item on select list at least.");
          return;
        }
        var h1 = t.offsetHeight * (ls + 1) + 'px',
            h2 = t.offsetHeight * ls + 'px';
        s.classList.remove("notExpand");
        s.classList.add("expanded");
        s.style.cssText += "height:" + h1 + ";";
        sl.style.cssText += "height:" + h2 + ";";
      } else {
        demo.divSelectcollapse();
      }
    },
    divSelectcollapse: function() {
      var dS = document.getElementsByClassName("divSelect expanded");
      Array.prototype.forEach.call(dS,
        function(d, i) {
          d.classList.remove("expanded");
          d.classList.add("notExpand");
          var t = d.getElementsByTagName("a")[0],
              sL = d.getElementsByClassName("selectList")[0];
          d.style.cssText += "height:"+ t.offsetHeight +"px;";
          sL.style.cssText += "height:0;";
        }
      );
    },
    initjScrollPane: function() {
      var p = document.getElementsByClassName("scroll-pane"),
          maxL = 3;
      Array.prototype.forEach.call(p,
        function(sp,i) {
          var rs = function(s) {
            s.style.cssText += "opacity:1;height:0;transition:all 0.3s;";
          };
          var pr = sp.parentNode,
              t = pr.getElementsByTagName("a")[0],
              h = t.offsetHeight * maxL + 'px';
          sp.style.cssText += "transition:all 0s;opacity:0;height:" + h + ";";
          setTimeout("$('.scroll-pane').jScrollPane()",200);
          setTimeout(function(){rs(sp);},205);
        });
    },
    selectEffect: function(e) {
      var a = document.getElementsByClassName("analytics")[0],
          s = a.getElementsByClassName("divSelect")[0],
          sl = a.getElementsByClassName("selectList")[0],
          ms = s.getElementsByTagName('a')[0];
      ms.innerHTML = e.target.innerHTML;
      demo.divSelectcollapse();
    },
    animateBlock: {
      isVisiable: function(el, wh, st, delta) {
        delta = delta || 260;
        return $(el).offset().top < wh + st - delta;
      },
      analyticsChartData: 
      [{y:694,h:341},
      {y:488,h:547},
      {y:666,h:369},
      {y:887,h:148},
      {y:517,h:518},
      {y:590.5,h:444.5},
      {y:269,h:766},
      {y:634.5,h:400.5},
      {y:406,h:629},
      {y:895,h:140},
      {y:584,h:451},
      {y:694,h:341},
      {y:488,h:547},
      {y:406,h:629},
      {y:406,h:629},
      {y:887,h:148},
      {y:666,h:369},
      {y:590.5,h:444.5},
      {y:269,h:766},
      {y:634.5,h:400.5},
      {y:406,h:629},
      {y:895,h:140},
      {y:584,h:451},
      {y:488,h:547},
      {y:666,h:369},
      {y:887,h:148},
      {y:517,h:518},
      {y:584,h:451},
      {y:694,h:341},
      {y:488,h:547},
      {y:406,h:629}],
      animations:{
        intro: function(){
          var $el = $(".intro"),
              $hd = $("#header");
          $hd.velocity('transition.slideDownIn', {display: null});
          $(".intro .title").velocity('transition.slideDownIn', {delay:300, display: null});
          $(".intro .introWords").velocity('transition.slideUpIn', {delay:500, display: null});
          $(".intro .start").velocity('transition.slideUpIn', {delay:800, display: null});
          delete demo.animateBlock.animations.intro;
        },
        timeline: function(wh, st){
          var $el = $(".timeline"),
              wW = $(window).width(),
              delta = 260;
          if(wW < 1024){ delta = 460; }
          if(demo.animateBlock.isVisiable($el, wh, st, delta)){
            var mysvg = $("#svgTimeLine"),
                s = Snap(mysvg[0]),
                l = s.select('#svgLine'),
                p = s.selectAll(".svgPoint"),
                b = s.selectAll(".border"),
                t = s.selectAll(".TLtext"),
                st = $(".timeline .subtitle");

            var mTL = $(".mTimeline"),
                e = $(".tlEventWrap");
            mTL.addClass("loaded");
            $(e[0]).velocity('transition.slideLeftIn', {delay:100, display: null});
            $(e[1]).velocity('transition.slideRightIn', {delay:200, display: null});
            $(e[2]).velocity('transition.slideRightIn', {delay:400, display: null});
            $(e[3]).velocity('transition.slideRightIn', {delay:550, display: null});
            $(e[4]).velocity('transition.slideLeftIn', {delay:730, display: null});
            st.velocity('transition.slideUpIn', {delay:1700, display: null});
            l.animate({"stroke-dashoffset": 8324}, 1600
              // function(){
              //   p.animate({opacity:1},500);
              //   t[0].animate({transform:"matrix(1 0 0 1 213.5113 257.9291)",opacity:1},200);
              //   b[0].animate({y:234.1,height:269.8,opacity:1},200,
              //     function(){
              //       t[1].animate({transform:"matrix(1 0 0 1 248.7115 680.3967)",opacity:1},200);
              //       b[1].animate({height:294.7},200,
              //         function(){
              //           t[2].animate({transform:"matrix(1 0 0 1 752.5646 680.3967)",opacity:1},200);
              //           b[2].animate({height:294.2},200,
              //             function(){
              //               t[3].animate({transform:"matrix(1 0 0 1 1563.6046 680.3967)",opacity:1},200);
              //               b[3].animate({height:340,},200,
              //                 function(){
              //                   t[4].animate({transform:"matrix(1 0 0 1 2210.438 258.4291)",opacity:1},200);
              //                   b[4].animate({y:234.1,height:254.6},200);
              //                 });
              //             });
              //         });
              //     });
              // }
              );
            setTimeout(
              function(){
                p[0].animate({opacity:1},200);
                t[0].animate({transform:"matrix(1 0 0 1 213.5113 257.9291)",opacity:1},200);
                b[0].animate({y:234.1,height:269.8,opacity:1},200,
                  function(){
                    p[1].animate({opacity:1},200);
                    setTimeout(
                      function(){
                        p[2].animate({opacity:1},200);
                      },100
                    );
                    setTimeout(
                      function(){
                        p[3].animate({opacity:1},200);
                      },150
                    );
                    t[1].animate({transform:"matrix(1 0 0 1 248.7115 680.3967)",opacity:1},200);
                    b[1].animate({height:294.7},200,
                      function(){
                        p[4].animate({opacity:1},200);
                        setTimeout(
                          function(){
                            p[5].animate({opacity:1},200);
                          },100
                        );
                        t[2].animate({transform:"matrix(1 0 0 1 752.5646 680.3967)",opacity:1},200);
                        b[2].animate({height:294.2},200,
                          function(){
                            p[6].animate({opacity:1},200);
                            setTimeout(
                              function(){
                                p[7].animate({opacity:1},200);
                              },150
                            );
                            t[3].animate({transform:"matrix(1 0 0 1 1563.6046 680.3967)",opacity:1},200);
                            b[3].animate({height:340,},200,
                              function(){
                                p[8].animate({opacity:1},200);
                                setTimeout(
                                  function(){
                                    p[9].animate({opacity:1},200);
                                  },120
                                );
                                t[4].animate({transform:"matrix(1 0 0 1 2210.438 258.4291)",opacity:1},200);
                                b[4].animate({y:234.1,height:254.6},200);
                              });
                          });
                      });
                  });
              },400
            );
            delete demo.animateBlock.animations.timeline;
          }
        },
        words: function(wh, st) {
          var $el = $(".analytics .words");
          if(demo.animateBlock.isVisiable($el, wh, st, 460)){
            var st = $(".words .subtitle"),
                t = $(".words .th2"),
                p = $(".words p"),
                s = $(".words .divSelect");
            st.velocity('transition.slideUpIn', {display: null});
            t.velocity('transition.slideUpIn', {delay:50, display: null});
            p.velocity('transition.slideUpIn', {delay:100, display: null});
            s.velocity('transition.slideUpIn', {delay:100, display: null});
            delete demo.animateBlock.animations.words;
          }
        },
        analyticsChart: function(wh, st) {
          var $el = $(".analytics .anGrap");
          if(demo.animateBlock.isVisiable($el, wh, st, 460)) {
            var s = Snap(".svgGrap"),
                r = s.selectAll(".svgRectWrap");
            r.forEach(function(a,i){
              var sr = a.selectAll(".svgRect"),
                  dy = demo.animateBlock.analyticsChartData[i].y,
                  dh = demo.animateBlock.analyticsChartData[i].h;
              sr.animate({y: dy, height: dh}, 1000, mina.easein);
            });
            demo.analyticsChartDrag();
            delete demo.animateBlock.animations.analyticsChart;
          }
        },
        analyticsMoreInfo: function(wh, st) {
          var $el = $(".analytics .moreInfo");
          if(demo.animateBlock.isVisiable($el, wh, st, 10)) {
            $el.velocity('transition.slideUpIn', { display: null});
            delete demo.animateBlock.animations.analyticsMoreInfo;
          }
        },
        overview: function(wh, st) {
          var $el = $(".overview");
          if(demo.animateBlock.isVisiable($el, wh, st, 550)) {
            var st = $(".overview .subtitle"),
                t = $(".overview .th2"),
                p = $(".overview p"),
                pB = $(".overview .progressBar");
            st.velocity('transition.slideUpIn', {display: null});
            t.velocity('transition.slideUpIn', {delay:50, display: null});
            p.velocity('transition.slideUpIn', {delay:100, display: null, 
              begin: function() {
                pB.addClass("loaded");
              }});
            delete demo.animateBlock.animations.overview;
          }
        },
        overviewGrap: function(wh, st) {
          var $el = $(".overview .graph");
          if(demo.animateBlock.isVisiable($el, wh, st, 730)) {
            var dB = $(".overview .displayB"),
                sC = Snap("#svgChar"),
                m1 = sC.select(".svgmove"),
                gI = $(".overview #svgGInfo"),
                mGI1 = $(".overview #mSvgGInfo1"),
                mGI2 = $(".overview #mSvgGInfo2");
            dB.velocity('transition.slideUpIn', {display: null});
            gI.velocity('transition.slideUpIn', {delay:100, display: null});
            mGI1.velocity('transition.slideUpIn', {delay:100, display: null});
            mGI2.velocity('transition.slideUpIn', {delay:100, display: null});
            m1.animate({points: "996.1,624.6 974.5,677 996.1,728.4 1048,750 1099.9,728.4 1121.5,676.5 1099.9,624.6 1048,603"}, 438.54415274463007159904534606206, 
              function(){
                m1.animate({points: "977.3,605.8 948,677 996.1,728.4 1048,776.5 1118.7,747.2 1148,676.5 1118.7,605.8 1048,576.5"}, 158.11455847255369928400954653938, 
                  function(){
                    m1.animate({points: "940.2,568.7 895.6,677 996.1,728.4 1048,828.9 1155.8,784.3 1200.4,676.5 1118.7,605.8 1048,524.1"}, 312.64916467780429594272076372316, 
                      function(){
                        m1.animate({points: "940.2,568.7 860.4,677 996.1,728.4 1048,864.1 1180.6,809.1 1235.6,676.5 1118.7,605.8 1048,488.9"}, 210.0238663484486873508353221957, 
                          function(){
                            m1.animate({points: "940.2,568.7 796.4,677 996.1,728.4 1048,928.1 1225.9,854.4 1235.6,676.5 1118.7,605.8 1048,424.9"}, 381.86157517899761336515513126492, 
                              function(){
                                m1.animate({points: "940.2,568.7 761,677 996.1,728.4 1048,963.5 1225.9,854.4 1235.6,676.5 1118.7,605.8 1048,389.5"}, 211.2171837708830548926014319809, 
                                  function(){
                                    m1.animate({points: "940.2,568.7 756.6,677 996.1,728.4 1048,963.5 1225.9,854.4 1235.6,676.5 1118.7,605.8 1048,385.1"}, 26.25298329355608591885441527446, 
                                      function(){
                                        m1.animate({points: "940.2,568.7 756.6,677 996.1,728.4 1048,963.5 1225.9,854.4 1235.6,676.5 1118.7,605.8 1048,341.3"}, 261.33651551312649164677804295942);
                                      }
                                    );
                                  }
                                );
                              }
                            );
                          }
                        );
                      }
                    );
                  }
                );
              }
            );
            delete demo.animateBlock.animations.overviewGrap;
          }
        },
        press: function(wh, st) {
          var delta = 730,
              wW = $(window).width();
          if(wW < 1024){ delta = 260; }
          var $el = $(".press");
          if(demo.animateBlock.isVisiable($el, wh, st, 730)) {
            var st = $(".press .subtitle"),
                t = $(".press .th2"),
                n = $(".press .new");
            st.velocity('transition.slideLeftIn', {display: null});
            t.velocity('transition.slideLeftIn', {delay:50, display: null});
            $(n[0]).velocity('transition.slideLeftIn', {delay:100, display: null, drag: true});
            $(n[1]).velocity('transition.slideLeftIn', {delay:100, display: null, drag: true});
            $(n[2]).velocity('transition.slideLeftIn', {delay:100, display: null, drag: true});
            delete demo.animateBlock.animations.press;
          }
        }
      }
    },
    lw: 0,
    rl: false,
    factor: 2.3788,
    outCx: 0,
    outRmx: 0,
    initAnalyticsChart: function(ww) {
      var a = $(".analytics .anGrap"),
          b = $(".analytics .bgLine"),
          c = $(".analytics .svgRectWrap"),
          d = 93,
          e,
          ov = $(".analytics .onView"),
          nov = $(".svgRectWrap:not(.onView)"),
          novl = nov.length,
          g,
          h,
          i,
          j = demo.lw;
      var sG = Snap(".svgGrap"),
          dc = sG.select("#dragCore"),
          rmxx,
          to;
      e = Math.floor(ww / d);
      g = ov.length;
      e = e < 3 ? 3 : e;
      e = e > 15 ? 15 : e;
      if(e != j){
        if(g == 0) {
          for(i = 0; i < c.length; i++){
              c[i].classList.add("onView");
              //ie hack what I don't want.
              // cl = c[i].getAttribute("class");
              // c[i].setAttribute("class", cl + " onview");
          }
          ov = $(".analytics .onView");
        }
        demo.outRmx = 3982.1112;
        demo.outRmx -= 93 * demo.factor * 2;
        demo.outRmx += 93 * demo.factor * (15 - e);
        if((h = e - j) > 0){
          rmxx = -demo.outRmx - 40 * demo.factor;
          if(demo.outCx <= rmxx){
            demo.rl = true;
          }
          if(demo.rl){
            demo.outCx += 93 * demo.factor * h;
            to = "m" + [1, 0, 0, 1, demo.outCx, 0];
            dc.animate({
              transform: to
            }, 200);
            if(e > 4){
              for(i = (j - 2) > 0 ? (j - 2) : 0; i < (e - 2); i++){
                $(b[i]).velocity("stop").velocity({opacity: 1});
              }
            } else {
              for(i = (j - 2) > 0 ? (j - 2) : 0; i < (e - 1); i++){
                $(b[i]).velocity("stop").velocity({opacity: 1});
              }
            }
            try {
              for(i = novl - 1; i > novl - 1 - h; i--){
                nov[i].classList.add("onView");
                //ie hack what I don't want.
                // cl = nov[i].getAttribute("class");
                // nov[i].setAttribute("class", cl + " onview");
              }
              demo.analyticsChartChange(e);
              demo.lw = e;
              demo.outRmx = 3982.1112;
              demo.outRmx -= 93 * demo.factor * 2;
              demo.outRmx += 93 * demo.factor * (15 - demo.lw);
              return;
            } catch(e) {
              console.error("Don't hurt me!");
            }
          }
          if(e > 4){
            for(i = (j - 2) > 0 ? (j - 2) : 0; i < (e - 2); i++){
              $(ov[i]).velocity("stop").velocity({opacity: 1});
              $(b[i]).velocity("stop").velocity({opacity: 1});
            }
          } else {
            for(i = (j - 2) > 0 ? (j - 2) : 0; i < (e - 1); i++){
              $(ov[i]).velocity("stop").velocity({opacity: 1});
              $(b[i]).velocity("stop").velocity({opacity: 1});
            }
          }
        } else {
          demo.rl = false;
          for(i = e; i < j; i++){
              $(ov[i]).velocity("stop").velocity({opacity: 0});
              $(b[i]).velocity("stop").velocity({opacity: 0});
          }
          if(e <= 4){
            for(i = 1; i < (e - 1); i++){
              $(ov[i]).velocity("stop").velocity({opacity: 1});
              $(b[i]).velocity("stop").velocity({opacity: 1});
            }
          }
        }
        if(e > 4){
          $(ov[0]).velocity("stop").velocity({opacity: 0.1});
          $(b[0]).velocity("stop").velocity({opacity: 0});
          $(ov[1]).velocity("stop").velocity({opacity: 0.3});
          $(b[1]).velocity("stop").velocity({opacity: 0});
          $(ov[e - 1]).velocity("stop").velocity({opacity: 0.1});
          $(b[e - 1]).velocity("stop").velocity({opacity: 0});
          $(ov[e - 2]).velocity("stop").velocity({opacity: 0.3});
          $(b[e - 2]).velocity("stop").velocity({opacity: 0});
        } else {
          $(ov[0]).velocity("stop").velocity({opacity: 0.1});
          $(b[0]).velocity("stop").velocity({opacity: 0});
          $(ov[e - 1]).velocity("stop").velocity({opacity: 0.1});
          $(b[e - 1]).velocity("stop").velocity({opacity: 0});
        }
        demo.lw = e;
      }
    },
    analyticsChartChange: function(e) {
      var f = $(".analytics .onView"),
          fn = $(".svgRectWrap:not(.onView)"),
          d = 93,
          i;
      if(e > 4){
        for(i = 0; i < f.length; i++){
          if((i == 0) || (i == e - 1)){
            $(f[i]).velocity("stop").velocity({opacity: 0.1});
          } else if((i == 1) || (i == e - 2)){
            $(f[i]).velocity("stop").velocity({opacity: 0.3});
          } else if(i < e - 2){
            $(f[i]).velocity("stop").velocity({opacity: 1});
          } else {
            $(f[i]).velocity("stop").velocity({opacity: 0});
          }
        }
        fn.velocity("stop").velocity({opacity: 0});
      } else {
        for(i = 0; i < f.length; i++){
          if((i == 0) || (i == e - 1)){
            $(f[i]).velocity("stop").velocity({opacity: 0.1});
          } else if(i < e - 1){
            $(f[i]).velocity("stop").velocity({opacity: 1});
          } else {
            $(f[i]).velocity("stop").velocity({opacity: 0});
          }
        }
        fn.velocity("stop").velocity({opacity: 0});
      }
    },
    analyticsChartDrag: function(){
      var g = Snap(".svgGrap"),
          dc = g.select("#dragCore"),
          $dc = $("#dragCore"),
          lastStartX,
          lastX,
          lastdx,
          // f is scale factor.
          f = demo.factor,
          rmx = 3982.1112,
          cx = 0,
          ff = 1 / 2,
          lmx = 40 * f,
          lmxx = -rmx - 40 * f,
          ov,
          nov,
          novl,
          holdT = 0,
          i,
          lastMoveTime,
          nowTime,
          ffx = [];
      function chosen(cx) {
        var to = "m" + [1, 0, 0, 1, cx, 0];
        demo.rl = false;
        if(cx === -rmx){
          demo.rl = true;
        }
        if(cx == 0 || cx == -rmx){
          dc.animate({
            transform: to
          }, 1000, mina.elastic);
        } else {
          dc.animate({
            transform: to
          }, 200);
        }
      }

      function Onmove(dx){
        var fx = dx * f;
        var a = cx + fx;
        var s = Math.floor(a / lmx);
        s = (s > 5) ? 5 : s;
        if( a > lmx ){
          a = ffx[s - 1] + (a - s * lmx) / (s * 2);
          return a;
        } else if (a < lmxx){
          s = Math.ceil((a + rmx)/ lmx);
          s = (s < -5) ? -5 : s;
          a = -rmx - (ffx[-s - 1] + (a + rmx - s * lmx) / (s * 2));
          return a;
        } else {
          // d is direction 1:left 0:right; 
          var cv, d, dl;
          var ax;
          if(dx < 0) {
            ax = Snap.snapTo(93, -dx, 47);
            ax = -ax;
            cv = Math.floor(-ax / 93);
            d = 1;
          } else {
            ax = Snap.snapTo(93, dx, 47);
            cv = Math.floor(ax / 93);
            d = 0;
          }
          dl = holdT - cv;
          if(dl != 0){
            if(d == 1) {
              if(dl < 0){
                try {
                  for(i = holdT; i < cv; i++){
                    ov[i].classList.remove("onView");
                    //ie hack what I don't want.
                    // cl = ov[i].getAttribute("class");
                    // cl = cl.replace(/onview/, '');
                    // ov[i].setAttribute("class", cl);
                  }
                  demo.analyticsChartChange(demo.lw);
                } catch(e) {
                  console.error("Don't hurt me!");
                }
              } else {
                try {
                  for(i = holdT - 1; i >= cv; i--){
                    ov[i].classList.add("onView");
                    //ie hack what I don't want.
                    // cl = ov[i].getAttribute("class");
                    // ov[i].setAttribute("class", cl + " onview");
                  }
                  demo.analyticsChartChange(demo.lw);
                } catch(e) {
                  console.error("Don't hurt me!");
                }
              }
            } else {
              if(dl < 0) {
                try {
                  for(i = novl - 1; i > novl - 1 - cv; i--){
                    nov[i].classList.add("onView");
                    //ie hack what I don't want.
                    // cl = nov[i].getAttribute("class");
                    // nov[i].setAttribute("class", cl + " onview");
                  }
                  demo.analyticsChartChange(demo.lw);
                } catch(e) {
                  console.error("Don't hurt me!");
                }
              } else {
                try {
                  for(i = novl - holdT; i < novl - cv; i++){
                    nov[i].classList.remove("onView");
                    //ie hack what I don't want.
                    // cl = nov[i].getAttribute("class");
                    // cl = cl.replace(/onview/, '');
                    // nov[i].setAttribute("class", cl);
                  }
                  demo.analyticsChartChange(demo.lw);
                } catch(e) {
                  console.error("Don't hurt me!");
                }
              }
            }
            holdT = cv;
          }
          return a;
        }
      }
      // for(var i = 1; i < 6; i++){
      //   ffx.push((lmx * (1 - Math.pow(ff, i))) / (1 - ff));
      // }
      ffx[0] = lmx;
      ffx[1] = lmx + lmx / 2;
      ffx[2] = ffx[1] + lmx / 4;
      ffx[3] = ffx[2] + lmx / 8;
      ffx[4] = ffx[3] + lmx / 16;
      // ffx[3] += 4;
      // ffx[4] += 12;
      // console.log(ffx);
      dc.drag(function (dx, dy, x, y) {
        var a = Onmove(dx);
        dc.transform("m" + [1, 0, 0, 1, a, 0]);
        // nowTime = new Date().getTime();
        // if (nowTime - lastMoveTime > 50) {
        //  lastMoveTime = nowTime;
        //  lastStartX = lastX;
        //  lastX = x;
        // }
        lastdx = dx;
      },function (x, y) {
        $dc[0].classList.add("grabbing");
        //ie hack what I don't want.
        // cl = $dc[0].getAttribute("class");
        // $dc[0].setAttribute("class", cl + " onview");
        dc.stop();
        cx = demo.outCx;
        // lastMoveTime = new Date().getTime();
        lastStartX = x;
        lastX = x;
        holdT = 0;
        lastdx = 0;
        nov = $(".svgRectWrap:not(.onView)");
        novl = nov.length;
        ov = $(".svgRectWrap.onView");
        rmx = demo.outRmx;
        // rmx = 3982.1112;
        // rmx -= 93 * f * 2;
        // rmx += 93 * f * (15 - demo.lw);
        // demo.outRmx = rmx;
        lmxx = -rmx - 40 * f;
      },function () {
        $dc[0].classList.remove("grabbing");
        //ie hack what I don't want.
        // cl = $dc[0].getAttribute("class");
        // cl = cl.replace(/grabbing/, '');
        // $dc[0].setAttribute("class", cl);
        holdT = 0;
        //inertia move (I give up)
        //calculate inertia move
        // var v = (lastX - lastStartX) / (nowTime - lastMoveTime);
        // var v = (lastX - lastStartX) / 50;
        // console.log(v);
        // if(v === Infinity || v === -Infinity) { v = 0; }
        var dx = lastdx;
        var a;
        // if(v !== 0) {
        //   var d = v > 0 ? 1 : -1;
        //   //dec is deceleration.
        //   var dec = d * 0.05;
        //   var t = v / dec;
        //   var imx = v + (dec * t * t) / 2;
        //   t *= 1;
        //   dx += imx;
        //   var fx = dx * f;
        //   a = cx + fx;
        //   var s = Math.floor(a / lmx);
        //   if(a > lmx){
        //     imx -= Math.ceil((a - lmx) / 93);
        //     t = Math.sqrt((2 * (imx - v)) / dec);
        //     a = lmx;
        //   } else if (a < lmxx){
        //     imx -= Math.ceil((lmxx - a) / 93);
        //     t = Math.sqrt((2 * (imx - v)) / dec);
        //     a = lmxx;
        //   }
        //   var to = "m" + [1, 0, 0, 1, a, 0];
        //   if(dx < 0) {
        //     a = Snap.snapTo(93, -dx, 47);
        //     a = -a;
        //   } else {
        //     a = Snap.snapTo(93, dx, 47);
        //   }
        //   cx += a * f;
        //   if(cx > lmx){
        //     cx = 0;
        //   }
        //   if(cx < lmxx){
        //     cx = -rmx;
        //   }
        //   demo.outCx = cx;
        //   dc.animate({
        //     transform: to
        //   }, t, mina.easein, function(){
        //     Onmove(imx);
        //     chosen(cx);
        //   });
        // } else {
          if(dx < 0) {
            a = Snap.snapTo(93, -dx, 47);
            a = -a;
          } else {
            a = Snap.snapTo(93, dx, 47);
          }
          cx += a * f;
          if(cx > lmx){
            cx = 0;
          }
          if(cx < lmxx){
            cx = -rmx;
          }
          demo.outCx = cx;
          chosen(cx);
        // }
      });
    }
  };

  var nav = document.getElementsByClassName("nav")[0],
      divSelects = document.getElementsByClassName("divSelect"),
      a,
      analytics = document.getElementsByClassName("analytics")[0],
      analyselect = analytics.getElementsByClassName("selectList")[0];

  demo.initjScrollPane();
  analyselect.addEventListener('click',demo.selectEffect);

  Array.prototype.forEach.call(divSelects, 
    function(d, i) {
      d.addEventListener('click',demo.divSelectExpand);
    }
  );

  document.addEventListener('click',demo.divSelectcollapse);
  $("#backToTop").click(function() {
    $('body,html').animate({ scrollTop: 0 }, 1000);
  });

  $(window).on('load',
    function(){
      var winWidth = $(window).width();
      $(window).on("scroll",function(){
        var animations,
            name,
            winHeight = $(window).height(),
            winWidth = $(window).width(),
            scrollTop = $(window).scrollTop();

        animations = demo.animateBlock.animations;
        for(name in animations){
            animations[name](winHeight,scrollTop);
        }
        if(winWidth < 1024){
          if(scrollTop > 2458){
            $(".header .mNavList a").addClass("lightBG");
            $(".header .mNavList a").css({color: "#252528", "background-color": "rgba(134, 134, 134, 0.15)"});
          } else {
            $(".header .mNavList a").removeClass("lightBG");
            $(".header .mNavList a").css({color: "#b8bbc4","background-color": "rgba(255, 255, 255, 0.05)"});
          }
          if(scrollTop > 2631){
            $(".header").css({"background-color": "#252528"});
          } else {
            $(".header").css({"background-color": "transparent"});
          }
        }
      });
      demo.initAnalyticsChart(winWidth);
      $(window).on("resize",function(){
        var wW = $(window).width();
        var scrollTop = $(window).scrollTop();
        if(wW > 1024) {
          $(".header").css({"background-color": "transparent"});
        } else {
          if(scrollTop > 2458){
            $(".header .mNavList a").addClass("lightBG");
            $(".header .mNavList a").css({color: "#252528", "background-color": "rgba(134, 134, 134, 0.15)"});
          }
          if(scrollTop > 2631){
            $(".header").css({"background-color": "#252528"});
          }
        }
        demo.initAnalyticsChart(wW);
      });
      if($(window).height() > 500){
          $(window).trigger("scroll");
      }

      $(".start a").click(function(event){   
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top} ,800);
      });

      $(".footerNav.home .fnav a").click(function(event){   
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top - 50 } ,800);
      });

      $(".header .mNav .navToggle").click(function(event){   
        event.preventDefault();
        event.stopPropagation();
        var mNL = $('.mNavList');
        if(mNL.hasClass("expanded")){
          mNL.removeClass("expanded");
          mNL.velocity("stop").velocity({display:"none",height: 0}, { duration: 500 });
        } else {
          mNL.addClass("expanded");
          mNL.velocity("stop").velocity({display:"block",height: 180}, { duration: 500 });
        }
      });
      document.addEventListener('click',function(){
        var mNL = $('.mNavList');
        if(mNL.hasClass("expanded")){
          mNL.removeClass("expanded");
          mNL.velocity("stop").velocity({display:"none",height: 0}, { duration: 500 });
        }
      });
    }
  );
})();