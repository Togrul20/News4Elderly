import { useEffect } from 'react';
import { useRouter } from 'next/router';

function RefreshOnScrollUp() {
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        router.reload(); 
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [router]);

  return null;
}

export default RefreshOnScrollUp;