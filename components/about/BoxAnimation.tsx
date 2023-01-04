import styles from "../../styles/About.module.scss";

export const BoxAnimation = () => {
  return (
    <div className={styles.BoxAnimation_container}>
      {[1, 2, 3, 4].map((x) => {
        return (
          <div key={x} className={styles.row}>
            {[1, 2, 3, 4].map((y) => {
              return (
                <div key={y} className={styles.loader}>
                  <div className={styles.lines}>
                    {[1, 2, 3, 4, 5].map((z) => {
                      return <span key={z}></span>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export const SmallBoxAnimation = () => {
  return (
    <div
      id={styles.smallBoxAnimation}
      className={styles.SmallBoxAnimation_container + " hidden"}
    >
      {[1, 2].map((x) => {
        return (
          <div key={x} className={styles.row}>
            {[1, 2].map((y) => {
              return (
                <div key={y} className={styles.loader}>
                  <div className={styles.lines}>
                    {[1, 2, 3, 4].map((z) => {
                      return <span key={z}></span>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
