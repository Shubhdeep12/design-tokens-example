import React from 'react'
import styled from 'styled-components';
import { useTheme } from '../containers/ThemeContext';

import Icon from './Icon';

const ProfileCard = () => {
    const { toggleTheme, isDark } = useTheme();
    return (
        <Container>
            <Card isDark={isDark}>
                <StyledThemeIcon name="themeIcon" onClick={toggleTheme} />
                <StyledImg isDark={isDark} src={require("../utils/design_token_image.png")} alt=""/>
                <CardContent>
                    <Name isDark={isDark}>
                        Shubhdeep Chhabra
                    </Name>
                    <Designaton isDark={isDark}>
                        Software Engineer
                    </Designaton>
                    <About isDark={isDark}>
                        I talk about Tech, Open Source. Let's connect and build a community.
                    </About>
                </CardContent>
                <Button isDark={isDark} onClick={() => window.open('mailto:chhabrashubhdeep@gmail.com', '_blank')}>
                    chhabrashubhdeep@gmail.com
                </Button>
                <SocialLinks>
                    <Icon name="twitter" color="#26235C" onClick={() => window.open('https://twitter.com/ShubhInTech', '_blank') } />
                    <Icon name="github" color="#26235C" onClick={() => window.open('https://github.com/Shubhdeep12', '_blank') }/>
                    <Icon name="linkedin" color="#26235C" onClick={() => window.open('https://www.linkedin.com/in/shubhdeepchhabra/', '_blank') }/>
                    <Icon name="devTo" color="#26235C" onClick={() => window.open('https://dev.to/shubhdeep12', '_blank') }/>
                    <Icon name="hashnode" color="#26235C" onClick={() => window.open('https://shubhdeepchhabra.hashnode.dev/', '_blank') }/>
                </SocialLinks>
            </Card>
        </Container>
  )
}

export default ProfileCard;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;

const Card = styled.div`
    height: 700px;
    width: 540px;
    background: ${({isDark}) => isDark ? '#26235C' : '#FFFFFF'};
    position: relative;
    left: 50%;
    top: 50%;
    transform: translateX(-50%)  translateY(-50%);
    box-shadow: 0px 4px 75px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
    display: flex;
    flex-direction: column;    
    transition: all 0.3s ease;
`;

const StyledThemeIcon = styled(Icon)`
    position: absolute;
    top: 22px;
    left: 22px;
`;

const StyledImg = styled.img`
    border: ${({ isDark }) => isDark ? '2px solid #504786' : '2px solid #26235C'};
    border-radius: 100px;
    width: 200px;
    height: 200px;
    margin: 70px 0px 0px 161px;
    transition: all 0.3s ease;
`;

const CardContent = styled.div`
    margin: 20px 54px 0px 54px;
`;

const Name = styled.div`
    margin: 0px 80px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 42px;
    text-align: center;
    transition: all 0.3s ease;
    color: ${({ isDark }) => isDark ? '#FFFFFF' : '#252525'};

`;

const Designaton = styled.div`
    margin: 0px 80px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 28px;
    text-align: center;
    color: ${({ isDark }) => isDark ? '#A79AE0' : '#26235C'}; 
    transition: all 0.3s ease;
`;

const About = styled.div`
    margin: 26px 0px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: ${({ isDark }) => isDark ? '#FFFFFF' : '#252525'};
    transition: all 0.3s ease;
`;

const Button = styled.button`
    width: 275px;
    height: 44px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 24px;
    color: #FFFFFF;
    background: ${({ isDark }) => isDark ? 'rgba(144, 130, 236, 0.65)' : '#26235C'};
    transition: all 0.3s ease;
    border-radius: 10px;
    border: 0px;
    margin: 23px 130px;
    cursor: pointer;
    &:active{
        transform: scale(0.95);
    }
`;

const SocialLinks = styled.div`
    display: flex;
    margin: 20px;
    justify-content: space-evenly;
`;

