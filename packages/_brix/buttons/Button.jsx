"use client";

import React from "react";
import styles from "./Button.module.css";

export default function Button({ label, onClick, variant = "primary" }) {
  return (
    <button onClick={onClick} className={styles[variant]}>
      {label}
    </button>
  );
}
