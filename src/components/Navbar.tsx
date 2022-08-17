import React from "react";

const styles = {
  container: "text-center p-5",
  title: "text-4xl font-bold",
  about: "mt-3",
};

const Navbar = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Omega</h1>
      <p className={styles.about}>A simple, yet elegant calculation application</p>
    </div>
  );
};

export default Navbar;
