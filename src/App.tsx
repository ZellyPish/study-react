import { Global } from '@emotion/react'
import { FC } from 'react'
import font from 'styles/font'
import reset from 'styles/reset'

const App: FC = () => {
  return (
    <>
      <Global styles={reset} />
      <Global styles={font} />
      <div>
        안녕하세요
      </div>
    </>
  )
}

export default App
