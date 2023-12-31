import styled from "styled-components";
import { ReactComponent as Bookmark } from "../../images/bookmark.svg";
import { ReactComponent as Home } from "../../images/home.svg";
import { ReactComponent as Movies } from "../../images/movies.svg";
import { ReactComponent as TvSeries } from "../../images/tvSeries.svg";
const baseIconStyles = `
  cursor: pointer;

  &:hover {
    path {
      transition: fill 0.3s ease; 
      fill: #FC4747; 
    }
  }
`;
export const Nav = styled.nav`
  position: fixed;
  top: 32px;
  left: 32px;
  border-radius: 20px;
  background-color: #161d2f;
  height: calc(100vh - 7%);
  max-width: 96px;
  width: 100%;
  padding: 32px 28px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const WrapperNavigation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const NavigationLogo = styled.img`
  width: 32px;
  cursor: pointer;
`;
export const NavigationList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 75px 0 0;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const HomeIcon = styled(Home)`
  ${baseIconStyles}
`;
export const BookmarkIcon = styled(Bookmark)`
  ${baseIconStyles}
`;
export const MoviesIcon = styled(Movies)`
  ${baseIconStyles}
`;
export const TvSeriesIcon = styled(TvSeries)`
  ${baseIconStyles}
`;
export const NavigationUserImage = styled.img`
  cursor: pointer;
`;
