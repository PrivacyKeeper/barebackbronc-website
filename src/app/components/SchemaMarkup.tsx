export default function SchemaMarkup() {
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "BarebackBronc.pro",
    applicationCategory: "SportsApplication",
    operatingSystem: "iOS, Android",
    description:
      "The everything app for bareback riding. A social platform for the whole bareback community, plus rigging spec checking and wear tracking, a bucking horse database with wither profiles and rigging fit notes, draw analysis, entries, judge scores, and injury and conditioning records. Built for amateur, youth and college riders.",
    url: "https://www.barebackbronc.pro",
    offers: [
      { "@type": "Offer", price: "0", priceCurrency: "USD", name: "Free" },
      {
        "@type": "Offer",
        price: "4.99",
        priceCurrency: "USD",
        name: "Premium Monthly",
      },
      {
        "@type": "Offer",
        price: "49.99",
        priceCurrency: "USD",
        name: "Premium Annual",
      },
    ],
    author: {
      "@type": "Organization",
      name: "BarebackBronc.pro",
      url: "https://www.barebackbronc.pro",
      email: "support@barebackbronc.pro",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "BarebackBronc.pro",
    url: "https://www.barebackbronc.pro",
    description:
      "The complete bareback riding platform. Community, rigging management, bucking horse data, draws, scores, rules, and longevity in one app.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.barebackbronc.pro/blog?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are the rules for a bareback rigging?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A one-handed rigging with a flat leather or suede body. The handhold must be continuous and solid, not exceeding 8 inches in length, and covered by at least 3 inches of securely fastened suede. Maximum width is 10 inches at the handhold and 6 inches at the D-ring. No fiberglass or metal is permitted in the handhold itself. It attaches with a non-metallic cinch strap of mohair or hemp, and D-rings are the only hardware. Failing an equipment inspection is a disqualification and, in some associations, carries a fine and an ineligibility period.",
        },
      },
      {
        "@type": "Question",
        name: "How is bareback riding scored?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Two judges each award 0 to 25 points for the rider and 0 to 25 points for the horse, adding to a maximum of 100. Rider points come from spurring technique, how far the toes stay turned out, continuity of the spurring stroke, control, and willingness to take what the horse brings. Horse points come from power, height, direction change, and difficulty.",
        },
      },
      {
        "@type": "Question",
        name: "What is the mark-out rule in bareback riding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Leaving the chute, both spurs must be touching the horse above the point of the shoulders and must remain there until the horse's front feet hit the ground after the first jump. Both spurs must qualify. Under PRCA rules, missing the mark-out is an automatic disqualification. The IPRA folded foot position at the moment the front feet touch the ground into the judges' 25 points as of 2024, eliminating the automatic no score.",
        },
      },
      {
        "@type": "Question",
        name: "How is bareback riding different from saddle bronc?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There is no saddle, no stirrups and no rein. The only contact points are the rigging hand, the spurs, and the rider's body. The spurring style is also visibly different: the rider pulls his knees up and rolls his spurs up the horse's shoulders as the horse rises, then straightens his legs and returns the spurs over the shoulder point in anticipation of the next jump. The completeness and timing of that stroke — the lick — is what judges reward.",
        },
      },
      {
        "@type": "Question",
        name: "What disqualifies a bareback rider?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Being bucked off before the whistle, touching the horse or your own body with the free arm, and failing an equipment inspection on the rigging or the spur rowels. Rowels must be free spinning, dull and humane. Under PRCA rules, failing to mark out is also a disqualification.",
        },
      },
      {
        "@type": "Question",
        name: "Why do bareback riders have short careers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bareback riders take more physical punishment than anyone else in rodeo. The cumulative load falls on the elbow, shoulder, neck, back and hand of the riding arm, and it accumulates rather than resolving between rodeos. Conditioning, injury management and recovery are not peripheral to this event — they are the difference between a five-year career and a fifteen-year one.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
