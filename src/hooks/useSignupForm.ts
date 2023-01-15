import { useCallback, useState } from "react";
import { HttpEmailResponse } from "../pages/api/email";
import { httpPostEmail } from "../requests";
import { validate } from "../utils";
import { useStatus } from "./useStatus";

interface useSignupFormResponse {
  handleOnClick: (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => void;
  handleOnBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitEmail: (event: React.ChangeEvent<HTMLFormElement>) => void;
  loading: boolean;
  error: boolean;
  validationError: boolean;
  success: boolean;
  emailValue: string;
  shouldDisable: boolean;
}
export const useSignupForm = (): useSignupFormResponse => {
  const [emailValue, setEmailValue] = useState("");
  const [httpResponse, setHttpResponse] = useState<null | HttpEmailResponse>(
    null
  );
  const { statusHandlers, statuses } = useStatus();

  const handleReset = useCallback(() => {
    setEmailValue("");
    setHttpResponse(null);
    statusHandlers.setIdle();
  }, [statusHandlers]);

  const handleSubmitEmail = useCallback(
    async (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!validate(emailValue)) {
        return statusHandlers.setValidationError();
      }
      statusHandlers.setWaiting();
      const response = await httpPostEmail(emailValue);
      if (!response.ok) {
        return statusHandlers.setFailed();
      }
      setHttpResponse(response);
      statusHandlers.setSuccess();
      setEmailValue("");
    },
    [emailValue, statusHandlers]
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (statuses.validationError || httpResponse) handleReset();
      setEmailValue(e.target.value);
    },
    [handleReset, httpResponse, statuses?.validationError]
  );

  const handleOnBlur = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (statuses.validationError || httpResponse) handleReset();
    },
    [handleReset, statuses?.validationError, httpResponse]
  );

  const handleOnClick = useCallback(
    (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
      if (statuses.validationError) handleReset();
    },
    [handleReset, statuses?.validationError]
  );

  return {
    handleOnClick,
    handleOnBlur,
    handleInputChange,
    handleSubmitEmail,
    loading: statuses.isWaiting,
    error: statuses.isFailed,
    validationError: statuses.validationError,
    success: statuses.isSuccess,
    emailValue,
    shouldDisable:
      statuses.isFailed ||
      statuses.validationError ||
      statuses.isWaiting ||
      !!httpResponse,
  };
};
