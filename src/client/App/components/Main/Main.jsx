import React from 'react';
import CitiesTable from '../CitiesTable';
import Weather from '../Weather';
import LoaderPage from '../Loader';

import {
  Container,
  Header,
  HeaderTitle,
  City,
  Img,
  H1,
  Title,
  Wrapper,
  WrapperSidebar,
  WrapperMain,
  WrapperMainHeader,
  WrapperMainContent,
  ContentMain,
  ContentMainHeader,
  HeaderCity,
  ContentMainTodayWeather,
  TodayWeatherLeft,
  TodayWeatherTemp,
  TodayWeatherPhrase,
  TodayWeatherRight,
  TodayWeatherImage,
  ContentSidebar,
  Footer,
  FooterImage
} from './styledComponents';


const Main = (props) => {
  const {
    isLoading, city, weather, chooseCity, match, location
  } = props;

  const hasWeather = Object.keys(weather).length > 0;
  const options = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  };
  const date = new Date().toLocaleString('en-US', options);

  React.useEffect(() => {
    const activeCity = match.params;
    if (!Object.keys(activeCity).length) {
      chooseCity(city);
    } else {
      chooseCity(activeCity);
    }
  }, [location.pathname]);

  return (
    <Container>
      <Header>
        <HeaderTitle className="header__title">
          <City>
            <Img src="https://openweathermap.org/img/w/02d.png" alt="weather" />
            <H1>{city.city}</H1>
          </City>
          <Title>
            <H1>WeatherChanel</H1>
          </Title>
        </HeaderTitle>
      </Header>
      <Wrapper>
        <WrapperSidebar className="wrapper__sidebar">
          <CitiesTable />
        </WrapperSidebar>
        <WrapperMain>
          <WrapperMainHeader>
            <p>{`Today is ${date}`}</p>
          </WrapperMainHeader>
          <WrapperMainContent>
            <ContentMain>
              <ContentMainHeader>
                <HeaderCity>{city.city}</HeaderCity>
              </ContentMainHeader>
              {
                                isLoading && <LoaderPage />
                            }
              { hasWeather && (
              <ContentMainTodayWeather>
                <TodayWeatherLeft>
                  <TodayWeatherTemp>
                    {weather.main.temp}
                    <sup>°</sup>
                  </TodayWeatherTemp>
                  <TodayWeatherPhrase>{weather.weather[0].description}</TodayWeatherPhrase>
                </TodayWeatherLeft>
                <TodayWeatherRight>
                  <TodayWeatherImage><img src="http://s1.iconbird.com/ico/2013/6/366/w118h1201372352927weathersky.png" width="60px" alt="sky" /></TodayWeatherImage>
                </TodayWeatherRight>
              </ContentMainTodayWeather>
              ) }
            </ContentMain>
            <ContentSidebar>
              <Weather />
            </ContentSidebar>
          </WrapperMainContent>
        </WrapperMain>
      </Wrapper>
      <Footer>
        <FooterImage><img src="https://weather.com/weather/assets/footer/twc-logo-lockup.png" alt="weather" /></FooterImage>
      </Footer>
    </Container>
  );
};

export default React.memo(Main);
