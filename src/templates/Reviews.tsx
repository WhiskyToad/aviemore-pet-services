import { Section } from '@/layout/Section';

const reviews = [
  {
    name: 'Sarah W.',
    review:
      'Highly recommend Katy at Aviemore Pet Services! After being away for a week, I came back to very happy and spoiled kitties! Katy went the extra mile by fully changing their litter trays and putting the bins outside too! Lots of photos and updates while I was away too!',
    rating: 5,
  },
  {
    name: 'Emma A.',
    review:
      'Katy did a great job of looking after my animals at my home while I was away (cats & hens). She is trustworthy, reliable, and my animals were well cared for. Katy sent an update with photos from each visit. I would recommend Aviemore Pet Services 😊.',
    rating: 5,
  },
  {
    name: 'Anthony K.',
    review: `Great cat sitting service and always good to know my cat Willow is in safe friendly hands when I'm away. Katy's service is very much recommended 👍🏻`,
    rating: 5,
  },
  {
    name: 'Katie E.',
    review: `Our dog loves going for walks with Katy, and enjoys getting to socialise with other dogs on her group walk. We enjoy getting the photo updates. Katy is helpful and reliable. Highly recommend.`,
    rating: 5,
  },
  {
    name: 'Emily A.',
    review: `Maud is loving her walks with Katy...solo at the moment until we build up her confidence but, hopefully, joining group walks soon! Katy is so kind and loving with Maudie who is quite a nervous and reactive wee girl...Maud and I cannot recommend Katy highly enough! 🐶🐶`,
    rating: 5,
  },
  {
    name: 'Alexander D',
    review: `Our dogs love their trips out with Katy. She always sends loads of pics of them having fun too. Highly recommend.`,
    rating: 5,
  },
];

const Reviews = () => (
  <Section title="Client Reviews" description="Happy pets - happy life!">
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
      {reviews.map((review, index) => (
        <article
          key={index}
          className="flex flex-col justify-between rounded-lg border-2 border-primary-200 bg-white p-6 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
          aria-labelledby={`review-title-${index}`}
        >
          <h3
            id={`review-title-${index}`}
            className="text-lg font-semibold text-primary-700"
          >
            {review.name}
          </h3>
          <p className="my-4 italic text-gray-600">
            &quot;{review.review}&quot;
          </p>
          <div
            className="mt-2 text-xl text-yellow-500"
            role="img"
            aria-label={`Rating: ${review.rating} out of 5 stars`}
          >
            {'★'.repeat(review.rating)}
          </div>
        </article>
      ))}
    </div>
  </Section>
);

export { Reviews };
