import Header from "@/components/Header/Header";

export default function ClientLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
