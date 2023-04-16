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
    // if (location.pathname === '/') {
    //     $(document).ready(function () {
    //         $('body').css({'overflow-x': 'clip', 'overflow-y': 'clip'});
    //         $('.header').css({'background-image': 'none', 'height': '100%'});
    //         $('.header-sticky').addClass('header-fixed-top');
    //     });
    // }
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
    // const {wid} = useParams()
    return (
        <div className = "content">
            <Header/>
            {/* { location.pathname === '/' ? <div/>:<Header/> } */}
            <Routes>
                <Route path='/' element={<About />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path="/portfolioInfo/:wid" element={<PortfolioInfo />} />
                <Route path='/contact' element={<Contact />} />
                {/* <Route component={NoMatch} /> */}
            </Routes>
            <Footer/>
            {/* { location.pathname === '/' ? <div/>:<Footer/> } */}
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
                            <img style={{ width: "40px" }} src={process.env.PUBLIC_URL + '/assets/images/icon/arrow-up.png'}></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}