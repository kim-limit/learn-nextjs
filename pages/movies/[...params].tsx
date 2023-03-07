import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";

type queryType = {
  params: [title: string, id: string];
};

export default function Detail({
  params,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const [title, id] = params;
  // const query = router.query as queryType;
  // query.params || [];

  return (
    <div>
      <h3>router query title</h3>
      <h4>{router.query.title || "Loading..."}</h4>
      <h3>router query string title</h3>
      <h4>{title}</h4>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = context.query.params;
  return {
    props: {
      params,
    },
  };
};
