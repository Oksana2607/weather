import styled from 'styled-components';

export const Container = styled.div`
    overflow-y: scroll;
    font-size: 16px;
    height: auto;
    font-family: 'Open Sans', sans-serif;
    background-color: rgb(237, 237, 237);
    height: 100vh;
`;

export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    height: 10em;
`;

export const HeaderTitle = styled.div`
    display: flex;
    background-color: rgb(60, 142, 210);
    height: 3.5em;
    flex: 1;
    text-align: left;
    color: aliceblue;
`;

export const City = styled.div`
    width: 100px;
    border-right: 1px solid #FFFFFF;    
    min-width: 360px;
    display: flex;    
`;

export const Img = styled.img`
    padding-left: 2em;
`;

export const H1 = styled.h1`
    margin-top: 0.3em;
    margin-left: 1em;    
`;

export const Title = styled.div`
    flex: 2;
    padding-left: 25em;   
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    background-color: rgb(255, 255, 255);
    margin: 7em 23em;
    height: 50vh;
    min-width: 900px;  
`;

export const WrapperSidebar = styled.div`
    width: 300px;
    padding: 2em;
    flex: 1;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 0 3px 1px rgba(0,0,0,.05);
    margin: 1em; 
`;

export const WrapperMain = styled.div`
    flex: 3;
    padding-top: 1em;
    padding-right: 1em;
`;

export const WrapperMainHeader = styled.div`
    background-color: rgba(240, 207, 117, 0.9);
    height: 3em;
    margin-bottom: 0.5em;
    color: aliceblue;
    padding: 15px;
    text-transform: uppercase;
    font-weight: bold;
`;

export const WrapperMainContent = styled.div`
    display: flex;
`;

export const ContentMain = styled.div`
    flex: 3;
    background-color: rgb(60, 142, 210);
    background-image: linear-gradient(rgb(45, 69, 165), rgb(69, 139, 175));
    display: flex;
    flex-direction: column;
    color: rgb(255, 255, 255);
    font-size: 16px;
    height: 41vh;
    position: relative;
`;

export const ContentMainHeader = styled.div`
    text-align: center;
    padding-top: 30px;
    font-size: 16px;
    text-transform: uppercase;
`;

export const HeaderCity = styled.span``;

export const ContentMainTodayWeather = styled.div`
    padding: 2px 18px 26px 18px;
    display: flex;
    justify-content: stretch;
`;

export const TodayWeatherLeft = styled.div`
    flex: 1;
`;

export const TodayWeatherTemp = styled.span`
    font-size: 40px;
`;

export const TodayWeatherPhrase = styled.div`
    font-size: 16px;
    text-transform: uppercase;
    padding-top: 10px;
`;

export const TodayWeatherRight = styled.div``;

export const TodayWeatherImage = styled.div``;

export const ContentSidebar = styled.div`
    flex: 1;
    padding-left: 20px;
`;

export const Footer = styled.div`
    background-color: rgb(218, 218, 218);
    height: 100px;
`;

export const FooterImage = styled.div`
    text-align: center;
    padding-top: 20px;
    padding-bottom: 10px;
`;
