import React, { useState, useMemo } from "react";
import { OUR_TEAM } from "../../data";
import EmployeeCard from "../Home/OurTeam/EmployeeCard";
import { useNavigate } from "react-router";
import { IoGrid } from "react-icons/io5";
import { CiGrid2H } from "react-icons/ci";

const AgentsPage = () => {
  const navigate = useNavigate();
  const [isGridView, setIsGridView] = useState(true);
  const [sortOrder, setSortOrder] = useState("default");

  const handleSort = (order) => {
    setSortOrder(order);
  };

  const sortedAgents = useMemo(() => {
    if (sortOrder === "asc") {
      return [...OUR_TEAM].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === "desc") {
      return [...OUR_TEAM].sort((a, b) => b.name.localeCompare(a.name));
    }
    return OUR_TEAM;
  }, [sortOrder]);

  return (
    <section className="mt-20 p-6">
      {/* Header Section */}
      <div className="container mx-auto py-6 px-4 text-center">
        <h1 className="text-4xl mb-3 font-bold text-gray-800">Our Listing Agents</h1>
        <p className="text-gray-500">
          <span
            className="hover:text-blue-600 cursor-pointer"
            onClick={() => navigate("/")}
          >
            Home
          </span>
          {" > "} Agents
        </p>
      </div>

      {/* Sorting and View Toggle */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Agents</h2>
        <div className="flex space-x-2 items-center">
          <select
            onChange={(e) => handleSort(e.target.value)}
            className="border rounded-lg p-2"
            value={sortOrder}
          >
            <option value="default">Default</option>
            <option value="asc">Sort by name (A-Z)</option>
            <option value="desc">Sort by name (Z-A)</option>
          </select>
          <button onClick={() => setIsGridView(!isGridView)}>
            <div className="mx-2 flex gap-5 text-2xl">
              <IoGrid
                className={`${isGridView ? "text-blue-600" : "text-gray-400"}`}
              />
              <CiGrid2H
                className={`${!isGridView ? "text-blue-600" : "text-gray-400"}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Agent Display Section */}
      <div
        className={`${
          isGridView
            ? "grid grid-cols-1 lg:grid-cols-2 gap-4"
            : "flex flex-col space-y-4"
        }`}
      >
        {sortedAgents.map((agent) => (
          <div
            key={agent.id}
            className="border rounded-lg p-4 shadow-md group flex items-center space-x-4 hover:bg-gray-100 hover:shadow-lg transition duration-300 ease-in-out cursor-pointer"
            onClick={() => navigate(`/agents/${agent.id}`)}
          >
            <EmployeeCard
              employeeName={agent.name}
              image={agent.url}
              socials={agent.socials}
            />
            <div className="flex flex-col w-full space-y-2">
              <h2 className="text-lg font-semibold">{agent.name}</h2>
              <div className="flex flex-col space-y-1 text-sm text-gray-500">
                <p className="flex items-center">
                  <span className="mr-2">Position:</span>
                  {agent.position}
                </p>
                <p className="flex items-center">
                  <span className="mr-2">Email:</span>
                  <a
                    href={`mailto:${agent.contact.gmail}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {agent.contact.gmail}
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="mr-2">Phone:</span>
                  {agent.contact.phoneNumber}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AgentsPage;
