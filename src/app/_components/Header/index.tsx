{
  /* eslint-disable @next/next/no-img-element */
}

import React from 'react'

import { Header as HeaderPayload } from '../../../payload/payload-types'
import { fetchHeader } from '../../_api/fetchGlobals'
import HeaderComponent from './HeaderComponent';

export async function Header() {
  let header: HeaderPayload | null = null

  try {
    header = await fetchHeader()
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      <HeaderComponent header={header} />
    </>
  )
}
