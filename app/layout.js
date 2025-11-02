import "./globals.css";

export const metadata = {
  title: "Agentic Project Viewer",
  description: "View Lovable projects on the web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
