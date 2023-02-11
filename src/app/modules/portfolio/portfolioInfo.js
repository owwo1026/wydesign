import React, { useRef } from 'react'
import { Tabs } from 'antd';
import { useParams } from 'react-router-dom';
import _ from 'lodash'
import $ from 'jquery'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../assets/css/portfolio.css';
import worksList from '../../assets/json/worksList.json';

const { TabPane } = Tabs;

const PortfolioInfo = () => {
    let { wid } = useParams();
    const customSlider = useRef();
    const settings = {
        adaptiveHeight: true,
        lazyLoad: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    function imageClick(e, id) {
        var width = $('.worksModal').width(),
            height = $('.worksModal').height(),
            windowWidth = $(window).width(),
            windowHeight = $(window).height(),
            scrollTop = $(window).scrollTop(),
            // top = (windowHeight / 2 - height / 2) / 3 * 2 + scrollTop,
            // left = windowWidth / 2 - width / 2,
            top = (windowHeight/2 - (windowHeight/2)) / 2,
            left = (windowWidth/2 - (windowWidth/2)) / 2;
            console.log('top = ' + top);
            console.log('left = ' + left);
            console.log('width = ' + width);
            console.log('height = ' + height);
            console.log('windowWidth = ' + windowWidth);
            console.log('windowHeight = ' + windowHeight);
        $('.worksModal').css({
            top: top,
            left: left,
            transform: `translate(${top}, ${left})`
        });
        console.log('id = ' + id);
        customSlider.current.slickGoTo(id);
        e.stopPropagation();
        if( $('.works').hasClass('modalBlur') ) {
            $('.works').removeClass('modalBlur');
            $('.header').removeClass('modalBlur');
            $('.footer').removeClass('modalBlur');
        } else {
            $('.works:not("#worksModal")').addClass('modalBlur');
            $('.header').addClass('modalBlur');
            $('.footer').addClass('modalBlur');
        }
        $('.worksModal').toggle();
    }
    function modalImageClick(e) {
        e.stopPropagation();
    }
    $(document).click(function() {
        $('.works').removeClass('modalBlur');
        $('.header').removeClass('modalBlur');
        $('.footer').removeClass('modalBlur');
        $('.worksModal').hide();
    });
    // 處理img
    // var imgList = [];
    var imgItem = [];
    var slideList = [];
    var count = 0;
    const works = require.context("../../assets/works/");
    const worksItem = _.filter(works.keys(), p => p.includes("/"+wid+"/"));
    console.log("worksItem: " + worksItem);
    _.forEach(worksItem.map(works), img => {
        imgItem.push({
            id: count,
            url:  img
        });
        slideList.push({
            id: count,
            url:  img
        });
        count++;
    });
    return (
        <div className='portfolioInfo'>
            <div className='title'>
                <h1>wid : {wid}</h1>    
            </div>
            <div className="portfolioInfo-imgList">
                {/* <div className='portfolioInfo-imgItems'> */}
                    {   
                        _.map(imgItem, (img) => (
                            <div className='portfolioInfo-imgItems animate__animated animate__zoomIn'> 
                                <a className='click_worksModal'>
                                    <img className='imgListItem' onClick={(e) => imageClick(e, img.id)} src={img.url} alt={img.desc} id={img.id} />
                                </a>
                            </div>
                        ))
                    }
                {/* </div> */}
                {/* <div id='worksModal' className='worksModal animate__animated animate__zoomIn' onClick={(e) => modalImageClick(e)}>
                    <Slider 
                        {...settings}
                        ref={slider => (customSlider.current = slider)}
                    >
                        { 
                            _.map(slideList, (item) => (
                                <img src={item.url} />
                            ))
                        }
                    </Slider>
                </div> */}
            </div>
        </div>
    )
}
export default PortfolioInfo 