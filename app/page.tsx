import MainHeader from '@/components/Home/Hero';
import Faq from '@/components/Home/Faq';
import Feautures from '@/components/Home/Feautures';
import Testimonials from '@/components/Home/Testimonials';
import CTA from '@/components/Home/CTA';
import Newsletter from '@/components/Newsletter/Newsletter';
import FoundersNote from '@/components/Home/FoundersNote';

export default function Page() {
  return (
    <main>
      <MainHeader />
      <Feautures />
      <Testimonials />
      <Faq />
      <CTA />
      <FoundersNote />
      <Newsletter />
    </main>
  );
}
