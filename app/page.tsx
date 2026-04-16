import { getDict } from '@/lib/i18n'
import HeroSection from '@/components/sections/HeroSection'
import ClientsSection from '@/components/sections/ClientsSection'
import ServicesHomeSection from '@/components/sections/ServicesHomeSection'
import CrmHomeSection from '@/components/sections/CrmHomeSection'
import CasesHomeSection from '@/components/sections/CasesHomeSection'
import CtaBandSection from '@/components/sections/CtaBandSection'

export default async function Home() {
  const dict = await getDict()
  return (
    <>
      <HeroSection dict={dict} />
      <ClientsSection dict={dict} />
      <ServicesHomeSection dict={dict} />
      <CrmHomeSection dict={dict} />
      <CasesHomeSection dict={dict} />
      <CtaBandSection dict={dict} />
    </>
  )
}
