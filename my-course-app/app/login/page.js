"use client";

import styles from './login.module.css';

export default function Login() {
  return (
    <>
    <div data-page="login">
      <div className={styles.stars}></div>
      <div className={styles.stars2}></div>
      <div className={styles.stars3}></div>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={`${styles.row} ${styles.fullHeight} ${styles.justifyCenter}`}>
            <div className={`${styles.col12} ${styles.textCenter} ${styles.alignSelfCenter} ${styles.py5}`}>
              <div className={`${styles.section} ${styles.pb5} ${styles.pt5} ${styles.ptSm2} ${styles.textCenter}`}>
                <h6 className={`${styles.mb0} ${styles.pb3}`}><span>Log In </span><span>Sign Up</span></h6>
                <input className={styles.checkbox} type="checkbox" id="reg-log" name="reg-log" />
                <label htmlFor="reg-log"></label>
                <div className={`${styles.card3dWrap} ${styles.mxAuto}`}>
                  <div className={styles.card3dWrapper}>
                    <div className={styles.cardFront}>
                      <div className={styles.centerWrap}>
                        <div className={`${styles.section} ${styles.textCenter}`}>
                          <h4 className={`${styles.mb4} ${styles.pb3}`}>Log In</h4>
                          <div className={styles.formGroup}>
                            <input type="email" className={styles.formStyle} placeholder="Email" />
                            <i className={`${styles.inputIcon}`}></i>
                          </div>
                          <div className={`${styles.formGroup} ${styles.mt2}`}>
                            <input type="password" className={styles.formStyle} placeholder="Password" />
                            <i className={`${styles.inputIcon}`}></i>
                          </div>
                          <a href="/" className={`${styles.btn} ${styles.mt4}`}>Login</a>
                          <p className={`${styles.mb0} ${styles.mt4} ${styles.textCenter}`}><a href="#" className={styles.link}>Forgot your password?</a></p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.cardBack}>
                      <div className={styles.centerWrap}>
                        <div className={`${styles.section} ${styles.textCenter}`}>
                          <h4 className={`${styles.mb3} ${styles.pb3}`}>Sign Up</h4>
                          <div className={styles.formGroup}>
                            <input type="text" className={styles.formStyle} placeholder="Full Name" />
                            <i className={`${styles.inputIcon}`}></i>
                          </div>
                          <div className={`${styles.formGroup} ${styles.mt2}`}>
                            <input type="tel" className={styles.formStyle} placeholder="Phone Number" />
                            <i className={`${styles.inputIcon}`}></i>
                          </div>
                          <div className={`${styles.formGroup} ${styles.mt2}`}>
                            <input type="email" className={styles.formStyle} placeholder="Email" />
                            <i className={`${styles.inputIcon}`}></i>
                          </div>
                          <div className={`${styles.formGroup} ${styles.mt2}`}>
                            <input type="password" className={styles.formStyle} placeholder="Password" />
                            <i className={`${styles.inputIcon}`}></i>
                          </div>
                          <a href="/" className={`${styles.btn} ${styles.mt4}`}>Register</a>
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
