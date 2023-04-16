import React, { useRef } from 'react'
import _ from 'lodash'
import $ from 'jquery'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../assets/css/portfolio.css';
import worksList from '../../assets/json/worksList.json';

const Portfolio = () => {
    // 處理img
    var imgList = [];
    var imgItem = [];
    var slideList = [];
    var count = 0;
    _.forEach(worksList, item => {
        imgItem = [];
        slideList = [];
        count = 0;
        const works = require.context("../../assets/works/");
        const worksItem = _.filter(works.keys(), p => p.includes(item.path));
        console.log("worksItem = " + worksItem);
        console.log("worksItem: "+ worksItem);
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
        imgList.push({
            name: item.name,
            desc: item.desc,
            images: imgItem,
            slideList: slideList
        });
    });
    return (
        <div className='works'>
            <div className='work-wrap'>
                <div className='work-content'>
                    <div className="work-title">
                        <span className="about-title-en">Portfolio</span>
                        <span className="about-title-cn">作品集</span>
                    </div>
                </div>
                <ul className='work-list'>
                    { 
                        _.map(imgList, (item,idx1) => (
                            <li id={'w'+idx1} className='work-list-item'>
                                <a href={'/portfolioInfo/'+idx1} style={{'textDecoration':'none'}}>
                                    <div className='project-img'><img src={item.images[0].url} alt={item.images[0].desc} id={item.images[0].id} /></div>
                                    <div className='project-content'>
                                        <div className='project-title'>{item.name}</div>
                                        {/* <div className='project-desc'>{item.desc}</div> */}
                                    </div>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Portfolio