import Layout from "../components/Layout";
import md5 from "md5";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const time = Number(new Date());
  const hash = md5(
    time +
      `${process.env.REACT_APP_MARVEL_PRIVATE_KEY}` +
      `${process.env.REACT_APP_MARVEL_PUBLIC_KEY}`
  );

  const response = await fetch(
    `http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${
      process.env.REACT_APP_MARVEL_PUBLIC_KEY
    }&hash=${hash}&limit=100&offset=${Math.floor(Math.random() * 100)}`
  )
    .then((data) => data.json())
    .then((response) => response.data.results);

  return {
    props: {
      data: response,
    },
  };
};
export default function home({ data }): JSX.Element {
  const allData = [];
  for (let i = 0; i < 4; i++) {
    const random = Math.floor(Math.random() * 100);
    if (
      data[random].thumbnail.path !==
        "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" ||
      null
    ) {
      allData.push(data[random]);
    } else {
      i - 1;
    }
  }

  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <nav className="navbar">
              <div className="container-fluid">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Characters
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Comics
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Creators
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Events
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Series
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Stories
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="col-6">
            <div className="CharactersContainer">
              <div className="CharactersContent">
                {allData.map((element: any) => {
                  return <img src={`${element.thumbnail.path}.jpg`}></img>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </Layout>
  );
}
