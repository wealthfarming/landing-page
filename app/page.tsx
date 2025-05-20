'use client';
import HomePage from "@/components/home/home-page";
import { useInterface } from "@/components/context/interface-context";
export default function Home() {
  const { isDesktop, isTablet } = useInterface();
  return (
    <div className={``}>
      <HomePage/>
    </div>
  );
}
