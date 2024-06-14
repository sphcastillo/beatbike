import { mulish } from "@/app/fonts";

const privatePolicy = [
  {
    id: 1,
    title: "WHAT INFORMATION MAY BE COLLECTED AND THE MEANS OF COLLECTION",
    description:
      "Your information may be collected in several ways, for example, when you provide information to us (such as name, mailing address, and email address or other personal information); when you use or interact with our website or services, general non-personal information about your use of our website or services may be collected (such as IP addresses) through the use of automated technology like cookies and beacons; and when information is collected from publicly available sources or shared with us by a third party. We do not sell your information to anyone.",
  },
  {
    id: 2,
    title: "HOW WE USE YOUR INFORMATION",
    description:
      "We may use information for various purposes, including providing you with information about our company, products, promotions, and other special offers, personalizing your website experience, and conducting research and analysis on our website, products, marketing efforts, and sales.",
  },
  {
    id: 3,
    title: "WHEN WE SHARE YOUR PERSONAL INFORMATION",
    description:
      "We do not sell or rent your personal information to third parties. We may share your personal information with (1) our subsidiaries and affiliates, (2) our partners, advertisers, or other third parties primarily for business and operational purposes, (3) third parties providing services on our behalf, and (4) other third parties to comply with legal obligations.",
  },
  {
    id: 4,
    title: "HOW WE SAFEGUARD YOUR INFORMATION",
    description:
      "We use industry-accepted security measures to help protect your personal information from unauthorized access, alteration, loss, or misuse.",
  },
  {
    id: 5,
    title:
      "MORE ON COOKIES, BEACONS, AND HOW TO STOP AUTOMATED COLLECTION OF INFORMATION",
    description:
      "Automated technology (e.g., cookies and beacons) is used to collect general non-personal information and, in some cases, IP addresses. We use information collected through automated technology (e.g., cookies and beacons) to engage in third party ad serving/targeted advertising.",
  },
  {
    id: 6,
    title:
      "WHAT LAWS GOVERN THE OPERATION OF OUR COMPANY'S WEBSITES AND INTERNATIONAL TRANSFERS OF PERSONAL INFORMATION",
    description:
      "Our websites are governed and operated in accordance with the laws of the United States.",
  },
  {
    id: 7,
    title: "HOW WE WILL INFORM YOU OF CHANGES TO THIS PRIVACY NOTICE",
    description:
      "We may change this Privacy Notice at any time. If we make material changes, we will seek to provide you with reasonable notice of the changes. Changes will be effective immediately upon the posting of the revised Privacy Notice on our corresponding website.",
  },
  {
    id: 8,
    title:
      "HOW YOU CAN COMMUNICATE WITH US ABOUT THIS PRIVACY NOTICE OR YOUR PERSONAL INFORMATION",
    description:
      "You can email us at info@beatbike.com with questions or concerns on this Privacy Notice or your personal information.",
  },
  {
    id: 9,
    title: "WHAT INFORMATION MAY BE COLLECTED AND THE MEANS OF COLLECTION",
    description:
      "Your information may be collected in several ways, including: when you provide information to us, when information is collected automatically, or when information is shared with us by a third party.",
  },
  {
    id: 10,
    title:
      "INFORMATION YOU PROVIDE TO US THROUGH ONE OF OUR WEBSITES OR THE WEBSITE OF ONE OF OUR BUSINESS PARTNERS",
    description:
      "We collect information, including personal information such as name, mailing address, and email address, when you provide it through registration to receive emails, request information, participate in a promotion (e.g., contest or sweepstakes), or survey. For example, if you are on the website of a retail carrier, viewing our Company content such as a product promotion, and you opt-in to receive information from our Company, the retail carrier website will submit to us the information you provided so we may contact you as requested. If a Company website offers shopping or other commercial services, you will use an order-form to request information, products, and services. The order-form may ask you to provide financial information like account or credit card numbers. This information is transmitted to us through a secured browsing session. Do not send us any financial information outside the secured browsing session. Providing personal information to us is purely optional. However, if you refuse to provide details that are essential (e.g., as may be identified in a registration form), it would be impossible to use some of the features and functions of the website and/or to benefit from our services or promotions (for instance, by not being able to participate in a sweepstakes or contest).",
  },
  {
    id: 11,
    title:
      "INFORMATION COLLECTED AUTOMATICALLY WHEN YOU VISIT ONE OF OUR WEBSITES OR THE WEBSITE OF ONE OF OUR BUSINESS PARTNERS",
    description:
      "We, as well as any third-party advertisers and/or service providers, may place cookies, beacons, or other tracking technologies in your browser to automatically collect general non-personal information when you visit one of our websites. Your IP addresses, which in some jurisdictions may be considered personal information, may also be collected through the use of automated technology – see more regarding the collection of IP addresses and the ability to associate browsing habits with your individual personal computer in this section below. In cases when you are on the website of one of our promotional or advertising partners, our cookies or beacons are placed on your computer via our Company content that you may be viewing (e.g., a product promotion or advertisement). Information collected by cookies or beacons may be used by us or our promotional or advertising partners to deliver targeted advertising to you. The practice of displaying advertisements on the websites of unrelated companies is called third party ad serving or targeted advertising.",
  },
  {
    id: 12,
    title: "INFORMATION SHARED WITH US BY A THIRD PARTY",
    description:
      "We may receive information about you from social networking sites if you or other users (e.g., your “friends”) give us access to your profiles, comments, or “connections,” if you “like” us, or if you choose to participate in a Company-sponsored page or program residing in a social networking site (e.g., our Company’s Facebook page). The type of information that we may receive includes lists of your friends, comments you have shared, groups, and location. Our websites may also have “plugins” and other website features from third parties, such as the Facebook “Like” button and Facebook Conversations and other features which allow for login or other website functionality or interactions with social networking sites. These “plugins” and features, including their operation and use, and the information you provide to those third parties as part of their use, are governed by the privacy policy and practices of the third party providing them. Please be aware that we do not control and are not responsible for the privacy policies or practices of such parties. You should review the privacy notices and applicable terms before deciding whether to use the third party “plugins” or features.",
  },
  {
    id: 13,
    title: "HOW WE SHARE PERSONAL INFORMATION",
    description:
      "We will not sell or rent your personal information to third parties. Periodically, we may share your personal information with our subsidiaries, affiliates, business partners, and service providers, such as in the circumstances below. We may also share aggregated and/or anonymous information with our business partners for their own business purposes.",
  },
  {
    id: 14,
    title:
      "YOUR AGREEMENT TO HAVE YOUR PERSONAL INFORMATION SHARED WITH THIRD PARTIES",
    description:
      "While on our websites, you may have the opportunity to opt-in to receive information and/or marketing offers from another company or consent to the sharing of your information with a third party. If you opt-in or agree to have your personal information shared, your personal information will be disclosed to the third party, and the personal information you disclose will be subject to the privacy policy and business practices of that third party.",
  },
];

function PrivacyPolicy() {
  return (
    <div className={mulish.className}>
      <div className=" bg-white pt-7 pb-[68px] px-[48px] sm:px-[72px]">
        <div className="flex justify-center items-center py-3">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
        </div>
        <div className="py-4">
          <h4>
            Beatbike LLC (our “Company”) values the trust you place in us when
            you provide us with your personal information. We take your privacy
            seriously and are committed to protecting it.
          </h4>
          <h4 className="pt-4">
            This Privacy Notice applies to any information, including personal
            information, our Company collects online.
          </h4>
        </div>

        <div className="py-2">
          <h2 className="text-xl font-bold">THIS PRIVACY NOTICE EXPLAINS:</h2>
        </div>
        <div>
          {privatePolicy.map((policy) => (
            <div className="my-2" key={policy.id}>
              <h3 className="pt-4 font-bold">{policy.title}</h3>
              <p className="pt-4 leading-relaxed">{policy.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
