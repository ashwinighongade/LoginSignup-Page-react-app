import React, { useState } from "react";
import styles from "./SignUp.module.css";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import{Link} from "react-router-dom"

const SignUp = () => {
  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPasswordErrorMessage, setShowPasswordErrorMessage] =
    useState(false);
  const [mismatchPassward, setMismatchPassward] = useState(false);

  function isPasswordStrong(password) {
  const strongPasswordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  // Test the password against the pattern
  return strongPasswordPattern.test(password);
}




  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isPasswordStrong(password)) {
      setShowPasswordErrorMessage(true);
      setTimeout(() => {
        setShowPasswordErrorMessage(false);
      }, 2000);
      setfullName("");
      setEmail("");
      setPassword("");
      setconfirmPassword("");
      console.log(email, password, confirmPassword);
      return ;
    }
    // setShowPasswordErrorMessage(false);
    
    if (confirmPassword !== password) {
      setMismatchPassward(true);
      setTimeout(() => {
        setMismatchPassward(false);
      }, 2000);
      setconfirmPassword("");
      return;
     
    }
    // setMismatchPassward(false); 
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>🔏SingUp🔏</h1>
      <div>
        <div className={styles.inputContainer}>
          <AccountBoxIcon className={styles.icon} />
          <input
            type="text"
            placeholder="Enter name..."
            value={fullName}
            onChange={(e) => setfullName(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <EmailIcon className={styles.icon} />
          <input className={styles.inputBox}
            type="email"
            placeholder="Enter email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputAndErrorContainer}>
          <div className={styles.inputContainer}>
            <LockIcon className={styles.icon} />
            <input
              type={!showPassword ? "password" : "text"}
              placeholder="Enter password..."
              className={[styles.passwordInput,styles.inputBox].join("")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            
            {!showPassword ? (
              <VisibilityOffIcon
                className={styles.icon}
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <VisibilityIcon
                className={styles.icon}
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
          {showPasswordErrorMessage && (
            <p className={styles.errorMessage}>Password is not strong!</p>
          )}
        </div>
        <div className={styles.inputAndErrorContainer}>
          <div className={styles.inputContainer}>
            <LockIcon className={styles.icon} />
            <input
              type={!showPassword ? "password" : "text"}
              placeholder="Enter confirm password..."
              className={styles.passwordInput}
              value={confirmPassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
              required
            />
            {!showConfirmPassword ? (
              <VisibilityOffIcon
                className={styles.icon}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            ) : (
              <VisibilityIcon
                className={styles.icon}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            )}
          </div>
          {mismatchPassward && (
            <p className={styles.errorMessage}>Password mismatches!</p>
          )}
        </div>

        
          <p className={styles.massges}>
            Already a member? 
            <Link to="/Login">LogIn</Link>
            </p>
        

        <button className={styles.btmsing} type="submit">
          submit
        </button>
      </div>
    </form>
  );
};

export default SignUp;
