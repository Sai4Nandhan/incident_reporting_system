import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const splitText = (text) =>
  text.split(" ").map((word, i) => (
    <span key={i} style={{ marginRight: "8px" }}>
      {word}
    </span>
  ));

export default function Landing({ onEnter }) {
  const heroTitleRef = useRef(null);
  const heroTextRef = useRef(null);
  const heroImageRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    // HERO TEXT REVEAL
    gsap.to(heroTitleRef.current.querySelectorAll("span"), {
      y: 0,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.05,
    });

    gsap.to(heroTextRef.current.querySelectorAll("span"), {
      y: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.03,
      delay: 0.3,
    });

    // HERO IMAGE EXIT
    gsap.to(heroImageRef.current, {
      opacity: 0,
      y: -100,
      scale: 0.9,
      scrollTrigger: {
        trigger: heroTextRef.current,
        start: "bottom center",
        end: "bottom top",
        scrub: true,
      },
    });

    // INFO SECTION TEXT REVEALS
    sectionsRef.current.forEach((section) => {
      const words = section.querySelectorAll("span");

      gsap.to(words, {
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.04,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      });
    });
  }, []);

  return (
    <div>
      {/* HERO */}
      <section className="hero">
        <div>
          <h1 className="reveal" ref={heroTitleRef}>
            {splitText("Incident Reporting Made Structured")}
          </h1>

          <p className="reveal" ref={heroTextRef}>
            {splitText(
              "Report incidents, upload evidence, and track investigation progress through a clean and reliable workflow."
            )}
          </p>

          <button onClick={onEnter}>Enter Application</button>
        </div>

        <div className="hero-visual" ref={heroImageRef}>
          <img src="/src/assets/hero.png" alt="Abstract visual" />
        </div>
      </section>

      {/* INFO SECTIONS */}
      {[
        "Report incidents clearly with structured input and validation",
        "Manage evidence securely and link it directly to incidents",
        "Track investigation status through controlled workflow stages",
      ].map((text, i) => (
        <section
          key={i}
          className="info reveal"
          ref={(el) => (sectionsRef.current[i] = el)}
        >
          <h2>{splitText(text)}</h2>
        </section>
      ))}
    </div>
  );
}






