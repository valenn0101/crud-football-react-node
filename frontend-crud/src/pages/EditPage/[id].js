import { Layout } from '@/components/Layout';
import React from 'react';
import useFetchClubData from '@/hooks/useFetchClubData';
import Formulario from '@/components/Form/Formulario';

export default function EditPage({ id }) {
  const clubData = useFetchClubData(id);
  console.log(clubData)

  return (
    <Layout>
      <h1>Editar club</h1>
      {clubData ? (
        <Formulario clubInfo={clubData}></Formulario>
      ) : (
        <p>Cargando datos del club...</p>
      )}
    </Layout>
  );
}


export async function getServerSideProps({ params }) {
  const { id } = params;
  return {
    props: {
      id,
    },
  };
}
