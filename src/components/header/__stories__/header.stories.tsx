import React from 'react'
import Header from '..'

import { storiesOf } from '@storybook/react'

storiesOf('Header', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .add('default', () => <Header siteTitle="JAMStack Boilerplate Header" />)
