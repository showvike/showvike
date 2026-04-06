import LandingPage from '@/components/landing-page';
import { portfolioData, siteUrl } from '@/data/portfolio';

export default function Home() {
  const personStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: portfolioData.name,
    jobTitle: portfolioData.title,
    email: portfolioData.contact.email,
    url: siteUrl,
    sameAs: [portfolioData.contact.linkedin, portfolioData.contact.github],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mirpur, Dhaka',
      addressCountry: 'Bangladesh',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personStructuredData),
        }}
      />
      <LandingPage />
    </>
  );
}
