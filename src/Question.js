import React from "react";
import styled from "styled-components";
import img from "./images/원석2.jpg";

const Question = (props) => {



    return (
        <Container>
            <Title>0번 문제</Title>
            <Problem>원석이는 2살이다.</Problem>
            <Image />
            <Oanswer>O</Oanswer>
            <Xanswer>X</Xanswer>
        </Container>
    );
}


const Container = styled.div`
    /* background-color: orange; */
    width: 80vh;
    height: 80vh;
    margin: 50px auto;
    text-align: center;
    padding: 10px;
`;

const Title = styled.span`
    background-color: violet;
    color: white;
    border-radius: 20px;
    padding: 10px;
    display: inline-block;
`;

const Problem = styled.div`
    margin: 10px;
    font-size: 3em;
    font-weight: 700;
    text-shadow: 5px 5px 5px gray;
`;

const Image = styled.div`
    background-image: url(${img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 500px;
    width: 500px;
    margin: 50px auto;
    border-radius: 100px;
    box-shadow: 5px 5px 5px 5px gray;
    opacity: 0.8;
`;

const Oanswer = styled.button`
    border: none;
    font-size: 10em;
    background-color: greenyellow;
    border-radius: 20px;
    box-shadow: 2px 2px 2px 2px gray;
    cursor: pointer;
    &:hover {
        transform: scale(1.2);
    }
`;

const Xanswer = styled.button`
    border: none;
    font-size: 10em;
    margin-left: 100px;
    background-color: tomato;
    border-radius: 20px;
    box-shadow: 2px 2px 2px 2px gray;
    cursor: pointer;
    &:hover {
        transform: scale(1.2);
    }
`;


export default Question;

