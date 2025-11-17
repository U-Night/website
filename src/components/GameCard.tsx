import React from "react";
import clsx from "clsx";

type GameCardProps = {
  GameName: string;
  GameTags: string[];
  GameDescription: string;
  GameImageUrl: string;
  GameLink: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function GameCard({
  GameName,
  GameTags,
  GameDescription,
  GameImageUrl,
  GameLink,
  className,
  ...props
}: GameCardProps) {
  

  return (
    <div
      className={clsx(
        "bg-white rounded-lg shadow-lg max-w-sm hover:shadow-xl transition-shadow duration-300",
        className
      )}
      {...props}
    >
      <img
        src={GameImageUrl}
        alt={GameName}
        className="rounded-t-lg"
      />
      <div className="p-6 bg-gradient-to-tr from-[#020411] to-parsley-900 text-white rounded-b-lg">
        <h2 className="font-heading text-3xl">{GameName}</h2>
        <p className="font-light text-sm text-[#FFFF83]">
          <em>{GameTags.join(" - ")}</em>
        </p>
        <p>{GameDescription}</p>
        <a href={GameLink} target="_blank" rel="noopener noreferrer" className="cursor-pointer text-persian-indigo-400 hover:underline">Learn more →</a>
      </div>
    </div>
  );
}
