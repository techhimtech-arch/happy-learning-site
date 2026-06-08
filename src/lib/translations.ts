export type Language = "en" | "hi";

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar & Common CTAs
    "nav.home": "Home",
    "nav.about": "About",
    "nav.programs": "Programs",
    "nav.facilities": "Facilities",
    "nav.admission": "Admission",
    "nav.gallery": "Gallery",
    "nav.testimonials": "Testimonials",
    "nav.events": "Events",
    "nav.faculty": "Faculty",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.cta": "Apply Online",
    "nav.calculator": "Fee Calculator",

    // Hero Section
    "hero.badge": "Admissions Open for Session 2026-27",
    "hero.primaryCta": "Calculate Fees",
    "hero.secondaryCta": "Admissions Form",
    "hero.stat.students": "Happy Students",
    "hero.stat.teachers": "Expert Faculty",
    "hero.stat.labs": "Modern Labs",
    "hero.stat.ratio": "Teacher Ratio",

    // About Section
    "about.eyebrow": "Welcome to Our School",
    "about.title": "Shaping Minds, Building Futures",
    "about.description": "We provide a holistic educational environment that fosters critical thinking, creativity, and moral values. Our students are empowered to excel in academics, sports, and life.",

    // Why Choose Us (Bento Section)
    "why.eyebrow": "Why Us",
    "why.title": "What Makes Us Stand Out",
    "why.tag.tech": "STEM & Robotics",
    "why.tag.safe": "100% Safe Campus",
    "why.tag.sports": "Sports Academy",
    "why.tag.library": "24/7 Library",

    // Fee Calculator Section
    "calc.eyebrow": "Smart Cost Estimator",
    "calc.title": "Interactive Tuition Fee Calculator",
    "calc.subtitle": "Select academic details, transport options, and extracurricular activities to get an instant cost summary.",
    "calc.class": "Select Student Grade / Class",
    "calc.class.placeholder": "-- Choose Grade --",
    "calc.preprimary": "Pre-Primary (Nursery - KG)",
    "calc.primary": "Primary School (Class 1-5)",
    "calc.middle": "Middle School (Class 6-8)",
    "calc.high": "High School (Class 9-10)",
    "calc.senior": "Senior Secondary (Class 11-12)",
    "calc.transport": "School Bus Route Distance (in km)",
    "calc.programs": "Special Coaching & Co-curricular Programs",
    "calc.prog.robotics": "Robotics & STEM Program",
    "calc.prog.sports": "Sports Academy (Cricket/Football)",
    "calc.prog.lunch": "Nutritious School Meals",
    "calc.summary": "Estimated Expense Summary",
    "calc.monthly": "Monthly Payment",
    "calc.annual": "Annual Payment",
    "calc.note": "*This is a close estimate. Final official fee statements are shared upon enrollment.",
    "calc.cta": "Proceed to Admission Inquiry",

    // Infrastructure Slider
    "infra.eyebrow": "Smart Evolution",
    "infra.title": "Our Campus Upgrades",
    "infra.subtitle": "Drag the slider to compare our high-tech modern infrastructure with traditional school features.",
    "infra.label.before": "Before Upgrade",
    "infra.label.after": "State-of-the-Art Modern Lab",

    // Gallery
    "gallery.eyebrow": "Moments Captured",
    "gallery.title": "Life at demo Futures",
    "gallery.filter.all": "All",
    "gallery.filter.classroom": "Classrooms",
    "gallery.filter.sports": "Sports",
    "gallery.filter.labs": "Science & Labs",
    "gallery.filter.events": "Events",

    // Faculty
    "faculty.eyebrow": "Our Mentors",
    "faculty.title": "Meet Our Dedicated Faculty",
    "faculty.subtitle": "Our highly experienced educators guide students with empathy, innovation, and passion.",
    "faculty.contact": "Send Mail",

    // Events
    "events.eyebrow": "Mark Your Calendar",
    "events.title": "Upcoming School Events",
    "events.subtitle": "Stay updated with parent meetings, sports leagues, and cultural activities.",
    "events.rsvp": "Register / Details",
    "events.location": "Venue",

    // Admissions Form
    "form.eyebrow": "Get in Touch",
    "form.title": "Dynamic Admissions Enquiry Form",
    "form.subtitle": "Complete the steps below and our admissions counsellor will contact you shortly.",
    "form.step.1": "Student Details",
    "form.step.2": "Parent Details",
    "form.step.3": "Preferences",
    "form.studentName": "Student Full Name",
    "form.studentAge": "Student Age (in years)",
    "form.parentName": "Parent / Guardian Name",
    "form.parentPhone": "WhatsApp Mobile Number",
    "form.parentEmail": "Email Address",
    "form.message": "Special Instructions or Questions",
    "form.prev": "Previous",
    "form.next": "Next Step",
    "form.submit": "Submit Enquiry",
    "form.success": "Enquiry Received Successfully!",
    "form.successSub": "Thank you! Our advisor will connect with you on WhatsApp within 24 hours.",
    "form.openBadge": "Admissions Currently Open",
    "form.closedBadge": "Admissions Currently Closed",
    "form.closedMsg": "Admissions for the current term are closed. Please fill this form to register for the waiting list.",

    // Testimonials
    "test.eyebrow": "Hear From Parents",
    "test.title": "Success Stories & Feedback",
    "test.playVideo": "Play Video Review",

    // FAQ
    "faq.eyebrow": "Have Queries?",
    "faq.title": "Frequently Asked Questions",

    // Floating Buttons & Footer
    "float.call": "Call Admissions Helpline",
    "float.whatsapp": "WhatsApp Support Desk",
    "footer.rights": "All Rights Reserved",
    "footer.quick": "Quick Navigation",
    "footer.academic": "Academic Tiers",
    "footer.contactInfo": "Contact Information",
  },
  hi: {
    // Navbar & Common CTAs
    "nav.home": "होम",
    "nav.about": "हमारे बारे में",
    "nav.programs": "पाठ्यक्रम",
    "nav.facilities": "सुविधाएँ",
    "nav.admission": "प्रवेश",
    "nav.gallery": "गैलरी",
    "nav.testimonials": "अभिभावक समीक्षा",
    "nav.events": "आयोजन",
    "nav.faculty": "शिक्षक गण",
    "nav.faq": "सवाल-जवाब",
    "nav.contact": "संपर्क करें",
    "nav.cta": "ऑनलाइन आवेदन",
    "nav.calculator": "शुल्क कैलकुलेटर",

    // Hero Section
    "hero.badge": "सत्र 2026-27 के लिए प्रवेश शुरू हैं",
    "hero.primaryCta": "शुल्क जानें",
    "hero.secondaryCta": "प्रवेश फॉर्म",
    "hero.stat.students": "खुशहाल छात्र",
    "hero.stat.teachers": "अनुभवी शिक्षक",
    "hero.stat.labs": "आधुनिक लैब्स",
    "hero.stat.ratio": "शिक्षक-छात्र अनुपात",

    // About Section
    "about.eyebrow": "हमारे स्कूल में आपका स्वागत है",
    "about.title": "बुद्धिमान मस्तिष्क और सुनहरा भविष्य",
    "about.description": "हम एक समग्र शैक्षिक वातावरण प्रदान करते हैं जो रचनात्मकता और नैतिक मूल्यों को बढ़ावा देता है। हमारे छात्र शिक्षा, खेल और जीवन में उत्कृष्टता प्राप्त करने के लिए तैयार हैं।",

    // Why Choose Us (Bento Section)
    "why.eyebrow": "हमारी विशेषताएं",
    "why.title": "हम दूसरों से बेहतर क्यों हैं",
    "why.tag.tech": "रोबोटिक्स और स्टेम",
    "why.tag.safe": "100% सुरक्षित परिसर",
    "why.tag.sports": "स्पोर्ट्स अकादमी",
    "why.tag.library": "24/7 लाइब्रेरी",

    // Fee Calculator Section
    "calc.eyebrow": "स्मार्ट खर्च कैलकुलेटर",
    "calc.title": "इंटरैक्टिव स्कूल शुल्क कैलकुलेटर",
    "calc.subtitle": "त्वरित अनुमानित शुल्क विवरण प्राप्त करने के लिए बच्चे की कक्षा, बस दूरी और अतिरिक्त गतिविधियों का चयन करें।",
    "calc.class": "छात्र की कक्षा का चयन करें",
    "calc.class.placeholder": "-- कक्षा चुनें --",
    "calc.preprimary": "प्री-प्राइमरी (नर्सरी - केजी)",
    "calc.primary": "प्राथमिक स्कूल (कक्षा 1-5)",
    "calc.middle": "मिडिल स्कूल (कक्षा 6-8)",
    "calc.high": "हाई स्कूल (कक्षा 9-10)",
    "calc.senior": "सीनियर सेकेंडरी (कक्षा 11-12)",
    "calc.transport": "स्कूल बस दूरी (किमी में)",
    "calc.programs": "विशेष कोचिंग और अतिरिक्त कार्यक्रम",
    "calc.prog.robotics": "रोबोटिक्स और स्टेम प्रोग्राम",
    "calc.prog.sports": "स्पोर्ट्स अकादमी (क्रिकेट/फुटबॉल)",
    "calc.prog.lunch": "पौष्टिक दोपहर का भोजन",
    "calc.summary": "अनुमानित व्यय सारांश",
    "calc.monthly": "मासिक शुल्क",
    "calc.annual": "वार्षिक शुल्क",
    "calc.note": "*यह एक अनुमानित शुल्क है। प्रवेश के समय आधिकारिक शुल्क पत्र साझा किया जाएगा।",
    "calc.cta": "प्रवेश पूछताछ के लिए आगे बढ़ें",

    // Infrastructure Slider
    "infra.eyebrow": "स्मार्ट अपग्रेड",
    "infra.title": "हमारे आधुनिक बदलाव",
    "infra.subtitle": "पारंपरिक सुविधाओं के मुकाबले हमारे हाई-टेक मॉडर्न लैब्स की तुलना करने के लिए स्लाइडर खींचें।",
    "infra.label.before": "अपग्रेड से पहले",
    "infra.label.after": "अत्याधुनिक रोबोटिक्स लैब",

    // Gallery
    "gallery.eyebrow": "कुछ खास यादें",
    "gallery.title": "स्कूल परिसर की झलकियां",
    "gallery.filter.all": "सभी",
    "gallery.filter.classroom": "कक्षाएं",
    "gallery.filter.sports": "खेलकूद",
    "gallery.filter.labs": "विज्ञान और लैब्स",
    "gallery.filter.events": "आयोजन",

    // Faculty
    "faculty.eyebrow": "हमारे शिक्षक",
    "faculty.title": "हमारे अनुभवी मार्गदर्शक",
    "faculty.subtitle": "हमारे उच्च अनुभवी शिक्षक सहानुभूति, नवीनता और लगन के साथ छात्रों का मार्गदर्शन करते हैं।",
    "faculty.contact": "ईमेल भेजें",

    // Events
    "events.eyebrow": "महत्वपूर्ण तिथियां",
    "events.title": "आगामी विद्यालय कार्यक्रम",
    "events.subtitle": "अभिभावक-शिक्षक बैठक, खेल लीग और सांस्कृतिक गतिविधियों के साथ अपडेट रहें।",
    "events.rsvp": "पंजीकरण / विवरण",
    "events.location": "स्थान",

    // Admissions Form
    "form.eyebrow": "संपर्क करें",
    "form.title": "स्मार्ट प्रवेश पूछताछ फॉर्म",
    "form.subtitle": "नीचे दिए गए चरणों को पूरा करें और हमारे प्रवेश सलाहकार जल्द ही आपसे संपर्क करेंगे।",
    "form.step.1": "छात्र विवरण",
    "form.step.2": "अभिभावक विवरण",
    "form.step.3": "प्राथमिकताएं",
    "form.studentName": "छात्र का पूरा नाम",
    "form.studentAge": "छात्र की आयु (वर्षों में)",
    "form.parentName": "अभिभावक का नाम",
    "form.parentPhone": "व्हाट्सएप मोबाइल नंबर",
    "form.parentEmail": "ईमेल पता",
    "form.message": "विशेष निर्देश या प्रश्न",
    "form.prev": "पीछे",
    "form.next": "अगला कदम",
    "form.submit": "पूछताछ सबमिट करें",
    "form.success": "पूछताछ सफलतापूर्वक प्राप्त हुई!",
    "form.successSub": "धन्यवाद! हमारे सलाहकार 24 घंटे के भीतर आपसे व्हाट्सएप पर संपर्क करेंगे।",
    "form.openBadge": "प्रवेश अभी खुले हैं",
    "form.closedBadge": "प्रवेश अभी बंद हैं",
    "form.closedMsg": "वर्तमान सत्र के लिए सीधे प्रवेश बंद हैं। प्रतीक्षा सूची के लिए कृपया यह फॉर्म भरें।",

    // Testimonials
    "test.eyebrow": "अभिभावकों की राय",
    "test.title": "सफलता की कहानियां और फीडबैक",
    "test.playVideo": "वीडियो समीक्षा देखें",

    // FAQ
    "faq.eyebrow": "कुछ पूछना है?",
    "faq.title": "अक्सर पूछे जाने वाले सवाल",

    // Floating Buttons & Footer
    "float.call": "प्रवेश हेल्पलाइन नंबर",
    "float.whatsapp": "व्हाट्सएप सहायता डेस्क",
    "footer.rights": "सर्वाधिकार सुरक्षित",
    "footer.quick": "नेविगेशन लिंक्स",
    "footer.academic": "अकादमिक कक्षाएं",
    "footer.contactInfo": "संपर्क विवरण",
  },
};
