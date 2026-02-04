import { Helmet } from "react-helmet-async";

export function Analytics() {
  const gaId = import.meta.env.VITE_GA4_ID;

  if (!gaId) {
    return null;
  }

  return (
    <Helmet>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', { anonymize_ip: true });
        `}
      </script>
    </Helmet>
  );
}
