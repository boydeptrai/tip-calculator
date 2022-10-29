import { Card } from '@twilio-paste/core';
import React from 'react';
import {NewItemForm} from './NewItemForm';
import {TipSelectContainer} from '../containers/TipSelectContainer';
import {Summary} from './Summary'
import { MenuItemsContainer } from '../containers/MenuItemsContainer';


export default function Calculator() {
  return (
    <Card>
      <NewItemForm />
      <MenuItemsContainer/>
      <TipSelectContainer />
      <Summary />
    </Card>
  )
}
