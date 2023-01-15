import { useEffect, useRef } from "react";
import { useSignupForm } from "@tldr/src/hooks/useSignupForm";
import { ActivityMessage } from "./ActivitiyMessage";

import { ClipLoader } from "react-spinners";
import classnames from "classnames";

export const SignupForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef?.current?.focus();
  }, []);
  const {
    handleSubmitEmail,
    emailValue,
    handleInputChange,
    handleOnBlur,
    handleOnClick,
    loading,
    error,
    shouldDisable,
    validationError,
    success,
  } = useSignupForm();

  return (
    <form onSubmit={handleSubmitEmail} className="relative pb-10 pt-2">
      <div className="flex items-center mt-1 gap-2">
        <div className={classnames("absolute left-2", { launch: success })}>
          🚀
        </div>
        <input
          ref={inputRef}
          type="text"
          name="email"
          value={emailValue}
          onChange={handleInputChange}
          onBlur={handleOnBlur}
          onClick={handleOnClick}
          className="px-3 py-2 pl-8  text-indigo-900  placeholder-slate-400 font-semibold focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
          placeholder="Email Address"
        />
        <button
          type="submit"
          disabled={shouldDisable}
          className="rounded disabled:from-gray-500 disabled:to-gray-500   bg-gradient-to-r w-28 from-purple-600 to-indigo-700 disabled:cursor-auto px-5 m-0 py-2 hover:opacity-90 disabled:hover:opacity-100"
        >
          {loading ? <ClipLoader color="white" size={16} /> : "Submit"}
        </button>
      </div>
      <ActivityMessage type="error" isVisible={validationError}>
        Please enter a valid email.
      </ActivityMessage>
      <ActivityMessage type="success" isVisible={success}>
        Success!
      </ActivityMessage>
      <ActivityMessage type="error" isVisible={error}>
        There was an error with the request.
      </ActivityMessage>
    </form>
  );
};
