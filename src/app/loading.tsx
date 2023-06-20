import classes from "./loading.module.css";

export default function Loading() {
  console.log("loading");
  return (
    <main>
      <div className={`${classes.loading} ${classes.loading03}`}>
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </div>
    </main>
  );
}
