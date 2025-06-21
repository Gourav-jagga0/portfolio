type AlertType = "success" | "error" | "warning";
type Alert = {
  type: AlertType;
  message: string;
  duration?: number;
};

let alertHandler: (alert: Alert) => void = () => {
  console.warn("Alert handler not initialized");
};

export const alert = {
  show: (alert: Alert) => alertHandler(alert),
  success: (message: string, duration?: number) =>
    alertHandler({ type: "success", message, duration }),
  error: (message: string, duration?: number) =>
    alertHandler({ type: "error", message, duration }),
  init: (handler: typeof alertHandler) => {
    alertHandler = handler;
  },
};
