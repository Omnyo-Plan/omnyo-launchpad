import { createContext, useContext, ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type Language = "en" | "gr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = normalizePath(location.pathname);
  const language: Language =
    pathname === "/el" || pathname.startsWith("/el/") ? "gr" : "en";

  const setLanguage = (lang: Language) => {
    if (lang === language) {
      return;
    }

    const targetPath = buildPathForLanguage(pathname, lang);
    navigate({
      pathname: targetPath,
      search: location.search,
      hash: location.hash,
    });
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[language];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        // Fallback to English
        value = translations.en;
        for (const fallbackKey of keys) {
          if (value && typeof value === "object" && fallbackKey in value) {
            value = value[fallbackKey];
          } else {
            return key; // Return key if not found
          }
        }
        break;
      }
    }

    return typeof value === "string" ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

const normalizePath = (pathname: string) => {
  if (!pathname.startsWith("/")) {
    return `/${pathname}`;
  }

  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.replace(/\/+$/, "");
  }

  return pathname;
};

const stripLanguagePrefix = (pathname: string) => {
  if (pathname === "/el") {
    return "/";
  }

  if (pathname.startsWith("/el/")) {
    return pathname.slice(3);
  }

  return pathname;
};

const buildPathForLanguage = (pathname: string, lang: Language) => {
  const basePath = stripLanguagePrefix(pathname);

  if (lang === "en") {
    return basePath;
  }

  return basePath === "/" ? "/el" : `/el${basePath}`;
};

