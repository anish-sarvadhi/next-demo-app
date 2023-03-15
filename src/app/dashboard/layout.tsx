export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Layout Of Dashboard</h1>
      <section>{children}</section>
    </div>
  );
}
