import Link from "next/link";
import UserInfo from "./components/UserInfo";
import { getServerAuthSession } from "../server/auth";

export default async function Home() {
  const authSession = await getServerAuthSession();

  return (
    <>
      <div className="flex items-center justify-evenly h-[84vh]">
        <div className="w-1/3 z-10 flex ">
          <div>
            <h1 className="w-96 dark:text-slate-200 pb-4 text-8xl font-medium leading-snug">
              Witaj na blogu!
            </h1>
            <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-cyan-400 before:dark:opacity-10 after:dark:from-cyan-700 after:dark:via-cyan-600 after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
            <p className="w-3/5 dark:text-slate-400 font-extralight text-2xl text-justify w-92 leading-tight">
              Mówi się, że przysłowia są mądrością narodu. Warto je więc poznać
              i przekonać się, w jaki sposób wzbogacają naszą komunikację.
            </p>
          </div>
        </div>
        <UserInfo user={authSession?.user} />
      </div>
    </>
  );
}
