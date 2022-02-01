import React from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";




const Score = (props) => {

    const name = useSelector((state) => state.user.user_name);
    const answer = useSelector((state) => state.quiz.list);
    const user_answer = useSelector((state) => state.quiz.user_answer);

    let score = 0;
    answer.forEach((item, i) => {
        if(item.answer === user_answer[i]){
            score += 1;
        }
    });


    return (
        <Container>
            <Wrap>
                <Title><Name>{name}</Name>님 퀴즈에 대한 내 점수는?</Title>
                <Jumsu>{score/5*100}점</Jumsu>
                <div style={{marginTop: "30px", fontWeight: "700", fontSize:"5em"}}>고 생 했 다.</div>
                <GogoJumsu>점수 보기</GogoJumsu>
                <GogoRank>랭킹 보기</GogoRank>
            </Wrap>
        </Container>
    );
}


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
`;

const Wrap = styled.div`
    /* background-color: orange; */
    height: 80vh;
    width: 70vw;
`;

const Title = styled.h1`
    font-size: 3em;
`;

const Name = styled.span`
    background-color: violet;
    color: white;
    padding: 5px;
    border-radius: 10px;
    box-shadow: 2px 2px 2px 2px gray;
`;

const Jumsu = styled.span`
    background-color: violet;
    color: white;
    border-radius: 10px;
    font-size: 5em;
    font-weight: 700;
    box-shadow: 2px 2px 2px 2px gray;
`;

const GogoJumsu = styled.button`
    display: block;
    width: 80%;
    margin: 30px auto;
    border: none;
    font-size: 2em;
    background-color: violet;
    border-radius: 20px;
    box-shadow: 2px 2px 2px 2px gray;
    cursor: pointer;
    &:hover {
        transform: scale(1.2);
    }
`;

const GogoRank = styled.button`
    display: block;
    width: 80%;
    margin: auto;
    border: none;
    font-size: 2em;
    background-color: none;
    border-radius: 20px;
    box-shadow: 2px 2px 2px 2px gray;
    cursor: pointer;
    &:hover {
        transform: scale(1.2);
    }
`;

export default Score;
