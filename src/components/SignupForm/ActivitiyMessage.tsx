import classnames from "classnames";
import { ReactNode } from "react";
const activityMsgClasses =
  "mt-4 bottom-0 left-0 absolute transition-opacity text-sm";

interface ActivityMessageProps {
  type: "error" | "success";
  isVisible: boolean;
  children: ReactNode;
}

export const ActivityMessage = ({
  type,
  isVisible,
  children,
}: ActivityMessageProps) => {
  return (
    <p
      className={classnames(activityMsgClasses, {
        "opacity-1": isVisible,
        "opacity-0": !isVisible,
        "text-red-400": type === "error",
        "text-sky-400": type === "success",
      })}
    >
      {children}
    </p>
  );
};
