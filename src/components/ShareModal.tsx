import React, { useState, useCallback, useEffect } from "react";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  shareText: string;
  shareUrl: string;
}

// Icons for social media
const WhatsAppIcon: React.FC<{ className?: string }> = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375c-.99-1.576-1.516-3.391-1.516-5.26 0-5.445 4.455-9.885 9.942-9.885 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411" />
  </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      xmlns="http://www.w3.org/2000/svg"
      id="primary"
      d="M14,6h3a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H14A5,5,0,0,0,9,7v3H7a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1H9v7a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V14h2.22a1,1,0,0,0,1-.76l.5-2a1,1,0,0,0-1-1.24H13V7A1,1,0,0,1,14,6Z"
    />
  </svg>
);
const XIcon: React.FC<{ className?: string }> = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z" />
  </svg>
);
const CopyIcon: React.FC<{ className?: string }> = (props) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z" />
    <path
      opacity="0.5"
      d="M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5"
    />
  </svg>
);

const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  shareText,
  shareUrl,
}) => {
  // All hooks are now at the top level, before any conditions.
  const [show, setShow] = useState(false);
  const [copyStatus, setCopyStatus] = useState("Copiar Enlace");

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setShow(true), 10);
      return () => clearTimeout(timer);
    } else {
      setShow(false);
    }
  }, [isOpen]);

  const handleCopy = useCallback(() => {
    const fullTextToCopy = `${shareText}\n${shareUrl}`;
    navigator.clipboard.writeText(fullTextToCopy).then(() => {
      setCopyStatus("¡Copiado!");
      setTimeout(() => setCopyStatus("Copiar Enlace"), 2000);
    });
  }, [shareText, shareUrl]);

  const handleClose = () => {
    setShow(false);
    setTimeout(onClose, 300);
  };

  // Conditional rendering logic is now after all hooks.
  if (!isOpen) {
    return null;
  }

  const encodedShareText = encodeURIComponent(shareText);
  const encodedUrl = encodeURIComponent(shareUrl);

  const shareLinks = {
    whatsapp: `https://api.whatsapp.com/send?text=${encodedShareText}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedShareText}`,
  };

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center z-50 p-4 transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>
      <div
        className={`relative bg-white dark:bg-slate-800 rounded-2xl shadow-xl w-full max-w-xs sm:max-w-sm p-6 text-center transition-all duration-300 ${
          show ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">
          ¡Comparte tu logro!
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm sm:text-base">
          Elige una plataforma para compartir tus resultados.
        </p>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <a
            href={shareLinks.whatsapp}
            data-action="share/whatsapp/share"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg bg-[#25D366] text-white font-semibold hover:bg-[#1DAE51] transition-transform hover:scale-105"
          >
            <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8" />
            <span className="text-sm">WhatsApp</span>
          </a>
          <a
            href={shareLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg bg-[#1877F2] text-white font-semibold hover:bg-[#166FE5] transition-transform hover:scale-105"
          >
            <FacebookIcon className="w-7 h-7 sm:w-8 sm:h-8" />
            <span className="text-sm">Facebook</span>
          </a>
          <a
            href={shareLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg bg-[#1DA1F2] text-white font-semibold hover:bg-[#0C85D0] transition-transform hover:scale-105"
          >
            <XIcon className="w-7 h-7 sm:w-8 sm:h-8" />
            <span className="text-sm">Twitter/X</span>
          </a>
          <button
            onClick={handleCopy}
            className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg bg-slate-500 text-white font-semibold hover:bg-slate-600 transition-transform hover:scale-105 disabled:opacity-75"
          >
            <CopyIcon className="w-7 h-7 sm:w-8 sm:h-8" />
            <span className="text-sm">{copyStatus}</span>
          </button>
        </div>

        <button
          onClick={handleClose}
          className="mt-6 w-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold py-2.5 px-4 rounded-full hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ShareModal;
