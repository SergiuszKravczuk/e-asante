import classes from "./TopBar.module.css";

const TopBar = ({ topbar }: any) => {
  return (
    <section
      data-testid="topBar"
      className={`${classes.container} font-philosopher`}
    >
      <div className={classes.firstBanner}>{topbar.first_banner}</div>
      <div className={classes.secondBanner}>{topbar.second_banner}</div>
    </section>
  );
};

export default TopBar;
