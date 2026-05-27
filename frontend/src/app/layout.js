import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StockTicker from "../components/StockTicker";
import ChatWidget from "../components/ChatWidget";
import "../app/globals.css";

export const metadata = {
  title: "TradeX",
  description: "TradeX trading platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <StockTicker />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
