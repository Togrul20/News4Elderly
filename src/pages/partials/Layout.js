import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Loading from "../Loading";

const Layout = ({ children }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };

    const handleComplete = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
    };
  }, []);

  return (
    <div>
      {loading && <Loading />}
      {children}
    </div>
  );
};

export default Layout;
