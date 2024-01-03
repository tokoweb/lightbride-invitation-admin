import { faker } from "@faker-js/faker";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const labels = [
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jum'at",
  "Sabtu",
  "Minggu",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Statistik pengunjung",
      data: labels.map(() =>
        faker.finance.amount({ min: 0, max: 100, dec: 0 }),
      ),
      borderColor: "#3f51b5",
      hitRadius: 30,
      tension: 0.3,
      fill: true,
      backgroundColor: "#3f51b580",
    },
  ],
};

const VisitorChart = () => {
  return (
    <Line
      className="max-h-48 w-52 w-full lg:max-h-[460px]"
      options={{
        responsive: true,
        plugins: { legend: { position: "bottom" } },
        maintainAspectRatio: false,
      }}
      data={data}
    />
  );
};

export default VisitorChart;
