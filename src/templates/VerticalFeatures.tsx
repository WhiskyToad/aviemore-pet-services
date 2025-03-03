import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Our Pet Services"
    description="Professional and caring pet services in Aviemore, Kincraig, Boat of Garten, Carrbridge and surrounding areas."
  >
    <VerticalFeatureRow
      title="Dog Walking"
      description="Regular walks and exercise for your furry friend. We provide individual or group walks, tailored to your dog's energy level and socialization needs."
      image="/assets/images/feature.jpg"
      imageAlt="Dog walking service"
    />
    <VerticalFeatureRow
      title="Pet Sitting"
      description="Home visits for your pets while you're away. We provide feeding, playtime, and lots of attention to keep your pets happy and comfortable in their familiar environment."
      image="/assets/images/feature2.jpg"
      imageAlt="Pet sitting service"
      reverse
    />
    <VerticalFeatureRow
      title="Specialised Care"
      description="Tailored care for pets with unique needs, including chickens, small animals, and pets requiring extra attention. We adapt our services to ensure every pet receives the specific care they need."
      image="/assets/images/feature3.jpg"
      imageAlt="Specialised pet care service"
    />
  </Section>
);

export { VerticalFeatures };
