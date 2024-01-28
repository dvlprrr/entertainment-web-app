import Recomended from "../components/Recomended/Recomended";
import Trending from "../components/Trending/Trending";
import { HomePageWrapper } from "./styled";

export default function HomePage() {
  return (
    <HomePageWrapper>
      <Trending />
      <Recomended />
    </HomePageWrapper>
  );
}
