import Header from "@/components/Header/Header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
