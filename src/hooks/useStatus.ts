import { useMemo, useState } from "react";

export type StatusTypes =
  | "idle"
  | "waiting"
  | "success"
  | "failed"
  | "validationError";

interface StatusHandlers {
  setWaiting: () => void;
  setValidationError: () => void;
  setIdle: () => void;
  setSuccess: () => void;
  setFailed: () => void;
}

interface Statuses {
  isFailed: boolean;
  isSuccess: boolean;
  isWaiting: boolean;
  isIdle: boolean;
  validationError: boolean;
}

interface useStatusResponse {
  statusHandlers: StatusHandlers;
  statuses: Statuses;
  message: string;
}

export const useStatus = (initialStatus?: StatusTypes): useStatusResponse => {
  const [status, setStatus] = useState<StatusTypes>(initialStatus || "idle");
  const [message, setMessage] = useState<string>("");

  const statusHandlers = useMemo<StatusHandlers>(
    () => ({
      setWaiting: () => setStatus("waiting"),
      setValidationError: () => setStatus("validationError"),
      setIdle: () => {
        setStatus("idle");
        setMessage("");
      },
      setSuccess: () => setStatus("success"),
      setFailed: () => setStatus("failed"),
    }),
    []
  );

  const statuses = useMemo<Statuses>(
    () => ({
      isFailed: status === "failed",
      isSuccess: status === "success",
      isWaiting: status === "waiting",
      isIdle: status === "idle",
      validationError: status === "validationError",
    }),
    [status]
  );

  return {
    statusHandlers,
    statuses,
    message,
  };
};
