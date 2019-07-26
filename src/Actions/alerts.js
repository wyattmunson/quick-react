import Alert from "react-s-alert";
import "react-s-alert/dist/s-alert-default.css";

export const successAlert = displayText => {
  Alert.success(displayText, {
    position: "top",
    offset: 0
  });
};

export const failureAlert = displayText => {
  Alert.error(displayText, {
    position: "top",
    offset: 0
  });
};
