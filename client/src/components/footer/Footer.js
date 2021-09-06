import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import Facebook from './icon/facebook.svg'
import Instagram from './icon/instagram.svg'
import Linkedin from './icon/linkedin.svg'
import Twitter from './icon/twitter.svg'


function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>company</h4>
                        <ul>
                            <li><a target="_blank" href="https://www.facebook.com/phobotkcb/">Fanpage</a></li>
                            <li><Link to="#">our services</Link></li>
                            <li><Link to="#">privacy policy</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>get help</h4>
                        <ul>
                            <li><Link to="#">FAQ</Link></li>
                            <li><Link to="#">shipping</Link></li>
                            <li><Link to="#">returns</Link></li>
                            <li><Link to="#">order status</Link></li>
                            <li><Link to="#">payment options</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>About us</h4>
                        <ul>
                            <li><Link to="#">Name: Lưu Đặng Phổ</Link></li>
                            <li><Link to="#">Phonenumber: +84 964 925 498</Link></li>
                            <li><Link to="#">Email: luupho99tk@gmail.com</Link></li>
                            <li><Link to="#">Address: Kim Mã, Ba Đình, Hà Nội</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>follow us</h4>
                        <div className="social-links">
                            <a href="https://www.facebook.com/phobotkcb/" target="_blank"><img src={Facebook} alt="" width="12" /></a>
                            <a to="https://www.linkedin.com/in/luudangpho/" target="_blank"><img src={Linkedin} alt="" width="12" /></a>
                            <a to="https://github.com/phobo99/" target="_blank"><img src={Twitter} alt="" width="12" /></a>
                            <a to="https://www.instagram.com/luudangpho/" target="_blank"><img src={Instagram} alt="" width="12" /></a>
                        </div>
                    </div>
                </div>
            </div >
        </footer >
    );
}

export default Footer;