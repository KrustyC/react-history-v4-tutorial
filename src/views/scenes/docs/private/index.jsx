import React from 'react'
import { P } from 'components'
import { DefaultLayout } from 'layouts'

export default () => (
  <DefaultLayout>
    <h1>This is a private route</h1>
    <section>
      <P>
        If you are here it means you are authenticated, so well done you!
      </P>
    </section>
  </DefaultLayout>
)
