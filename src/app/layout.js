import "./globals.css";

export const metadata = {
  title: "DHCB",
  description: "Created by Abdelrahman Rihan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
