import { CrownSimple, User, UsersThree } from "@phosphor-icons/react"
import { LineChart } from "../../LineCharts/LineChart"
import { PieChart } from "../../PieChart/PieChart"
import {
  ChartTitle,
  ChartsWrapper,
  DashboardInfo,
  DashboardInfoAmount,
  DashboardInfoContent,
  DashboardInfoTitle,
  DashboardInfoWrapper,
  DashboardWrapper,
  LineChartWrapper,
  PieChartWrapper,
} from "../styled"

export function Dashboard() {
  return (
    <DashboardWrapper>
      <DashboardInfoWrapper>
        <DashboardInfo>
          <UsersThree size={70} weight="thin" />
          <DashboardInfoContent>
            <DashboardInfoTitle>TOTAL USERS</DashboardInfoTitle>
            <DashboardInfoAmount>1</DashboardInfoAmount>
          </DashboardInfoContent>
        </DashboardInfo>
        <DashboardInfo>
          <User size={70} weight="thin" />
          <DashboardInfoContent>
            <DashboardInfoTitle>USERS ONLINE</DashboardInfoTitle>
            <DashboardInfoAmount>1</DashboardInfoAmount>
          </DashboardInfoContent>
        </DashboardInfo>
        <DashboardInfo>
          <CrownSimple size={70} weight="thin" />
          <DashboardInfoContent>
            <DashboardInfoTitle>MOST POPULAR FILM</DashboardInfoTitle>
            <DashboardInfoAmount>0</DashboardInfoAmount>
          </DashboardInfoContent>
        </DashboardInfo>
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
