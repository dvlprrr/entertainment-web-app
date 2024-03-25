import { User, UsersThree } from "@phosphor-icons/react"
import { FilmCard } from "../../FilmCard/FilmCard"
import { LineChart } from "../../LineCharts/LineChart"
import { PieChart } from "../../PieChart/PieChart"
import { useGetMostPopularFilm } from "../hooks/useGetMostPopularFilm"
import { useGetPopularGenres } from "../hooks/useGetPopularGenres"

import { useGetTotalUsers } from "../hooks/useGetTotalUsers"
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
  const { data: countedUsers } = useGetTotalUsers()
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
            <DashboardInfoAmount>{countedUsers}</DashboardInfoAmount>
          </DashboardInfoContent>
        </DashboardInfo>
        <DashboardInfoGenres style={{ gridArea: "genres" }}>
          <DashboardInfoTitle>TOP GENRES</DashboardInfoTitle>
          <DashboardInfoGenreContent>
            {popularGenres?.map((genre, index) => (
              <DashboardGenre key={genre} place={index + 1}>
                {`${index + 1}. ${genre}`}
              </DashboardGenre>
            ))}
          </DashboardInfoGenreContent>
        </DashboardInfoGenres>
        <DashboardInfoMovie style={{ gridArea: "film" }}>
          <DashboardInfoTitle>MOST POPULAR FILM</DashboardInfoTitle>
          <DashboardInfoContentMovie>
            {popularMovie && <FilmCard {...popularMovie} />}
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
