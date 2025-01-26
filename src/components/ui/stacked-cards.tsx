import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './stacked-cards.module.css';
import Image from 'next/image';

interface StackedCardsProps {
  cards: {
    color: string;
    content: string;
    icon: string;
  }[];
  className?: string;
}

export function StackedCards({ cards = [], className = '' }: StackedCardsProps) {
  const listRef = useRef<HTMLUListElement>(null);
  const setters = useRef<any[]>([]);

  useEffect(() => {
    if (!listRef.current) return;

    const list = listRef.current;
    const threshold = 120;
    const eases = {
      in: gsap.parseEase("power4.in"),
      out: gsap.parseEase("power2.out"),
    };

    const syncWave = (e: PointerEvent) => {
      const x = e.clientX;
      
      Array.from(list.children).forEach((child, i) => {
        if (!setters.current[i]) {
          setters.current[i] = gsap.quickSetter(child, '--power');
        }

        const { left, width } = child.getBoundingClientRect();
        const distance = x - (left + width * 0.5);
        const clamped = gsap.utils.clamp(-threshold, threshold, distance);
        const mapped = gsap.utils.mapRange(-threshold, threshold, -1, 1)(clamped);
        const power = mapped > 0 
          ? 1 - eases.in(mapped) 
          : 1 - eases.out(Math.abs(mapped));

        setters.current[i](power);
      });
    };

    const resetCards = () => {
      setters.current.forEach(setter => setter(0));
    };

    list.addEventListener('pointermove', syncWave as any);
    list.addEventListener('pointerleave', resetCards);

    return () => {
      list.removeEventListener('pointermove', syncWave as any);
      list.removeEventListener('pointerleave', resetCards);
    };
  }, []);

  return (
    <div className={`${styles.container} ${className}`}>
      <ul
        ref={listRef}
        className={styles.cardsList}
        style={{
          '--swatch-count': cards.length,
        } as React.CSSProperties}
      >
        {cards.map((card, index) => (
          <li
            key={index}
            className={styles.cardItem}
            style={{
              '--i': index,
            } as React.CSSProperties}
          >
            <button
              className={styles.cardButton}
              style={{
                '--color': card.color,
              } as React.CSSProperties}
            >
              <Image 
                src={card.icon}
                alt=""
                width={24}
                height={24}
                className={styles.cardIcon}
              />
              <span>{card.content}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
} 