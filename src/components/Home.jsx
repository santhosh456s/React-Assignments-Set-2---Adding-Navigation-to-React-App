import React from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();
  return (
    <div>
      <h1>Your in home</h1>
      <p>{location.pathname}</p>
    </div>
  );
}
