// src/components/ui/Popup.js
import { useEffect } from "react";
import { CheckCircle, XCircle } from "lucide-react";

const Popup = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 1200); // Le popup disparaît après 3 secondes

    return () => clearTimeout(timer);
  }, [onClose]);

  const isSuccess = type === "success";

  return (
      <div className="fixed top-5 right-5 z-[100] animate-fade-in-down">
          <div
              className={`flex items-center gap-3 px-5 py-3 rounded-xl shadow-xl backdrop-blur-md border border-white/10 text-white ${
                  isSuccess
                      ? "bg-gradient-to-r from-emerald-500/80 to-teal-500/80"
                      : "bg-gradient-to-r from-rose-600/80 to-red-500/80"
              }`}
          >
              <div className="flex-shrink-0">
                  {isSuccess ? (
                      <CheckCircle size={24} className="text-white drop-shadow" />
                  ) : (
                      <XCircle size={24} className="text-white drop-shadow" />
                  )}
              </div>
              <span className="font-semibold text-sm sm:text-base drop-shadow-sm">
                  {message}
              </span>
          </div>
      </div>

  );
};

export default Popup;
