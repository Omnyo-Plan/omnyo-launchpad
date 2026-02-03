export type Language = "en" | "gr";

export type RouteId =
  | "home"
  | "product"
  | "pricing"
  | "contact"
  | "about"
  | "notFound";

export type StructuredDataKey = "breadcrumbs" | "softwareApplication";

export interface RobotsDirectives {
  index?: boolean;
  follow?: boolean;
  maxImagePreview?: "large" | "standard" | "none";
  maxSnippet?: number;
  maxVideoPreview?: number;
}

export interface SeoEntry {
  title: string;
  description: string;
  canonicalPath: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogImageAlt: string;
  ogImageWidth: number;
  ogImageHeight: number;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  robots?: RobotsDirectives;
  structuredData?: StructuredDataKey[];
  breadcrumbs?: string;
}

export const ROUTES: Record<RouteId, Record<Language, string>> = {
  home: {
    en: "/",
    gr: "/el",
  },
  product: {
    en: "/product",
    gr: "/el/product",
  },
  pricing: {
    en: "/pricing",
    gr: "/el/pricing",
  },
  contact: {
    en: "/contact",
    gr: "/el/contact",
  },
  about: {
    en: "/about",
    gr: "/el/about",
  },
  notFound: {
    en: "/404",
    gr: "/el/404",
  },
};

const OG_IMAGE_DIMENSIONS = {
  width: 1200,
  height: 630,
};

