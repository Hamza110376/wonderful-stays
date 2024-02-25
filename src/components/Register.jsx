import styles from "./Register.module.css"
function Register() {
  return (
    <div className={styles.main}>
      <h2>Get exclusive offers on unique travel and accommodation</h2>
      <p>Sign up for our newsletter.</p>
      <button className={styles.btn}>Register now</button>
    </div>
  );
}

export default Register