import Link from "next/link";
import { useEffect, useState } from "react";

export default function EventForCharacterDetail(props) {
  const [comics, setComics] = useState("");
  const [affiche, setAffiche] = useState([]);

  async function getComics() {
    const idEvent = props.data.split("/")[6];
    const result = await fetch(`http://localhost:3000/api/call/detail/${idEvent}?rubrique=events`).then((response) => response.json()).then((result) => result.data)
    console.log(result[0])
    setComics(result[0].thumbnail.path);
  }

    getComics();

  return <div className="col-4">
    <Link href="#"><a><img src={`${comics}.jpg`}style={{ maxHeight: "250px"}} /></a></Link>
      </div>;
}
