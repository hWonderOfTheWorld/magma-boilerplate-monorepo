import React from 'react'
import { useRouter } from 'next/router'
import { useConfig, DocsThemeConfig } from 'nextra-theme-docs'


const config: DocsThemeConfig = {
  logo: <span>
    <img src='../../dapplogo.png' style={{width: '200px' }} />
</span>,
  footer: {
    text: (
     <style>
      {` .nx-max-w-\[90rem\], .nx-max-w-[90rem], .nx-mx-auto.nx-flex.nx-max-w-\[90rem\]{
          max-width: 98% !important;
        }`}
     </style>
    )
  },
  useNextSeoProps: () => {
    return {
      titleTemplate: '%s – Dapp Docs'
    }
  },
  search: {
    placeholder: 'Search...'
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://my-app.com' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return <>
      <meta property="og:url" content={url} />
      <meta property="og:title" content={frontMatter.title || 'Dapp'} />
      <meta property="og:description" content={frontMatter.description || 'The Docs'} />
    </>
  },
  darkMode: false,
  primaryHue: 240,
  nextThemes: {
    defaultTheme: 'light'
  },
}

export default config
