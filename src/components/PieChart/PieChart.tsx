import { ArcElement, Chart, Legend, Tooltip } from "chart.js"
import { Pie } from "react-chartjs-2"
import { selectGenres } from "../../features/genres/genres-selectors"
import { useAppSelector } from "../../redux-hooks"
import { generateRandomColor } from "../../utils/generateRandomColor"

Chart.register(ArcElement, Tooltip, Legend)

export function PieChart() {
  const genres = useAppSelector(selectGenres)
  const chartData = genres?.map((genre) => genre.count)
  const chartLabels = genres?.map((genre) => genre.name)
  const data = {
    labels: chartLabels,
    datasets: [
      {
        label: "№ of Votes",
        data: chartData,
        backgroundColor: genres?.map(() => generateRandomColor()),
        borderWidth: 1,
      },
    ],
  }
  return <Pie data={data} />
}
