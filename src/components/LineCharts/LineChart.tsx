import { faker } from "@faker-js/faker"
import {
  CategoryScale,
  Chart,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js"
import { Line } from "react-chartjs-2"
import styled from "styled-components"
import { monthsList as labels } from "../Settings/constant"

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
)

export const StyledLine = styled(Line)`
  border-radius: 12px;
  background-color: #161d2f;
  padding: 10px;
`

export const options = {
  responsive: true,
}

export const data = {
  labels,
  datasets: [
    {
      label: "2024",
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      borderColor: "#fc4747",
    },
    {
      label: "2023",
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      borderColor: "#757525",
    },
  ],
}

export function LineChart() {
  return <StyledLine options={options} data={data} />
}
