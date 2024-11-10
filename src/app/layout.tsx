import "./globals.css";

export const metadata = {
  title: 'Dreams Academy',
  description: "This is a school website design.",
  keywords: ["kralis", "school websites", "school website templates", "Netrobase"],
  metadataBase: new URL("https://www.templates.kralis.app/"),
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=""
      >
        {children}
      </body>
    </html>
  );
}
