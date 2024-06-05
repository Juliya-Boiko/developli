import { Hero } from "@/components/sections/hero"
import { Process } from "@/components/sections/process"
import { processGuid } from "@/constants/processData"
import { Opportunities } from "@/components/sections/opportunities"
import { Partners } from "@/components/sections/partners"
import { Starter } from "@/components/sections/starter"
import imgStarter from '../../public/images/starter1.png'

export default function Home() {
  return (
    <>
      <Hero />
      <Process items={processGuid}>
        <h2 className="sectionTitle">With Developli, hiring is <span className="accent-green">easy-peasy</span>, lemon squeezy</h2>
        <p className="sectionSubtitle">Our hiring process is so simple and easy to do, just follow the steps and you’re done!</p>
      </Process>
      <Opportunities />
      <Partners />
      <Starter
        title={<p>Hire your <br /> dream team today</p>}
        btnText="Post a job"
        bgColor="#B6DAFF"
        image={imgStarter}
      />
    </>
  );
}