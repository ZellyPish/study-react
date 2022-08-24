import { Global } from '@emotion/react'
import { FC } from 'react'
import reset from 'styles/reset'

const App: FC = () => {
  return (
    <>
      <Global styles={reset} />
      <div>
        App
      </div>
    </>
  )
}

export default App
