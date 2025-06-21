"use client";
import { useEffect } from "react";
import { FaCheckCircle, FaExclamationTriangle, FaTimes } from "react-icons/fa";

export default function PopUpAlert({
  type,
  message,
  onClose,
  duration = 3000,
}: {
  type: "success" | "error" | "warning";
  message: string;
  onClose: () => void;
  duration?: number;
}) {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const colors = {
    success: "bg-green-100 text-green-800 border-green-300",
    error: "bg-red-100 text-red-800 border-red-300",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
  };

  return (
    <div
      className={`p-4 border rounded-lg shadow-lg ${colors[type]} animate-fadeIn`}
    >
      <div className="flex items-center">
        <div className="mr-2">
          {type === "success" && <FaCheckCircle className="text-green-500" />}
          {type === "error" && (
            <FaExclamationTriangle className="text-red-500" />
          )}
          {type === "warning" && (
            <FaExclamationTriangle className="text-yellow-500" />
          )}
        </div>
        <div className="flex-grow">{message}</div>
        <button
          onClick={onClose}
          className="ml-2 text-gray-500 hover:text-gray-700"
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
}
