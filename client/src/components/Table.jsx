import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TableRow from "./TableRow";

const DataTable = () => {

  const { data } = useSelector((state) => state.data);
  
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Topic
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Country
                  </th>
                  <th scope="col" className="px-6 py-4">
                    intensity
                  </th>
                  <th scope="col" className="px-6 py-4">
                    likelihood
                  </th>
                  <th scope="col" className="px-6 py-4">
                    relevance
                  </th>
                </tr>
              </thead>
                <tbody>
                {data?.map((d) => (
                  <TableRow key={d._id} d={d} />
                ))}
              </tbody>
              
              
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DataTable;
