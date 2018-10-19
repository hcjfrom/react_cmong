import React, { Component } from 'react';
// eslint-disable-next-line
import common from '../../css/common.css';
// eslint-disable-next-line
import sub from '../../css/sub.css';


class Login extends Component {
    render(){
        return (
            <div>
                <header id="headConts">
                    <div className="utileHead">
                        <div>
                            <ul className="topUtill">
                                <li>
                                    <div className="logo">
                                        <h1><a href="/"><img src={require("../../images/common/kmong_logo.png")} alt="" /></a></h1>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>
                <div className="loginBoxing">
                    <h2>로그인</h2>
                    <div className="inputLogin">
                        <form method="post" action="login" id="f">
                            <p className="email"><input type="text" name="u_id" placeholder="아이디" /></p>
                            <p><input type="password" name="u_pw" placeholder="비밀번호" /></p>
                            <div className="check loginCheck">
                                <p>
                                    <input className="checkInput" type="checkbox" name="" id="new" />
                                    <span className="modifyCheck"></span>
                                    <span className="modifyChecked"></span>
                                </p>
                                <p>
                                    <label for="new">로그인 기억하기</label>
                                </p>
                            </div>
                        </form>
                    </div>
                    <div className="loginbox">
                        <div className="loginBtn">
                            <span>로그인</span>
                        </div>
                        <div className="loginType">
                            <ul>
                                {/* <li>아이디/비밀번호 찾기</li> */}
                                <li><a href="loginForm">무료회원가입</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="anotherLogin">
                        <div className="anobtn">
                            <span><a href="">페이스북으로 시작</a></span>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>Copyright © 2017 Kmong Inc. All rights reserved.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;