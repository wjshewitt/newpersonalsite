import PaperFrameFooter from "../components/PaperFrameFooter";

export default function NewPage() {
  return (
    <main className="min-h-[150vh] bg-background text-foreground">
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-serif mb-6">New Page</h1>
        <p className="max-w-prose">
          This is the extended page. The gradient effect is centered at the bottom.
        </p>
      </div>
      <PaperFrameFooter />
    </main>
  );
}
