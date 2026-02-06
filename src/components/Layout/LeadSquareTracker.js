// components/LeadSquaredTracker.js
"use client"
import { useEffect } from "react";

const LeadSquaredTracker = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "http://web-in21.mxradon.com/t/Tracker.js";
    script.async = true;
    script.onload = () => {
      if (window.pidTracker) {
        window.pidTracker("77184");
      }
    };
    document.body.appendChild(script);

    // Cleanup script when component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default LeadSquaredTracker;
