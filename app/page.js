import FindJobs from "@/components/FindJobs";
import MainContent from "@/components/MainContent";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="overflow-hidden">
        <FindJobs />
        <MainContent />
      </main>
    </>
  );
}
