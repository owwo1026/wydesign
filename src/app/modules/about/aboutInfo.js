import React from "react";
import "../../assets/css/about.css";
// import example from "../../assets/images/logo/logo_sample.jpg";
// import banner from "../../assets/images/homeBanner/T01_3.jpeg";

const About = () => {
  return (
    <div className="aboutInfo">
      <div className="about-banner">
        <img src={process.env.PUBLIC_URL + '/assets/images/homeBanner/T01_3.jpeg'} />
      </div>
      {/* 第一段 關於維域 */}
      <div className="about-wy">
        <div className="about-title">
          <span className="about-title-en">W.Y. DESIGN</span>
          <span className="about-title-cn">關於維域</span>
        </div>
        <div className="about-wy-content">
          <span>我們是間年輕公司，由兩位懷抱著熱忱和想法的年輕設計師於2022年攜手創立。</span><br/>
          <span>維域（維繫各元素空間及場域相互串聯而產生良好效應）</span><br/>
          <span>體現了我們對空間的期待，再結合專業的施工團隊下為屋主打造專屬的空間及居所！</span><br/>
          <span><span className="special">空間</span>為<span className="special">行為</span>而生，是<span className="special">人文主義</span>非<span className="special">行為主義</span></span><br/>
          <span>對我們來說每個設計過程中皆是獨特的，使用者的不同便賦予空間意義的差異，聆聽、溝通</span><br/>
          <span>並給予專業的建議，連繫個人想法、觀感與尺度美學間所構成獨有的空間和場域，便是維域。</span>
        </div>
      </div>
      {/* <div className="about-blank"></div> */}
      {/* 第二段 設計理念 */}
      <div className="about-design">
        <div className="about-design-content">
          <div className="about-design-content-text">
            <div className="about-title">
              <span className="about-title-en">DESIGN CONCEPT</span>
              <span className="about-title-cn">設計理念</span>
            </div>
            <div className="about-content">
              {/* <span>Ｗei.Designer</span><br/>
              <span>1.對固有美學觀點做出不一樣的想法，嘗試去對空間做不同的詮釋並賦予不同的氛圍。</span><br/>
              <span>2.空間可以經由燈光.材質.顏色.裝飾,創造不同的生命力, 使每個空間都有屬於自己的靈魂。</span><br/>
              <span>3.不過度追求型變,及設計,反思材質燈光所帶來的本質面,這樣的空間感受才真正屬於心的設計。</span><br/>
              <span>4.空間設計及氛圍不是一成不變的,會因為人的特質,創造出各種不同的感受,而設計則是努力的去拼湊出每個人內心的渴望及溫度。</span><br/> */}
              {/* <span>Yu.Designer</span><br/> */}
              <span>＜每個人都應該要有專屬且獨特的生活空間和使用空間＞</span><br/>
              <span>重視
                <span className="special">人與空間的對話與連結</span>和
                <span className="special">空間帶給使用者的感受與效應</span>
              </span><br/>
              <span>因為好的設計元素及手法，使人產生正向感受與氛圍，</span><br/>
              <span>所以追求各設計元素間的和諧與比例，</span><br/>
              <span>因為好的設計元素及手法，能促使人與人產生更多的情感連結與互動，</span><br/>
              <span>所以追求各設計元素間的配置與定位帶給使用者的意義。</span><br/>
            </div>
          </div> 
          <div className="about-design-content-img"><img src={process.env.PUBLIC_URL + '/assets/images/logo/logo_sample.jpg'} /></div>  
        </div>
      </div>
      {/* 第三段 人物介紹 */}
      {/* <div className="about-intro">
        <div className="about-intro-title">
          <span className="cn"></span>
          <span className="en">DESIGNER</span>
        </div>
        <div className="about-intro-content">
          <div className="about-intro-photo"></div>
          <div className="about-intro-text"></div>
        </div>
      </div> */}
      {/* 第四段 服務項目 */}
      <div className="about-service">
        <div className="about-title">
          <span>Our Services / 服務項目</span>
        </div>
        <div className="about-service-list">
          <div className="about-service-item">Commercial Design / 住宅空間</div>
          <div className="about-service-item">Residential Design / 商業空間</div>
          <div className="about-service-item">Office Design / 辦公空間</div>
        </div>
      </div>
      {/* 第五段 其他連結 */}
      <div className="about-other">
        <div className="about-other-title">
          <span></span>
        </div>
        <a className="about-other-go" role="button" href="/works" style={{'textDecoration':'none'}}>
          <div className="about-other-img">
          <img src={process.env.PUBLIC_URL + '/assets/images/logo/logo_sample.jpg'} />  
          </div>
          <div className="about-other-content">
            <div className="about-other-content-text">PORTFOLIO</div>
            <div className="about-other-content-link">VIEW NOW</div>
          </div>
        </a>
        <a className="about-other-go" role="button" href="/contact" style={{'textDecoration':'none'}}>
          <div className="about-other-img">
          <img src={process.env.PUBLIC_URL + '/assets/images/logo/logo_sample.jpg'} />  
          </div>
          <div className="about-other-content">
            <div className="about-other-content-text">CONTACT US</div>
            <div className="about-other-content-link">VIEW NOW</div>
          </div>
        </a>
      </div>
    </div>
  );
};
export default About