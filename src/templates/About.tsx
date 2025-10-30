import { Section } from '../layout/Section';

const About = () => (
  <Section title="About me" description="">
    <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
      {/* Photo - placeholder for now */}
      <div className="w-full md:w-1/3">
        <img
          src="/assets/images/selfie.jpg"
          alt="Katy with Skye, Marty and Zara"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Text content */}
      <div className="w-full md:w-2/3">
        <div className="space-y-4 text-lg leading-relaxed text-gray-700">
          <p>
            I&apos;m Katy, pawrent to Collie Skye and cats Marty and Zara. I
            started Aviemore Pet Services in April 2024 initially offering cat
            care however I received heaps of requests for dog walking and
            decided to give it a shot! After all I love being out in all
            weathers with Skye discovering new routes and places.
          </p>
          <p>
            Growing up with Border Collies I&apos;ve always been confident and
            understanding around dogs happily being trusted to walk friends and
            my families dogs.
          </p>
          <p>
            I am also an experienced cat owner and have been a Cat Protection
            Volunteer in the past fostering cats whilst they wait for their
            forever homes.
          </p>
          <p>
            I love getting to know each animals unique personalty and becoming
            their trusted human friend.
          </p>
        </div>
      </div>
    </div>
  </Section>
);

export { About };
