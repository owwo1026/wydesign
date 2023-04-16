import React, { useRef, useState  } from 'react'
import { useParams } from 'react-router-dom';
import _ from 'lodash'
import '../../assets/css/portfolio.css';
import worksList from '../../assets/json/worksList.json';
import { Modal, Button, Carousel } from 'react-bootstrap';

const PortfolioInfo = () => {
    const [show, setShow] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSelect = (selectedIndex) => {
        setActiveIndex(selectedIndex);
    };
    const modalBodyStyle = {
        width: '60vw',
        height: 'auto',
        backgroundColor: '#6A6454',
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%, 10%)'
    };
    let { wid } = useParams();
    const imgData = worksList[wid];
    function imageClick(e, id) {
        console.log('id = ' + id);
        setActiveIndex(id);
        handleShow();
    }
    // 處理img
    var imgItem = [];
    var count = 0;
    const works = require.context('../../assets/works/');
    const worksItem = _.filter(works.keys(), p => p.includes("/"+wid+"/"));
    // console.log("worksItem: " + worksItem);
    _.forEach(worksItem.map(works), img => {
        imgItem.push({
            id: count,
            url:  img
        });
        count++;
    });
    // console.log("imgItem: " + JSON.stringify(imgItem));
    return (
        <div className='portfolioInfo'>
            <div className='title'>
                <h1>{imgData.name}</h1>
            </div>
            <div className="portfolioInfo-imgList">
                {   
                    _.map(imgItem, (img) => (
                        <div className='portfolioInfo-imgItems animate__animated animate__zoomIn'> 
                            <a className='click_worksModal'>
                                <img className='imgListItem' onClick={(e) => imageClick(e, img.id)} src={img.url} alt={img.desc} id={img.id} />
                            </a>
                        </div>
                    ))
                }
                <div id='worksModal' className='worksModal animate__animated animate__zoomIn'>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Body style={modalBodyStyle} >
                            <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
                                { 
                                    _.map(imgItem, (item) => (
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={item.url}
                                                alt="First slide"
                                            />
                                        </Carousel.Item>
                                    ))
                                }
                            </Carousel>
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
        </div>
    )
}
export default PortfolioInfo 