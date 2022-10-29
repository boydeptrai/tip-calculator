import { Card } from '@twilio-paste/core';
import React from 'react';
import {TipSelectContainer} from '../containers/TipSelectContainer';
import {Summary} from './Summary'
import { MenuItemsContainer } from '../containers/MenuItemsContainer';
import { NewItemFormContainer } from '../containers/NewItemFormContainer';


export default function Calculator() {
  return (
    <Card>
      <NewItemFormContainer />
      <MenuItemsContainer/>
      <TipSelectContainer />
      <Summary />
    </Card>
  )
}
