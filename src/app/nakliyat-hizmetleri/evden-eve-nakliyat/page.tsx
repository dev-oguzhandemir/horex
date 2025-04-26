import { Metadata } from 'next'
import TransportationService from '@/components/TransportationService'
import serviceData from '@/data/transportation-services/evden-eve-nakliyat.json'

export const metadata: Metadata = {
  title: 'Evden Eve Nakliyat - Horex Nakliyat',
  description: serviceData.metaDescription,
  keywords: serviceData.metaKeywords,
}

export default function HomeToHomeTransportation() {
  return <TransportationService {...serviceData} />
} 