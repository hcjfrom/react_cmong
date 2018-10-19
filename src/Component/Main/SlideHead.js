import React, { Component } from 'react';
// eslint-disable-next-line
import { Route , Switch } from 'react-router-dom';
// eslint-disable-next-line
import common from '../../css/common.css';
// eslint-disable-next-line
import main from '../../css/main.css';
// eslint-disable-next-line


class SlideHead extends Component {
    render(){
        return (
            <div className="slideHead">
				<div>
					<div>
                        <img src={require("../../images/main/business_plan.png")} alt="" />
						<div className="textInfo">
							<h3>인기키워드</h3>
							<div className="tag"> #로고디자인</div>
							<div className="text">상품을 맛있게 담아드립니다</div>
							<a href="" className="direct">
								<span>바로가기</span>
							</a>
						</div>
					</div>
					{/* <div>
                        <img src={require("../../images/main/drawing_lesson.png")} alt="" />
						<div className="textInfo">
							<h3>인기키워드</h3>
							<div className="tag"> #로고디자인</div>
							<div className="text">상품을 맛있게 담아드립니다</div>
							<a href="" className="direct">
								<span>바로가기</span>
							</a>
						</div>
					</div>
					<div>
                        <img src={require("../../images/main/logo_design.png")} alt="" />
						<div className="textInfo">
							<h3>인기키워드</h3>
							<div className="tag"> #로고디자인</div>
							<div className="text">상품을 맛있게 담아드립니다</div>
							<a href="" className="direct">
								<span>바로가기</span>
							</a>
						</div>
					</div>
					<div>
                        <img src={require("../../images/main/sns.png")} alt="" />
						<div className="textInfo">
							<h3>인기키워드</h3>
							<div className="tag"> #로고디자인</div>
							<div className="text">상품을 맛있게 담아드립니다</div>
							<a href="" className="direct">
								<span>바로가기</span>
							</a>
						</div>
					</div> */}
                </div>
			</div>
        );
    }
}

export default SlideHead;