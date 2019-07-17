import React from 'react';
import { gql } from 'apollo-boost';

const addMappingData = gql`
mutation(
    $AreaName: String,
     $Observer: String,
      $MSName: String,
      $HouseRange: String,
      $NumberOfHouses: Int,
      $MSLocation: String
    ) {
    insert_Area(objects: {AreaName: $AreaName, NoOfHouses: $NumberOfHouses, AreaID: 108108}) {
      affected_rows
      returning {
        AreaID
        AreaName
        NoOfHouses
      }
    }
    insert_Ms(objects: {MsID: 108108, MsLocation: $MSLocation, MsName: $MSName, Addr_Range: $HouseRange}) {
      affected_rows
      returning {
        MsID
        MsLocation
        MsName
        Addr_Range
      }
    }
    insert_User(objects: {FullName: $Observer, UserID: 108108}) {
      affected_rows
      returning {
        UserID
        FullName
      }
    }
  }
  `
export { addMappingData };