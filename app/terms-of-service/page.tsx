import { mulish } from "@/app/fonts";

const termsOfService = [
  {
    id: 1,
    title: "BOOKING POLICY",
    description: 'To book a class at Beatbike, you must have a valid class credit or membership to reserve a bike. To purchase an individual class credit or membership, you can sign up on beatbike.com by using your email and creating a password, or if you are already registered, click login to buy a class credit or membership and make your reservation. Upon arriving at the studio, please check in at the front desk. If you do not check in, we may release your bike to another guest 2 minutes before the start of class. DO NOT ASSUME THE FRONT DESK STAFF KNOWS YOU ARE IN ATTENDANCE. Additionally, checking in for other clients is prohibited.'
  },
  {
    id: 2,
    title: "CANCELLATION POLICIES",
    description: 'To cancel a Beatbike class you reserved using a class credit, you may do so without penalty by canceling online, via the mobile app, or by calling the studio NO LATER THAN 5:00 PM the evening before your scheduled class. If your bike is canceled by this time, your class credit will be returned to your account. If you cancel your bike after 5:00 PM the evening before your class, you will be charged a $10 late cancel fee. If you do not have a card on file, the credit will be forfeited. To cancel a Beatbike class you reserved using an unlimited membership, you may do so without penalty by canceling online, via the mobile app, or by calling the studio NO LATER THAN 5:00 PM the evening before your scheduled class. If you cancel your bike after 5:00 PM the evening before your class, you will be charged a $10 late cancel fee. If you do not have a working card on file, your account will be temporarily frozen until you update the card on file, at which time the late cancellation fee will be charged, and your account will be reinstated. Cancellations via electronic mail (email), Facebook Messenger, Instagram, or text message will not be accepted, and you will be charged.'
  },
  {
    id: 3,
    title: "NO-SHOW POLICIES",
    description: "Should you no-show to a Beatbike class you reserved using a class credit, you will be charged a $15 no-show fee. If you do not have a working card on file, the credit will be forfeited. Should you no-show to a Beatbike class you reserved using an unlimited membership, you will be charged a $15 no-show fee. If you do not have a working card on file, your account will be frozen until you update your card. Once we update your card on file, the $15 no-show fee will be charged and your account will be reinstated. Please be aware that we release bikes EXACTLY two minutes before the start of class to those on the waitlist. If you are running late, please call the studio and speak with a front desk staff member to ensure we hold your bike. If you check in to class via the app and do not come to class, you’ll be charged in accordance with the details above."
  },
  {
    id: 4,
    title: "WAITLIST POLICY",
    description: "If you book multiple classes or waitlist multiple classes, you are solely responsible for canceling your classes within the bounds of the cancellation policy. Beatbike staff cannot be held responsible for accidental bookings by clients or double bookings or double waitlisted classes made by clients. Late cancel and no-show fees apply if you do not cancel within the bounds of the cancellation policy for double bookings.The system will auto-populate clients into class from the waitlist as other clients with confirmed spots cancel and bikes will be assigned as such. Beatbike staff will add walk-in, waitlisted clients in the order in which they were added to the waitlist by the computer system, top to bottom, and EXACTLY 2 minutes before the start of class. There is no waitlist priority given for early arrival."
  },
  {
    id: 5,
    title: "RETURN AND EXCHANGE POLICY",
    description: "We offer account credit for unused purchases of classes and memberships. If you have a circumstance under which you need a refund, please contact info@beatbike.com with your inquiry. All retail may be returned within 14 days of the date of purchase, unworn, free from any marks or stains, and all original tags attached."
  },
  {
    id: 6,
    title: "AUTO-DEBITED CONTRACTS & UNLIMITED MEMBERSHIPS",
    description: "I, the Client, authorize Beatbike to, on a recurring basis, automatically charge the debit or credit card account I specified, for monthly payments due on my unlimited auto-debit plan associated with my account. I understand that Beatbike will initiate transfers/charges pursuant to this authorization not to exceed the amount shown on my auto-debit contract and/or in connection with cancellation fees according to the Beatbike cancellation policy. Beatbike will initiate charges each month on the date my contract is set to renew. Beatbike may discontinue processing of recurring charges if the Company is unable to secure funds from my debit or credit card I have authorized due to, but not limited to, insufficient or uncollected funds in the account or insufficient or inaccurate information I provided. CANCELLING: You may cancel any Beatbike unlimited membership at any time. In studio memberships are billed on a month-to-month basis. You can call your home studio if you need assistance with cancellations. By continuing to use our services, you agree to the statements above regarding auto-debited contracts and unlimited memberships."
  },
  {
    id: 7,
    title: "WHAT TO EXPECT IN CLASSES AT BEATBIKE",
    description: "Beatbike conducts high intensity, choreographed, cardio classes on a stationary bicycle. Please be aware that temperatures may reach 85° in certain classes. Music will be played which may contain explicit language. If you are sensitive to heat or explicit music, please check with our front desk staff to find the right instructor to meet your needs. Be aware that riding an indoor cycle with little to no resistance can be harmful and result in injury. Please keep resistance on the bike at all times. Please note that riders must be 4’11” at the minimum to participate in classes at Beatbike. Additionally, we ask that you remove your indoor cycling shoes and walk with caution in Beatbike facilities. They are not made to walk in and can easily break or cause you to slip if not careful."
  },
  {
    id: 8,
    title: 'WAIVER AND RELEASE',
    description: `When you visit Beatbike or send emails to us, you are communicating with us electronically, and therefore consent to receive communications from us electronically. We will communicate with you by email or by posting notices on this website. You agree that all agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing. By signing up for and/or attending Beatbike classes, activities, and other programs, and using Beatbike’s premises, facilities, and equipment (collectively, "Classes and Facilities"), you hereby agree that there are certain inherent risks and dangers in indoor cycling and exercise and in using indoor cycling and exercise equipment in association with the Classes and Facilities. Please be aware that riding an indoor cycle with little to no resistance can be harmful and result in injury. Please keep resistance on the bike at all times. In consideration of being allowed to participate in and access the Classes and Facilities provided by Beatbike, in addition to the payment of any fee or charge, you hereby (1) agree to assume full responsibility for any and all injuries or damage which are sustained or aggravated by you in relation to the Classes and Facilities, (2) waive, release, and forever discharge Beatbike, its officers, agents, members, employees, representatives, and all others from any and all responsibility, claims, rights, causes of action, and/or liability from injuries or damages to your person or property resulting from your participation in and use of the Classes and Facilities, and (3) represent you have no medical or physical condition which would prevent you from attending and/or using any of Beatbike’s Classes and Facilities and/or put you in any physical or medical danger, and have not been instructed by a physician not to do so. In addition, if in the opinion of Beatbike staff, you would be at physical risk using Beatbike’s Classes and Facilities, you will be denied access to Beatbike and its classes and facilities until you furnish Beatbike with an opinion letter from your medical doctor, at your sole cost and expense, specifically addressing Beatbike’s concerns, and stating that Beatbike’s concerns are unfounded. Beatbike may photograph and record you. They may publish and distribute these photographs and recordings in connection with your participation in Beatbike activities and your attendance at Beatbike facilities. By acknowledging these terms, you agree and consent that Beatbike may display these photographs and recordings through our website and social media channels.`
  },
  {
    id: 9,
    title: "INTELLECTUAL PROPERTY RIGHTS",
    description: `“Beatbike” and the Beatbike logo and other graphics, logos, designs, page headers, button icons, and scripts are service marks, trademarks, and/or trade dress of Beatbike and may not be used by you for any reason other than as expressly permitted by these terms. You have the right to view, electronically copy, and print in hard copy portions of this Website for the sole purpose of making class reservations or other personal use. Any other use of the materials on this Website without the prior written permission of Beatbike is strictly prohibited.`
  },
  {
    id: 10,
    title: "DISCLAIMERS",
    description: `In no event shall Beatbike, its officers, directors, employees, or agents, be liable to you for any direct, indirect, incidental, special, punitive, or consequential damages whatsoever resulting from any (1) errors, mistakes, or inaccuracies of content, (2) personal injury, illness, or property damage, of any nature whatsoever, resulting from your access to and use of our website, (3) any unauthorized access to or use of our secure servers and/or any and all personal information and/or financial information stored therein, (4) any interruption or cessation of transmission to or from our website, (5) any bugs, viruses, Trojan horses, or the like, which may be transmitted to or through our site by any third party, and/or (6) any errors or omissions in any content or for any loss or damage of any kind incurred as a result of your use of any content posted, emailed, transmitted, or otherwise made available via the Beatbike website, whether based on warranty, contract, tort, or any other legal theory, and whether or not the company is advised of the possibility of such damages. The foregoing limitation of liability shall apply to the fullest extent permitted by law in the applicable jurisdiction. You specifically acknowledge that Beatbike shall not be liable for user submissions or the defamatory, offensive, or illegal conduct of any third party and that the risk of harm or damage from the foregoing rests entirely with you. Beatbike may revise these terms and conditions by updating this posting. By using this Website, you agree to be bound by any such revisions and should therefore periodically visit this page to determine the then-current Terms and Conditions to which you are bound.`
  }
]

function TermsOfService() {
  return (
    <div className={mulish.className}>
        <div className=" bg-white pt-7 pb-[68px] px-[48px] sm:px-[72px]">
          <div className="flex justify-center items-center py-3">
            <h1 className="text-3xl font-bold">Terms Of Service</h1>
          </div>
          <div className="py-4">
            <h4 className="pb-4">Please read these Terms and Conditions carefully, as they contain important information regarding your legal rights, remedies, and obligations. By using this website, you are deemed to have read and agreed to the following Terms and Conditions.</h4>
            <h4>The Beatbike website allows users to receive information about Beatbike, book classes, cancel reservations, and pay for services and products offered at Beatbike facilities.</h4>
          </div>

          <div className="py-2">
            {termsOfService.map((term) => (
              <div key={term.id} className="py-4">
                <h4 className="text-xl font-bold pb-2">{term.title}</h4>
                <p className="leading-relaxed">{term.description}</p>
              </div>
            
            ))}
          </div>
          <div>
            <h2>Beatbike LLC</h2>
            <h2>18700 Ventura Blvd</h2>
            <h2>Tarzana, CA 91356</h2>
            <h2>818-342-6030</h2>
          </div>
        </div>
    </div>
  )
}

export default TermsOfService;