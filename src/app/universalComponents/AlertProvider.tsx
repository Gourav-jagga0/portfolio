"use client";
import React, { useState, useEffect } from "react";
import { alert } from "@/app/universalComponents/Alert";
import Alert from "@/app/universalComponents/PopUpAlert";
type AlertType = "success" | "error" | "warning";
interface Alert {
  id: number;
  type: AlertType;
  message: string;
  duration?: number;
}
export const AlertProvider = ({ children }: { children: React.ReactNode }) => {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  useEffect(() => {
    alert.init((newAlert) => {
      setAlerts((prev) => [
        ...prev,
        {
          ...newAlert,
          id: Date.now(),
        },
      ]);
    });
  }, []);

  const removeAlert = (id: number) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id));
  };

  return (
    <>
      {children}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center space-y-2 w-full max-w-xs">
        {alerts.map((alert) => (
          <Alert
            key={alert.id}
            type={alert.type}
            message={alert.message}
            onClose={() => removeAlert(alert.id)}
            duration={alert.duration}
          />
        ))}
      </div>
    </>
  );
};
