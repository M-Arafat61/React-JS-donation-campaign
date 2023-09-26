import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#00C49F", "#FF444A"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill='white'
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline='central'
    >
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

export default function App() {
  const [donationStats, setDonationStats] = useState([]);
  const [noDonation, setNoDonation] = useState("");
  useEffect(() => {
    const addedDonationItems = JSON.parse(localStorage.getItem("donations"));
    if (addedDonationItems) {
      setDonationStats(addedDonationItems);
    } else {
      setNoDonation("No donation were made.Please donate to see statistics.");
    }
  }, []);
  const totalDonationCount = donationStats.length;
  const donationPercentage = (totalDonationCount / 12) * 100;
  const donationLeft = 100 - donationPercentage;

  const pieData = [
    { name: "Donated", value: donationPercentage },
    { name: "Remaining", value: donationLeft },
  ];

  return (
    <>
      {<p className='text-2xl text-center font-medium pt-10'>{noDonation}</p>}
      <div className='flex justify-center items-center'>
        <PieChart width={400} height={400}>
          <Pie
            className='text-xl font-semibold'
            data={pieData}
            // cx={200}
            // cy={200}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill='#8884d8'
            dataKey='value'
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className='flex items-center justify-center gap-10'>
        <div className='flex items-center justify-center gap-5'>
          <p>Your Donation: {donationPercentage.toFixed(2)}%</p>
          <div
            style={{
              backgroundColor: COLORS[0],
              width: "100px",
              height: "10px",
            }}
          ></div>
        </div>
        <div className='flex justify-center items-center gap-5'>
          <p>Total Donation: {donationLeft.toFixed(2)}%</p>
          <div
            style={{
              backgroundColor: COLORS[1],
              width: "100px",
              height: "10px",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
