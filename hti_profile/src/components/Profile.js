import React, { Component } from 'react';
import moduleName from '../App.css';
import avatar from './images/linh.png';
import logo from './images/95170523_229418941719492_736028231982907392_n.png';
class Profile extends Component {
    render() {
        return (
            <div className="wrapper">
                <section className="wrapper-header">
                    <img src={logo} alt="" style={{ width: "100px" }} />
                    <span className="Path">Home / Profile</span>
                </section>
                <section className="wrapper-content">
                    <div className="wrapper-content_Infor">
                        <div className="content_Infor-overview">
                            <center><h1 style={{ marginTop: "2%", fontSize: "2rem" }}>Chủ Nhiệm</h1></center>
                            <div className="content_Infor-img"></div><br />
                            <h3 style={{ textAlign: "center", fontSize: "30px", lineHeight: "2" }}>Nguyễn Đức Linh</h3>
                            <center><h5 style={{ color: "gray" }}>Nhạt</h5></center>
                        </div>
                        <div className="content_Infor-details">
                            <div class="Infor-details_left">
                                <ul>
                                    <li><i class="fas fa-phone-alt"></i> Số điện thoại: <span>0919319071</span></li>
                                    <li><i class="fas fa-envelope"></i> Email: <span>doanhnguyen2507@gmail.com</span></li>
                                    <li><i class="fas fa-birthday-cake"></i> Ngày sinh: <span>25/07/2000</span></li>
                                </ul>
                            </div>

                            <div class="Infor-details_right">
                                <ul>
                                    <li><i class="fas fa-search"></i> Khoa: <span>Công nghệ thông tin</span></li>
                                    <li><i class="fas fa-book-open"></i> Lớp: <span>Hệ Thống Thông Tin</span></li>
                                    <li><i class="fab fa-black-tie"></i> Khóa: <span>k13</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="wrapper-footer">
                    <div className="wrapper-footer_license">
                        Copyright © 2020
                        <a href="https://hithaui.com/">HIT Club</a>
                    </div>
                    <div className="wrapper-footer_socical">
                    <a href="https://github.com/hit-haui" target="_blank"><i class="fab fa-github"/></a>
                    <a href="https://www.facebook.com/HITClub.HaUI" target="_blank"><i class="fab fa-facebook"></i></a>
                    </div>
                </section>
            </div>
        );
    }
}

export default Profile;