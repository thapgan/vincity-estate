import React, { Component } from 'react'
import SubscriptionForm from '../subscription'

import './footer.css'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer clearfix text-center">
                <div className='col3 contact-info'>
                    <h3>Thông tin liên hệ</h3>
                    <img src="/vinlogo.png" width="50px" />
                    <h2 style={{ marginBottom: '5px' }}><span style={{ color: 'rgb(237,172,16)' }}>VinCity</span> - Estate</h2>
                    <h3 style={{ fontSize: '1em' }}>Tư vấn và phân phối BĐS VinCity</h3>
                    <p>Hotline: 0989 354 396</p>
                    <a href="mailto: duongthom.vincity@gmail.com">Email: duongthom.vincity@gmail.com</a>
                    <p>Địa chỉ: Tầng B, Sàn giao dịch BĐS Vincity Times City, 458 Minh Khai, Hai Bà Trưng, Hà Nội</p>
                </div>
                <div className='col3' id="subscriptionForm">
                    <h3>Nhận báo giá và thông tin dự án</h3>
                    <SubscriptionForm />
                </div>
                <div className='col3'>
                    <h3>Fanpage Facebook</h3>
                    <div className="fb-page" data-href="https://www.facebook.com/vincitytaihanoi/" data-tabs="timeline" data-width="350" 
                    data-height="270" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                        <blockquote cite="https://www.facebook.com/vincitytaihanoi/" className="fb-xfbml-parse-ignore">
                            <a href="https://www.facebook.com/vincitytaihanoi/">Vin City</a>
                        </blockquote>
                    </div>
                </div>
            </div>
        )
    }
}
