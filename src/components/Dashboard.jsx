import React from "react";
import Box from "./Box";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Right from "./Right";
import Nav from "./Nav";
import Card3 from "./Card3";

const Dashboard = () => {
  return (
    <div className="bg-[#EDF1F2] px-2  w-full pb-11">
      <div className="flex flex-wrap flex-row">
        <div className="lg:w-3/4 w-full px-3">
          <Box />
          <Card1 />
          <Card2 />
        </div>
        <div className="lg:w-1/4 w-full px-3">
          <div className="sm:flex lg:block flex-wrap flex-row">
            <div className="lg:w-full md:w-1/2 w-full px-0 md:px-2 lg:px-0">
              <Right />
            </div>
            <div className="lg:w-full md:w-1/2 w-full px-0 md:px-2 lg:px-0">
              <Card3 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
