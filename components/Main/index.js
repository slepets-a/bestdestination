import { Fragment } from "react";
import styled from "styled-components";
import data from "../../data/cities";

const OrangeBar = styled.div`
  background-color: ${props => props.theme.color.warning};
  color: ${props => props.theme.color.white};
  font-weight: bold;
  padding: 5px 10px;
`;

const Content = styled.div`
  background-color: ${props => props.theme.color.white};
  padding-top: 1rem;
`;

const Title = styled.h4`
  color: ${props => props.theme.color.primaryLight};
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -1px;
  margin: 0;
  text-align: center;
`;

const SubTitle = styled.h3`
  color: ${props => props.theme.color.primaryLighter};
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 26px;
  text-align: center;
`;

const Header = styled.p`
  border-bottom: 1px solid ${props => props.theme.color.yellow};
  color: ${props => props.theme.color.warning};
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const CityList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

const City = styled.p`
  flex: 1 0 50%;
  line-height: 1;
  margin-bottom: 3px;

  @media (min-width: 400px) {
    flex: 1 0 33%;
  }
`;

const CityLink = styled.a`
  color: ${props => props.theme.color.primaryLight};
  font-size: 11px;
  font-weight: normal;
  line-height: inherit;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.color.warning};
    text-decoration: underline;
  }
`;

const Main = () => (
  <Fragment>
    <OrangeBar>Most Popular Destination Guides</OrangeBar>
    <Content>
      <Title>the best places to eat, sleep and play</Title>
      <SubTitle>in the best cities around the world.</SubTitle>
      {data.map((country, countryIndex) => (
        <Fragment key={countryIndex}>
          <Header>{country.name}</Header>
          <CityList>
            {country.cities.map((city, cityIndex) => (
              <City key={cityIndex}>
                <CityLink href={`https://best-destination.com${city.link}`}>
                  {city.name}
                </CityLink>
              </City>
            ))}
          </CityList>
        </Fragment>
      ))}
    </Content>
  </Fragment>
);

export default Main;
