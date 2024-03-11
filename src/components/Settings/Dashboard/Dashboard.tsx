import { User, UsersThree } from "@phosphor-icons/react"
import { LineChart } from "../../LineCharts/LineChart"
import { MovieCard } from "../../MovieCard/MovieCard"
import { PieChart } from "../../PieChart/PieChart"
import { useGetMostPopularFilm } from "../hooks/useGetMostPopularFilm"
import { useGetPopularGenres } from "../hooks/useGetPopularGenres"

import {
  ChartTitle,
  ChartsWrapper,
  DashboardGenre,
  DashboardInfo,
  DashboardInfoAmount,
  DashboardInfoContent,
  DashboardInfoContentMovie,
  DashboardInfoGenreContent,
  DashboardInfoGenres,
  DashboardInfoMovie,
  DashboardInfoTitle,
  DashboardInfoWrapper,
  DashboardWrapper,
  LineChartWrapper,
  PieChartWrapper,
} from "../styled"

export function Dashboard() {
  const { data: popularMovie } = useGetMostPopularFilm()
  const { data: popularGenres } = useGetPopularGenres()

  return (
    <DashboardWrapper>
      <DashboardInfoWrapper>
        <DashboardInfo style={{ gridArea: "users" }}>
          <UsersThree size={70} weight="thin" />
          <DashboardInfoContent>
            <DashboardInfoTitle>TOTAL USERS</DashboardInfoTitle>
            <DashboardInfoAmount>1</DashboardInfoAmount>
          </DashboardInfoContent>
        </DashboardInfo>
        <DashboardInfo style={{ gridArea: "online" }}>
          <User size={70} weight="thin" />
          <DashboardInfoContent>
            <DashboardInfoTitle>USERS ONLINE</DashboardInfoTitle>
            <DashboardInfoAmount>1</DashboardInfoAmount>
          </DashboardInfoContent>
        </DashboardInfo>
        <DashboardInfoGenres style={{ gridArea: "genres" }}>
          <DashboardInfoTitle>TOP GENRES</DashboardInfoTitle>
          <DashboardInfoGenreContent>
            {popularGenres?.map((genre, index) => (
              <DashboardGenre place={index + 1}>
                {`${index + 1}. ${genre}`}
              </DashboardGenre>
            ))}
          </DashboardInfoGenreContent>
        </DashboardInfoGenres>
        <DashboardInfoMovie style={{ gridArea: "film" }}>
          <DashboardInfoTitle>MOST POPULAR FILM</DashboardInfoTitle>
          <DashboardInfoContentMovie>
            {popularMovie && (
              <MovieCard
                {...popularMovie}
                url="https://ntm13.ru/wp-content/uploads/2021/04/%D0%94%D0%B5%D0%B2%D1%8F%D1%82%D0%B0%D0%B5%D0%B2-%D1%84%D0%B8%D0%BB%D1%8C%D0%BC-%D0%B3%D0%BE%D1%80%D0%B8%D0%B7%D0%BE%D0%BD%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg"
              />
            )}
          </DashboardInfoContentMovie>
        </DashboardInfoMovie>
      </DashboardInfoWrapper>
      <ChartsWrapper>
        <LineChartWrapper>
          <ChartTitle>Average online users</ChartTitle>
          <LineChart />
        </LineChartWrapper>
        <PieChartWrapper>
          <ChartTitle>Most popular genre</ChartTitle>
          <PieChart />
        </PieChartWrapper>
      </ChartsWrapper>
    </DashboardWrapper>
  )
}
