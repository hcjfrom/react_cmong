import React, { Component } from 'react';
// eslint-disable-next-line
import { Route , Switch } from 'react-router-dom';
// eslint-disable-next-line
import common from '../../css/common.css';
// eslint-disable-next-line
import main from '../../css/main.css';
// eslint-disable-next-line


class InfoConts extends Component {
    render(){
        return (
            <div id="infoConts">
                <div className="inerContens">
                    <div className="sellPoint">
                        <p><img src={require("../../images/main/main_mileage.png")} alt="" /></p>
                        <div>
                            전문가 판매 수수료가 최저<span>5%</span>까지 인하됩니다!
                        </div>
                    </div>
                    <div className="infoBoxing">
                        <div className="leftBaner">
                          
                            <div className="boxing">
                            <ul className="userInfo">
                                <li>반가워요</li>
                                <li className="uNAme">한충재님</li>
                                <li className="uTex"><span className="pleNum">234,859명</span> 전문가들이 당신의 의뢰를 기다리고있습니다.</li>
                            </ul>
                            </div>
                            <div className="boxing service">
                                <h4>최근에 본 서비스</h4>
                                <ul>
                                    <li>
                                        <img src={require("../../images/db/tlist01.jpg")} alt="" />
                                        <div className="infoTex">[프리미엄] 페북, 인스타그램 정밀타겟팅(키워드등)과 200만 배포로  도달수 보장해 드립니다</div>
                                    </li>
                                    <li>
                                        <img src={require("../../images/db/tlist02.jpg")} alt="" />
                                        <div className="infoTex">이벤트배너/상세페이지/오픈마켓, 쇼핑몰 이미지 제작 해 드립니다</div>
                                    </li>
                                    <li>
                                        <img src={require("../../images/db/tlist03.jpg")} alt="" />
                                        <div className="infoTex">[배포형 지도 리뷰] 플레이스, 지도의 리뷰 갯수를 관리해 드립니다</div>
                                    </li>
                                </ul>
                            </div>
                           <div className="boxing service">
                                <h4>최근에 본 서비스</h4>
                            </div>
                        </div>
                        <div className="infoList">
                            <div className="productList">
                                <h3>크몽</h3>
                                <p className="subTex">전문가가 제공하는 최상의 서비스들을 소개합니다.</p>
                                <div className="list">
                                    <ul>
                                        <li>
                                            <a href="">
                                                <img src={require("../../images/db/tlist03.jpg")} alt="" />
                                                <p className="productTex">&lt;%= list.de_tit %&gt;</p>
                                            </a>
                                            <div className="procuctPay">
                                                <p></p>
                                                <p>₩ &lt;%= list.de_pay %&gt;</p>
                                            </div>
                                            <div className="star">
                                                <p className="user">user</p>
                                                <p className="starNum">******</p>
                                            </div>
                                            <input type="hidden" id="inteD_idx" value="<%= list.de_idx %>" />
                                            <div className="productN">Number</div>
                                        </li>
                                        <li>
                                            <a href="">
                                                <img src={require("../../images/db/tlist02.jpg")} alt="" />
                                                <p className="productTex">&lt;%= list.de_tit %&gt;</p>
                                            </a>
                                            <div className="procuctPay">
                                                <p></p>
                                                <p>₩ &lt;%= list.de_pay %&gt;</p>
                                            </div>
                                            <div className="star">
                                                <p className="user">user</p>
                                                <p className="starNum">******</p>
                                            </div>
                                            <input type="hidden" id="inteD_idx" value="<%= list.de_idx %>" />
                                            <div className="productN">Number</div>
                                        </li>
                                        <li>
                                            <a href="">
                                                <img src={require("../../images/db/tlist01.jpg")} alt="" />
                                                <p className="productTex">&lt;%= list.de_tit %&gt;</p>
                                            </a>
                                            <div className="procuctPay">
                                                <p></p>
                                                <p>₩ &lt;%= list.de_pay %&gt;</p>
                                            </div>
                                            <div className="star">
                                                <p className="user">user</p>
                                                <p className="starNum">******</p>
                                            </div>
                                            <input type="hidden" id="inteD_idx" value="<%= list.de_idx %>" />
                                            <div className="productN">Number</div>
                                        </li>
                                    </ul>
                                    <div className="likeN">Like</div>
                                </div>
                                <input type="hidden" id="inteU_idx" value="<%= c_user.c_idx %>" />
                                <input type="hidden" id="inteU_id" value="<%= c_user.c_id %>" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="infoLink">
                    <div className="linkList">
                        <ul>
                            <li>크몽팀</li>
                            <li>|</li>
                            <li>서비스소개</li>
                            <li>|</li>
                            <li>인재채용</li>
                            <li>|</li>
                            <li>이용약관</li>
                            <li>|</li>
                            <li>개인정보취급방침</li>
                            <li>|</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default InfoConts;