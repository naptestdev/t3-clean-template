import type { NextPage } from "next";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const { data } = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <div className="pt-6 text-2xl text-blue-500 flex justify-center items-center w-full">
        {data ? <p>{data.message}</p> : <p>Loading..</p>}
      </div>
    </>
  );
};

export default Home;
