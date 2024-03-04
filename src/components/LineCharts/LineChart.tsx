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
import { monthsList as labels } from "../Settings/constant"
import { StyledLine } from "./styled"

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
)

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
