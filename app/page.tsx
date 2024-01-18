import Link from "next/link";
import UserInfo from "./components/UserInfo";
import { getServerAuthSession } from "../server/auth";

export default async function Home() {
  const authSession = await getServerAuthSession();

  return (
    <>
      <main className="flex flex-col">
        <div className="w-96 border border-red-500">
          <h1 className="pb-4 text-6xl">Witaj na blogu!</h1>
          <p className="text-3xl">
            Mówi się, że przysłowia są mądrością narodu. Warto je więc poznać i
            przekonać się, w jaki sposób wzbogacają naszą komunikację.
          </p>
          <p>
            Odwiedź podstronę Blog i odkryj najbardziej znane polskie
            przysłowia.
          </p>
        </div>
        {authSession?.user && (
          <>
            <UserInfo user={authSession?.user} />
          </>
        )}
      </main>
    </>
  );
}
