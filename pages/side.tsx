import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";

type MovieType = {
  id: string;
  original_title: string;
  poster_path?: string;
};

export default function Side({
  results,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const onHandleRouter = ({ id, original_title }: MovieType) => {
    router.push(`/movies/${original_title}/${id}`);
  };

  return (
    <div className="container">
      {results.map((movie) => (
        <div
          className="movie"
          key={movie.id}
          onClick={() =>
            onHandleRouter({
              id: movie.id,
              original_title: movie.original_title,
            })
          }
        >
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<{
  results: MovieType[];
}> = async () => {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
};
