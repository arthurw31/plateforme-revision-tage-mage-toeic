/* Compréhension écrite — banque étendue (Part 7 et Part 6).

   Part 7 est la plus grosse partie du TOEIC : 54 questions sur 200. Elle se
   joue sur trois formats que l'examen mélange, et qu'on retrouve ici :
     - textes simples      : 10 documents, 29 questions
     - doubles textes      : 2 séries de 5 questions, à croiser
     - triples textes      : 3 séries de 5 questions, à croiser
   Les types de questions propres à Part 7 sont représentés : but du document,
   détail, inférence (« What is suggested… »), sens d'un mot en contexte,
   intention d'un message court, et insertion de phrase.

   Part 6 : chaque texte compte quatre blancs, dont un est une phrase entière
   à insérer — c'est le format réel depuis la refonte de 2016. */

'use strict';

/* ===================== Part 7 — textes simples ===================== */

const READING_SINGLE = [
  {
    title: "Avis — Coupure d'eau",
    type: 'Avis',
    passage: `NOTICE TO ALL RESIDENTS — Brookfield Tower

Date: June 8

Please be advised that the water supply to the entire building will be shut off on Tuesday, June 14, from 8:00 A.M. until approximately 4:00 P.M. This interruption is necessary so that contractors can replace the main valve in the basement, which has been leaking since April.

We strongly recommend that residents fill containers with water the night before. Residents on floors 10 through 18 should also expect reduced pressure on Wednesday morning while the system is refilled.

The laundry room and the ground-floor gym will remain closed for the whole day on June 14. The gym will reopen on June 15 at 6:00 A.M.

We apologize for the inconvenience. For urgent matters on the day, call the building manager at 555-0133.`,
    questions: [
      { text: "Why is the water being shut off?",
        choices: ["To clean the laundry room", "To replace a faulty valve", "To install a new gym", "To test the fire alarm system"],
        answer: 1,
        expl: "« contractors can replace the main valve in the basement, which has been leaking » — c'est la raison donnée. La buanderie et la salle de sport sont des conséquences, pas la cause." },
      { text: "What are residents advised to do?",
        choices: ["Leave the building on June 14", "Store water in advance", "Contact the contractors directly", "Use the gym before 6:00 A.M."],
        answer: 1,
        expl: "« We strongly recommend that residents fill containers with water the night before. »" },
      { text: "What is indicated about the gym?",
        choices: ["It will be closed for two days.", "It will move to the basement.", "It will reopen the following morning.", "It will stay open with reduced hours."],
        answer: 2,
        expl: "Fermée toute la journée du 14, elle rouvre « on June 15 at 6:00 A.M. » — soit le lendemain matin." }
    ]
  },
  {
    title: "Publicité — Espace de coworking",
    type: 'Publicité',
    passage: `THE LOFT — Flexible workspace in the heart of Clayton

Tired of working at your kitchen table? The Loft offers 120 desks, eight soundproof meeting rooms, and unlimited filtered coffee, seven days a week.

MEMBERSHIP OPTIONS
• Day pass — $25. Access from 8 A.M. to 8 P.M. No booking required.
• Flex (10 days per month) — $180. Desks on a first-come basis.
• Resident — $390 per month. Your own fixed desk, 24-hour access, and two hours of meeting-room credit each week.

SPECIAL OFFER: Sign up for a Resident membership before September 30 and pay no joining fee (normally $75). Mention code LOFT-SEP when you register online.

Students receive 20% off any membership on presentation of a valid student card. This discount cannot be combined with other offers.

Visit theloft-clayton.com or drop in for a free tour any weekday afternoon.`,
    questions: [
      { text: "What is NOT mentioned as a feature of The Loft?",
        choices: ["Meeting rooms", "Free coffee", "On-site parking", "Weekend opening"],
        answer: 2,
        expl: "Salles de réunion, café illimité et ouverture sept jours sur sept sont cités ; le parking n'apparaît nulle part. Les questions « NOT » se traitent en éliminant ce qu'on retrouve dans le texte." },
      { text: "What is required to receive the special offer?",
        choices: ["Registering before a certain date", "Buying a day pass first", "Showing a student card", "Taking a tour of the building"],
        answer: 0,
        expl: "« Sign up for a Resident membership before September 30 » — l'offre est conditionnée à la date. Le code n'est que le moyen de l'appliquer." },
      { text: "What is suggested about the student discount?",
        choices: ["It applies only to day passes.", "It cannot be used with the September offer.", "It is available to students under 25 only.", "It replaces the joining fee."],
        answer: 1,
        expl: "« This discount cannot be combined with other offers » : l'offre de septembre étant une autre offre, les deux ne se cumulent pas. Question d'inférence typique." }
    ]
  },
  {
    title: "Messages — Livraison en retard",
    type: 'Messagerie',
    passage: `Daniel Okoye [10:38 A.M.]
Marta, the printer order for the Henderson account hasn't arrived. The client expects the brochures tomorrow at nine.

Marta Vieira [10:40 A.M.]
I spoke to the supplier an hour ago. Their van broke down outside Greenfield.

Daniel Okoye [10:41 A.M.]
Can they put it on another vehicle? We can't miss this deadline.

Marta Vieira [10:42 A.M.]
I'm on it. Give me twenty minutes.

Daniel Okoye [10:43 A.M.]
Thanks. If it can't reach us by six tonight, I'd rather we print the job in-house and absorb the cost.

Marta Vieira [11:05 A.M.]
Sorted — a courier is collecting the boxes now, arriving 4:30 this afternoon. No extra charge.

Daniel Okoye [11:06 A.M.]
Perfect. I'll tell the client it's on schedule.`,
    questions: [
      { text: "At 10:42 A.M., what does Ms. Vieira most likely mean when she writes, “I'm on it”?",
        choices: ["She is travelling in the delivery van.", "She will handle the problem immediately.", "She agrees with the client's complaint.", "She has already printed the brochures."],
        answer: 1,
        expl: "« I'm on it » = je m'en occupe tout de suite. Ces questions d'intention portent toujours sur une expression idiomatique : lis les deux messages qui précèdent et celui qui suit pour la situer." },
      { text: "What problem is being discussed?",
        choices: ["A client has cancelled an order.", "A delivery has been delayed by a vehicle breakdown.", "The brochures contain printing errors.", "The supplier has raised its prices."],
        answer: 1,
        expl: "« Their van broke down outside Greenfield » — la panne explique le retard." },
      { text: "What was Mr. Okoye prepared to do?",
        choices: ["Cancel the Henderson account", "Print the brochures at his own company", "Collect the boxes himself", "Postpone the client meeting"],
        answer: 1,
        expl: "« I'd rather we print the job in-house and absorb the cost » — il envisageait d'imprimer sur place. Attention : c'était une option, finalement inutile." }
    ]
  },
  {
    title: "Article — Expansion d'une chaîne de boulangeries",
    type: 'Article',
    passage: `MILLBROOK — Rosegate Bakery, which opened a single shop on Carver Street eleven years ago, will open four new locations across the region before the end of the year.

— [1] — The company's founder, Aminata Diallo, said the decision followed two years of steady growth in wholesale orders from hotels and restaurants. "We were turning away business every week," she said. "At some point you either grow or you disappoint people."

The new shops, in Danforth, Oakvale, Pell City and West Millbrook, will each employ between nine and fourteen staff. — [2] — Ms. Diallo confirmed that all production will remain at the original Carver Street site, which is being enlarged to roughly double its current capacity.

— [3] — Industry analyst Peter Lund called the strategy prudent. "Centralised baking keeps quality consistent, and it means the new shops cost far less to fit out," he noted. "The risk, of course, is distribution. One bad winter and four shops have nothing on the shelves."

Rosegate expects to recruit about fifty people in total. — [4] — Applications open on the company website on October 1.`,
    questions: [
      { text: "What is the article mainly about?",
        choices: ["A bakery's plan to expand", "A shortage of skilled bakers", "The closure of a production site", "A change of ownership at Rosegate"],
        answer: 0,
        expl: "Le premier paragraphe donne le sujet : quatre nouvelles boutiques. Le reste développe. En Part 7, le but du document est presque toujours dans les deux premières lignes." },
      { text: "What does Ms. Diallo say about the company's recent situation?",
        choices: ["It lost several restaurant clients.", "It could not meet all the demand it received.", "It reduced its wholesale prices.", "It struggled to find a new location."],
        answer: 1,
        expl: "« We were turning away business every week » = elle refusait des commandes faute de capacité. Reformulation classique : « turning away business » → « could not meet all the demand »." },
      { text: "What concern does Mr. Lund raise?",
        choices: ["The cost of fitting out new shops", "The quality of the baking", "The reliability of deliveries", "The difficulty of recruiting staff"],
        answer: 2,
        expl: "« The risk, of course, is distribution. One bad winter and four shops have nothing on the shelves. » Les autres points sont présentés comme des avantages." },
      { fixed: true,
        text: "In which of the positions marked [1], [2], [3] and [4] does the following sentence best belong?\n\n“Most of these roles will be in sales rather than production.”",
        choices: ["[1]", "[2]", "[3]", "[4]"],
        answer: 3,
        expl: "La phrase précise la nature des postes : elle doit suivre « Rosegate expects to recruit about fifty people in total », seule mention d'un recrutement chiffré. En [2], le chiffre de cinquante n'a pas encore été donné." }
    ]
  },
  {
    title: "Note de service — Notes de frais",
    type: 'Note interne',
    passage: `MEMORANDUM

To: All department heads
From: Yusuf Rahman, Finance Director
Date: 2 November
Subject: Changes to expense claims

From 1 December, all expense claims must be submitted through the Vantage portal rather than by e-mail. Paper receipts will no longer be accepted; please photograph each receipt and upload the image with your claim.

Claims must be submitted within thirty days of the expense being incurred. Anything older than thirty days will require written approval from your director before Finance can process it.

Reimbursements will be paid twice monthly, on the 15th and the last working day, provided the claim was approved at least three working days beforehand.

Training sessions on the new portal will be held on 18 and 21 November at 10 A.M. in Room B2. Attendance is not compulsory, but department heads are asked to ensure that at least one person from each team attends.

Please forward this memo to your teams.`,
    questions: [
      { text: "What change takes effect on 1 December?",
        choices: ["Expenses must be claimed online.", "Reimbursements will be paid weekly.", "Paper receipts must be posted to Finance.", "Directors will approve all claims."],
        answer: 0,
        expl: "« all expense claims must be submitted through the Vantage portal rather than by e-mail »." },
      { text: "What happens to a claim submitted forty days after the expense?",
        choices: ["It is automatically rejected.", "It needs a director's written approval.", "It is paid at the end of the month.", "It must be resubmitted on paper."],
        answer: 1,
        expl: "« Anything older than thirty days will require written approval from your director » — quarante jours dépasse le délai. Le texte ne dit jamais que la demande est rejetée : piège fréquent." },
      { text: "What are department heads asked to do about the training?",
        choices: ["Attend both sessions themselves", "Send at least one team member", "Book a room for their team", "Record the session for absent staff"],
        answer: 1,
        expl: "« department heads are asked to ensure that at least one person from each team attends ». La présence n'est pas obligatoire pour tous (« not compulsory »)." }
    ]
  },
  {
    title: "Offre d'emploi — Coordinateur logistique",
    type: "Offre d'emploi",
    passage: `LOGISTICS COORDINATOR — Kestrel Foods, Portside

Kestrel Foods supplies fresh produce to more than 300 restaurants in the metropolitan area. We are seeking a Logistics Coordinator to join our operations team.

Responsibilities
• Plan daily delivery routes for a fleet of eighteen refrigerated vans
• Liaise with growers to confirm quantities and collection times
• Monitor temperature compliance records and report irregularities
• Cover the dispatch desk on alternate Saturdays

Requirements
• At least two years' experience in transport planning or warehouse operations
• Confident use of routing software; we currently use TrackLine
• A full driving licence
• Fluency in a second language is an advantage but not essential

We offer a salary of $48,000–$54,000 depending on experience, 25 days of annual leave, and a staff discount on all produce.

To apply, send a CV and a short covering letter to careers@kestrelfoods.com by 20 May. Interviews will take place during the first week of June. Candidates who have not heard from us by 10 June should assume their application has been unsuccessful.`,
    questions: [
      { text: "What is one of the position's duties?",
        choices: ["Training new drivers", "Checking temperature records", "Negotiating restaurant contracts", "Repairing refrigeration units"],
        answer: 1,
        expl: "« Monitor temperature compliance records and report irregularities »." },
      { text: "What is stated about the language requirement?",
        choices: ["Two languages are required.", "It is preferred but not mandatory.", "It applies only to Saturday staff.", "It will be tested at interview."],
        answer: 1,
        expl: "« an advantage but not essential » — formule à repérer : elle signale toujours un critère souhaité, non exigé." },
      { text: "What should applicants do if they hear nothing by 10 June?",
        choices: ["Call the operations team", "Send their CV again", "Consider their application rejected", "Wait until the end of June"],
        answer: 2,
        expl: "« should assume their application has been unsuccessful »." }
    ]
  },
  {
    title: "Lettre — Excuses et bon d'achat",
    type: 'Lettre',
    passage: `Haverstock & Lane
14 Mill Road, Ashton

8 February

Dear Mr. Petrov,

Thank you for contacting us about the dining chairs you received on 29 January. I was sorry to learn that two of the six chairs arrived with damaged legs.

I have arranged for replacements to be dispatched from our Ashton warehouse this week. They should reach you by 15 February, and our courier will collect the damaged items at the same time. You do not need to repackage them; the driver will bring protective covers.

I understand this has caused you inconvenience, particularly as you mentioned you were expecting guests. Please accept the enclosed voucher for $60, which may be used on any purchase in store or online. It does not expire.

I should add that we have changed the packaging on this product since your order, as yours was not the only report of damage in transit.

Yours sincerely,

Helena Marsh
Customer Relations Manager`,
    questions: [
      { text: "Why was the letter written?",
        choices: ["To confirm a new order", "To respond to a complaint", "To announce a price change", "To request a product return fee"],
        answer: 1,
        expl: "La lettre répond à un signalement de chaises abîmées et propose une solution : c'est une réponse à réclamation." },
      { text: "What is Mr. Petrov asked to do?",
        choices: ["Repackage the damaged chairs", "Return the chairs to the store himself", "Nothing — the courier will handle it", "Pay a collection charge"],
        answer: 2,
        expl: "« You do not need to repackage them; the driver will bring protective covers. » Les trois autres réponses sont explicitement exclues." },
      { text: "What does Ms. Marsh suggest about the damage?",
        choices: ["It happened in the customer's home.", "Other customers have reported it too.", "It was caused by the courier company.", "It affected all six chairs."],
        answer: 1,
        expl: "« yours was not the only report of damage in transit » — litote signifiant que d'autres clients ont signalé le même problème." }
    ]
  },
  {
    title: "Programme — Journée d'étude",
    type: 'Programme',
    passage: `NORTHBRIDGE RETAIL FORUM — Thursday 3 October
Venue: Harbour Conference Centre, Hall C

08:30  Registration and coffee — Foyer
09:00  Opening remarks — Ingrid Sollberg, Forum Chair
09:15  Keynote: "What shoppers actually do" — Dr. Tomás Keller, Vinter University
10:30  Break
11:00  Panel: Small retailers and same-day delivery
12:15  Lunch — Terrace restaurant (included)
13:30  Parallel workshops (choose one at registration)
       A. Pricing in a high-inflation market — Room C2
       B. Building a loyalty programme that works — Room C4
       C. Visual merchandising on a small budget — Room C6
15:00  Break
15:20  Case study: How Marlow Hardware doubled its online sales
16:15  Closing panel and questions
17:00  Networking reception — Foyer

Notes: Workshop places are limited to 40 and are allocated in order of registration. Delegates who registered after 20 September will be assigned a workshop and notified by e-mail. Parking at the Centre must be booked separately.`,
    questions: [
      { text: "What is included in the forum fee?",
        choices: ["Parking at the Centre", "The midday meal", "Accommodation nearby", "A recording of the keynote"],
        answer: 1,
        expl: "« Lunch — Terrace restaurant (included) ». Le parking est au contraire « booked separately »." },
      { text: "How are workshop places assigned?",
        choices: ["By order of registration", "By a random draw", "By the delegate's job title", "On the morning of the event"],
        answer: 0,
        expl: "« allocated in order of registration »." },
      { text: "What is indicated about delegates who registered on 25 September?",
        choices: ["They cannot attend a workshop.", "They will be given a workshop by the organisers.", "They must pay an additional fee.", "They should arrive at 13:30."],
        answer: 1,
        expl: "Le 25 septembre est postérieur au 20 : « Delegates who registered after 20 September will be assigned a workshop ». Question de date, à vérifier au calendrier plutôt qu'à l'intuition." }
    ]
  },
  {
    title: "Avis en ligne et réponse",
    type: 'Avis client',
    passage: `★★☆☆☆  Posted by J. Almeida — 12 April

Stayed three nights at the Riverbend Inn for a work trip. The location is genuinely excellent — ten minutes' walk from the station and from most of the restaurants in the old town. The room was spotless and the bed was comfortable.

What let it down was breakfast. It's advertised as running until 10 A.M., but on two of the three mornings the hot food was cleared away before 9:15 and nothing was replaced. When I mentioned it, I was told the kitchen was short-staffed. For $140 a night I'd expect what's advertised to actually be available.

I'd stay again if this were fixed, but I'd book breakfast elsewhere for now.

— Response from the Riverbend Inn, 14 April —

Mr. Almeida, thank you for taking the time to write, and I'm glad the room itself met your expectations. You are right about breakfast and I won't make excuses: we were two staff short that week and we should have said so at check-in rather than letting guests discover it.

We have since recruited two additional kitchen staff and hot food is now replenished until 9:50. I've credited one night's breakfast charge back to your card. I hope you'll give us another try.

Oriane Castel, General Manager`,
    questions: [
      { text: "What did Mr. Almeida like about the hotel?",
        choices: ["The breakfast selection", "The price of the rooms", "The cleanliness and location", "The service at check-in"],
        answer: 2,
        expl: "« The location is genuinely excellent […] The room was spotless » — deux points positifs. Le prix est au contraire cité comme un grief." },
      { text: "What does Ms. Castel say the hotel should have done?",
        choices: ["Offered a free night", "Informed guests of the problem on arrival", "Extended breakfast until 10:30", "Closed the restaurant for the week"],
        answer: 1,
        expl: "« we should have said so at check-in rather than letting guests discover it »." },
      { text: "What has the hotel done since the stay?",
        choices: ["Hired more kitchen staff", "Raised its room rates", "Moved breakfast to a nearby café", "Changed its general manager"],
        answer: 0,
        expl: "« We have since recruited two additional kitchen staff »." }
    ]
  },
  {
    title: "Confirmation de commande",
    type: 'Facture',
    passage: `ORDWAY OFFICE SUPPLIES — Order confirmation

Order number: 44-20719
Date: 17 August
Customer: Linwood Architects, 3rd floor, 88 Garrick Street
Account: LIN-0042

Item                               Qty    Unit     Total
A3 plotter paper, 90 gsm (box)       6   $42.00   $252.00
Archival storage tubes               20    $6.50   $130.00
Drafting pencils, 0.5 mm (pack)      12    $9.00   $108.00
Replacement cutting mats, A2          4   $28.00   $112.00
                                            Subtotal  $602.00
                        Account discount (8%)        –$48.16
                                 Delivery (standard)   $0.00
                                               TOTAL  $553.84

Delivery: standard delivery is free on orders above $250 and takes three to five working days. Your order is scheduled to leave our depot on 19 August.

Please note: the A2 cutting mats are temporarily out of stock and will be sent separately at no extra charge when they arrive, expected early September. You have not been charged twice for delivery.

Payment is due thirty days from the date of this confirmation. Queries: accounts@ordway.example — quote your order number.`,
    questions: [
      { text: "Why was no delivery charge applied?",
        choices: ["The customer has a discount account.", "The order total exceeded $250.", "The items were collected in person.", "The order was delayed."],
        answer: 1,
        expl: "« standard delivery is free on orders above $250 ». La remise de compte est une réduction distincte, sans rapport avec la livraison." },
      { text: "What is indicated about the cutting mats?",
        choices: ["They have been removed from the order.", "They will arrive later at no extra cost.", "They must be ordered again in September.", "They were replaced with a different size."],
        answer: 1,
        expl: "« will be sent separately at no extra charge when they arrive »." },
      { text: "By when should Linwood Architects pay?",
        choices: ["19 August", "Early September", "16 September", "Within five working days"],
        answer: 2,
        expl: "« thirty days from the date of this confirmation », soit trente jours après le 17 août → le 16 septembre. Les questions de calcul de date sont fréquentes sur les factures." }
    ]
  }
];

