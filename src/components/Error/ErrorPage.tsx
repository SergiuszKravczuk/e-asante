import classes from "./Error.module.css";

const ErrorPage = () => {
  return (
    <section className={classes.container}>
      <div className={classes.message}>
        <h2>Oops...</h2>
        <p>Coś poszło nie tak(</p>
        <p>Proszę skontaktować się z administratorem strony!!!</p>
      </div>
    </section>
  );
};

export default ErrorPage;
