import { JournalLayout } from "../Layout/JournalLayout"
import { NothingSelectedView } from "../views/NothingSelectedView"

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, facilis?</Typography> */}
      <NothingSelectedView/>
    </JournalLayout>
  )
}