/* ===================== Part 7 — doubles textes =====================
   Deux documents à croiser. Au moins une question par série exige de
   combiner une information de chaque texte : c'est là que se perdent les
   points, et c'est l'entraînement qui manque le plus souvent. */

const READING_DOUBLE = [
  {
    title: "Atelier de formation + inscription",
    type: 'Double',
    passage: `DOCUMENT 1 — Announcement

PRESENTING WITH CONFIDENCE — a one-day workshop
Saturday 11 March, 9:30 A.M. – 4:30 P.M.
Delmar Institute, Room 210

Led by Cécile Aubert, who has trained speakers at conferences across Europe for fifteen years, this workshop covers structure, voice, handling difficult questions, and working without slides.

Places are limited to sixteen so that every participant can present twice and receive individual feedback. Participants should bring a five-minute talk on any subject of their choosing; it does not need to be work-related.

Fee: $210, which includes lunch and a printed workbook.
Early booking: $175 if paid before 10 February.
Members of the Institute: a further 10% off either rate.

To book, e-mail registrations@delmar.example with your name, telephone number, and any dietary requirements. Payment details will be sent by return.

────────────────────────────────────────

DOCUMENT 2 — E-mail

From: n.babic@brightwell.example
To: registrations@delmar.example
Date: 6 February
Subject: Booking — 11 March workshop

Dear colleagues,

I would like to book a place on the Presenting with Confidence workshop on 11 March. My telephone number is 555-0178. I am vegetarian, and I should mention a severe nut allergy — I would be grateful if the caterers could confirm what is in the lunch.

I joined the Institute in November, so I believe I qualify for the member rate.

One further question: I have to collect my daughter at 4 P.M. that day. Would it be possible to present my second talk in the morning session so that I can leave slightly early? I understand if not.

Kind regards,
Nina Babic`,
    questions: [
      { text: "What is indicated about the workshop?",
        choices: ["It is intended for experienced speakers only.", "Each participant will speak more than once.", "It takes place over two days.", "Slides must be prepared in advance."],
        answer: 1,
        expl: "« every participant can present twice » (document 1). L'atelier traite au contraire de la prise de parole « working without slides »." },
      { text: "How much will Ms. Babic most likely pay?",
        choices: ["$210", "$189", "$175", "$157.50"],
        answer: 3,
        expl: "Question à croiser : elle écrit le 6 février, donc avant le 10 → tarif à 175 $ ; membre depuis novembre → 10 % de moins → 157,50 $. Ni l'un ni l'autre document ne donne ce chiffre : il faut combiner les deux." },
      { text: "What does Ms. Babic ask the Institute to check?",
        choices: ["The address of the venue", "The contents of the lunch", "The number of places left", "The start time of the workshop"],
        answer: 1,
        expl: "« I would be grateful if the caterers could confirm what is in the lunch » — à cause de l'allergie aux fruits à coque." },
      { text: "What does Ms. Babic request?",
        choices: ["A refund if she cannot attend", "To bring her daughter to the workshop", "To give her second talk before the afternoon", "A copy of the workbook in advance"],
        answer: 2,
        expl: "« Would it be possible to present my second talk in the morning session » — pour pouvoir partir un peu avant 16 h 30." },
      { text: "What is suggested about Ms. Babic's talk?",
        choices: ["It must concern her job.", "It may be on any topic she likes.", "It will be recorded by the Institute.", "It should last thirty minutes."],
        answer: 1,
        expl: "Document 1 : « a five-minute talk on any subject of their choosing; it does not need to be work-related »." }
    ]
  },
  {
    title: "Confirmation d'hôtel + réclamation",
    type: 'Double',
    passage: `DOCUMENT 1 — Booking confirmation

ALDERGROVE HOTEL
Reservation 7G-5521

Guest: Mr. Samir Haddad
Arrival: Monday 4 September — Departure: Thursday 7 September (3 nights)
Room type: Executive Double, non-smoking, high floor
Rate: $165 per night, breakfast included
Total: $495

Included with Executive rooms: airport shuttle (both directions), late checkout until 2 P.M., and access to the business lounge on the 9th floor, open 6 A.M. – 10 P.M.

Check-in from 3 P.M. Should you arrive earlier, luggage may be left with reception at no charge.

Cancellation: free until 48 hours before arrival. After that, one night's charge applies.

────────────────────────────────────────

DOCUMENT 2 — E-mail

From: s.haddad@nortonlaw.example
To: guestrelations@aldergrove.example
Date: 8 September
Subject: Reservation 7G-5521 — two issues

Dear Guest Relations,

I checked out yesterday and wanted to raise two points while they are fresh.

First, I was given a room on the second floor despite booking a high floor. Reception explained that the hotel was full, which I accept, but nobody told me at check-in — I only discovered it when I reached the room, and I made two trips back down with my cases.

Second, and more importantly, I was charged $40 for the airport shuttle on my departure. My confirmation states that the shuttle is included in both directions for Executive rooms. I have attached the receipt.

The breakfast and the business lounge were both excellent, and the night staff could not have been more helpful. I would simply like the shuttle charge refunded.

Regards,
Samir Haddad`,
    questions: [
      { text: "What is included with an Executive room?",
        choices: ["Free parking", "Transport to and from the airport", "Dinner in the restaurant", "A room on the ninth floor"],
        answer: 1,
        expl: "« airport shuttle (both directions) » (document 1). Le 9ᵉ étage est celui du salon d'affaires, pas de la chambre." },
      { text: "What is Mr. Haddad's main complaint?",
        choices: ["He was charged for a service that should have been free.", "His room was not cleaned.", "He was refused late checkout.", "The business lounge was closed."],
        answer: 0,
        expl: "Il le dit lui-même : « Second, and more importantly, I was charged $40 for the airport shuttle ». Le mot « more importantly » désigne le grief principal." },
      { text: "What does Mr. Haddad accept about the room?",
        choices: ["That he booked the wrong type", "That the hotel had no higher rooms available", "That he arrived before 3 P.M.", "That the rate had changed"],
        answer: 1,
        expl: "« Reception explained that the hotel was full, which I accept » — ce qu'il reproche est l'absence d'information, pas la situation." },
      { text: "How long did Mr. Haddad stay at the hotel?",
        choices: ["Two nights", "Three nights", "Four nights", "One week"],
        answer: 1,
        expl: "Document 1 : du 4 au 7 septembre, « (3 nights) »." },
      { text: "What does Mr. Haddad praise?",
        choices: ["The airport shuttle driver", "The check-in process", "The breakfast and the night staff", "The second-floor rooms"],
        answer: 2,
        expl: "« The breakfast and the business lounge were both excellent, and the night staff could not have been more helpful. »" }
    ]
  }
];

