import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useParams } from 'react-router-dom';
import $ from 'jquery'
import About from './modules/about/aboutInfo.js';
import Contact from './modules/contact/contactInfo.js';
import Home from './modules/home/home.js';
import Portfolio from './modules/portfolio/portfolio.js';
import PortfolioInfo from './modules/portfolio/portfolioInfo.js';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import {
    FacebookOutlined,
    InstagramOutlined,
    PhoneOutlined,
    MailOutlined,
    MessageOutlined,
    UpCircleTwoTone
} from "@ant-design/icons";

export default () => {
    const location = useLocation();
    // const [isLoading, setIsLoading] = useState(false);
    if (location.pathname === '/') {
        $(document).ready(function () {
            $('body').css({'overflow-x': 'clip', 'overflow-y': 'clip'});
            $('.header').css({'background-image': 'none', 'height': '100%'});
            $('.header-sticky').addClass('header-fixed-top');
        });
    }
    $(document).ready(function () {
        var chatbox = document.getElementById('fb-customer-chat');
        chatbox.setAttribute("page_id", "101262169275934");
        chatbox.setAttribute("attribution", "biz_inbox");
        window.fbAsyncInit = function() {
            window.FB.init({
            xfbml            : true,
            version          : 'v14.0'
            });
        };
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/zh_TW/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    });
    const {wid} = useParams()
    return (
        <div className = "content">
            { location.pathname === '/' ? <div/>:<Header/> }
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path="/portfolioInfo/:wid" element={<PortfolioInfo />} />
                <Route path='/contact' element={<Contact />} />
                {/* <Route component={NoMatch} /> */}
            </Routes>
            { location.pathname === '/' ? <div/>:<Footer/> }
            <div className='leftbox'>
                <div className="myBar">
                    <a
                        role="button"
                        href="https://www.facebook.com/wei.yu.design22"
                        target="_blank"
                    >
                        <FacebookOutlined style={{ fontSize: "40px" }} />
                    </a>
                    <a
                        role="button"
                        href="http://instagram.com/wei.yu.design22"
                        target="_blank"
                    >
                        <InstagramOutlined style={{ fontSize: "40px" }} />
                    </a>
                    <a 
                        role="button" 
                        href="https://line.me/ti/p/4mBzKaqaTB"
                        target="_blank"
                    >
                        <MessageOutlined style={{ fontSize: "40px" }} />
                    </a>
                    <a role="button" href="tel:+886-972078750">
                        <PhoneOutlined style={{ fontSize: "40px" }} />
                    </a>
                    <a role="button" href="mailto:wei.yu.design22@gmail.com">
                        <MailOutlined style={{ fontSize: "40px" }} />
                    </a>
                    <div id="fb-root"></div>
                    <div id="fb-customer-chat" className="fb-customerchat"></div>
                    <div className='back_to_top'>
                        <a>
                            <img style={{ width: "40px" }} src="data:image/png;base64,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"></img>
                            {/* <UpCircleTwoTone style={{ fontSize: "40px" }} twoToneColor="#7B7B7B" /> */}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}