import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  const goBack = () => {
    router.push("/");
  };

  return (
    <div>
      <h1>Oooops...</h1>
      <h2>That page cannot be found</h2>
      <p>
        Go back to the{" "}
        <Link className="not-found" href="/">
          HomePage
        </Link>
      </p>
      <button onClick={goBack}>Go back to homepage</button>
    </div>
  );
};

export default NotFound;
