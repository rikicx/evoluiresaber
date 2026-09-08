import { BackToTopButton } from "./BackToTopButton";
import { WhatsAppButton } from "./WhatsAppButton";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-3 sm:bottom-7 sm:right-7">
      <BackToTopButton />
      <WhatsAppButton />
    </div>
  );
}
