import md5 from 'md5';
import { GetServerSideProps } from 'next'
import Layout from '../../../components/Layout';

export const getServerSideProps: GetServerSideProps = async (context) => {

  const response = await fetch(
    `http://localhost:3000/api/call/detail/${context.params.idCharacter}?rubrique=characters`
  ).then((response)=>response.json())
  .then((result)=> result.data)
  return {
    props: {
      data: response
    },
  }
}


export default function CharacterDetails({data}): JSX.Element {
  console.log(data)
  return <Layout>
    <div className='container'>



    </div>
  </Layout>;
}
