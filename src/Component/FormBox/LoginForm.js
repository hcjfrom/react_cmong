import React, { Component } from 'react';
// eslint-disable-next-line
import common from '../../css/common.css';
// eslint-disable-next-line
// import sub from '../../css/sub.css';


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
                    <form method="post" action="user_insert" id="f">
                        <h2>무료회원가입</h2>
                        <div className="inputLogin loginData">
                            <p><input type="text" name="u_id" id="u_id" placeholder="아이디" /></p>
                            <p><input type="text" name="u_name" id="u_name" placeholder="이름" /></p>
                            <p><input type="password" name="u_pw" id="u_pw" placeholder="비밀번호" /></p>
                            <p><input type="password" name="u_pwC" id="u_pwC" placeholder="비밀번호 확인" /></p>
                            <p><input type="text" name="u_phon" id="u_phon" placeholder="핸드폰번호" /></p>
                            <p><input type="text" name="u_email" id="u_email" placeholder="이메일" /></p>
                            <div className="loginCId">
                                <span className="ty1">중복된 아이디</span>
                                <span className="ty2">중복안된 아이디</span>
                            </div>
                        </div>
                    </form>
                    <div className="loginbox">
                        <div className="loginBtn">
                            <span>동의하고 가입완료</span>
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