import React from "react"
import addToMailchimp from 'gatsby-plugin-mailchimp'

import './subscription.css'

class SubscriptionForm extends React.Component {
    constructor() {
        super()
        this.state = {
            email: ``,
            name: ``,
            phone:``
        }
    }

    // Update state each time user edits their email address
    _handleEmailChange = e => {
        this.setState({ email: e.target.value })
    }

    _handleNameChange = e => {
        this.setState({ name: e.target.value })
    }

    _handlePhoneChange = e => {
        this.setState({ phone: e.target.value })
    }

    // Post to MC server & handle its response
    _postEmailToMailchimp = (email, attributes) => {
        addToMailchimp(email, attributes)
            .then(result => {
                // Mailchimp always returns a 200 response
                // So we check the result for MC errors & failures
                if (result.result !== `success`) {
                    this.setState({
                        status: `error`,
                        msg: result.msg,
                    })
                } else {
                    // Email address succesfully subcribed to Mailchimp
                    this.setState({
                        status: `success`,
                        msg: result.msg,
                    })
                }
            })
            .catch(err => {
                // Network failures, timeouts, etc
                this.setState({
                    status: `error`,
                    msg: err,
                })
            })
    }

    _handleFormSubmit = e => {
        e.preventDefault()
        e.stopPropagation()

        this.setState({
            status: `sending`,
            msg: null,
            },
            // setState callback (subscribe email to MC)
            this._postEmailToMailchimp(this.state.email, {
                FNAME: this.state.name,
                PHONE: this.state.phone,
                pathname: document.location.pathname,
            })
        )
    }

    render() {
        if (this.state.status === `success`) return <div>Chúng tôi sẽ chuyển tới bạn những thông tin mới nhất về dự án Vincity.</div>;
        return <div>
            <form
                id="email-capture"
                method="post"
                noValidate
                style={{ margin: 0 }}
            >
                <div>
                    <input
                        type="text"
                        name="Name"
                        placeholder="Họ tên"
                        onChange={this._handleNameChange}
                        className='subscription-input subscription-mail'
                    />
                    <input
                        type="phone"
                        name="Phone"
                        placeholder="Số điện thoại"
                        onChange={this._handlePhoneChange}
                        className='subscription-input subscription-mail'
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        onChange={this._handleEmailChange}
                        className='subscription-input subscription-mail'
                    />
                    <button
                        type="submit"
                        onClick={this._handleFormSubmit}
                        className='subscription-input subscription-button'
                    >
                        Đăng ký nhận thông tin
                    </button>
                    {this.state.status === `error` && (
                        <div
                            dangerouslySetInnerHTML={{ __html: this.state.msg }}
                            style={{ marginTop: '0.75rem', color:'red' }}
                        />
                    )}
                </div>
            </form>
        </div>
    }
}

export default SubscriptionForm