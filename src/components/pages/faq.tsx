import { Scrumbs } from "../sections/scrumbs"
import { SearchQuestions } from "../sections/searchQuestions"
import { Support } from "../sections/support"

export const FaqPage = () => (
  <>
    <Scrumbs />
    <SearchQuestions />
    <Support title="Still Have a question?" subtitle="If you cannot find answer to your question in our FAQ, you can always contact us. We wil answer to you shortly!" />
  </>
)