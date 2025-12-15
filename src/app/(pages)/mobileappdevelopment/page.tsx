import MobileAppHero from '@/components/mobileapp/mobileapp-hero'
import MobileAppSteps from '@/components/mobileapp/mobileapp-steps'
import MobileAppTech from '@/components/mobileapp/mobileapp-tech'
import MobileAppBusiness from '@/components/mobileapp/mobileapp-business'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import React from 'react'
import IntegrationPreviousWorks from '@/components/Integration/integration-previous-works'
import Testimonial from '@/components/testimonial'
import ClientConnect from '@/components/client-connect'

export const metadata = generateSEOMetadata({
  title: "Mobile App Development Services - iOS & Android Apps",
  description:
    "Expert mobile app development services for iOS and Android. Appstone creates native and cross-platform mobile applications that drive business growth and user engagement.",
  keywords: [
    "mobile app development",
    "iOS app development",
    "Android app development",
    "cross-platform apps",
    "native app development",
    "mobile application development",
    "app development company",
    "mobile app developers",
    "Bhubaneswar app development",
  ],
  url: "https://appstone.in/mobileappdevelopment",
});

const page = () => {
  return (
    <>
    <MobileAppHero />
    <MobileAppSteps />
    <MobileAppTech />
    <MobileAppBusiness />
    <IntegrationPreviousWorks />
    <Testimonial />
   <ClientConnect />
    </>
  )
}

export default page