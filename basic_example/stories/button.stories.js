import React from 'react'

import { storiesOf } from '@storybook/react'
import Button from '../src/components/Button/Button'

storiesOf('Buttons', module)
   .add('Default', () =><Button type="default">Default</Button>)
   .add('Primary', () => <Button type="primary">Primary</Button>)
   .add('Info', () => <Button type="info">Info</Button>)
   .add('Warning', () => <Button type="warning">Warning</Button>)
   .add('Success', () => <Button type="success">Success</Button>)
   .add('Danger', () => <Button type="danger">Danger</Button>)