import { ArcElement, Chart, Legend, Tooltip } from "chart.js"
import { Pie } from "react-chartjs-2"
import { selectGenres } from "../../features/genres/genres-selectors"
import { useAppSelector } from "../../redux-hooks"
import { generateRandomColor } from "../../utils/generateRandomColor"

Chart.register(ArcElement, Tooltip, Legend)

export function PieChart() {
  const genres = useAppSelector(selectGenres)
  const data = {
    labels: genres?.map((genre) => genre.name),
    datasets: [
      {
        label: "№ of Votes",
        data: [12, 19, 3, 5, 2, 3, 12, 20, 8],
        backgroundColor: genres?.map(() => generateRandomColor()),
        borderWidth: 1,
      },
    ],
  }
  return <Pie data={data} />
}
