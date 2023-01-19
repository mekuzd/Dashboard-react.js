import { useState } from "react";

const FetchUsers = () => {
  let newDate = new Date("2072-12-27T03:44:22.522Z");
  const [time, settime] = useState(newDate);

  let Month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <table>
      <p>
        {Month[time.getMonth()]} {time.getDate()}, {time.getFullYear()}{" "}
        {time.getHours()}:{time.getSeconds()}{" "}
        {time.getHours() > 12 ? "AM" : "PM"}
      </p>
    </table>
  );
};
export default FetchUsers;
