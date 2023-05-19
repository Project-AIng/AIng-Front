import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 70px;
    display: flex;
    align-items: center;
    justify-content: center; 
    text-align: center;
`;

const TextContainer = styled.div`
    flex: 1;
    padding-right: 16px;
    text-align: left;
`;

const Image = styled.img`
    width: 50%; 
    border-radius: 40px; 

`;
const Text = styled.div`
    color: black;
    font-size: 40px;
    margin-bottom: 40px;
    font-weight: 600;
`;

const DetailText = styled.div`
    color :black; 
    font-weight:400;
`;

const RoundedText = styled.div`
    border: 5px solid red; 
    border-radius: 30px; 
    padding: 2px 10px; 
    display: inline-block;
    color : white;
    background-color:red;
    margin-bottom:10px;
    font-size:20px;
`;
export default function Guide2() {
    return (
        <>
        <Container>
        
        <TextContainer>
            <RoundedText>NEW</RoundedText>
            <Text>실제로 말하면서 학습하는
                <br></br>
                AI 프리토킹
            </Text>
            <DetailText>
            AIng의 ‘AI 튜터’ 는 원어민이 없이도 실제 원어민과<br></br>
            하는 것 처럼 자유롭게 AI 와 대화를 나눌 수 있는 
            <br></br>기능입니다.<br></br><br></br>
            일상에서 흔히 마주할 수 있는 9가지 이상의 다양한 <br></br>
            상황과 주제로 대화하다 보면, 모국어를 배운 것과 <br></br>
            비슷한 방식으로 자연스럽게 영어를 학습하게 됩니다.
            </DetailText>
            <br></br>
            
        </TextContainer>
        <Image src="/images/Guide2.png" alt="Guide2" />
        </Container>
        </>
    );
}

