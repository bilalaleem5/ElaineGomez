import { motion } from "framer-motion";

export function WhatsAppFab() {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      href="https://wa.me/19176012822"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full pulse-ring" />
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-[0_4px_20px_color-mix(in_oklab,#25D366_40%,transparent)] hover:scale-110 hover:shadow-[0_4px_30px_color-mix(in_oklab,#25D366_50%,transparent)] transition-all duration-300">
        <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
          <path d="M19.11 17.29c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14-.19.29-.74.94-.9 1.13-.17.19-.33.22-.62.07-.29-.14-1.21-.45-2.3-1.42-.85-.76-1.42-1.7-1.59-1.99-.17-.29-.02-.44.13-.59.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.48-.17 0-.36-.02-.55-.02-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.39s1.02 2.77 1.17 2.96c.14.19 2.02 3.09 4.9 4.33.68.29 1.22.47 1.63.6.69.22 1.31.19 1.8.12.55-.08 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.13-.26-.19-.55-.34zM16.02 5C9.94 5 5 9.94 5 16c0 1.93.5 3.82 1.46 5.48L5 27l5.66-1.48A11 11 0 1 0 16.02 5zm0 20.15c-1.75 0-3.46-.47-4.95-1.35l-.35-.21-3.36.88.9-3.27-.23-.36A9.14 9.14 0 1 1 16.02 25.15z" />
        </svg>
      </span>
    </motion.a>
  );
}
