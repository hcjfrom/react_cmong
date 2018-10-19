import React, { Component } from 'react';
// eslint-disable-next-line
import common from '../../css/common.css';
// eslint-disable-next-line
import main from '../../css/main.css';
// eslint-disable-next-line
import SlideHead from './SlideHead.js';


const $ = window.jQuery

class UtileHead extends Component {
    componentDidMount() {
        $(".utill .boxing").hover(function(){
            $(".utillConts").css("display","block");
            $(".toparrow").css("display","block");
        },function(){
            $(".utillConts").css("display","none");
            $(".toparrow").css("display","none");
        });

        $(".navi .firstUi > li").hover(function(){
            var result = $(".navi ul").hasClass('subtype');
            if (result === true){
                $(this).css("border-bottom","3px solid #ffd400");
                $(this).find('div').css("display","block");	
            } else {
                $(this).css("border-bottom","3px solid #4d4d4d");
                $(this).find('div').css("display","block");	
            }
        },function(){
            $(this).css("border-bottom","none");
            $(this).find('div').css("display","none");
        });
    }
    render(){
        return (
            <div id="headConts">
                <div className="utileHead">
                    <ul className="topUtill">
                        <li>
                            <div className="logo">
                                <h1>
                                    <img src={require("../../images/common/kmong_logo.png")} alt="크몽메인로고" />
                                </h1>
                            </div>
                            <div className="sch">
                                <form>
                                    <input type="text" name="" placeholder="검색어를 입력해 주세요" />
                                    <p><img src={require("../../images/common/search_ico.png")} alt="크몽메인검색아이콘" /></p>
                                </form>
                            </div>
                        </li>
                        <li>
                            <div className="utill">
                                <div className="boxing">
                                    {/* <div className="userImg">
                                        <img src={require("../../images/common/userIco.jpg")} alt="" />
                                    </div> */}
                                    <div className="userId">유저ID</div>
                                    <span className="ico"></span>
                                    <div className="utillConts">	
                                        <ul>
                                            <li><a href="userpage">구매목록</a></li>
                                            <li><a href="productStep">판매</a></li>
                                            <li><a href="sellerpage">판매목록</a></li>
                                            <li><a href="likepage">찜목록</a></li>
                                            <li><a href="mypage">나의정보</a></li>
                                            <li><a href="logout">로그아웃</a></li>
                                        </ul>
                                    </div>
                                    <img className="toparrow" src="../../images/common/main_toparrow.png" alt="" />
                                </div>
                                {/* <div className="login">
                                   <h2><a href="login">로그인</a></h2>
                                </div> */}
                                <div className="aplyLogin">
                                    <h2><a href="loginForm">무료회원 가입</a></h2>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <nav className="navi">
                        <ul className="firstUi">
                            <li>
                                <a href="type_list?category=1"><h2>디자인</h2></a>
                                <div className="navi_contens">
                                    <ul className="lastUi">
                                        <li><a href="type_list?category=11">로고 디자인</a></li>
                                        <li><a href="type_list?category=12">명함&amp;인쇄물</a></li>
                                        <li><a href="type_list?category=13">웹&amp;모바일</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="type_list?category=2"><h2>IT &amp; 프로그래밍</h2></a>
                                <div className="navi_contens">
                                    <ul className="lastUi">
                                        <li><a href="type_list?category=21">워드프레스</a></li>
                                        <li><a href="type_list?category=22">웹사이트 개발</a></li>
                                        <li><a href="type_list?category=23">웹사이트 유지보수</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href=""><h2>컨텐츠 제작</h2></a>
                                <div className="navi_contens"></div>
                            </li>
                            <li>
                                <a href=""><h2>마케팅</h2></a>
                                <div className="navi_contens"></div>
                            </li>
                            <li>
                                <a href=""><h2>번역 &amp; 통역</h2></a>
                                <div className="navi_contens"></div>
                            </li>
                            <li>
                                <a href=""><h2>문서작성</h2></a>
                                <div className="navi_contens"></div>
                            </li>
                        </ul>
                    </nav>
                    <SlideHead />
                    <div className="slideHead_fake"></div>
                </div>
            </div>
        );
    }
}

export default UtileHead;