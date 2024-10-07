// src/components/KanbanBoard.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const KanbanBoard = () => {
  const [tickets, setTickets] = useState([]);

  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:5000/api/tickets")
  //       .then((response) => setTickets(response.data));
  //   }, []);

  return (
    <div className="flex space-x-4">
      {["todo", "in-progress", "done"].map((status) => (
        <Column
          key={status}
          title={status}
          tickets={tickets.filter((ticket) => ticket.status === status)}
        />
      ))}
    </div>
  );
};

const Column = ({ title, tickets }) => (
  <div className="w-1/3 bg-gray-200 p-4 rounded">
    <h2 className="text-lg font-bold">{title}</h2>
    {tickets.map((ticket) => (
      <div key={ticket._id} className="bg-white p-2 mt-2 rounded shadow">
        <h3>{ticket.title}</h3>
        <p>{ticket.description}</p>
      </div>
    ))}
  </div>
);

export default KanbanBoard;
