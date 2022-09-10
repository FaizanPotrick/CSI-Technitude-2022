import React from "react";
import leads from "../json/Leads.json";

const Leads = () => {
  return (
    <div className="flex flex-col items-center justify-center my-4">
      <h2 className="mb-3">CSI DMCE</h2>
      <div className="my-3 max-w-7xl flex flex-wrap gap-4 justify-center items-center">
        {leads.map((lead, index) => {
          return (
            <div
              className="flex flex-col items-center justify-end p-2 h-full"
              key={index}
            >
              <img
                className="h-28 w-28 sm:h-48 sm:w-48 object-cover"
                src={require(`../assets/Leads/${lead.image}.png`)}
                alt="lead name"
              />
              <div className="text-xl font-semibold">{lead.name}</div>
              <div>{lead.position}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Leads;