const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      product: "Product",
      pricing: "Pricing",
      about: "About",
      contact: "Contact",
      getEarlyAccess: "Get Early Access",
    },
    // Common
    common: {
      learnMore: "Learn More",
      joinWaitlist: "Join Waitlist",
      contactUs: "Contact Us",
      requestEarlyAccess: "Request Early Access",
      viewPricing: "View Pricing",
      seeHowItWorks: "See How It Works",
      applyForEarlyAccess: "Apply for Early Access",
      joinEarlyAccess: "Join Early Access",
      emailPlaceholder: "Work email",
      copyrightNotice: "© 2026 Omnyo. All rights reserved",
    },
    // Home page
    home: {
      heroTag: "Now accepting early access applications",
      heroTitle: "Stop scheduling chaos.",
      heroTitleHighlight: "Start running shifts.",
      heroSubtitle:
        "Modern workforce scheduling for businesses that run on shifts. Replace spreadsheets, paper schedules, and WhatsApp groups with one smart system.",
      builtFor: "Built for",
      soundFamiliar: "Sound familiar?",
      soundFamiliarSubtitle:
        "If you're still using Excel, paper schedules, or group chats to manage shifts, you know the pain.",
      painPoints: {
        spreadsheets: "Hours spent updating spreadsheets every week",
        whatsapp: "Endless WhatsApp messages about schedule changes",
        phoneCalls: "Phone calls for every sick day and swap request",
      },
      featuresTitle: "Everything you need to run shifts smoothly",
      featuresSubtitle:
        "One platform for scheduling, communication, and team coordination.",
      features: {
        visualBuilder: {
          title: "Visual Schedule Builder",
          description:
            "Create weekly or monthly schedules per location and role in minutes. Drag, drop, and done.",
        },
        notifications: {
          title: "Instant Notifications",
          description:
            "Sick leave, time off, shift swaps - employees are notified immediately. No more phone calls.",
        },
        employeeHub: {
          title: "Employee Hub",
          description:
            "One place for schedules, updates, and announcements. Always accessible on mobile.",
        },
        realtime: {
          title: "Real-Time Updates",
          description:
            "Last-minute changes? The system regenerates optimized schedules.",
        },
        fair: {
          title: "Fair & Transparent",
          description:
            "Balance workloads fairly. Employees submit preferences, managers stay in control.",
        },
      },
      stepsTitle: "Up and running in 3 steps",
      steps: {
        step1: {
          title: "Set up your locations and roles",
          description:
            "Add your business locations, define roles, and invite your team. Takes about 5 minutes.",
        },
        step2: {
          title: "Build your first schedule",
          description:
            "Use our visual builder to create a schedule based on your requirements.",
        },
        step3: {
          title: "Your team stays in sync",
          description:
            "Everyone sees the latest schedule on their phone. Changes push instantly.",
        },
      },
      industriesTitle: "Built for teams that work in shifts",
      industriesSubtitle:
        "From a single café to a multi-location retail chain.",
      industries: {
        hospitality: {
          name: "Hospitality",
          description: "Cafés, restaurants, hotels, and bars",
        },
        retail: {
          name: "Retail",
          description: "Shops, boutiques, and chain stores",
        },
        logistics: {
          name: "Logistics",
          description: "Warehouses, delivery, and distribution",
        },
      },
      faqTitle: "Frequently asked questions",
      faqs: {
        spreadsheet: {
          question: "How is Omnyo different from a spreadsheet?",
          answer:
            "Spreadsheets require manual updates, endless back-and-forth messages, and don't notify anyone when things change. Omnyo automates notifications, suggests optimal schedules, and gives everyone a single source of truth on their phone.",
        },
        aiScheduling: {
          question: "How does AI-assisted scheduling work?",
          answer:
            "Our AI considers your business needs (opening hours, required roles, operational constraints) and employee preferences (availability, contracted hours) to suggest balanced, efficient schedules. You always have final approval.",
        },
        security: {
          question: "Is my data secure?",
          answer:
            "Absolutely. We use enterprise-grade encryption and follow best practices for data protection. Your schedule and employee data is never shared or sold.",
        },
        pilot: {
          question: "What's included in the pilot program?",
          answer:
            "Early access includes all core features: schedule builder, notifications, employee app, and dedicated onboarding support.",
        },
      },
      ctaTitle: "Ready to simplify your scheduling?",
      ctaSubtitle:
        "Join our early access program and be among the first to experience stress-free shift management.",
    },
    // Product page
    product: {
      heroTitle: "Built for the way you actually work",
      heroSubtitle:
        "Omnyo combines intuitive scheduling tools with smart automation. Managers save time, employees stay informed, and everyone stays in sync.",
      forManagers: "For Managers",
      forManagersSubtitle:
        "Create, adjust, and communicate schedules in minutes - not hours.",
      managerFeatures: {
        visualBuilder: {
          title: "Visual Schedule Builder",
          description:
            "Create weekly or monthly schedules per location and role. Drag-and-drop interface makes planning intuitive.",
        },
        smartRegeneration: {
          title: "Smart Regeneration",
          description:
            "Last-minute sick call? The system suggests alternatives and regenerates optimized schedules.",
        },
        automatedNotifications: {
          title: "Automated Notifications",
          description:
            "Schedule changes, shift reminders, and approvals are sent automatically. No more manual follow-ups.",
        },
      },
      forEmployees: "For Employees",
      forEmployeesSubtitle:
        "Your personal hub for schedules, updates, and team communication.",
      employeeFeatures: {
        mobileAccess: {
          title: "Always-On Mobile Access",
          description:
            "See your schedule anytime, anywhere. No more checking photos of paper schedules in WhatsApp.",
        },
        instantUpdates: {
          title: "Instant Updates",
          description:
            "Get notified immediately when your schedule changes. Never miss a shift or show up on the wrong day.",
        },
        submitAvailability: {
          title: "Submit Availability",
          description:
            "Share your preferences and availability. Managers can factor in your needs when creating schedules.",
        },
        teamAnnouncements: {
          title: "Team Announcements",
          description:
            "Important updates, meetings, and company news - all in one place. No more scattered group chats.",
        },
      },
      aiTitle: "AI-Assisted Scheduling",
      aiSubtitle:
        "Let smart automation handle the complexity while you stay in control.",
      aiFeatures: {
        understands: {
          title: "Understands Your Business",
          description:
            "Our AI considers opening hours, required roles, and operational needs for each shift.",
        },
        respects: {
          title: "Respects Employee Preferences",
          description:
            "Availability windows, contracted hours, and time-off requests are automatically factored in.",
        },
        optimizes: {
          title: "Optimizes for Fairness",
          description:
            "Balances workloads so no one is overworked or underutilized. Transparent and equitable.",
        },
        adapts: {
          title: "Adapts to Changes",
          description:
            "When things change, AI suggests new arrangements without starting from scratch.",
        },
      },
      aiNote:
        "AI suggestions are always optional. You review and approve every schedule before it's published to your team.",
      realtimeTitle: "Real-Time Everything",
      realtimeSubtitle:
        'When schedules change, everyone knows immediately. No more phone trees, no more "did you see my message?" Follow-up calls become a thing of the past.',
      ctaTitle: "See Omnyo in action",
      ctaSubtitle:
        "Get early access and discover how simple scheduling can be.",
      mockup: {
        scheduleBuilder: "Schedule Builder - Week of Jan 20",
        today: "Today",
        tomorrow: "Tomorrow",
        wednesday: "Wednesday",
        dayOff: "Day Off",
        mySchedule: "My Schedule",
        teamMeeting: "Team meeting Thursday 9 AM",
      },
    },
    // Pricing page
    pricing: {
      tag: "Early Access Program",
      heroTitle: "Join our pilot program",
      heroSubtitle:
        "We're working closely with early adopters to build the best shift management platform. Join us and help shape the future of Omnyo.",
      pilotProgram: "Pilot Program",
      fullAccess: "Full access for early adopters",
      whatsIncluded: "What's included:",
      includes: {
        scheduleBuilder: "Full access to schedule builder",
        mobileApp: "Employee mobile app",
        notifications: "Real-time notifications",
        onboarding: "Dedicated onboarding support",
        multiLocation: "Multi-location support",
        availability: "Availability management",
        announcements: "Team announcements",
      },
      whoIsItFor: "Who is the pilot program for?",
      whoIsItForSubtitle:
        "We're looking for forward-thinking teams ready to modernize their scheduling.",
      whoItsFor: {
        hospitality: "Hospitality businesses (cafés, restaurants, hotels)",
        retail: "Retail operations (stores, boutiques, chains)",
        logistics: "Logistics and warehousing teams",
        shiftBased: "Teams with shift-based employees",
      },
      whyEarlyAccess: "Why early access?",
      whyEarlyAccessText:
        "We believe the best products are built alongside real users. As an early adopter, you'll get direct input into feature development, priority support, and pricing that reflects your partnership in building Omnyo.",
      ctaTitle: "Ready to get started?",
      ctaSubtitle: "Let's talk about how Omnyo can work for your team.",
    },
    // Contact page
    contact: {
      heroTitle: "Let's talk",
      heroSubtitle:
        "Whether you want to join our pilot program or just have questions, we'd love to hear from you.",
      sendMessage: "Send us a message",
      justWantUpdates: "Just want updates?",
      joinWaitlistText:
        "Join our waitlist for early access and product updates.",
      otherWays: "Other ways to reach us",
      responseTime: "Response time",
      responseTimeText: "We typically respond within 24 hours.",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Work Email",
        emailPlaceholder: "you@company.com",
        company: "Company",
        companyPlaceholder: "Your company name",
        role: "Role",
        rolePlaceholder: "e.g. Operations Manager",
        teamSize: "Team Size",
        teamSizePlaceholder: "Select team size",
        teamSizes: {
          small: "5-10 employees",
          medium: "11-25 employees",
          large: "26-50 employees",
          xlarge: "51-100 employees",
          enterprise: "100+ employees",
        },
        message: "Message",
        messagePlaceholder: "Tell us about your scheduling challenges...",
        submit: "Send Message",
        sending: "Sending...",
        success: "Message sent! We'll be in touch soon.",
        error: "Something went wrong. Please try again.",
      },
    },
    // About page
    about: {
      heroTitle: "Building the future of shift work",
      heroSubtitle:
        "We're on a mission to replace the spreadsheet-and-WhatsApp chaos with software that actually works for everyone.",
      ourStory: "Our Story",
      storyParagraphs: {
        p1: "We've seen it firsthand: managers spending hours every week updating Excel spreadsheets, taking photos of paper schedules, and fielding endless phone calls about shift changes. Meanwhile, employees scroll through chaotic group chats trying to figure out when they work.",
        p2: "There had to be a better way.",
        p3: "Omnyo started with a simple idea: what if scheduling was as easy as it should be? What if managers could create schedules in minutes instead of hours? What if employees always knew exactly when and where they work, without having to ask?",
        p4: "We're building Omnyo to answer those questions.",
      },
      whatWeBelieve: "What we believe",
      whatWeBelieveSubtitle: "The principles that guide everything we build.",
      values: {
        simplicity: {
          title: "Simplicity First",
          description:
            "We believe great software should feel effortless. Every feature we build starts with the question: 'Is there a simpler way?'",
        },
        fairness: {
          title: "Fairness Built In",
          description:
            "Scheduling affects people's lives. Our tools are designed to balance business needs with employee wellbeing and preferences.",
        },
        flexibility: {
          title: "Flexibility Drives Performance",
          description:
            "When employees can work at times that suit them, within business constraints, they're happier and more productive. Satisfied teams perform better.",
        },
      },
      followJourney: "Follow our journey",
      followJourneySubtitle:
        "Stay up to date with product updates, company news, and insights about the future of work.",
      ctaTitle: "Want to be part of the journey?",
      ctaSubtitle:
        "We're looking for early adopters who want to help shape the future of shift scheduling.",
    },
    // Footer
    footer: {
      tagline: "Modern workforce scheduling for businesses that run on shifts",
      productLinks: "Product",
      companyLinks: "Company",
      features: "Features",
      useCases: "Use Cases",
    },
    // Waitlist form
    waitlist: {
      success: "You're on the list! We'll be in touch soon.",
      onWaitlist: "You're on the waitlist!",
      invalidEmail: "Please enter a valid email address",
      error: "Something went wrong. Please try again.",
    },
    // Back to top
    backToTop: "Back to top",
  },
  gr: {
    // Navigation
    nav: {
      home: "Αρχική",
      product: "Προϊόν",
      pricing: "Τιμολόγηση",
      about: "Σχετικά",
      contact: "Επικοινωνία",
      getEarlyAccess: "Πρόωρη Πρόσβαση",
    },
    // Common
    common: {
      learnMore: "Μάθετε Περισσότερα",
      joinWaitlist: "Εγγραφή στη Λίστα",
      contactUs: "Επικοινωνήστε Μαζί Μας",
      requestEarlyAccess: "Αίτηση Πρόωρης Πρόσβασης",
      viewPricing: "Δείτε Τιμολόγηση",
      seeHowItWorks: "Δείτε Πώς Λειτουργεί",
      applyForEarlyAccess: "Αίτηση Πρόωρης Πρόσβασης",
      joinEarlyAccess: "Εγγραφή Πρόωρης Πρόσβασης",
      emailPlaceholder: "Email εργασίας",
      copyrightNotice: "© 2026 Omnyo. All rights reserved",
    },
    // Home page
    home: {
      heroTag: "Δεχόμαστε αιτήσεις πρόωρης πρόσβασης",
      heroTitle: "Σταματήστε το χάος στον προγραμματισμό.",
      heroTitleHighlight: "Ξεκινήστε να διαχειρίζεστε βάρδιες.",
      heroSubtitle:
        "Σύγχρονος προγραμματισμός εργατικού δυναμικού για επιχειρήσεις που λειτουργούν με βάρδιες. Αντικαταστήστε υπολογιστικά φύλλα, χάρτινα προγράμματα και ομάδες WhatsApp με ένα έξυπνο σύστημα.",
      builtFor: "Σχεδιασμένο για",
      soundFamiliar: "Σας φαίνεται γνωστό;",
      soundFamiliarSubtitle:
        "Αν χρησιμοποιείτε ακόμα Excel, χάρτινα προγράμματα ή ομαδικές συνομιλίες για τη διαχείριση βαρδιών, γνωρίζετε τον πόνο.",
      painPoints: {
        spreadsheets:
          "Ώρες που ξοδεύονται ενημερώνοντας υπολογιστικά φύλλα κάθε εβδομάδα",
        whatsapp: "Ατελείωτα μηνύματα WhatsApp για αλλαγές προγράμματος",
        phoneCalls: "Τηλεφωνήματα για κάθε άδεια ασθενείας και αλλαγή βάρδιας",
      },
      featuresTitle: "Όλα όσα χρειάζεστε για ομαλή λειτουργία βαρδιών",
      featuresSubtitle:
        "Μία πλατφόρμα για προγραμματισμό, επικοινωνία και συντονισμό ομάδας.",
      features: {
        visualBuilder: {
          title: "Οπτικός Δημιουργός Προγράμματος",
          description:
            "Δημιουργήστε εβδομαδιαία ή μηνιαία προγράμματα ανά τοποθεσία και ρόλο σε λίγα λεπτά. Σύρετε, αποθέστε, τέλος.",
        },
        notifications: {
          title: "Άμεσες Ειδοποιήσεις",
          description:
            "Άδεια ασθενείας, ρεπό, αλλαγές βάρδιας - οι εργαζόμενοι ενημερώνονται άμεσα. Τέλος στα τηλεφωνήματα.",
        },
        employeeHub: {
          title: "Κέντρο Εργαζομένων",
          description:
            "Ένα μέρος για προγράμματα, ενημερώσεις και ανακοινώσεις. Πάντα προσβάσιμο από κινητό.",
        },
        realtime: {
          title: "Ενημερώσεις σε Πραγματικό Χρόνο",
          description:
            "Αλλαγές τελευταίας στιγμής; Το σύστημα αναδημιουργεί βελτιστοποιημένα προγράμματα.",
        },
        fair: {
          title: "Δίκαιο & Διαφανές",
          description:
            "Ισορροπήστε τον φόρτο εργασίας δίκαια. Οι εργαζόμενοι υποβάλλουν προτιμήσεις, οι μάνατζερ διατηρούν τον έλεγχο.",
        },
      },
      stepsTitle: "Ξεκινήστε σε 3 βήματα",
      steps: {
        step1: {
          title: "Ρυθμίστε τοποθεσίες και ρόλους",
          description:
            "Προσθέστε τις τοποθεσίες σας, ορίστε ρόλους και προσκαλέστε την ομάδα σας. Διαρκεί περίπου 5 λεπτά.",
        },
        step2: {
          title: "Δημιουργήστε το πρώτο σας πρόγραμμα",
          description:
            "Χρησιμοποιήστε τον οπτικό δημιουργό για να δημιουργήσετε ένα πρόγραμμα με βάση τις απαιτήσεις σας.",
        },
        step3: {
          title: "Η ομάδα σας μένει συγχρονισμένη",
          description:
            "Όλοι βλέπουν το τελευταίο πρόγραμμα στο κινητό τους. Οι αλλαγές στέλνονται άμεσα.",
        },
      },
      industriesTitle: "Σχεδιασμένο για ομάδες που εργάζονται με βάρδιες",
      industriesSubtitle: "Από ένα καφέ μέχρι μια αλυσίδα καταστημάτων.",
      industries: {
        hospitality: {
          name: "Φιλοξενία",
          description: "Καφέ, εστιατόρια, ξενοδοχεία και μπαρ",
        },
        retail: {
          name: "Λιανική",
          description: "Καταστήματα, μπουτίκ και αλυσίδες",
        },
        logistics: {
          name: "Logistics",
          description: "Αποθήκες, διανομή και μεταφορές",
        },
      },
      faqTitle: "Συχνές ερωτήσεις",
      faqs: {
        spreadsheet: {
          question: "Πώς διαφέρει το Omnyo από ένα υπολογιστικό φύλλο;",
          answer:
            "Τα υπολογιστικά φύλλα απαιτούν χειροκίνητες ενημερώσεις, ατελείωτα μηνύματα και δεν ειδοποιούν κανέναν όταν αλλάζουν τα πράγματα. Το Omnyo αυτοματοποιεί τις ειδοποιήσεις, προτείνει βέλτιστα προγράμματα και δίνει σε όλους μία πηγή αλήθειας στο κινητό τους.",
        },
        aiScheduling: {
          question: "Πώς λειτουργεί ο προγραμματισμός με AI;",
          answer:
            "Το AI μας λαμβάνει υπόψη τις ανάγκες της επιχείρησής σας (ωράριο λειτουργίας, απαιτούμενοι ρόλοι, λειτουργικούς περιορισμούς) και τις προτιμήσεις των εργαζομένων (διαθεσιμότητα, συμβατικές ώρες) για να προτείνει ισορροπημένα, αποτελεσματικά προγράμματα. Έχετε πάντα την τελική έγκριση.",
        },
        security: {
          question: "Είναι ασφαλή τα δεδομένα μου;",
          answer:
            "Απολύτως. Χρησιμοποιούμε κρυπτογράφηση επιχειρηματικού επιπέδου και ακολουθούμε τις βέλτιστες πρακτικές για την προστασία δεδομένων. Τα δεδομένα προγραμμάτων και εργαζομένων σας δεν κοινοποιούνται ή πωλούνται ποτέ.",
        },
        pilot: {
          question: "Τι περιλαμβάνεται στο πιλοτικό πρόγραμμα;",
          answer:
            "Η πρόωρη πρόσβαση περιλαμβάνει όλες τις βασικές λειτουργίες: δημιουργό προγραμμάτων, ειδοποιήσεις, εφαρμογή εργαζομένων και αφοσιωμένη υποστήριξη εκκίνησης.",
        },
      },
      ctaTitle: "Έτοιμοι να απλοποιήσετε τον προγραμματισμό σας;",
      ctaSubtitle:
        "Εγγραφείτε στο πρόγραμμα πρόωρης πρόσβασης και γίνετε από τους πρώτους που θα ζήσουν διαχείριση βαρδιών χωρίς άγχος.",
    },
    // Product page
    product: {
      heroTitle: "Σχεδιασμένο για τον τρόπο που πραγματικά εργάζεστε",
      heroSubtitle:
        "Το Omnyo συνδυάζει διαισθητικά εργαλεία προγραμματισμού με έξυπνη αυτοματοποίηση. Οι μάνατζερ εξοικονομούν χρόνο, οι εργαζόμενοι μένουν ενημερωμένοι και όλοι είναι συγχρονισμένοι.",
      forManagers: "Για Μάνατζερ",
      forManagersSubtitle:
        "Δημιουργήστε, προσαρμόστε και επικοινωνήστε προγράμματα σε λεπτά - όχι σε ώρες.",
      managerFeatures: {
        visualBuilder: {
          title: "Οπτικός Δημιουργός Προγράμματος",
          description:
            "Δημιουργήστε εβδομαδιαία ή μηνιαία προγράμματα ανά τοποθεσία και ρόλο. Η διεπαφή σύρε-και-άφησε κάνει τον σχεδιασμό διαισθητικό.",
        },
        smartRegeneration: {
          title: "Έξυπνη Αναδημιουργία",
          description:
            "Αιφνίδια αρρώστια; Το σύστημα προτείνει εναλλακτικές και αναδημιουργεί βελτιστοποιημένα προγράμματα.",
        },
        automatedNotifications: {
          title: "Αυτοματοποιημένες Ειδοποιήσεις",
          description:
            "Αλλαγές προγράμματος, υπενθυμίσεις βαρδιών και εγκρίσεις αποστέλλονται αυτόματα. Τέλος στα χειροκίνητα follow-up.",
        },
      },
      forEmployees: "Για Εργαζόμενους",
      forEmployeesSubtitle:
        "Το προσωπικό σας κέντρο για προγράμματα, ενημερώσεις και επικοινωνία ομάδας.",
      employeeFeatures: {
        mobileAccess: {
          title: "Πρόσβαση από Κινητό Πάντα",
          description:
            "Δείτε το πρόγραμμά σας οποτεδήποτε, οπουδήποτε. Τέλος στο να ελέγχετε φωτογραφίες χάρτινων προγραμμάτων στο WhatsApp.",
        },
        instantUpdates: {
          title: "Άμεσες Ενημερώσεις",
          description:
            "Λάβετε ειδοποίηση αμέσως όταν αλλάζει το πρόγραμμά σας. Ποτέ μην χάσετε βάρδια ή εμφανιστείτε λάθος μέρα.",
        },
        submitAvailability: {
          title: "Υποβολή Διαθεσιμότητας",
          description:
            "Μοιραστείτε τις προτιμήσεις και τη διαθεσιμότητά σας. Οι μάνατζερ μπορούν να λάβουν υπόψη τις ανάγκες σας κατά τη δημιουργία προγραμμάτων.",
        },
        teamAnnouncements: {
          title: "Ανακοινώσεις Ομάδας",
          description:
            "Σημαντικές ενημερώσεις, συναντήσεις και εταιρικά νέα - όλα σε ένα μέρος. Τέλος στις διάσπαρτες ομαδικές συνομιλίες.",
        },
      },
      aiTitle: "Προγραμματισμός με Υποστήριξη AI",
      aiSubtitle:
        "Αφήστε την έξυπνη αυτοματοποίηση να χειριστεί την πολυπλοκότητα ενώ εσείς διατηρείτε τον έλεγχο.",
      aiFeatures: {
        understands: {
          title: "Κατανοεί την Επιχείρησή σας",
          description:
            "Το AI μας λαμβάνει υπόψη ωράρια λειτουργίας, απαιτούμενους ρόλους και λειτουργικές ανάγκες για κάθε βάρδια.",
        },
        respects: {
          title: "Σέβεται τις Προτιμήσεις Εργαζομένων",
          description:
            "Παράθυρα διαθεσιμότητας, συμβατικές ώρες και αιτήματα αδειών λαμβάνονται αυτόματα υπόψη.",
        },
        optimizes: {
          title: "Βελτιστοποιεί για Δικαιοσύνη",
          description:
            "Ισορροπεί τον φόρτο εργασίας ώστε κανείς να μην υπερφορτώνεται ή να μην αξιοποιείται επαρκώς. Διαφανές και δίκαιο.",
        },
        adapts: {
          title: "Προσαρμόζεται στις Αλλαγές",
          description:
            "Όταν αλλάζουν τα πράγματα, το AI προτείνει νέες ρυθμίσεις χωρίς να ξεκινήσετε από την αρχή.",
        },
      },
      aiNote:
        "Οι προτάσεις AI είναι πάντα προαιρετικές. Εξετάζετε και εγκρίνετε κάθε πρόγραμμα πριν δημοσιευτεί στην ομάδα σας.",
      realtimeTitle: "Όλα σε Πραγματικό Χρόνο",
      realtimeSubtitle:
        'Όταν αλλάζουν τα προγράμματα, όλοι το μαθαίνουν αμέσως. Τέλος στις αλυσίδες τηλεφωνημάτων, τέλος στο "είδες το μήνυμά μου;" Τα follow-up τηλέφωνα ανήκουν στο παρελθόν.',
      ctaTitle: "Δείτε το Omnyo σε δράση",
      ctaSubtitle:
        "Αποκτήστε πρόωρη πρόσβαση και ανακαλύψτε πόσο απλός μπορεί να είναι ο προγραμματισμός.",
      mockup: {
        scheduleBuilder: "Δημιουργός Προγράμματος - Εβδομάδα 20 Ιαν",
        today: "Σήμερα",
        tomorrow: "Αύριο",
        wednesday: "Τετάρτη",
        dayOff: "Ρεπό",
        mySchedule: "Το Πρόγραμμά Μου",
        teamMeeting: "Συνάντηση ομάδας Πέμπτη 9 π.μ.",
      },
    },
    // Pricing page
    pricing: {
      tag: "Πρόγραμμα Πρόωρης Πρόσβασης",
      heroTitle: "Εγγραφείτε στο πιλοτικό μας πρόγραμμα",
      heroSubtitle:
        "Συνεργαζόμαστε στενά με τους πρώτους χρήστες για να χτίσουμε την καλύτερη πλατφόρμα διαχείρισης βαρδιών. Γίνετε μέρος και βοηθήστε να διαμορφώσουμε το μέλλον του Omnyo.",
      pilotProgram: "Πιλοτικό Πρόγραμμα",
      fullAccess: "Πλήρης πρόσβαση για πρώτους χρήστες",
      whatsIncluded: "Τι περιλαμβάνεται:",
      includes: {
        scheduleBuilder: "Πλήρης πρόσβαση στον δημιουργό προγραμμάτων",
        mobileApp: "Εφαρμογή κινητού για εργαζόμενους",
        notifications: "Ειδοποιήσεις σε πραγματικό χρόνο",
        onboarding: "Αφοσιωμένη υποστήριξη εκκίνησης",
        multiLocation: "Υποστήριξη πολλαπλών τοποθεσιών",
        availability: "Διαχείριση διαθεσιμότητας",
        announcements: "Ανακοινώσεις ομάδας",
      },
      whoIsItFor: "Για ποιους είναι το πιλοτικό πρόγραμμα;",
      whoIsItForSubtitle:
        "Αναζητούμε ομάδες με όραμα που είναι έτοιμες να εκσυγχρονίσουν τον προγραμματισμό τους.",
      whoItsFor: {
        hospitality: "Επιχειρήσεις φιλοξενίας (καφέ, εστιατόρια, ξενοδοχεία)",
        retail: "Λιανικές επιχειρήσεις (καταστήματα, μπουτίκ, αλυσίδες)",
        logistics: "Ομάδες logistics και αποθήκευσης",
        shiftBased: "Ομάδες με εργαζόμενους σε βάρδιες",
      },
      whyEarlyAccess: "Γιατί πρόωρη πρόσβαση;",
      whyEarlyAccessText:
        "Πιστεύουμε ότι τα καλύτερα προϊόντα χτίζονται μαζί με πραγματικούς χρήστες. Ως πρώτος χρήστης, θα έχετε άμεση συμβολή στην ανάπτυξη λειτουργιών, προτεραιότητα στην υποστήριξη και τιμολόγηση που αντικατοπτρίζει τη συνεργασία σας στο χτίσιμο του Omnyo.",
      ctaTitle: "Έτοιμοι να ξεκινήσετε;",
      ctaSubtitle:
        "Ας μιλήσουμε για το πώς το Omnyo μπορεί να λειτουργήσει για την ομάδα σας.",
    },
    // Contact page
    contact: {
      heroTitle: "Ας μιλήσουμε",
      heroSubtitle:
        "Είτε θέλετε να συμμετάσχετε στο πιλοτικό μας πρόγραμμα είτε απλά έχετε ερωτήσεις, θα χαρούμε να σας ακούσουμε.",
      sendMessage: "Στείλτε μας μήνυμα",
      justWantUpdates: "Θέλετε μόνο ενημερώσεις;",
      joinWaitlistText:
        "Εγγραφείτε στη λίστα αναμονής για πρόωρη πρόσβαση και ενημερώσεις προϊόντος.",
      otherWays: "Άλλοι τρόποι επικοινωνίας",
      responseTime: "Χρόνος απόκρισης",
      responseTimeText: "Συνήθως απαντάμε εντός 24 ωρών.",
      form: {
        name: "Όνομα",
        namePlaceholder: "Το όνομά σας",
        email: "Email Εργασίας",
        emailPlaceholder: "email@εταιρεία.gr",
        company: "Εταιρεία",
        companyPlaceholder: "Όνομα εταιρείας",
        role: "Θέση",
        rolePlaceholder: "π.χ. Μάνατζερ Λειτουργιών",
        teamSize: "Μέγεθος Ομάδας",
        teamSizePlaceholder: "Επιλέξτε μέγεθος ομάδας",
        teamSizes: {
          small: "5-10 εργαζόμενοι",
          medium: "11-25 εργαζόμενοι",
          large: "26-50 εργαζόμενοι",
          xlarge: "51-100 εργαζόμενοι",
          enterprise: "100+ εργαζόμενοι",
        },
        message: "Μήνυμα",
        messagePlaceholder:
          "Πείτε μας για τις προκλήσεις προγραμματισμού σας...",
        submit: "Αποστολή Μηνύματος",
        sending: "Αποστολή...",
        success: "Το μήνυμα στάλθηκε! Θα επικοινωνήσουμε σύντομα.",
        error: "Κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά.",
      },
    },
    // About page
    about: {
      heroTitle: "Χτίζοντας το μέλλον της εργασίας με βάρδιες",
      heroSubtitle:
        "Έχουμε αποστολή να αντικαταστήσουμε το χάος των υπολογιστικών φύλλων και του WhatsApp με λογισμικό που πραγματικά λειτουργεί για όλους.",
      ourStory: "Η Ιστορία Μας",
      storyParagraphs: {
        p1: "Το έχουμε δει από πρώτο χέρι: μάνατζερ που ξοδεύουν ώρες κάθε εβδομάδα ενημερώνοντας υπολογιστικά φύλλα Excel, φωτογραφίζοντας χάρτινα προγράμματα και απαντώντας σε ατελείωτα τηλεφωνήματα για αλλαγές βαρδιών. Εν τω μεταξύ, οι εργαζόμενοι ψάχνουν σε χαοτικές ομαδικές συνομιλίες προσπαθώντας να καταλάβουν πότε δουλεύουν.",
        p2: "Έπρεπε να υπάρχει καλύτερος τρόπος.",
        p3: "Το Omnyo ξεκίνησε με μια απλή ιδέα: τι θα γινόταν αν ο προγραμματισμός ήταν τόσο εύκολος όσο θα έπρεπε; Τι θα γινόταν αν οι μάνατζερ μπορούσαν να δημιουργήσουν προγράμματα σε λεπτά αντί για ώρες; Τι θα γινόταν αν οι εργαζόμενοι ήξεραν πάντα ακριβώς πότε και πού εργάζονται, χωρίς να χρειάζεται να ρωτήσουν;",
        p4: "Χτίζουμε το Omnyo για να απαντήσουμε σε αυτές τις ερωτήσεις.",
      },
      whatWeBelieve: "Τι πιστεύουμε",
      whatWeBelieveSubtitle: "Οι αρχές που καθοδηγούν ό,τι χτίζουμε.",
      values: {
        simplicity: {
          title: "Πρώτα η Απλότητα",
          description:
            "Πιστεύουμε ότι το εξαιρετικό λογισμικό πρέπει να φαίνεται αβίαστο. Κάθε λειτουργία που χτίζουμε ξεκινά με την ερώτηση: 'Υπάρχει απλούστερος τρόπος;'",
        },
        fairness: {
          title: "Ενσωματωμένη Δικαιοσύνη",
          description:
            "Ο προγραμματισμός επηρεάζει τη ζωή των ανθρώπων. Τα εργαλεία μας είναι σχεδιασμένα να ισορροπούν τις ανάγκες της επιχείρησης με την ευημερία και τις προτιμήσεις των εργαζομένων.",
        },
        flexibility: {
          title: "Η Ευελιξία Οδηγεί την Απόδοση",
          description:
            "Όταν οι εργαζόμενοι μπορούν να εργάζονται σε ώρες που τους βολεύουν, εντός των επιχειρησιακών περιορισμών, είναι πιο χαρούμενοι και πιο παραγωγικοί. Οι ικανοποιημένες ομάδες αποδίδουν καλύτερα.",
        },
      },
      followJourney: "Ακολουθήστε την πορεία μας",
      followJourneySubtitle:
        "Μείνετε ενημερωμένοι με ενημερώσεις προϊόντος, εταιρικά νέα και insights για το μέλλον της εργασίας.",
      ctaTitle: "Θέλετε να γίνετε μέρος της πορείας;",
      ctaSubtitle:
        "Αναζητούμε πρώτους χρήστες που θέλουν να βοηθήσουν να διαμορφώσουμε το μέλλον του προγραμματισμού βαρδιών.",
    },
    // Footer
    footer: {
      tagline:
        "Σύγχρονος προγραμματισμός εργατικού δυναμικού για επιχειρήσεις που λειτουργούν με βάρδιες",
      productLinks: "Προϊόν",
      companyLinks: "Εταιρεία",
      features: "Χαρακτηριστικά",
      useCases: "Περιπτώσεις Χρήσης",
    },
    // Waitlist form
    waitlist: {
      success: "Είστε στη λίστα! Θα επικοινωνήσουμε σύντομα.",
      onWaitlist: "Είστε στη λίστα αναμονής!",
      invalidEmail: "Παρακαλώ εισάγετε μια έγκυρη διεύθυνση email",
      error: "Κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά.",
    },
    // Back to top
    backToTop: "Πίσω στην κορυφή",
  },
};
