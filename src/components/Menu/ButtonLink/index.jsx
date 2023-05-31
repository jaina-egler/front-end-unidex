import React, { useEffect } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import ArrowToTop from "../../../../public/assets/chevron-top.svg";
import ArrowToBottom from "../../../../public/assets/chevron-bottom.svg";

function ButtonLink({ svgIcon, label, path, hasChildren, links }) {
  const [openOptions, setOpenOptions] = React.useState(false);

  if (hasChildren) {
    return (
      <>
        <div
          onClick={() => setOpenOptions(!openOptions)}
          style={{ cursor: "pointer" }}
          className={styles.containerButton}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image
              src={svgIcon}
              alt={label}
              style={{ marginRight: "1rem", width: 20, height: 20 }}
            />
            <p style={{ color: "#F0EEFF" }}>{label}</p>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            {openOptions ? (
              <Image src={ArrowToBottom} alt="arrow to bottom" />
            ) : (
              <Image src={ArrowToTop} alt="arrow to top" />
            )}
          </div>
        </div>
        <div style={{ position: "fixed" }}>
          {openOptions && (
            <ul className={styles.list}>
              {links.map((item, index) => {
                return (
                  <li className={styles.containerLink}>
                    <Link href={item.path} className={styles.linkList}>
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </>
    );
  }
  return (
    <Link
      href={`/${path}`}
      className={styles.containerButtonWC}
      style={{ textDecoration: "none" }}
    >
      <Image
        src={svgIcon}
        alt={label}
        style={{ marginRight: "1.2rem", width: 20, height: 20 }}
      />
      <p className={styles.label}>{label}</p>
    </Link>
  );
}

export default ButtonLink;