/* ===================== Part 7 — triples textes =====================
   Trois documents. Le piège habituel : la bonne réponse est dans le
   troisième document, mais il faut le premier pour savoir laquelle lire. */

const READING_TRIPLE = [
  {
    title: "Tarifs fournisseur + commande + confirmation",
    type: 'Triple',
    passage: `DOCUMENT 1 — Price list

HOLLOWAY PACKAGING — Trade price list, valid 1 January – 30 June

Reference   Product                        Pack of   Price per pack
HP-110      Kraft mailing boxes, small       200      $84.00
HP-140      Kraft mailing boxes, medium      150      $96.00
HP-180      Kraft mailing boxes, large       100      $110.00
HP-220      Padded envelopes, A5             500      $140.00
HP-260      Paper tape, 50 mm                 36      $52.00

Orders above $600 (before tax) qualify for free delivery.
Orders above $1,200 (before tax) receive an additional 5% trade discount.
Lead time is four working days from receipt of a purchase order.

────────────────────────────────────────

DOCUMENT 2 — E-mail

From: purchasing@vellumbooks.example
To: sales@holloway.example
Date: 12 April
Subject: Purchase order VB-3318

Good afternoon,

Please supply the following against our account:
  • 6 packs of HP-140
  • 4 packs of HP-180
  • 3 packs of HP-260

We are moving warehouses on 24 April, so I would be grateful if this could reach us at the Fenwick Road address no later than 22 April. If that is not achievable, please hold the order and deliver to the new address (Unit 9, Calder Industrial Estate) during the week of 28 April instead — a part-delivery would create more problems than it solves.

Many thanks,
Owen Tsai, Purchasing

────────────────────────────────────────

DOCUMENT 3 — E-mail

From: sales@holloway.example
To: purchasing@vellumbooks.example
Date: 13 April
Subject: RE: Purchase order VB-3318

Dear Mr. Tsai,

Thank you for your order, which comes to $1,088 before tax. Delivery is therefore free of charge, though the order falls just below the threshold for the trade discount — adding two further packs of HP-260 would take you above it, should that be useful.

I can confirm dispatch for 19 April, which means delivery to Fenwick Road on 20 April, comfortably before your move.

One correction: HP-260 is now supplied in packs of 48 rather than 36, at $58 per pack. The figure above reflects the new price.

Kind regards,
Priya Raman`,
    questions: [
      { text: "What is the purpose of the first e-mail?",
        choices: ["To request a price list", "To place an order", "To complain about a delivery", "To change a warehouse address"],
        answer: 1,
        expl: "« Please supply the following against our account » suivi d'une liste : c'est un bon de commande." },
      { text: "Why will Vellum Books not receive the trade discount?",
        choices: ["Its account is new.", "Its order is below $1,200.", "It ordered during a promotion.", "It requested a split delivery."],
        answer: 1,
        expl: "Le document 1 fixe le seuil à 1 200 $ ; le document 3 chiffre la commande à 1 088 $. Il faut les deux documents pour répondre." },
      { text: "What does Ms. Raman point out about HP-260?",
        choices: ["It is no longer available.", "The pack size and price have changed.", "It must be ordered in multiples of six.", "It will be delivered separately."],
        answer: 1,
        expl: "« HP-260 is now supplied in packs of 48 rather than 36, at $58 per pack » — la liste de prix du document 1 n'est plus à jour sur cette ligne." },
      { text: "Where will the order be delivered?",
        choices: ["Fenwick Road", "Unit 9, Calder Industrial Estate", "Holloway's depot", "The address is not yet decided."],
        answer: 0,
        expl: "M. Tsai demandait Fenwick Road si la livraison tombait avant le 22 avril ; Mme Raman confirme le 20 avril. La condition est remplie, donc c'est bien la première adresse." },
      { text: "What does Ms. Raman suggest Mr. Tsai could do?",
        choices: ["Split the order in two", "Pay in advance to secure the price", "Order more paper tape to reach a discount", "Collect the goods from the depot"],
        answer: 2,
        expl: "« adding two further packs of HP-260 would take you above it » — HP-260 est le papier adhésif. Réponse à construire en reliant la référence au document 1." }
    ]
  },
  {
    title: "Programme + demande d'un intervenant + réponse",
    type: 'Triple',
    passage: `DOCUMENT 1 — Draft programme

CLEAN WATER SYMPOSIUM — Friday 9 June, Ashfield Science Park

09:00  Welcome — Dr. Ruth Nakamura
09:20  Session 1: Rural supply networks
         • Dr. Félix Moreau — Leak detection in ageing pipework
         • Ms. Hana Okada — Community-run maintenance schemes
11:00  Session 2: Industrial reuse
         • Mr. Bilal Chaudhry — Closed-loop systems in textile plants
         • Dr. Elena Varga — Measuring what we actually save
13:00  Lunch
14:00  Session 3: Policy and funding
         • Ms. Ruth Oyelaran — Who pays for the last mile?
14:45  Workshop: writing a fundable proposal
16:30  Close

Speakers are asked to keep presentations to 25 minutes, leaving 10 for questions. Slides must be sent to the organisers by 2 June.

────────────────────────────────────────

DOCUMENT 2 — E-mail

From: e.varga@tarnowski-institute.example
To: symposium@ashfieldpark.example
Date: 22 May
Subject: Session 2 — timing

Dear Dr. Nakamura,

Thank you for the draft programme. I am afraid I have a difficulty: my train from Rendell does not reach Ashfield until 11:40, so I cannot be in the room for the start of Session 2.

Would it be possible to move my talk to the afternoon? I would be happy to take any slot after lunch. Alternatively, if Mr. Chaudhry is willing, we could simply swap the order within Session 2 and I would speak second — that would need me in the room by about 11:35, which is still tight but just about workable if the train is on time.

I will send my slides well before the deadline either way.

With thanks,
Elena Varga

────────────────────────────────────────

DOCUMENT 3 — E-mail

From: symposium@ashfieldpark.example
To: e.varga@tarnowski-institute.example
Date: 23 May
Subject: RE: Session 2 — timing

Dear Dr. Varga,

Thank you for letting us know early — it is much easier to solve now than on the day.

Rather than rely on the train, we have moved you into Session 3, immediately before Ms. Oyelaran. The session will now begin at 14:00 with your talk and hers will follow. The workshop is unaffected.

I should mention that Session 3 runs to a stricter schedule because the workshop that follows is fully booked, so we will have to hold you to 25 minutes rather firmly.

Please still send the slides by 2 June.

Best wishes,
Ruth Nakamura`,
    questions: [
      { text: "What problem does Dr. Varga describe?",
        choices: ["She has lost her slides.", "She will arrive after her session begins.", "She has been given the wrong topic.", "She cannot attend the symposium at all."],
        answer: 1,
        expl: "« my train […] does not reach Ashfield until 11:40, so I cannot be in the room for the start of Session 2 » — la session 2 commence à 11 h." },
      { text: "What solution did Dr. Varga herself propose as an alternative?",
        choices: ["Speaking by video link", "Swapping places with another speaker in her session", "Cancelling the question period", "Presenting during lunch"],
        answer: 1,
        expl: "« if Mr. Chaudhry is willing, we could simply swap the order within Session 2 ». Attention : c'est son idée, pas la décision finale — les deux se confondent facilement." },
      { text: "When will Dr. Varga now speak?",
        choices: ["At 11:00", "At 13:00", "At 14:00", "At 14:45"],
        answer: 2,
        expl: "Document 3 : « The session will now begin at 14:00 with your talk ». Le document 1 plaçait 14 h 00 au début de la session 3." },
      { text: "Who will present immediately after Dr. Varga?",
        choices: ["Mr. Chaudhry", "Ms. Okada", "Ms. Oyelaran", "Dr. Moreau"],
        answer: 2,
        expl: "« immediately before Ms. Oyelaran […] hers will follow ». Il faut le document 1 pour savoir qui est Mme Oyelaran et le document 3 pour l'ordre." },
      { text: "Why does Dr. Nakamura emphasise the time limit?",
        choices: ["Because the room must be vacated at 15:00", "Because a fully booked workshop follows", "Because the lunch break has been shortened", "Because another speaker has withdrawn"],
        answer: 1,
        expl: "« Session 3 runs to a stricter schedule because the workshop that follows is fully booked »." }
    ]
  }
];

