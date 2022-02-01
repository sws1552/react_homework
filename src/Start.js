import {React, useRef, useEffect} from 'react'; 
import styled from 'styled-components';
import image from "./images/원석.jpg";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {updateUserName} from "./redux/modules/user";


const Start = (props) => {

const navigate = useNavigate();
const dispatch = useDispatch();

const name_ref = useRef(null);

const btn = useRef();

const clickEv = () => {

  dispatch(updateUserName(name_ref.current.value));
  
  navigate('/question');
}


useEffect(() => {
  btn.current.addEventListener('click', clickEv);

}, [])

  return (
    <Container>
      <Image src={image} alt="wonseok"/>
      <Content>
        나는 <Name>{props.name}</Name>에 대해서 얼마나 알고 있을까?
      </Content>
      <InputBox type="text" placeholder="내 이름" ref={name_ref}/>
      <Btn ref={btn}>시작하기</Btn>
    </Container>
  );

}

const Container = styled.div`
  width: 50vw;
  max-width:500px;
  min-width: 479px;
  height: 80vh;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const Name = styled.span`
  background-color: yellow;
  border-radius: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 60%;
  margin: 0 auto;
  border-radius: 50px;
`;

const Content = styled.div`
  margin-top: 10px;
  text-align: center;
  font-weight: 700;
  font-size: 2em;
`;

const InputBox = styled.input`
  margin: 10px auto;
  display: block;
  border-radius: 10px;
  height: 30px;
  border: 3px solid black;
  width: 80%;
  &:focus {
    outline:none;
    /* border: solid 1px yellow; */
  }
`;

const Btn = styled.button`
  width:40%;
  height:30px;
  margin:20px auto;
  display:block;
  border-radius: 30px;
  border:none;
  background-color: black;
  color:yellow;
  transition: 0.5s;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    transition: 0.5s;
    background-color: yellow;
    color: black;
  }
`;


export default Start;