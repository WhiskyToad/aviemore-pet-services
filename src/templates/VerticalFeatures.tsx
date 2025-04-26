import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Expert Pet Services"
    description="Professional, reliable, and loving care for your furry companions in Aviemore and surrounding areas."
  >
    <VerticalFeatureRow
      title="Dog Walking"
      description="Keep your dog healthy and happy with our tailored walking services. Whether they need a quick stroll or an energetic adventure, each walk is customised to your dog's unique personality and energy level."
      image="/assets/images/feature.jpg"
      imageAlt="Dog walking service"
    />
    <VerticalFeatureRow
      title="Pet Sitting"
      description="Peace of mind while you're away. Our pet sitting service includes regular home visits, feeding, playtime, and lots of TLC. Your pets will remain comfortable in their familiar environment with all the care they need. Please note: This is in your home only for now."
      image="/assets/images/feature2.jpg"
      imageAlt="Pet sitting service"
      reverse
    />
    <VerticalFeatureRow
      title="Specialised Care"
      description="Every pet is unique. From administering medication to caring for exotic pets, our specialised services ensure that animals with specific needs receive expert attention tailored precisely to their requirements."
      image="/assets/images/feature3.jpg"
      imageAlt="Specialised pet care service"
    />
  </Section>
);

export { VerticalFeatures };
