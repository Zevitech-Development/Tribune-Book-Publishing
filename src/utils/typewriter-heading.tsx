"use client";

import React, { useEffect, useMemo, useState } from "react";

import { TypewriterHeadingProps } from "@/interfaces/utils-interfaces";

const TypewriterHeading: React.FC<TypewriterHeadingProps> = ({
  heading,
  headingPrimary,
  remaningHeading,
  className = "",
}) => {
  const fullSegments = useMemo(
    () => [
      { text: heading, className: "" },
      { text: headingPrimary, className: "text-primary underline underline-offset-3 decoration-8 decoration-primary italic" },
      { text: remaningHeading, className: "" },
    ],
    [heading, headingPrimary, remaningHeading]
  );

  const [displayedText, setDisplayedText] = useState<string[]>(["", "", ""]);
  const [charIndex, setCharIndex] = useState(0);
  const [segmentIndex, setSegmentIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (segmentIndex < fullSegments.length) {
      const segment = fullSegments[segmentIndex];

      if (charIndex < segment.text.length) {
        timeout = setTimeout(() => {
          const newText = [...displayedText];
          newText[segmentIndex] += segment.text[charIndex];
          setDisplayedText(newText);
          setCharIndex(charIndex + 1);
        }, 70);
      } else {
        setSegmentIndex(segmentIndex + 1);
        setCharIndex(0);
      }
    } else {
      timeout = setTimeout(() => {
        setDisplayedText(["", "", ""]);
        setSegmentIndex(0);
        setCharIndex(0);
      }, 8000);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, segmentIndex, fullSegments, displayedText]);

  return (
    <h1
      className={`relative lg:text-4xl font-extrabold !leading-[140%] tracking-tigh md:text-3xl text-2xl text-heading font-libre md:max-w-[450px] px-4 ${className}`}
    >
      {fullSegments.map((segment, i) => (
        <span key={i} className={segment.className}>
          {displayedText[i]}{" "}
        </span>
      ))}
      <span className="inline-block animate-pulse ml-1 text-primary">|</span>
    </h1>
  );
};

export default TypewriterHeading;
