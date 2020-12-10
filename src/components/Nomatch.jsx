import React from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();
  return (
    <div>
      <h1>No Match</h1>
      <p>{location.pathname}</p>
    </div>
  );
}
