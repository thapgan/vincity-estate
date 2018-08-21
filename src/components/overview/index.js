import React from 'react'
import Slider from "react-slick"
import './overview.css'

class Overview extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='overview-slick'>
                <Slider {...this.props.settings}>
                    <div>
                        <h2 className="slide-heading text-center overview-heading">Tổng quan về Vincity Gia Lâm</h2>
                        <p className="slide-content overview-content">Vincity Gia Lâm là một Đại đô thị được VinGroup dựa trên ý tưởng về thành phố sinh thái (Forest City) và xây dựng theo tiêu chuẩn Singapore. Vincity Gia Lâm tọa lạc ở ngoại ô Hà Nội với tổng diện tích 430 ha sánh ngang diện tích với Quận Hoàn Kiếm, được quy hoạch chuẩn, các khu nhà biệt thự, khu nhà chung cư cao tầng, xen kẽ với các hệ thống tiện ích hiện đại từ giáo dục tới y tế, các trung tâm thương mại, trung tâm thể thao và giải trí. Điểm đặc biệt ở Vincity Gia Lâm là diện tích rộng lớn, với tiêu chuẩn cây xanh, hồ nước lý tưởng tạo nên một thành phố sinh thái thực sự, đẳng cấp bậc nhất Hà Nội</p>
                        <div className="col2">                      
                            <ul className="info-list">
                                <li><strong>Tên dự án:</strong> Vincity Ocean Park - Vinhomes Ocean Park</li>
                                <li><strong>Vị trí:</strong> Đa Tốn, Kiêu Kỵ, Gia Lâm, Hà Nội</li>
                                <li><strong>Chủ đầu tư:</strong> Tập đoàn Vingroup</li>
                                <li><strong>Loại hình phát triển:</strong> Biệt thự cao cấp, Căn hộ chung cư</li>
                                <li><strong>Quy mô dự án:</strong> 420 ha</li>
                                <li><strong>Mật độ xây dựng:</strong> Khoảng 19.2 %</li>
                                <li><strong>Quy mô dự án:</strong>  66 tòa chung cư và hơn 2000 căn biệt thự</li>
                                <li><strong>Diện tích mặt nước:</strong> Hơn 55ha trong đó hồ trung tâm hơn 24,8 ha</li>
                                <li><strong>Đơn vị quản lý và vận hành:</strong> Vinhomes</li>
                                <li><strong>Thời gian bắt đầu bàn giao:</strong> Dự kiến năm 2020</li>
                            </ul>
                        </div>

                        <div className="col2">
                            <img src="/carousel/3.jpg" />
                        </div>
                    </div>
                    <div>
                        <h2 className="slide-heading text-center overview-heading">Vị trí dự án Vicity Gia Lâm</h2>
                        
                        <div className="col2">
                            <img src="/location.jpg" />
                        </div>
                        <div className="col2">
                            <p className="slide-content overview-content">
                                Vincity tại Gia Lâm tọa lạc ở vị trí Khu đất vàng – Nằm giữa quốc lộ 5A ( Hà Nội - Hải Phòng cũ) và quốc lộ 5B ( Cao tốc Hà Nội - Hải Phòng mới ) . Nằm trên địa phận xã Đa Tốn – Kiêu Kỵ - Dương Xá và một phần thị trấn Trâu Qùy, Huyện Gia Lâm, TP Hà Nội. Với tổng diện tích dự kiến lên hơn 400ha – đây được đánh giá là khu có diện ích lớn, vuông vắn và có cơ sở hạ tầng giao thông tốt, dễ dàng tiếp cận với các trục đường lớn và các tiện ích lớn, các công trình trọng điểm. Dự án được hứa hẹn, kỳ vọng lớn về sự kết hợp hài hòa giữa vị thế và phong thủy, tạo nên một khu phức hợp với đầy đủ tiện ích xứng tầm quốc tế.
                            </p>
                            <ul className="info-list">
                                <li>Phía Tây Nam giáp với cao tốc Hà Nội - Hải Phòng mới</li>
                                <li>Phía Đông Bắc giá với quốc lộ Hà Nội - Hải Phòng cũ</li>
                                <li>Phía Tây Bắc giám với Đại học Nông Nghiệp</li>
                                <li>Phía Đông Nam giám với xã Kiêu Kỵ, huyện Gia Lâm</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2 className="slide-heading text-center overview-heading">Mặt bằng quy hoạch dự án Vincity Gia Lâm</h2>
                        <div className="col2">
                            <p className="slide-content overview-content">
                                Vincity tại Gia Lâm với diện tích rộng lớn hơn 400ha được quy hoạch với tỉ lệ cây xanh, sông, hồ hợp lý nhằm tạo nên một hệ sinh thái xanh, sạch, một forest city đẳng cấp. Mặc dù được quy hoạch với nhiều công trình tiện ích và hệ sinh thái xanh, nhưng Vincity Gia Lâm vẫn được quy hoạch để nhắm tới tầng lớp trung lưu nhờ sự xen kẽ hài hòa giữa những chung cư cao tầng với nhiều mức giá, kích cỡ khác nhau và những khu biệt thự. Những công trình quy hoạch nổi bật của Vincity Gia Lâm:
                            </p>
                            <ul className="info-list">
                                <li>Chung cư cao tầng Occean Park</li>
                                <li>Hồ nhân tạo rộng tới 40ha</li>
                                <li>Biển hồ nhân tạo 5ha</li>
                                <li>Đại học VinUni</li>
                            </ul>
                        </div>
                        <div className="col2">
                            <img src="/quyhoach.jpg" />
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default Overview