export const SEO_CONFIG: Record<RouteId, Record<Language, SeoEntry>> = {
  home: {
    en: {
      title: "Omnyo - Modern Shift Management for Growing Teams",
      description:
        "Replace spreadsheets, paper schedules, and WhatsApp chaos with Omnyo. A smart, mobile-first shift management system for hospitality, retail, and logistics.",
      canonicalPath: ROUTES.home.en,
      ogTitle: "Omnyo - Modern Shift Management for Growing Teams",
      ogDescription:
        "Replace spreadsheets, paper schedules, and WhatsApp chaos with Omnyo. A smart, mobile-first shift management system for hospitality, retail, and logistics.",
      ogImage: "/og/og-home.png",
      ogImageAlt: "Omnyo shift management platform",
      ogImageWidth: OG_IMAGE_DIMENSIONS.width,
      ogImageHeight: OG_IMAGE_DIMENSIONS.height,
      twitterTitle: "Omnyo - Modern Shift Management for Growing Teams",
      twitterDescription:
        "Replace spreadsheets, paper schedules, and WhatsApp chaos with Omnyo. A smart, mobile-first shift management system for hospitality, retail, and logistics.",
      twitterImage: "/og/og-home.png",
      structuredData: [],
      breadcrumbs: "Home",
    },
    gr: {
      title: "Omnyo - Σύγχρονη Διαχείριση Βαρδιών για Αναπτυσσόμενες Ομάδες",
      description:
        "Αντικαταστήστε τα υπολογιστικά φύλλα, τα χάρτινα προγράμματα και το χάος του WhatsApp με το Omnyo. Ένα έξυπνο, mobile-first σύστημα διαχείρισης βαρδιών για φιλοξενία, λιανική και logistics.",
      canonicalPath: ROUTES.home.gr,
      ogTitle: "Omnyo - Σύγχρονη Διαχείριση Βαρδιών για Αναπτυσσόμενες Ομάδες",
      ogDescription:
        "Αντικαταστήστε τα υπολογιστικά φύλλα, τα χάρτινα προγράμματα και το χάος του WhatsApp με το Omnyo. Ένα έξυπνο, mobile-first σύστημα διαχείρισης βαρδιών για φιλοξενία, λιανική και logistics.",
      ogImage: "/og/og-home.png",
      ogImageAlt: "Πλατφόρμα διαχείρισης βαρδιών Omnyo",
      ogImageWidth: OG_IMAGE_DIMENSIONS.width,
      ogImageHeight: OG_IMAGE_DIMENSIONS.height,
      twitterTitle:
        "Omnyo - Σύγχρονη Διαχείριση Βαρδιών για Αναπτυσσόμενες Ομάδες",
      twitterDescription:
        "Αντικαταστήστε τα υπολογιστικά φύλλα, τα χάρτινα προγράμματα και το χάος του WhatsApp με το Omnyo. Ένα έξυπνο, mobile-first σύστημα διαχείρισης βαρδιών για φιλοξενία, λιανική και logistics.",
      twitterImage: "/og/og-home.png",
      structuredData: [],
      breadcrumbs: "Αρχική",
    },
  },
  product: {
    en: {
      title: "Product - How Omnyo Works | Shift Management Features",
      description:
        "Discover how Omnyo simplifies shift scheduling for managers and employees. Visual builder, real-time notifications, and mobile access.",
      canonicalPath: ROUTES.product.en,
      ogTitle: "Product - How Omnyo Works | Shift Management Features",
      ogDescription:
        "Discover how Omnyo simplifies shift scheduling for managers and employees. Visual builder, real-time notifications, and mobile access.",
      ogImage: "/og/og-product.png",
      ogImageAlt: "Omnyo product overview",
      ogImageWidth: OG_IMAGE_DIMENSIONS.width,
      ogImageHeight: OG_IMAGE_DIMENSIONS.height,
      twitterTitle: "Product - How Omnyo Works | Shift Management Features",
      twitterDescription:
        "Discover how Omnyo simplifies shift scheduling for managers and employees. Visual builder, real-time notifications, and mobile access.",
      twitterImage: "/og/og-product.png",
      structuredData: ["breadcrumbs", "softwareApplication"],
      breadcrumbs: "Product",
    },
    gr: {
      title: "Προϊόν - Πώς Λειτουργεί το Omnyo | Χαρακτηριστικά Βαρδιών",
      description:
        "Ανακαλύψτε πώς το Omnyo απλοποιεί τον προγραμματισμό βαρδιών για managers και εργαζομένους. Οπτικός δημιουργός, ειδοποιήσεις σε πραγματικό χρόνο και πρόσβαση από κινητό.",
      canonicalPath: ROUTES.product.gr,
      ogTitle: "Προϊόν - Πώς Λειτουργεί το Omnyo | Χαρακτηριστικά Βαρδιών",
      ogDescription:
        "Ανακαλύψτε πώς το Omnyo απλοποιεί τον προγραμματισμό βαρδιών για managers και εργαζομένους. Οπτικός δημιουργός, ειδοποιήσεις σε πραγματικό χρόνο και πρόσβαση από κινητό.",
      ogImage: "/og/og-product.png",
      ogImageAlt: "Επισκόπηση προϊόντος Omnyo",
      ogImageWidth: OG_IMAGE_DIMENSIONS.width,
      ogImageHeight: OG_IMAGE_DIMENSIONS.height,
      twitterTitle: "Προϊόν - Πώς Λειτουργεί το Omnyo | Χαρακτηριστικά Βαρδιών",
      twitterDescription:
        "Ανακαλύψτε πώς το Omnyo απλοποιεί τον προγραμματισμό βαρδιών για managers και εργαζομένους. Οπτικός δημιουργός, ειδοποιήσεις σε πραγματικό χρόνο και πρόσβαση από κινητό.",
      twitterImage: "/og/og-product.png",
      structuredData: ["breadcrumbs", "softwareApplication"],
      breadcrumbs: "Προϊόν",
    },
  },
  pricing: {
    en: {
      title: "Pricing - Early Access Program | Omnyo",
      description:
        "Join Omnyo's early access pilot program. Full features and dedicated support for early adopters.",
      canonicalPath: ROUTES.pricing.en,
      ogTitle: "Pricing - Early Access Program | Omnyo",
      ogDescription:
        "Join Omnyo's early access pilot program. Full features and dedicated support for early adopters.",
      ogImage: "/og/og-pricing.png",
      ogImageAlt: "Omnyo early access program",
      ogImageWidth: OG_IMAGE_DIMENSIONS.width,
      ogImageHeight: OG_IMAGE_DIMENSIONS.height,
      twitterTitle: "Pricing - Early Access Program | Omnyo",
      twitterDescription:
        "Join Omnyo's early access pilot program. Full features and dedicated support for early adopters.",
      twitterImage: "/og/og-pricing.png",
      structuredData: ["breadcrumbs"],
      breadcrumbs: "Pricing",
    },
    gr: {
      title: "Τιμολόγηση - Πρόγραμμα Πρόωρης Πρόσβασης | Omnyo",
      description:
        "Εγγραφείτε στο πιλοτικό πρόγραμμα πρόωρης πρόσβασης του Omnyo. Πλήρη χαρακτηριστικά και αφιερωμένη υποστήριξη για πρώτους χρήστες.",
      canonicalPath: ROUTES.pricing.gr,
      ogTitle: "Τιμολόγηση - Πρόγραμμα Πρόωρης Πρόσβασης | Omnyo",
      ogDescription:
        "Εγγραφείτε στο πιλοτικό πρόγραμμα πρόωρης πρόσβασης του Omnyo. Πλήρη χαρακτηριστικά και αφιερωμένη υποστήριξη για πρώτους χρήστες.",
      ogImage: "/og/og-pricing.png",
      ogImageAlt: "Πρόγραμμα πρόωρης πρόσβασης Omnyo",
      ogImageWidth: OG_IMAGE_DIMENSIONS.width,
      ogImageHeight: OG_IMAGE_DIMENSIONS.height,
      twitterTitle: "Τιμολόγηση - Πρόγραμμα Πρόωρης Πρόσβασης | Omnyo",
      twitterDescription:
        "Εγγραφείτε στο πιλοτικό πρόγραμμα πρόωρης πρόσβασης του Omnyo. Πλήρη χαρακτηριστικά και αφιερωμένη υποστήριξη για πρώτους χρήστες.",
      twitterImage: "/og/og-pricing.png",
      structuredData: ["breadcrumbs"],
      breadcrumbs: "Τιμολόγηση",
    },
  },
  contact: {
    en: {
      title: "Contact - Get in Touch | Omnyo",
      description:
        "Contact Omnyo to learn more about our shift management platform or join our early access waitlist.",
      canonicalPath: ROUTES.contact.en,
      ogTitle: "Contact - Get in Touch | Omnyo",
      ogDescription:
        "Contact Omnyo to learn more about our shift management platform or join our early access waitlist.",
      ogImage: "/og/og-contact.png",
      ogImageAlt: "Contact Omnyo",
      ogImageWidth: OG_IMAGE_DIMENSIONS.width,
      ogImageHeight: OG_IMAGE_DIMENSIONS.height,
      twitterTitle: "Contact - Get in Touch | Omnyo",
      twitterDescription:
        "Contact Omnyo to learn more about our shift management platform or join our early access waitlist.",
      twitterImage: "/og/og-contact.png",
      structuredData: ["breadcrumbs"],
      breadcrumbs: "Contact",
    },
    gr: {
      title: "Επικοινωνία - Επικοινωνήστε Μαζί Μας | Omnyo",
      description:
        "Επικοινωνήστε με το Omnyo για να μάθετε περισσότερα για την πλατφόρμα διαχείρισης βαρδιών ή να εγγραφείτε στη λίστα αναμονής πρόωρης πρόσβασης.",
      canonicalPath: ROUTES.contact.gr,
      ogTitle: "Επικοινωνία - Επικοινωνήστε Μαζί Μας | Omnyo",
      ogDescription:
        "Επικοινωνήστε με το Omnyo για να μάθετε περισσότερα για την πλατφόρμα διαχείρισης βαρδιών ή να εγγραφείτε στη λίστα αναμονής πρόωρης πρόσβασης.",
      ogImage: "/og/og-contact.png",
      ogImageAlt: "Επικοινωνήστε με το Omnyo",
      ogImageWidth: OG_IMAGE_DIMENSIONS.width,
      ogImageHeight: OG_IMAGE_DIMENSIONS.height,
      twitterTitle: "Επικοινωνία - Επικοινωνήστε Μαζί Μας | Omnyo",
      twitterDescription:
        "Επικοινωνήστε με το Omnyo για να μάθετε περισσότερα για την πλατφόρμα διαχείρισης βαρδιών ή να εγγραφείτε στη λίστα αναμονής πρόωρης πρόσβασης.",
      twitterImage: "/og/og-contact.png",
      structuredData: ["breadcrumbs"],
      breadcrumbs: "Επικοινωνία",
    },
  },
  about: {
    en: {
      title: "About - Our Mission | Omnyo",
      description:
        "Learn about Omnyo's mission to modernize shift scheduling for businesses that run on shifts. Our values: simplicity, fairness, and flexibility.",
      canonicalPath: ROUTES.about.en,
      ogTitle: "About - Our Mission | Omnyo",
      ogDescription:
        "Learn about Omnyo's mission to modernize shift scheduling for businesses that run on shifts. Our values: simplicity, fairness, and flexibility.",
      ogImage: "/og/og-about.png",
      ogImageAlt: "About Omnyo",
      ogImageWidth: OG_IMAGE_DIMENSIONS.width,
      ogImageHeight: OG_IMAGE_DIMENSIONS.height,
      twitterTitle: "About - Our Mission | Omnyo",
      twitterDescription:
        "Learn about Omnyo's mission to modernize shift scheduling for businesses that run on shifts. Our values: simplicity, fairness, and flexibility.",
      twitterImage: "/og/og-about.png",
      structuredData: ["breadcrumbs"],
      breadcrumbs: "About",
    },
    gr: {
      title: "Σχετικά - Η Αποστολή Μας | Omnyo",
      description:
        "Μάθετε για την αποστολή του Omnyo να εκσυγχρονίσει τον προγραμματισμό βαρδιών για επιχειρήσεις που λειτουργούν με βάρδιες. Αξίες: απλότητα, δικαιοσύνη και ευελιξία.",
      canonicalPath: ROUTES.about.gr,
      ogTitle: "Σχετικά - Η Αποστολή Μας | Omnyo",
      ogDescription:
        "Μάθετε για την αποστολή του Omnyo να εκσυγχρονίσει τον προγραμματισμό βαρδιών για επιχειρήσεις που λειτουργούν με βάρδιες. Αξίες: απλότητα, δικαιοσύνη και ευελιξία.",
      ogImage: "/og/og-about.png",
      ogImageAlt: "Σχετικά με το Omnyo",
      ogImageWidth: OG_IMAGE_DIMENSIONS.width,
      ogImageHeight: OG_IMAGE_DIMENSIONS.height,
      twitterTitle: "Σχετικά - Η Αποστολή Μας | Omnyo",
      twitterDescription:
        "Μάθετε για την αποστολή του Omnyo να εκσυγχρονίσει τον προγραμματισμό βαρδιών για επιχειρήσεις που λειτουργούν με βάρδιες. Αξίες: απλότητα, δικαιοσύνη και ευελιξία.",
      twitterImage: "/og/og-about.png",
      structuredData: ["breadcrumbs"],
      breadcrumbs: "Σχετικά",
    },
  },
  notFound: {
    en: {
      title: "Page Not Found | Omnyo",
      description: "Sorry, the page you're looking for doesn't exist.",
      canonicalPath: ROUTES.notFound.en,
      ogTitle: "Page Not Found | Omnyo",
      ogDescription: "Sorry, the page you're looking for doesn't exist.",
      ogImage: "/og/og-default.png",
      ogImageAlt: "Omnyo shift management platform",
      ogImageWidth: OG_IMAGE_DIMENSIONS.width,
      ogImageHeight: OG_IMAGE_DIMENSIONS.height,
      twitterTitle: "Page Not Found | Omnyo",
      twitterDescription: "Sorry, the page you're looking for doesn't exist.",
      twitterImage: "/og/og-default.png",
      robots: {
        index: false,
        follow: false,
      },
      structuredData: [],
      breadcrumbs: "404",
    },
    gr: {
      title: "Δεν Βρέθηκε Σελίδα | Omnyo",
      description: "Η σελίδα που αναζητάτε δεν υπάρχει.",
      canonicalPath: ROUTES.notFound.gr,
      ogTitle: "Δεν Βρέθηκε Σελίδα | Omnyo",
      ogDescription: "Η σελίδα που αναζητάτε δεν υπάρχει.",
      ogImage: "/og/og-default.png",
      ogImageAlt: "Πλατφόρμα διαχείρισης βαρδιών Omnyo",
      ogImageWidth: OG_IMAGE_DIMENSIONS.width,
      ogImageHeight: OG_IMAGE_DIMENSIONS.height,
      twitterTitle: "Δεν Βρέθηκε Σελίδα | Omnyo",
      twitterDescription: "Η σελίδα που αναζητάτε δεν υπάρχει.",
      twitterImage: "/og/og-default.png",
      robots: {
        index: false,
        follow: false,
      },
      structuredData: [],
      breadcrumbs: "404",
    },
  },
};
