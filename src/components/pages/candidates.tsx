import { Statistic } from "@/components/sections/statistic"
import { Process } from "@/components/sections/process"
import { processHiring } from "@/constants/processData"
import { Badges } from "@/components/sections/badges"
import { Partners } from "@/components/sections/partners"
export const CandidatedPage = () => (
  <>
    <Statistic title="Find your" accent="dream job" subtitle="289 jobs in 28 locations" showActions />
    <Process items={processHiring}>
      <h2 className="sectionTitle">Get hired in a few <span className="accent-green">easy steps</span></h2>
      <p className="sectionSubtitle">Our hiring process is so simple and easy to do, just follow the steps and you’re done!</p>
    </Process>
    <Badges />
    <Partners />
  </>
)