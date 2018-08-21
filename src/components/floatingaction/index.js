import React from "react"
import {
    ShareButtons,
    ShareCounts,
    generateShareIcon,
    FacebookShareButton,
    TwitterShareButton,
    FacebookShareCount,
    FacebookIcon,
    TwitterIcon
} from "react-share"

import "./floatingaction.css"
export default class FloatingAction extends React.Component {
    constructor() {
        super()

        this.state = {
            opened: false,
            tocShowed: false
        }

        this.toggle = this.toggle.bind(this);
        this.showToc = this.showToc.bind(this);
    }

    toggle() {
        this.setState({ opened: !this.state.opened });
    }

    showToc() {
        this.setState({ opened: !this.state.opened, tocShowed: !this.state.tocShowed });
    }

    render() {
        const filter = count => (count > 0 ? count : "");

        return (
            <nav className="menu">
                <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open" 
                    checked={this.state.opened} onClick={this.toggle}/>
                <label className="menu-open-button" htmlFor="menu-open">
                    <span className="hamburger hamburger-1"></span>
                    <span className="hamburger hamburger-2"></span>
                    <span className="hamburger hamburger-3"></span>
                </label>
                <a href="#" className="menu-item" onClick={this.showToc}>
                    <i className="fas fa-arrow-up"/>
                </a>
                <a href="#disqus_thread" className="menu-item" onClick={this.toggle}><i className="fa fa-comment"></i>
                </a>
                <a className="menu-item" onClick={this.toggle}>
                    <FacebookShareButton url={this.props.postUrl} quote={this.props.excerpt}>
                        <FacebookIcon round size={50} />
                        <FacebookShareCount url={this.props.postUrl}>
                            {count => <div className="share-count">{filter(count)}</div>}
                        </FacebookShareCount>
                    </FacebookShareButton>
                </a>
                <a className="menu-item" onClick={this.toggle}>
                    <TwitterShareButton url={this.props.postUrl} title={this.props.title}>
                        <TwitterIcon round size={50} />
                    </TwitterShareButton>
                </a>
            </nav>
        )
    }
}
