import React, { useRef } from 'react'
import _ from 'lodash'
import $ from 'jquery'
import '../../assets/css/home.css';
import logo from "../../assets/images/logo/logo_c_1.png";

export default () => {
// 幻燈片設定
const bannerPath = require.context('../../assets/images/wy_logo/part/2/');
const bannerList =bannerPath.keys().map(bannerPath);
var imgList = [];
var logoPartList = [];
var i = 0;
var count = 0;
_.forEach(bannerList, banner => {
  logoPartList.push({
    id: count,
    url:  banner
  });
  count++;
});
// $(document).ready(function () {
//   setInterval(function(){
//     changeBackgroundImg();
//     setTimeout(function(){
//       $('#home').css({
//         transform: `scale(1.2)`,
//         transition: `all 0s`
//       });
//     }, 5000);
//   }, 5000);
// })
function changeBackgroundImg() {
  var windowWidth = $(window).width();
  // var windowHeight = $(window).height();
  var home = $('#home');
  home.css({
    backgroundImage: `url(${imgList[i].url})`,
    backgroundSize: `${windowWidth}px`,
    transform: `scale(1)`,
    transition: `all 3s`
  });
  home.fadeIn();
  if (i < imgList.length - 1) {
      i++;
  } else {
      i = 0;
  }
}
/////

return (
  <div id='home' className='home'>
    <div className='text animate__animated animate__flip'>
      <a role='button' href='/about'>
        { 
          _.map(logoPartList, (item) => (
            <img className="partsLogo animate__animated animate__flip"
                style={{ animationDelay: `0.${item.id}s` }}
                id={'prartsLogo_'+item.id} 
                src={item.url} alt="維域設計室內裝修有限公司" />
          ))
        }
        <div className='enter animate__animated animate__backInLeft'>Enter</div>
      </a>
    </div>
  </div>
)
};
