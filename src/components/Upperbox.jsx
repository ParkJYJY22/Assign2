import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faUser,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-regular-svg-icons";
import { faUnlockKeyhole } from "@fortawesome/free-solid-svg-icons";
import "./Upperbox.css";

const Upperbox = ({ onCompare }) => {
  const [inputFocused, setInputFocused] = useState(Array(3).fill(false));

  const [inputValueId, setInputValueId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRe, setPasswordRe] = useState("");

  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // input focus 이벤트 핸들러
  const handleInputFocus = (index) => {
    const updatedFocusState = [...inputFocused];
    updatedFocusState[index] = true;
    setInputFocused(updatedFocusState);
  };

  // input blur 이벤트 핸들러
  const handleInputBlur = (index) => {
    const updatedFocusState = [...inputFocused];
    updatedFocusState[index] = false;
    setInputFocused(updatedFocusState);
  };

  // 아이디 변경 핸들러
  const handleInputChange = (e) => {
    setInputValueId(e.target.value);
  };

  // 비밀번호 변경 핸들러
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    onCompare({ password: e.target.value, passwordRe });
  };

  // 비밀번호 확인 변경 핸들러
  const handlePasswordReChange = (e) => {
    setPasswordRe(e.target.value);
    onCompare({ password, passwordRe: e.target.value });
  };

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="Upper">
      <div className="Checkbox">
        <span>실명 인증된 아이디로 가입</span>
        <FontAwesomeIcon
          className="CCheck"
          icon={faCircleCheck}
          onClick={handleClick}
          style={{ color: isChecked ? "#2bb400" : "gray", cursor: "pointer" }}
        />
      </div>

      <div className="Box1">
        <div key={0} className={inputFocused[0] ? "IdFocused" : "Id"}>
          <FontAwesomeIcon
            className={inputValueId ? "userFilled" : "user"}
            icon={faUser}
          />
          <input
            placeholder="아이디"
            onFocus={() => handleInputFocus(0)}
            onBlur={() => handleInputBlur(0)}
            onChange={handleInputChange}
          />
          <h4 className={inputValueId ? "emailFilled" : "email"}>@naver.com</h4>
        </div>

        <div key={1} className={inputFocused[1] ? "PwFocused" : "Pw"}>
          <FontAwesomeIcon
            className={password ? "lockFilled" : "lock"}
            icon={faUnlockKeyhole}
          />
          <input
            placeholder="비밀번호"
            type={showPassword ? "text" : "password"}
            value={password}
            onFocus={() => handleInputFocus(1)}
            onBlur={() => handleInputBlur(1)}
            onChange={handlePasswordChange}
          />
          <FontAwesomeIcon
            className="eye"
            style={{ color: "gray" }}
            icon={showPassword ? faEye : faEyeSlash}
            onClick={togglePasswordVisibility}
          />
        </div>

        <div key={2} className={inputFocused[2] ? "PwReFocused" : "PwRe"}>
          <FontAwesomeIcon
            className={passwordRe ? "lockFilled" : "lock"}
            icon={faUnlockKeyhole}
          />
          <input
            placeholder="비밀번호확인"
            type={showPassword ? "text" : "password"}
            value={passwordRe}
            onFocus={() => handleInputFocus(2)}
            onBlur={() => handleInputBlur(2)}
            onChange={handlePasswordReChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Upperbox;
