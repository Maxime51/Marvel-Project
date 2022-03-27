import Head from "next/head";
import Link from "next/link";
import React from "react";
export default function Layout({ children }) {
  const hello = "hello";
  return (
    <div>
      <div className="fakenav">
        <img src="/585f9333cb11b227491c3581.png"></img>
      </div>
      {children}
    </div>
  );
}
