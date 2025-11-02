import React, { useEffect } from "react";

export default function IntlTelInput(props) {
  const {
    value,
    placeholder,
    inputClassName,
    containerClassName,
    onPhoneNumberChange,
    onPhoneNumberBlur,
    onSelectFlag,
    defaultCountry,
    maxLength,
  } = props;

  useEffect(() => {
    if (onSelectFlag && defaultCountry && defaultCountry[0]) {
      onSelectFlag("", { dialCode: "91" }, "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    if (onPhoneNumberChange) {
      onPhoneNumberChange(null, e.target.value, { dialCode: "91" });
    }
  };

  const handleBlur = (e) => {
    if (onPhoneNumberBlur) {
      onPhoneNumberBlur(e);
    }
  };

  return (
    <div className={containerClassName}>
      <input
        type="tel"
        className={inputClassName}
        placeholder={placeholder}
        value={value || ""}
        maxLength={maxLength}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </div>
  );
}


