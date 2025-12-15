import IntegrationPreviousWorks from '@/components/Integration/integration-previous-works'
import ClientConnect from '@/components/client-connect'
import Testimonial from '@/components/testimonial'
import WebAppBusiness from '@/components/webapp/webapp-business'
import WebAppHero from '@/components/webapp/webapp-hero'
import WebAppSteps from '@/components/webapp/webapp-steps'
import WebAppTech from '@/components/webapp/webapp-tech'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import React from 'react'

export const metadata = generateSEOMetadata({
  title: "Web App Development Services - Custom Web Applications",
  description:
    "Professional web app development services by Appstone. We build scalable, secure, and high-performance web applications using modern technologies. Custom web solutions for your business needs.",
  keywords: [
    "web app development",
    "custom web applications",
    "web development services",
    "web application development",
    "full stack development",
    "responsive web apps",
    "progressive web apps",
    "web app development company",
    "Bhubaneswar web development",
  ],
  url: "https://appstone.in/webappdevelopment",
});

const page = () => {
  return (
    <>
    <WebAppHero />
    <WebAppSteps />
    <WebAppTech />
    <WebAppBusiness />
    <Testimonial />
    <IntegrationPreviousWorks />
    <ClientConnect />
    </>
  )
}

export default page