import md5 from "md5";
import { GetServerSideProps } from "next";
import Layout from "../../../components/Layout";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(
    `http://localhost:3000/api/call/detail/${context.params.idCharacter}?rubrique=characters`
  )
    .then((response) => response.json())
    .then((result) => result.data);
  return {
    props: {
      data: response,
    },
  };
};

export default function CharacterDetails({ data }): JSX.Element {
  console.log(data);
  return (
    <Layout>
      <div className="container-fluid">
        <section>
          <div
            className="row"
            style={{ width: "100%", height: "30rem", alignContent: "center" }}
          >
            <div className="col-3 mx-auto">
              <img
                style={{ width: "400px" }}
                src={`${data[0].thumbnail.path}.jpg`}
              />
            </div>
            <div className="col-4 mx-auto">
              <h1>{data[0].name}</h1>
              <br></br>
            </div>
          </div>
        </section>
        <br></br>
        <section>
          <h2>Comics :</h2>
          <div
            className="row"
            style={{ width: "100%", height: "30rem", alignContent: "center" }}
          >
            <div className="col-3 mx-auto">
              <img
                style={{ width: "400px" }}
                src={`${data[0].thumbnail.path}.jpg`}
              />
            </div>
            <div className="col-4 mx-auto">
              <h1>{data[0].name}</h1>
              <br></br>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
