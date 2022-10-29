import { Card } from '@twilio-paste/core';
import React from 'react';
import {NewItemForm} from './NewItemForm';
import {MenuItems} from './MenuItems' ;
import {TipSelectContainer} from '../containers/TipSelectContainer';
import {Summary} from './Summary'

const items = [
  { uuid: 1, name: 'Tofu Roast', price: 14, quantity: 1 },
  { uuid: 2, name: 'Vegan Ham', price: 12, quantity: 1 }
];

export default function Calculator() {
  return (
    <Card>
      <NewItemForm />
      <MenuItems items={items}/>
      <TipSelectContainer />
      <Summary />
    </Card>
  )
}
