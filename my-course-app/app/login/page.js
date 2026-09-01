"use client";

import { useState, useEffect, useCallback } from 'react';
import styles from './login.module.css';
import { IconUser, IconPhone, IconAt, IconLock, IconEye, IconEyeClosed } from '@tabler/icons-react';

export default function Login() {
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleLoginPassword = useCallback((e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setShowLoginPassword(prev => !prev);
  }, []);

  const toggleSignupPassword = useCallback((e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setShowSignupPassword(prev => !prev);
  }, []);

  // Prevent hydration mismatch by not rendering until client-side
  if (!isClient) {
    return (
      <div className={styles.loginContainer}>
        <div className={styles.stars}></div>
        <div className={styles.stars2}></div>
        <div className={styles.stars3}></div>
        <div className={styles.section}>
          <div className={styles.container}>
            <div className={styles.mainRow}>
              <div className={styles.mainCol}>
                <div className={styles.toggleSection}>
                  <h6 className={styles.toggleTitle}>
                    <span className={styles.textTitle}>Loading...</span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div data-page="login">
        <div className={styles.stars}></div>
        <div className={styles.stars2}></div>
        <div className={styles.stars3}></div>
        <div className={styles.section}>
          <div className={styles.container}>
            <div className={styles.mainRow}>
              <div className={styles.mainCol}>
                <div className={styles.toggleSection}>
                  <h6 className={styles.toggleTitle}>
                    <span className={styles.textTitle}>Log In </span>
                    <span className={styles.textTitle}>Sign Up</span>
                  </h6>
                  <input className={styles.checkbox} type="checkbox" id="reg-log" name="reg-log" />
                  <label htmlFor="reg-log"></label>
                  <div className={styles.cardWrapper}>
                    <div className={styles.card3dWrapper}>
                      <div className={styles.cardFront}>
                        <div className={styles.centerWrap}>
                          <div className={styles.formSection}>
                            <h4 className={styles.cardTitle}>Log In</h4>
                            <div className={styles.formGroup}>
                              <IconAt className={styles.inputIcon} size={18} />
                              <input type="email" className={styles.formStyle} placeholder="Email" />
                            </div>
                            <div className={styles.formGroupSpaced}>
                              <IconLock className={styles.inputIcon} size={18} />
                              <input 
                                type={showLoginPassword ? "text" : "password"} 
                                className={styles.formStyle} 
                                placeholder="Password" 
                              />
                              {isClient && (showLoginPassword ? (
                                <IconEye 
                                  className={styles.passwordToggleIcon} 
                                  size={18} 
                                  onClick={toggleLoginPassword}
                                  onMouseDown={(e) => e.preventDefault()}
                                  role="button"
                                  tabIndex={0}
                                  aria-label="Show password"
                                />
                              ) : (
                                <IconEyeClosed 
                                  className={styles.passwordToggleIcon} 
                                  size={18} 
                                  onClick={toggleLoginPassword}
                                  onMouseDown={(e) => e.preventDefault()}
                                  role="button"
                                  tabIndex={0}
                                  aria-label="Hide password"
                                />
                              ))}
                            </div>
                            <a href="/" className={styles.loginBtn}>Login</a>
                            <p className={styles.forgotPassword}><a href="#" className={styles.link}>Forgot your password?</a></p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.cardBack}>
                        <div className={styles.centerWrap}>
                          <div className={styles.formSection}>
                            <h4 className={styles.signUpTitle}>Sign Up</h4>
                            <div className={styles.formGroup}>
                              <IconUser className={styles.inputIcon} size={18} />
                              <input type="text" className={styles.formStyle} placeholder="Full Name" />
                            </div>
                            <div className={styles.formGroupSpaced}>
                              <IconPhone className={styles.inputIcon} size={18} />
                              <input type="tel" className={styles.formStyle} placeholder="Phone Number" />
                            </div>
                            <div className={styles.formGroupSpaced}>
                              <IconAt className={styles.inputIcon} size={18} />
                              <input type="email" className={styles.formStyle} placeholder="Email" />
                            </div>
                            <div className={styles.formGroupSpaced}>
                              <IconLock className={styles.inputIcon} size={18} />
                              <input 
                                type={showSignupPassword ? "text" : "password"} 
                                className={styles.formStyle} 
                                placeholder="Password" 
                              />
                              {isClient && (showSignupPassword ? (
                                <IconEye 
                                  className={styles.passwordToggleIcon} 
                                  size={18} 
                                  onClick={toggleSignupPassword}
                                  onMouseDown={(e) => e.preventDefault()}
                                  role="button"
                                  tabIndex={0}
                                  aria-label="Show password"
                                />
                              ) : (
                                <IconEyeClosed 
                                  className={styles.passwordToggleIcon} 
                                  size={18} 
                                  onClick={toggleSignupPassword}
                                  onMouseDown={(e) => e.preventDefault()}
                                  role="button"
                                  tabIndex={0}
                                  aria-label="Hide password"
                                />
                              ))}
                            </div>
                            <a href="/" className={styles.registerBtn}>Register</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}