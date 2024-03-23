import React from "react";
import { Link } from "react-router-dom";

const TableRow = ({ d }) => {
  return (
    <>
      {/* added : "2017-01-19T22:21:25.000Z" country : "United States of America"
      createdAt : "2024-03-21T06:29:50.935Z" end_year : null impact : "" insight
      : "Annual Energy Outlook" intensity : 6 likelihood : 3 pestle :
      "Industries" published : "2017-01-08T18:30:00.000Z" region : "Northern
      America" relevance : 2 sector : "Energy" source : "EIA" start_year : null
      title : "U.S. natural gas consumption is expected to increase during much
      of the projection period." topic : "gas" updatedAt :
      "2024-03-21T06:29:50.935Z" url :
      "http://www.eia.gov/outlooks/aeo/pdf/0383(2017).pdf" __v : 0 _id :
      "65fbd3de1b700e7addcd70a5"                */}
      <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
       <Link to={d?.url}>
        <td className="whitespace-wrap px-6 py-4 font-normal">{d?.title} </td></Link>
        <td className="whitespace-nowrap px-6 py-4">{d?.topic }</td>
        <td className="whitespace-nowrap px-6 py-4">{d?.country }</td>
        <td className="whitespace-nowrap px-6 py-4">{d?.intensity }</td>
        <td className="whitespace-nowrap px-6 py-4">{d?.likelihood }</td>
        <td className="whitespace-nowrap px-6 py-4">{d?.relevance}</td>
      </tr>
    </>
  );
};

export default TableRow;
