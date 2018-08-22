import React from 'react'

import Carousel from '../components/carousel'
import Overview from '../components/overview'
import ChungCu from '../components/chungcu'
import Villa from '../components/villa'
import Utitlities from '../components/utilities'
import FloatingAction from '../components/floatingaction'
// import Disqus from "../components/disqus"

const IndexPage = () => {
  const overviewSettings = {
    dots: true,
    arrows: false,
    dotsClass: 'custom-slick-dots',
    infinite: true,
    adaptiveHeight: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: i => {
      let title = 'Giới thiệu';
      if (i == 1) title = "Vị trí"
      else if (i == 2) title = "Mặt bằng"

      return (
        <div>
          {title}
        </div>
      )
    }
  };

  return (
    <div>
      <Carousel></Carousel>
      <div>
        <div id="vincityGiaLam" className="id-mark"></div>
        <Overview settings={overviewSettings}></Overview>
      </div>
      <div>
        <div id="ChungCu" className="id-mark"></div>
        <ChungCu></ChungCu>
      </div>
      <div className="biet-thu">
        <div id="BietThu" className="id-mark"></div>
        <Villa></Villa>
      </div>
      <div className="biet-thu">
        <div id="TienIch" className="id-mark"></div>
        <Utitlities/>
      </div>
      {/* <div>
        <Disqus
            post={{title:'Vincity-estate', url:'http://www.vincity-estate.com',category_id: "Vincity-estate"}} 
            disqusShortname='vincity-estate'
          />
      </div> */}
      <FloatingAction postUrl='http://www.vincity-estate.com' excerpt='Vincity-Estate chuyên tư vấn và phân phối bất động sản vincity' title='Vincity-Estate (Bất động sản Vincity)'/>
    </div>
  )
}

export default IndexPage
