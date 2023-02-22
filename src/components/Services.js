import React from "react";
import './Services.css';
import { FaApplePay, FaCcAmazonPay, FaCcAmex, FaCcPaypal, FaGooglePay } from "react-icons/fa";
import {SiPaytm, SiRazorpay, SiSamsungpay} from "react-icons/si"

function Service(){
    return (
        <div className="services">
            <h1>Services</h1>
            <div className="dividor"></div>
            <div className="row">
                <div className="col-3">
                    <div className="service-box">
                        <div className="service-icon"><FaCcAmex/></div>
                        <div className="service-info">
                            <h4 className="service-text">Service title 1</h4>
                            <p className="service-text">lorem ipsum</p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="service-box">
                        <div className="service-icon"><FaApplePay/></div>
                        <div className="service-info">
                            <h4 className="service-text">Service title 2</h4>
                            <p className="service-text">lorem ipsum</p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="service-box">
                        <div className="service-icon"><FaCcAmazonPay/></div>
                        <div className="service-info">
                            <h4 className="service-text">Service title 3</h4>
                            <p className="service-text">lorem ipsum</p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="service-box">
                        <div className="service-icon"><FaCcPaypal/></div>
                        <div className="service-info">
                            <h4 className="service-text">Service title 4</h4>
                            <p className="service-text">lorem ipsum</p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="service-box">
                        <div className="service-icon"><FaGooglePay/></div>
                        <div className="service-info">
                            <h4 className="service-text">Service title 1</h4>
                            <p className="service-text">lorem ipsum</p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="service-box">
                        <div className="service-icon"><SiPaytm/></div>
                        <div className="service-info">
                            <h4 className="service-text">Service title 1</h4>
                            <p className="service-text">lorem ipsum</p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="service-box">
                        <div className="service-icon"><SiSamsungpay/></div>
                        <div className="service-info">
                            <h4 className="service-text">Service title 1</h4>
                            <p className="service-text">lorem ipsum</p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="service-box">
                        <div className="service-icon"><SiRazorpay/></div>
                        <div className="service-info">
                            <h4 className="service-text">Service title 1</h4>
                            <p className="service-text">lorem ipsum</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;