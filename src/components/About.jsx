import React from "react";
import { useLocation } from "react-router-dom";

export default function About() {
  const location = useLocation();
  return (
    <div>
      <h1>Your in About</h1>
      <p>{location.pathname}</p>
    </div>
  );
}
