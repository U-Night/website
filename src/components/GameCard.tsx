import React from "react";
import clsx from "clsx";

type GameCardProps = {
  gameName: string;
  gameTags: string[];
  gameDescription: string;
  gameImageUrl: string;
  gameLink: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function GameCard({
  gameName,
  gameTags,
  gameDescription,
  gameImageUrl,
  gameLink,
  className,
  ...props
}: GameCardProps) {
  

  return (
    <div
      className={clsx(
        "bg-white rounded-lg shadow-lg max-w-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.01] transform-gpu",
        className
      )}
      {...props}
    >
      <img
        src={gameImageUrl}
        alt={gameName}
        className="rounded-t-lg"
      />
      <div className="p-6 bg-gradient-to-tr from-[#020411] to-parsley-900 text-white rounded-b-lg">
        <h2 className="font-heading text-3xl">{gameName}</h2>
        <p className="font-light text-sm text-[#FFFF83]">
          <em>{gameTags.join(" - ")}</em>
        </p>
        <p>{gameDescription}</p>
        <a href={gameLink} target="_blank" rel="noopener noreferrer" className="cursor-pointer text-persian-indigo-400 hover:underline" aria-label={`Learn more about ${gameName}`}>Learn more →</a>
      </div>
    </div>
  );
}
