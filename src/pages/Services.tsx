import { BodyText } from 'components/typography/BodyText'
import { Heading } from 'components/typography/Heading'
import { SmallTitle } from 'components/typography/SmallTitle'
import { Layout } from 'containers/layout/Layout'
import { Planet } from 'public/svgs'
import React, { useEffect, useState } from 'react'
import sanityClient from '@sanity/client'
import { Project } from 'components/shared sections/Projects/Project'
import ServicesMenu from 'components/ServicesMenu'
import WebsiteDesign from 'components/WebsiteDesign'
import ClientWebsiteHelp from 'components/ClientWebsiteHelp'
import WebsiteDevelopment from 'components/WebsiteDevelopment'
import UpdateWebsite from 'components/UpdateWebsite'
import TroubleshootWebsite from 'components/TroubleshootWebsite'
import HostWebsite from 'components/HostWebsite'

export function Services() {
  const [selectedMenuItem, setSelectedMenuItem] = useState('Website Design')

  const handleMenuItemClick = (menuItem: string) => {
    setSelectedMenuItem(menuItem)
  }

  return (
    <Layout footerVariant="simplified">
      <div className="absolute top-0 z-30">
        <ServicesMenu handleMenuItemClicked={handleMenuItemClick} />
      </div>
      <div className="services-content">
        {selectedMenuItem === 'Client Website Help' && <ClientWebsiteHelp />}
        {selectedMenuItem === 'Website Design' && <WebsiteDesign />}
        {selectedMenuItem === 'Website Development' && <WebsiteDevelopment />}
        {selectedMenuItem === 'Update Website' && <UpdateWebsite />}
        {selectedMenuItem === 'Troubleshoot Website' && <TroubleshootWebsite />}
        {selectedMenuItem === 'Host Website' && <HostWebsite />}
      </div>
    </Layout>
  )
}
