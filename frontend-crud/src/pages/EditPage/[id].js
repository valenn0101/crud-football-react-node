import { Layout } from '@/components/Layout';
import React from 'react';

export default function EditPage({ id }) {
  return (
    <Layout>
      <h1>Editar club con ID {id}</h1>
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
