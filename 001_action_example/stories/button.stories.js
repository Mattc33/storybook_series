import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import Button from '../src/components/Button/Button'

storiesOf('Buttons', module)
   .add('Default', () => <Button type="default" onClick={action('clicked')}>Default</Button>)
   .add('Primary', () => <Button type="primary" onClick={action('Clicked!')}>Primary</Button>)
   .add('Info', () => <Button type="info" onClick={action('Clicked!')}>Info</Button>)
   .add('Warning', () => <Button type="warning" onClick={action('Clicked!')}>Warning</Button>)
   .add('Success', () => <Button type="success" onClick={action('Clicked!')}>Success</Button>)
   .add('Danger', () => <Button type="danger" onClick={action('Clicked!')}>Danger</Button>)