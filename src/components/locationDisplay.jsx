import React from "react";
import { useLocation } from "react-router-dom";

export default function About() {
  const location = useLocation();
  return (
    <div>
      <p data-testid="location-display">{location.pathname}</p>
    </div>
  );
}
