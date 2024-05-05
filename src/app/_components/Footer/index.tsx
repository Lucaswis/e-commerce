import React from 'react'

import { Footer as FooterTypes } from '../../../payload/payload-types'
import { fetchFooter } from '../../_api/fetchGlobals'


import classes from './index.module.scss'
import FooterComponent from './FooterComponent'

export async function Footer() {
  let footer: FooterTypes | null = null

  try {
    footer = await fetchFooter()
  } catch (error) {
    console.log(error);
  }

  const navItems = footer?.navItems || []

  return (
    <>
      <FooterComponent footer={footer}/>
    </>
  )
}
