import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Experienced Pet Services"
    description="Professional, reliable and loving care for your pets"
  >
    <VerticalFeatureRow
      title="Dog Walking"
      description="Group walks and Individual walks available

Whether you are away at work or need help getting the dogs out Aviemore Pet Services can make life that little bit easier by providing a fantastic dog walking service you can rely on.

Dogs are natural pack animals and many love the company and experience of walking as a group. My Group Dog Walks give your dog the chance to socialise and play in a pack as well as enjoy some seriously epic walks in the Aviemore area. Walking in a group of 5 dogs (with one of them being Skye my lovely assistant pup) I carefully introduce new dogs to our pack making sure I can match personalities for a fun walk for all. All dogs are transported safely in separate and secure dog crates.

I understand that not all dogs enjoy or benefit from walking with other dogs, whether they are mature and enjoy the quiet life, or have little behaviour quirks that make it difficult to walk with other canine companions. I am happy to accommodate your needs by taking your dog out alone, to ensure your dog has a happy and fun walk with that extra individual love."
      image="/assets/images/feature.jpg"
      imageAlt="Dog walking service"
    />
    <VerticalFeatureRow
      title="Pet Pop in Service"
      description="Have peace of mind while you're away. My pet sitting service includes regular home visits, feeding, playtime, and lots of TLC. Your pets will remain comfortable in their familiar environment with all the care they need. Please note: This is in your home only for now."
      image="/assets/images/feature2.jpg"
      imageAlt="Pet pop in service"
      reverse
    />
    <VerticalFeatureRow
      title="Specialised care"
      description="Every pet is unique. From administering medication to caring for exotic pets, my specialised series ensure that animals specific needs receive the caring attention tailored precisely to their requirements."
      image="/assets/images/feature3.jpg"
      imageAlt="Specialised pet care service"
    />
  </Section>
);

export { VerticalFeatures };
