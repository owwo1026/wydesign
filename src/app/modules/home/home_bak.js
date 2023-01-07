import React, { useRef } from 'react'
import _ from 'lodash'
import $ from 'jquery'
import '../../assets/css/home.css';
import logo from "../../assets/images/logo/LOGO_中英_橫式1.png";

export default () => {
// 幻燈片設定
const bannerPath = require.context('../../assets/images/homeBanner/');
const bannerList =bannerPath.keys().map(bannerPath);
var imgList = [];
var i = 0;
var count = 0;
_.forEach(bannerList, banner => {
  imgList.push({
    id: count,
    url:  banner
  });
  count++;
});
$(document).ready(function () {
  setInterval(function(){
    changeBackgroundImg();
    setTimeout(function(){
      $('#home').css({
        transform: `scale(1.2)`,
        transition: `all 0s`
      });
    }, 5000);
  }, 5000);
})
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
return (
  <div id='home' className='home'>
    <div className='text'>
      <a role='button' href='/about'>
        <img id="headerLogo" src={logo} alt="維域設計室內裝修有限公司" />
        <div className='enter animate__animated animate__backInLeft'>Enter</div>
      </a>
    </div>
  </div>
)
};
