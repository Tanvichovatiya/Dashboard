import React from "react";

const DualColorProgressBar = ({ firstProgress, secondProgress }) => {
  const totalProgress = Math.min(firstProgress + secondProgress, 100); // Limit total to 100%

  return (
    <div className="w-full h-6 bg-gray-200 rounded-lg overflow-hidden">
      {/* First segment */}
      <div
        className="h-full bg-blue-500"
        style={{ width: `${firstProgress}%` }}
      ></div>

      {/* Second segment */}
      <div
        className="h-full bg-green-500"
        style={{ width: `${secondProgress}%`, marginLeft: `${firstProgress}%` }}
      ></div>
    </div>
  );
};

export default DualColorProgressBar;
