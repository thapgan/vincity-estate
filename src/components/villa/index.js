import React, { Component } from "react";
import Slider from "react-slick"
import { SampleNextArrow, SamplePrevArrow } from '../utils/customArrows.js'

export default class Villa extends Component {
    render() {
        const settings = {
            infinite: true,
            dots: true,
            adaptiveHeight: true,
            lazyLoad: 'progressive',
            dotsClass: 'custom-slick-dots',
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            customPaging: i => {
                let title = 'Biệt thự:';
                switch (i) {
                    case 1:
                        title = "Đơn lập"
                        break;
                    case 2:
                        title = "Song Lập"
                        break;
                    case 3:
                        title = "Liền kề"
                        break;
                    case 4:
                        title = "Shophouse"
                        break;
                    default:
                        title = "Biệt thự:"
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
                        <div className="padding40">
                            <h3 className="slide-heading">Nhà biệt thự</h3>
                            <p className="slide-content">Phân khu biệt thự là phân khu cao cấp nhất. Vincity Gia Lâm với mặt bằng rộng, không gian cây xanh lớn, được quy hoạch với nhiều kiểu nhà biệt thự khác nhau như biệt thự đơn lập truyền thống, biệt thự song lập, biệt thự liền kề.</p>
                            <a className="btn-price" href="/#subscriptionForm">Báo giá chi tiết</a>
                        </div>
                    </div>
                    <div className="col2">
                        <img src="/villa/villa0.jpg" />
                    </div>
                </div>
                <div>
                    <div className="col2">
                        <img src="/villa/villa1.jpg" />
                    </div>
                    <div className="col2">
                        <div className="padding40">
                            <h3 className="slide-heading">Biệt thự đơn lập</h3>
                            <p className="slide-content">Biệt thự đơn lập là dòng sản phẩm đẳng cấp và đắt giá nhất tại khu đô thị Vincity Gia Lâm, được hội tụ tất cả các yếu tố độc đáo trong cả 4 kiến trúc Pháp, Hy Lạp, Đông Dương, Italia, hứa hẹn sẽ là nơi an cư hoàn hảo dành cho giới thượng lưu toàn thủ đô Hà Nội.</p>
                            <a className="btn-price" href="/#subscriptionForm">Báo giá chi tiết</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="col2">
                        <div className="padding40">
                            <h3 className="slide-heading">Biệt thự song lập</h3>
                            <p className="slide-content">Biệt thự song lập được xây dựng theo lối kiến trúc đồng bộ, sự sáng tạo trong thiết kế tạo nên những nét nổi bật riêng cho căn nhà, mang lại sự thư thái, dễ chịu cho các gia chủ. Với những gia đình đang tìm kiếm một địa điểm gửi gắm hạnh phúc lâu dài với không gian sống đa sắc màu, hiện đại, được hòa mình vào không gian xanh yên bình, biệt thự song lập Vincity Gia Lâm luôn sắn sàng chào đón.</p>
                            <a className="btn-price" href="/#subscriptionForm">Báo giá chi tiết</a>
                        </div>
                    </div>
                    <div className="col2">
                        <img src="/villa/villa2.jpg" />
                    </div>
                </div>
                <div>
                    <div className="col2">
                        <div className="padding40">
                            <h3 className="slide-heading">Biệt thự liền kề</h3>
                            <p className="slide-content">Biệt thự liền kề: khác với những loại biệt thự bình thường, đây là loại biệt thự có hệ thống sân vườn độc đáo với tiêu chuẩn tiện nghi, phục vụ cho các gia đình trung lưu và khá giả. Sản phẩm bất động sản này có thể vừa có tác dụng để ở lại vừa có thể tiến hành kinh doanh hay đầu tư sản xuất.</p>
                            <a className="btn-price" href="/#subscriptionForm">Báo giá chi tiết</a>
                        </div>
                    </div>
                    <div className="col2">
                        <img src="/villa/villa3.jpg" />
                    </div>
                </div>
                <div>
                    <div className="col2">
                        <img src="/villa/villa4.jpg" />
                    </div>
                    <div className="col2">
                        <div className="padding40">
                            <h3 className="slide-heading">Shophouse</h3>
                            <p className="slide-content">TShophouse Vincity Gia Lâm là một trong những sản phẩm quan trọng trong tổ hợp dự án Vincity Gia Lâm, đây là những căn hộ vừa có thể kinh doanh vừa có thể để ở. Nếu từng đầu tư tại các dự án của Vingroup, các nhà đầu tư sẽ dễ dàng chọn lựa ngay lập tức bởi Shophouse là loại hình căn hộ rất phổ biến hiện nay ở các dự án của Vingroup và hứa hẹn sẽ mang tới cơ hội sinh lời cao cho khách hàng.</p>
                            <a className="btn-price" href="/#subscriptionForm">Báo giá chi tiết</a>
                        </div>
                    </div>
                </div>
            </Slider>
        );
    }
}
