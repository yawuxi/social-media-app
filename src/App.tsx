import { AppRouter } from "./AppRouter";
import styles from "./index.module.scss";

export const App = () => {
  return (
    <div className={styles.app} data-theme="light">
      <AppRouter />
    </div>
  );
};
