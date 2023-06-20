import classes from "./TextLoader.module.css";

const TextLoader = () => {
  return (
    <div className={`${classes.loading} ${classes.loading03}`}>
      <span>L</span>
      <span>O</span>
      <span>A</span>
      <span>D</span>
      <span>I</span>
      <span>N</span>
      <span>G</span>
    </div>
  );
};

export default TextLoader;
