import { useEffect, useState } from "react";
import md5 from "md5";
import { GetServerSideProps } from 'next'
import Link from "next/link";
import CardCharactersPage from "../../components/CardCharactersPage";

export const getServerSideProps: GetServerSideProps = async (context) => {
  let page = 0;
  if (context.query.page <= "1") {
     page = 1;
  } else {
    page = parseInt(context.query.page.toString())
  }

  const time = Number(new Date());
  const hash = md5(time + `${process.env.REACT_APP_MARVEL_PRIVATE_KEY}` + `${process.env.REACT_APP_MARVEL_PUBLIC_KEY}`);

const response = await fetch(
      `https://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${process.env.REACT_APP_MARVEL_PUBLIC_KEY}&hash=${hash}&limit=100&offset=${(page - 1) * 100}`
    )
      .then((data) => data.json())
      .then((response) => response.data.results);
  return {
    props: {
      data: response,
      pageSelected : page
    },
  }
}


export default function Characters({data,pageSelected}) {

  return <>
    <Link href={`/characters?page=${pageSelected - 1}`}><a> Back </a></Link>
    <Link href={`/characters?page=${pageSelected + 1}`}><a> Next </a></Link>
    <div className="container">
      {data.map((character) => {
        return <CardCharactersPage imgCard={`${character.thumbnail.path}.jpg`} nameCard={character.name} />
      })}
    </div>
  </>;
}

