import React from "react";
import "../../assets/css/about.css";
import example from "../../assets/images/logo/logo_sample.jpg";
// <img src={example} />

export default () => {
  return (
    <div className="aboutInfo">
      {/* 第一段 關於維域 */}
      <div className="about-wy">
        <div className="about-title">
          <span className="about-title-cn">關於維域</span>
          <span className="about-title-en">W.Y. DESIGN</span>
        </div>
        <div className="about-wy-content">
          <p>
            Since 2019, I've helped hundreds of entrepreneurs (like you!) design
            strategic and unique website design to attract dream clientele,
            build a profitable business, and feel confident online. Not only do
            I design a stunning website for your brand, but my design process is
            all about collaboration - hence "with" in my business name!
          </p>
        </div>
      </div>
      {/* <div className="about-blank"></div> */}
      {/* 第二段 設計理念 */}
      <div className="about-design">
        {/* <div className="about-title">
          <span className="about-title-cn">設計理念</span>
          <span className="about-title-en">DESIGN CONCEPT</span>
        </div> */}
        <div className="about-design-content">
          <div className="about-design-content-text">
            <div className="about-title">
              <span className="about-title-cn">設計理念</span>
              <span className="about-title-en">DESIGN CONCEPT</span>
            </div>
            <p>
              In May 2019, I launched Create with Danielle within weeks from the idea popping in my head.
              In one day, I booked my first client.
              Fast forward to three years later, I've had the opportunity to work with hundreds of amazing female entrepreneurs & creative businesses all over the world.
              If I can do it — you can do too! Starting a business not knowing the outcome is scary, but you can be successful by investing in your business, working hard & believing in yourself.
              So many entrepreneurs have reached out doubting their business ideas, as there's so many of the same out there. But this is where I come in, to help differentiate your brand from others, and build you a stunning website that will make you profitable & confident.
            </p>
          </div> 
          <div className="about-design-content-img"><img src={example} /></div>  
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
        <div className="about-service-title">
          <span>Our Services / 服務項目</span>
        </div>
        <div className="about-service-list">
          <div className="about-service-item">Commercial Design / 住宅空間</div>
          <div className="about-service-item">Residential Design / 商業空間</div>
          <div className="about-service-item">Systeam Furniture / 系統傢俱</div>
        </div>
      </div>
      {/* 第五段 其他連結 */}
      <div className="about-other">
        <div className="about-other-title">
          <span></span>
        </div>
        <a className="about-other-go" role="button" href="/works">
          <div className="about-other-img">
          <img src={example} />  
          </div>
          <div className="about-other-content">
            <div className="about-other-content-text">PORTFOLIO</div>
            <div className="about-other-content-link">VIEW NOW</div>
          </div>
        </a>
        <a className="about-other-go" role="button" href="/contact">
          <div className="about-other-img">
          <img src={example} />  
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
