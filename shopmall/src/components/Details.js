/// components/Details.js
// 기존:
//import { useHistory } from 'react-router-dom';
// 새로운 방식:
import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import "../Detail.scss";
import { 재고Context } from "../App";

let 박스 = styled.div`padding:20px`;
let 제목 = styled.h4`
    font-size:25px;
    color:${props => props.색상};
    border-bottom:1px solid gray;
    padding-bottom:10px
`;
let DIV = styled.div`
   padding:20px;
   box-shadow:3px 3px 3px 3px lightgray;
    background: ${(props) => props.color};  
`;

const Details = (props) => {
    let history = useNavigate();
    let { id } = useParams();

    let 찾은상품 = props.shoes.find((상품) => 상품.id == id)
    let [alert, alert변경] = useState(true);
    let 재고화면 = (
        <div className="my-alert alert alert-warning">
            <p>재고가 얼마 남지 않았습니다.</p>
        </div>
    );
    let { 재고변경 } = props;
    let 재고 = useContext(재고Context);

    useEffect(() => {
        let 타이머 = setTimeout(() => {
            alert변경(false);
        }, 3000);
        return () => { clearTimeout(타이머) }
    }, [alert]);

    let [입력, 입력변경] = useState('사고싶은 제품은?');

    return (
        <div className="container">
            <박스>
                <제목 색상={'blue'}> Detail(상세페이지) </제목>
            </박스>
            {입력} <br></br>
            <input onChange={(e) => 입력변경(e.target.value)} />

            {alert === true ? 재고화면 : null}

            <div className="row">
                <div className="col-md-6">
                    <img
                        src={"/shoes" + (parseInt(id) + 1) + ".jpg"}
                        width="100%" alt="image"
                    />
                </div>

                <DIV color="#ffa">
                    <div className="col-md-6 mt-4">
                        <h4 className="pt-0">{찾은상품.title}</h4>
                        <p>{찾은상품.content}</p>
                        <p>{찾은상품.price}원</p>
                        <p>재고: {재고[id]} </p>
                        <button className="btn btn-danger">주문하기</button>
                        <button className="btn btn-info"
                            onClick={() => { history(-1); }}>뒤로하기 </button>
                        <button className="btn btn-warning"
                            onClick={() => { history("/"); }}> 홈으로가기  </button>
                    </div>

                </DIV>

            </div>
        </div>
    );

};



export default Details;