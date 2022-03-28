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

  const response = await fetch(`http://localhost:3000/api/call/characters?page=${page}`)
  const result = await response.json();

  return {
    props: {
      data: result,
      pageSelected : page
    },
  }
}


export default function Characters({data,pageSelected}) {
  return <>
    <Link href={`/characters?page=${pageSelected - 1}`}><a> Back </a></Link>
    <Link href={`/characters?page=${pageSelected + 1}`}><a> Next </a></Link>
    <div className="container-fluid">
      <div className="row">
      {data.data.map((character) => {
        return <CardCharactersPage key={character.id} imgCard={`${character.thumbnail.path}`} nameCard={character.name} />
      })}
      </div>
    </div>
  </>;
}

