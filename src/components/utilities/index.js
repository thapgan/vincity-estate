import React from 'react'
import './utilities.css'

const Utitlities = () => {
    return (
        <div>
            <h2 className="slide-heading text-center" style={{marginTop:'5px'}}>Tiện ích Vincity Gia Lâm</h2>
            <div className="utitlities">
            <div>
                <img src="/ultilities/salt-lake.jpg"/>
                <p>Biển hồ nước mặn</p>
            </div>
            <div>
                <img src="/ultilities/lauvongcanh.jpg"/>
                <p>Lầu vọng cảnh</p>
            </div>
            <div>
                <img src="/ultilities/gym.jpg"/>
                <p>Công viên Gym ngoài trời</p>
            </div>
            <div>
                <img src="/ultilities/vinmec.jpg"/>
                <p>Bệnh viện Vimec</p>
            </div>
            <div>
                <img src="/ultilities/vinuni.jpg"/>
                <p>Đại học VinUni</p>
            </div>
            <div>
                <img src="/ultilities/congvienxanh.jpg"/>
                <p>Khuôn viên xanh</p>
            </div>
            </div>
        </div>
    )
}

export default Utitlities
