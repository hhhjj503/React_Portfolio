import classNames from "classnames";
import React from "react";
import styles from "./CSSModule.module.css";

const CSSModule = () => {
  console.log(styles);
  const cx = classNames.bind("styles");
  return (
    <>
      <div className={cx("wrapper", "inverted")}>
        안녕하세요 저는 <span className="something">CSS Module!</span>
      </div>
      <div className={[styles.wrapper, styles.inverted].join(" ")}>
        안녕하세요 저는 <span className="something">CSS Module!</span>
      </div>
    </>
  );
};

export default CSSModule;
