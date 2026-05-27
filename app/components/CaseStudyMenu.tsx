'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

type MenuItem = { label: string; href: string };
type MenuSection = { label?: string; items: MenuItem[] };

const sections: MenuSection[] = [
  { items: [{ label: 'Home', href: '/' }] },
  {
    label: 'Case Studies',
    items: [
      { label: 'NI-DAQmx · calldaqlib', href: '/work/ni-daqmx' },
      { label: 'OPC UA Explorer', href: '/work/opc-ua-explorer' },
    ],
  },
  { items: [{ label: 'About', href: '/#about' }] },
];

const INK = '#111827';
const INK3 = '#6b7280';
const LINE = '#e5e7eb';

const COLLAPSED_W_REST = 102;
const COLLAPSED_W_HOVER = 134;
const EXPANDED_W = 280;

export default function CaseStudyMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [hoverIdx, setHoverIdx] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!isOpen) return;
    function onClickOutside(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsOpen(false);
    }
    document.addEventListener('mousedown', onClickOutside);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
      document.removeEventListener('keydown', onKey);
    };
  }, [isOpen]);

  const [canHover, setCanHover] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia('(hover: hover) and (pointer: fine)');
    const update = () => setCanHover(mql.matches);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, []);

  // On touch, jump straight to the open state — pre-expanding on tap before
  // the menu actually opens creates a half-step that reads as laggy.
  const expanded = isOpen || (canHover && isHover);

  return (
    <div
      ref={rootRef}
      style={{
        position: 'fixed',
        top: 20,
        right: 20,
        zIndex: 200,
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <div
        style={{
          width: isOpen
            ? EXPANDED_W
            : expanded
              ? COLLAPSED_W_HOVER
              : COLLAPSED_W_REST,
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: `1px solid ${LINE}`,
          borderRadius: 32,
          boxShadow: isOpen
            ? '0 16px 48px rgba(0, 0, 0, 0.14)'
            : '0 2px 12px rgba(0, 0, 0, 0.06)',
          transition:
            'width 280ms cubic-bezier(0.23, 1, 0.32, 1), box-shadow 280ms ease',
          overflow: 'hidden',
        }}
      >
        {/* Header — Menu + circle/hamburger (toggles open) */}
        <button
          type="button"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: isOpen ? 'space-between' : 'flex-start',
            gap: 14,
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '10px 10px 10px 20px',
            fontFamily: 'inherit',
            boxSizing: 'border-box',
          }}
        >
          <span
            style={{
              fontSize: 15,
              fontWeight: 400,
              color: INK,
              letterSpacing: '-0.01em',
              lineHeight: 1,
            }}
          >
            Menu
          </span>
          <span
            aria-hidden="true"
            style={{
              position: 'relative',
              width: expanded ? 44 : 12,
              height: expanded ? 44 : 12,
              borderRadius: '50%',
              background: INK,
              transition:
                'width 240ms cubic-bezier(0.23, 1, 0.32, 1), height 240ms cubic-bezier(0.23, 1, 0.32, 1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                position: 'absolute',
                width: 16,
                height: 2,
                background: '#ffffff',
                borderRadius: 2,
                transform: `translateY(${expanded ? '-2.5px' : '0'}) scaleX(${expanded ? 1 : 0})`,
                opacity: expanded ? 1 : 0,
                transition:
                  'transform 280ms cubic-bezier(0.4, 0, 0.2, 1) 80ms, opacity 200ms ease 120ms',
              }}
            />
            <span
              style={{
                position: 'absolute',
                width: 16,
                height: 2,
                background: '#ffffff',
                borderRadius: 2,
                transform: `translateY(${expanded ? '2.5px' : '0'}) scaleX(${expanded ? 1 : 0})`,
                opacity: expanded ? 1 : 0,
                transition:
                  'transform 280ms cubic-bezier(0.4, 0, 0.2, 1) 80ms, opacity 200ms ease 120ms',
              }}
            />
          </span>
        </button>

        {/* Items panel — clip-path/scale reveal is compositor-only and snappier
            than animating max-height, which always feels stretchy on close. */}
        <div
          role="menu"
          aria-hidden={!isOpen}
          style={{
            maxHeight: isOpen ? 520 : 0,
            opacity: isOpen ? 1 : 0,
            clipPath: isOpen ? 'inset(0 0 0 0)' : 'inset(0 0 100% 0)',
            transformOrigin: 'top',
            transition: isOpen
              ? 'max-height 240ms cubic-bezier(0.23, 1, 0.32, 1), opacity 200ms ease-out 60ms, clip-path 240ms cubic-bezier(0.23, 1, 0.32, 1)'
              : 'max-height 200ms cubic-bezier(0.4, 0, 1, 1), opacity 140ms ease-in, clip-path 200ms cubic-bezier(0.4, 0, 1, 1)',
            overflow: 'hidden',
          }}
        >
          <div style={{ padding: '4px 8px 10px' }}>
            {sections.map((section, sIdx) => (
              <div
                key={sIdx}
                style={{
                  borderTop: `1px solid ${LINE}`,
                  paddingTop: section.label ? 10 : 6,
                  paddingBottom: 4,
                  marginTop: sIdx === 0 ? 0 : 2,
                }}
              >
                {section.label && (
                  <p
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: INK3,
                      margin: '0 8px 6px',
                    }}
                  >
                    {section.label}
                  </p>
                )}
                {section.items.map((item) => {
                  const active = pathname === item.href;
                  const isItemHover = canHover && hoverIdx === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      onClick={() => setIsOpen(false)}
                      onMouseEnter={() => canHover && setHoverIdx(item.href)}
                      onMouseLeave={() => canHover && setHoverIdx(null)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '9px 12px',
                        color: active ? INK3 : INK,
                        fontSize: 14,
                        fontWeight: active ? 500 : 600,
                        textDecoration: 'none',
                        borderRadius: 8,
                        background: isItemHover && !active ? '#f3f4f6' : 'transparent',
                        transition: 'background 140ms ease',
                      }}
                    >
                      <span>{item.label}</span>
                      {active && (
                        <span
                          style={{
                            fontSize: 9,
                            fontWeight: 700,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: INK3,
                          }}
                        >
                          You&rsquo;re here
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