/* ===================== Part 6 — textes à trous =====================
   Format réel : quatre blancs par texte, dont un est une PHRASE entière à
   insérer. C'est le blanc qui fait perdre le plus de points, parce qu'il ne
   se résout pas par la grammaire : il faut suivre le fil du texte. */

const PART6_EXTRA = [
  {
    title: "Avis — Renouvellement d'abonnement",
    passage: `NOTICE TO MEMBERS — Calder Fitness

Your annual membership expires on 31 March. To continue without interruption, please renew (1)____ that date.

Members who renew before 15 March will keep their current rate of $46 per month. From 1 April, new and late renewals (2)____ at $52.

(3)____ You can also renew at reception, where the team will be happy to answer questions about the new classes starting in April.

We are grateful for your (4)____ support and look forward to seeing you in the gym.

The Calder Fitness Team`,
    questions: [
      { text: "Blanc (1)", choices: ["before", "during", "since", "among"], answer: 0,
        expl: "« renew before that date » = renouveler avant cette date. « since » introduirait un point de départ, ce qui est contraire au sens." },
      { text: "Blanc (2)", choices: ["price", "priced", "will be priced", "pricing"], answer: 2,
        expl: "Il faut un verbe conjugué au futur : « From 1 April, […] renewals will be priced at $52 ». Les trois autres ne peuvent pas faire verbe principal." },
      { fixed: true,
        text: "Blanc (3) — phrase à insérer",
        choices: [
          "The quickest way to renew is through your online account.",
          "Unfortunately, the gym will be closed throughout April.",
          "We regret that memberships can no longer be renewed.",
          "Please note that the swimming pool is reserved for staff."
        ],
        answer: 0,
        expl: "La phrase suivante commence par « You can ALSO renew at reception » : le « also » impose qu'une première façon de renouveler vienne d'être citée. Les trois autres contredisent le texte, qui invite à renouveler." },
      { text: "Blanc (4)", choices: ["continue", "continued", "continuing", "continuously"], answer: 1,
        expl: "Il faut un adjectif devant le nom « support » : « your continued support » est la formule figée (= votre soutien constant)." }
    ]
  },
  {
    title: "E-mail — Accueil d'un nouvel employé",
    passage: `To: t.ferreira@lambertgroup.example
Subject: Your first week

Dear Tomás,

Welcome to the Lambert Group. We are delighted that you (1)____ our analytics team.

Your first day is Monday 6 May. Please arrive at the Vine Street entrance at 9:30 and ask for me at the desk; I will meet you there and take you up to the fourth floor. Do bring photographic identification, (2)____ security cannot issue your pass without it.

Your laptop will be ready on your desk. (3)____ Alberto from IT will come by at around 11:00 to set it up with you.

The first week is deliberately light so that you can meet people. Lunch on Monday is with the wider team, and (4)____ Wednesday you will spend the morning with the client services group.

Do let me know if you have any questions before then.

Best wishes,
Priyanka Shah`,
    questions: [
      { text: "Blanc (1)", choices: ["are joining", "joined", "will have joined", "had joined"], answer: 0,
        expl: "Le premier jour est à venir (6 mai) : le présent progressif exprime un futur proche déjà arrangé — « we are delighted that you are joining our team »." },
      { text: "Blanc (2)", choices: ["as", "although", "unless", "whether"], answer: 0,
        expl: "La deuxième proposition donne la RAISON d'apporter une pièce d'identité : « as security cannot issue your pass without it » (= car). « although » marquerait une opposition, contresens." },
      { fixed: true,
        text: "Blanc (3) — phrase à insérer",
        choices: [
          "Please bring your own computer for the first month.",
          "You will not need a laptop in this role.",
          "However, you will need to choose a password when you first log in.",
          "The fourth floor is currently being refurbished."
        ],
        answer: 2,
        expl: "L'ordinateur est prêt, mais la phrase suivante annonce la venue d'un technicien : seule la mention du mot de passe fait le lien entre les deux. Les autres contredisent « Your laptop will be ready on your desk »." },
      { text: "Blanc (4)", choices: ["in", "at", "on", "by"], answer: 2,
        expl: "Devant un jour de la semaine, l'anglais emploie « on » : « on Wednesday »." }
    ]
  },
  {
    title: "Article — Ouverture d'un café",
    passage: `A new café has opened on the corner of Ellis and Fourth, in the building that (1)____ a bicycle repair shop for twenty years.

The owners, Dario and Lucy Benn, have kept much of the original interior, including the steel workbenches, which now serve as communal tables. (2)____ , they have added a small roasting room visible from the street.

The café opens at 6:30 A.M., earlier than any other business on the block, (3)____ commuters heading for the Fourth Street station.

(4)____ The Benns say they expect to add evening hours once they have hired two more staff.`,
    questions: [
      { text: "Blanc (1)", choices: ["houses", "housed", "will house", "is housing"], answer: 1,
        expl: "Les vingt ans d'atelier de vélos sont révolus — le café a pris la place. Prétérit : « the building that housed a bicycle repair shop for twenty years »." },
      { text: "Blanc (2)", choices: ["Otherwise", "Nevertheless", "In addition", "For instance"], answer: 2,
        expl: "On passe de ce qui a été conservé à ce qui a été ajouté : c'est un ajout, « In addition ». « Nevertheless » marquerait une opposition qui n'existe pas ici." },
      { text: "Blanc (3)", choices: ["a target", "targeting", "targeted", "to target"], answer: 1,
        expl: "Participe présent en apposition, pour exprimer le but et l'effet de l'horaire : « opens at 6:30 A.M. […], targeting commuters »." },
      { fixed: true,
        text: "Blanc (4) — phrase à insérer",
        choices: [
          "For now, it closes at 2 P.M.",
          "The bicycle shop has moved to Ellis Street.",
          "Parking is available behind the building.",
          "Coffee prices have risen sharply this year."
        ],
        answer: 0,
        expl: "La phrase suivante annonce l'ajout d'horaires en soirée : il faut d'abord dire que le café ferme tôt pour l'instant. « For now » s'oppose exactement à « once they have hired two more staff »." }
    ]
  },
  {
    title: "Lettre — Renouvellement d'un abonnement professionnel",
    passage: `Dear Dr. Lindqvist,

Your subscription to Materials Quarterly is due for renewal on 30 September. We hope you have found the journal (1)____ over the past year.

Institutional subscribers renewing for two years benefit from a fixed rate, (2)____ protects you from the price increase announced for next January.

(3)____ Both are included at no additional cost for print subscribers.

If you would like to renew, simply return the enclosed form or call our subscriptions office. We will (4)____ your request within three working days and send written confirmation.

Yours sincerely,

Marcus Oyola
Subscriptions`,
    questions: [
      { text: "Blanc (1)", choices: ["use", "useful", "usefully", "usefulness"], answer: 1,
        expl: "Après « found » au sens de « juger », on attend un adjectif attribut : « you have found the journal useful »." },
      { text: "Blanc (2)", choices: ["which", "who", "what", "whose"], answer: 0,
        expl: "Le relatif reprend toute la proposition précédente (le tarif fixe) : « a fixed rate, which protects you… ». « who » ne s'emploie que pour des personnes." },
      { fixed: true,
        text: "Blanc (3) — phrase à insérer",
        choices: [
          "The journal will cease publication in December.",
          "Subscribers also receive online access and the annual index.",
          "We are unable to accept payment by card.",
          "Back issues are no longer available to order."
        ],
        answer: 1,
        expl: "La phrase suivante dit « BOTH are included at no additional cost » : il faut donc que deux choses viennent d'être citées. Seule cette réponse en nomme deux (accès en ligne et index annuel)." },
      { text: "Blanc (4)", choices: ["process", "proceed", "progress", "produce"], answer: 0,
        expl: "« process your request » = traiter votre demande. « proceed » est intransitif et ne peut pas prendre « your request » comme complément — confusion très fréquente." }
    ]
  }
];
