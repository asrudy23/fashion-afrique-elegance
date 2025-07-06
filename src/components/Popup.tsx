// src/components/ui/Popup.js
import { useEffect } from "react";
import { CheckCircle, XCircle } from "lucide-react";

const Popup = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Le popup disparaît après 3 secondes

    return () => clearTimeout(timer);
  }, [onClose]);

  const isSuccess = type === "success";

  return (
    <div className="fixed top-5 right-5 z-[100] animate-fade-in-down">
      <div
        className={`flex items-center gap-4 p-4 rounded-lg shadow-lg text-white ${
          isSuccess ? "bg-green-600/90" : "bg-red-600/90"
        }`}
      >
        {isSuccess ? <CheckCircle size={24} /> : <XCircle size={24} />}
        <span className="font-medium">{message}</span>
      </div>
    </div>
  );
};

export default Popup;
