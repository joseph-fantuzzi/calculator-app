import React from "react";

const styles = {
  container: "absolute bottom-0 w-full text-center py-5",
  text: "text-sm",
};

const Footer = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.text}>Designed and Created By Joseph Fantuzzi 2022</h1>
    </div>
  );
};

export default Footer;
