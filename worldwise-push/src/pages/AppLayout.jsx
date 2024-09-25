import Sidebar from "../components/SideBar";
import Map from "../components/Map";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.Map}>
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
