"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Loader from './(main)/home/loader/loader';

export default function Page() {
  const [showLoader, setShowLoader] = useState(true);
  const router = useRouter();

  const handleLoaderComplete = () => {
    setShowLoader(false);
    router.push('/home');
  };

  if (showLoader) {
    return <Loader onComplete={handleLoaderComplete} />;
  }

  return null;
}
