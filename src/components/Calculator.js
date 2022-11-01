import { Card } from '@twilio-paste/core';
import React from 'react';
import {TipSelectContainer} from '../containers/TipSelectContainer';
import { MenuItemsContainer } from '../containers/MenuItemsContainer';
import { NewItemFormContainer } from '../containers/NewItemFormContainer';
import { SummaryContainer } from '../containers/SummaryContainer';


export default function Calculator() {
  return (
    <Card>
      <NewItemFormContainer />
      <MenuItemsContainer/>
      <TipSelectContainer />
      <SummaryContainer />
    </Card>
  )
}
