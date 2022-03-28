import React from "react";
import Link from "next/link";

export default function Layout({ children, data }): JSX.Element {
  return (
    <div>
      <div className="fakenav">
        <img src="/585f9333cb11b227491c3581.png"></img>
      </div>
      <div className="navbar">
        <div className="dropdown">
          <button className="dropbtn">Characters</button>
          <div className="dropdown-content">
            <Link href="/characters">
              <a>All Characters</a>
            </Link>
            <div className="card">
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Comics</button>
          <div className="dropdown-content">
            <Link href="/comics">
              <a>All Comics</a>
            </Link>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Creators</button>
          <div className="dropdown-content">
            <Link href="/creators">
              <a>All Creators</a>
            </Link>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Events</button>
          <div className="dropdown-content">
            <Link href="/events">
              <a>All Events</a>
            </Link>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Series</button>
          <div className="dropdown-content">
            <Link href="/series">
              <a>All Series</a>
            </Link>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Stories</button>
          <div className="dropdown-content">
            <Link href="/stories">
              <a>All Stories</a>
            </Link>
          </div>
        </div>
      </div>

      {children}
    </div>
  );
}
