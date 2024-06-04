import { Hero } from "@/components/sections/hero"
import { Process } from "@/components/sections/process";
import { processGuid } from "@/constants/processData";
import { Opportunities } from "@/components/sections/opportunities";

export default function Home() {
  return (
    <>
      <Hero />
      <Process items={processGuid}>
        <h2 className="sectionTitle">With Developli, hiring is <span className="accent-green">easy-peasy</span>, lemon squeezy</h2>
        <p className="sectionSubtitle">Our hiring process is so simple and easy to do, just follow the steps and you’re done!</p>
      </Process>
      <Opportunities />
    </>
  );
}