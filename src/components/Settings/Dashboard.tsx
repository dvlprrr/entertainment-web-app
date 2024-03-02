import { LineChart } from "@mui/x-charts"
import { User, UsersThree } from "@phosphor-icons/react"
import {
  DashboardInfo,
  DashboardInfoAmount,
  DashboardInfoContent,
  DashboardInfoTitle,
  DashboardWrapper,
} from "./styled"

export function Dashboard() {
  return (
    <DashboardWrapper>
      <div style={{ display: "flex", gap: "20px" }}>
        <DashboardInfo>
          <UsersThree size={70} weight="thin" />
          <DashboardInfoContent>
            <DashboardInfoTitle>TOTAL USERS</DashboardInfoTitle>
            <DashboardInfoAmount>43267</DashboardInfoAmount>
          </DashboardInfoContent>
        </DashboardInfo>
        <DashboardInfo>
          <User size={70} weight="thin" />
          <DashboardInfoContent>
            <DashboardInfoTitle>USERS ONLINE</DashboardInfoTitle>
            <DashboardInfoAmount>1</DashboardInfoAmount>
          </DashboardInfoContent>
        </DashboardInfo>
      </div>
      <div>
        <LineChart
          sx={{
            "& .MuiLineElement-root": {
              stroke: "#fc4747",
            },
            "& .MuiMarkElement-root": {
              stroke: "#fc4747",
              fill: "#fc4747",
            },
            "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
              stroke: "#fc4747",
              strokeWidth: 0.4,
            },

            "& .MuiChartsAxis-left .MuiChartsAxis-line": {
              stroke: "#fc4747",
              strokeWidth: 0.4,
            },
            "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
              strokeWidth: "0.5",
              fill: "#fc4747",
            },
            "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
              strokeWidth: "0.4",
              fill: "#fc4747",
            },
            "& .MuiChartsAxis-tick": {
              stroke: "#fc4747",
            },
            "& .css-1u2hdaw-MuiChartsAxisHighlight-root": {
              stroke: "#fc4747",
            },
            "& .MuiHighlightElement-root": {
              fill: "#fc4747",
            },
            "& .MuiChartsTooltip-table": {
              backgroundColor: "#fc4747 !important",
            },
          }}
          xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 14, 18, 20] }]}
          series={[
            {
              data: [10, 5.5, 2, 8.5, 1.5, 5, 20, 30, 41, 51],
            },
          ]}
          width={500}
          height={300}
        />
      </div>
    </DashboardWrapper>
  )
}
