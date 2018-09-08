import React, { Component } from "react";
import Slider from "react-slick"
import {SampleNextArrow, SamplePrevArrow} from '../utils/customArrows.js'

export default class ChungCu extends Component {
    render() {
        const settings = {
            infinite: true,            
            dots:true,
            lazyLoad: 'progressive',
            adaptiveHeight: true,
            dotsClass: 'custom-slick-dots',
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            customPaging: i => {
                let title = 'Chung cư:';
                switch (i) {
                    case 1:
                        title="1 PN"
                        break;
                    case 2:
                        title="2 PN nhỏ"
                        break;
                    case 3:
                        title="2 PN lớn"
                        break;
                    case 4:
                        title="3 PN"
                        break;
                    default:
                        title="Chung cư:"
                        break;
                }           
                return (
                    <div>
                        {title}
                    </div>
                )
            },
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        return (
            <Slider {...settings}>
                <div>
                    <div className="col2">
                        <img src="/occean-park/1.jpg"/>
                    </div>
                    <div className="col2">
                        <div className="padding40">
                            <h3 className="slide-heading">Chung cư Vincity Occean Park</h3>
                            <p className="slide-content">Chung cư Ocean Park là sản phẩm mới nhất được tập đoàn Vingroup phát triển trong chuỗi sản phẩm VinCity cho người có thu nhập tầm trung. Với 4 loại hình căn hộ (1PN, 2PN nhỏ, 2PN lớn, 3 PN), VinCity Ocean Park không phải là giải pháp nhà giá rẻ cho người thu nhập thấp mà là một giải pháp ưu việt từ <strong>chất lượng</strong> đến <strong>tài chính</strong> cho người có thu nhập tầm trung. 66 tòa chung cư có chiều cao 22 -35 tầng, với các diện tích căn hộ từ 28m2 đến 76m2, từ 1 đến 3 phòng ngủ, chung cư Occean Part cho bạn thỏa sức lựa chọn.</p>
                            <a className="btn-price" href="/#subscriptionForm">Báo giá chi tiết</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="col2">
                        <div className="padding40">
                            <h3 className="slide-heading">Căn hộ 1 phòng ngủ</h3>
                            <p className="slide-content">Sự hài hóa trong bố trí nội thất trong không gian nhỏ 28-30m2, với chỉ một phòng ngủ là mô hình căn hộ gây 'sốc' ở Vincity Gia Lâm. Không chỉ phù hợp cho các bạn trẻ độc thận mà còn vô cùng tiện lợi và lãng mạn cho một cặp vợ chồng mới cưới. Căn hộ 1 phòng ngủ thực sự là một túp lều tranh giữa chốn thiên nhiên hùng vĩ của hệ sinh thái Vincity Gia Lâm.</p>
                            <a className="btn-price" href="/#subscriptionForm">Báo giá chi tiết</a>
                        </div>
                    </div>
                    <div className="col2">
                        <img src="/occean-park/1pn.jpg"/>
                    </div>
                </div>
                <div>
                    <div className="col2">
                        <img src="/occean-park/2pn.jpg"/>
                    </div>
                    <div className="col2">
                        <div className="padding40">
                            <h3 className="slide-heading">Căn hộ 2 phòng ngủ nhỏ</h3>
                            <p className="slide-content">Khác với căn hộ 1 phòng ngủ được thiết kế cho đối tượng người độc thân hay cặp vợ chồng mới cưới có mức tài chính không dư dả, Căn hộ 2 phòng ngủ nhỏ được thiết kế hướng tới cặp vợ chồng có con nhỏ. Với diện tích khoảng 50m2, căn hộ 2 phòng ngủ nhỏ hoàn toàn phù hợp cho một gia đình nhỏ xinh.</p>
                            <a className="btn-price" href="/#subscriptionForm">Báo giá chi tiết</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="col2">
                        <div className="padding40">
                            <h3 className="slide-heading">Căn hộ 2 phòng ngủ lớn</h3>
                            <p className="slide-content">Ngay khi con cái lớn hơn một chút, tự lập hơn một chút cũng là lúc bạn cần một không gian rộng hơn, căn hộ 2 phòng ngủ nhỏ với vẻn vẹn chỉ 50m2 có thể trở nên không phù hợp nữa. Đó là lý do Vincity Gia Lâm cung cấp những căn hộ với 2 phòng ngủ lớn với diện tích khoảng 65m2như một sự bổ sung về không gian cho căn hộ 2 phòng ngủ nhỏ.</p>
                            <a className="btn-price" href="/#subscriptionForm">Báo giá chi tiết</a>
                        </div>
                    </div>
                    <div className="col2">
                        <img src="/occean-park/2pn-big.jpg"/>
                    </div>
                </div>
                <div>
                    <div className="col2">
                        <img src="/occean-park/3pn.jpg"/>
                    </div>
                    <div className="col2">
                        <div className="padding40">
                            <h3 className="slide-heading">Căn hộ 3 phòng ngủ</h3>
                            <p className="slide-content">Trong mạch thiết kế hướng tới nhu cầu sử dụng, căn hộ 3 phòng ngủ là sự mở rộng tiếp theo của căn hộ 2 phòng ngủ. Khi gia đình nhỏ của bạn có bé thứ 2 chính là lúc bạn cần tới căn hộ loại này. Với diện tích từ 75-90m2, căn hộ ba phòng ngủ là không gian sống lý tưởng cho một cặp vợ chồng với hai chú gấu con :)</p>
                            <a className="btn-price" href="/#subscriptionForm">Báo giá chi tiết</a>
                        </div>
                    </div>
                </div>
            </Slider>
        );
    }
}
