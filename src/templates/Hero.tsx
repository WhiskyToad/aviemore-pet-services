import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <Logo xl />
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Professional Pet Care Services in Aviemore\n'}
            <span className="text-primary-500">
              Group Walks • Pet Sitting • Solo Walks
            </span>
          </>
        }
        description="Providing trusted, reliable pet care services in the heart of the Cairngorms. We offer professional dog walking, pet sitting, and customized care for your beloved pets."
      />
    </Section>
  </Background>
);

export { Hero };
