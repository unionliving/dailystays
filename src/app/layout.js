import { Inter } from "next/font/google";
import "./globals.css";
import Hotjar from "@hotjar/browser";
import Script from "next/script";
import { FaWhatsapp } from 'react-icons/fa';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: " Explore the Best Furnished Apartments for Short Term Rent | Comfortable Short Stay Rentals & Fully Furnished Flats",
  description: "Find fully furnished short-term rentals in Mumbai & Pune. Ideal for work trips or vacations. Flexible stays, top locations & complete comfort. Book your short stay apartment now!",
  keywords: ['Union Living','Union Living Mumbai','Community Living in Mumbai', 'Community Living in Pune', 'Community Living in Thane','Community Living in Navi Mumbai', "Premium Co-living",'Best Community'],
  verification: {
    google: 'd2t3dmGtRE5YMyQqUbiHFM-lWvnz9mpRbS7Wwmb8uS0',
  },
  openGraph: {
    title: ' Explore the Best Furnished Apartments for Short Term Rent | Comfortable Short Stay Rentals & Fully Furnished Flats',
    description: 'Find fully furnished short-term rentals in Mumbai & Pune. Ideal for work trips or vacations. Flexible stays, top locations & complete comfort. Book your short stay apartment now!',
    url: 'https://daily.unionliving.in',
    siteName: 'Daily By Union',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2Fthedailystaysfinal.png?alt=media&token=88129dd6-39b3-473d-8718-e5865748d7b0', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2Fthedailystaysfinal.png?alt=media&token=88129dd6-39b3-473d-8718-e5865748d7b0', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'Daily By Union',
      },
    ],
  
  },
  alternates: {
    canonical: 'https://daily.unionliving.in/',
  },
 
  icons: {
    icon: 'https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2Fthedailystaysfinal.png?alt=media&token=88129dd6-39b3-473d-8718-e5865748d7b0',
    shortcut: 'https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2Fthedailystaysfinal.png?alt=media&token=88129dd6-39b3-473d-8718-e5865748d7b0',
    apple: 'https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2Fthedailystaysfinal.png?alt=media&token=88129dd6-39b3-473d-8718-e5865748d7b0',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: 'https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2Fthedailystaysfinal.png?alt=media&token=88129dd6-39b3-473d-8718-e5865748d7b0',
    },
  },
}

export default function RootLayout({ children }) {
 
  
  
  return (
    <html lang="en">
     
     
   
    
     
     
      <body className={inter.className}>
      <Script
          id="ga-src"
          src={`https://www.googletagmanager.com/gtag/js?id=G-ESJJELKM39`}
          strategy="afterInteractive"
        />
         {/* Init + SPA pageview tracking */}
         <Script id="ga-init" strategy="afterInteractive">
          {`
            (function() {
              if (!('G-ESJJELKM39')) return;
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;

              gtag('js', new Date());
              gtag('config', 'G-ESJJELKM39');

              // Send pageview on history changes (Next.js SPA navs)
              const sendPageview = () => {
                gtag('config', 'G-ESJJELKM39', { page_path: location.pathname + location.search });
              };

              const origPushState = history.pushState;
              const origReplaceState = history.replaceState;

              history.pushState = function() {
                origPushState.apply(this, arguments);
                sendPageview();
              };
              history.replaceState = function() {
                origReplaceState.apply(this, arguments);
                sendPageview();
              };
              window.addEventListener('popstate', sendPageview);
            })();
          `}
        </Script>
      <noscript>
          
        </noscript>
     
        {children}
        
        {/* Floating WhatsApp Icon - Global */}
        <div className="fixed bottom-6 right-6 z-50">
          <a 
            href="https://wa.me/917021654226" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
            aria-label="Contact us on WhatsApp"
          >
            <FaWhatsapp size={28} className="group-hover:scale-110 transition-transform duration-300" />
          </a>
          
          {/* Phone Number Tooltip */}
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-black text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            +91 98765 43210
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-black border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
          </div>
        </div>
        
      </body>
      
     
 
    </html>
  );
}
