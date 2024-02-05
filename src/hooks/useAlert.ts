import { useState, useEffect } from "react";
import { type alert_type } from "../common/interfaces";

const useAlert = () => {
  const [is_visible, set_is_visible] = useState(false);
  const [message, set_message] = useState("");
  const [type, set_type] = useState<alert_type>("info");

  useEffect(() => {
    const timer = setTimeout(() => {
      set_is_visible(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  });

  const show_alert = (message: string, type: alert_type, state: boolean) => {
    set_message(message);
    set_type(type);
    set_is_visible(state);
  };

  const close_alert = (e: Event) => {
    e.preventDefault();

    set_is_visible(false);
  };

  return [is_visible, message, type, show_alert, close_alert] as const;
};

export default useAlert;
