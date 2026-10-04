import { useState, useEffect } from 'react';
import { Mail, Check, Copy } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface ProtectedEmailProps {
  className?: string;
  showIcon?: boolean;
  iconClassName?: string;
  variant?: 'link' | 'card' | 'inline' | 'button';
  label?: string;
}

export const ProtectedEmail: React.FC<ProtectedEmailProps> = ({
  className = '',
  showIcon = true,
  iconClassName = 'w-4 h-4',
  variant = 'link',
  label
}) => {
  const [email, setEmail] = useState<string>('');
  const [copied, setCopied] = useState(false);

  // Dynamic JS assembly prevents static regex crawler harvesting
  useEffect(() => {
    const user = SITE_CONFIG.contact.emailUser;
    const domain = SITE_CONFIG.contact.emailDomain;
    setEmail(`${user}@${domain}`);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (email) {
      window.location.href = `mailto:${email}?subject=Dominion%20Healthcare%20Staffing%20Inquiry`;
    }
  };

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (email && navigator.clipboard) {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Human-readable obfuscated display for pre-hydration / bot defense
  const displayAddress = email || `${SITE_CONFIG.contact.emailUser} [at] ${SITE_CONFIG.contact.emailDomain}`;

  if (variant === 'button') {
    return (
      <button
        onClick={handleClick}
        className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl transition-all cursor-pointer ${className}`}
        title="Send email via your email client"
      >
        {showIcon && <Mail className={iconClassName} />}
        <span>{label || displayAddress}</span>
      </button>
    );
  }

  if (variant === 'card') {
    return (
      <div
        onClick={handleClick}
        className={`flex items-center justify-between gap-3 p-4 rounded-2xl cursor-pointer group ${className}`}
      >
        <div className="flex items-center gap-3.5 min-w-0">
          {showIcon && (
            <div className="w-12 h-12 rounded-xl bg-teal-700 text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
          )}
          <div className="min-w-0">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Email Direct (Protected)</div>
            <div className="text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors truncate">
              {email ? (
                email
              ) : (
                <span className="[direction:rtl] [unicode-bidi:bidi-override] select-none text-slate-700">
                  {SITE_CONFIG.contact.emailDomain.split('').reverse().join('')}@
                  {SITE_CONFIG.contact.emailUser.split('').reverse().join('')}
                </span>
              )}
            </div>
            <span className="text-[11px] text-slate-500 block">Tap to open mail client</span>
          </div>
        </div>

        <button
          onClick={handleCopy}
          className="p-2.5 rounded-lg text-slate-400 hover:text-emerald-700 hover:bg-emerald-50 transition-colors shrink-0"
          title="Copy email to clipboard"
          aria-label="Copy email address"
        >
          {copied ? (
            <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
              <Check className="w-4 h-4 text-emerald-600" /> Copied
            </span>
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-1.5 group">
      <a
        href="#"
        onClick={handleClick}
        className={`inline-flex items-center gap-1.5 transition-colors cursor-pointer ${className}`}
        title="Send email via mail client"
      >
        {showIcon && <Mail className={iconClassName} />}
        <span>{label || (email ? email : `${SITE_CONFIG.contact.emailUser}@...`)}</span>
      </a>
      <button
        onClick={handleCopy}
        className="opacity-0 group-hover:opacity-100 focus:opacity-100 p-1 text-slate-400 hover:text-emerald-400 transition-opacity"
        title="Copy email address"
        aria-label="Copy email"
      >
        {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
      </button>
    </div>
  );
};
