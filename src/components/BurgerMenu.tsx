import { animated, config, useSprings } from "react-spring";
import { memo } from "react";

const linearConfig = {
  duration: 100,
};

const topRect = async (next: any, isOpen: boolean) => {
  // Stage 1 - Move to center first
  await next({
    transform: isOpen
      ? "translate(0px, 0px) rotate(0deg)"
      : "translate(0px, 0px) rotate(0deg)",
    config: linearConfig,
  });

  // Stage 2 - Rotate while staying at center
  await next({
    transform: isOpen
      ? "translate(0px, 8.5px) rotate(-45deg)"
      : "translate(0px, 0px) rotate(0deg)",
    config: config.wobbly,
  });
};

const mediumRect = async (next: any, isOpen: boolean) => {
  // Medium rect has only Stage 1
  await next({
    to: {
      opacity: isOpen ? 0 : 1,
    },
    // Make delay when isOpen changed from true to false
    delay: !isOpen && 100,
    config: linearConfig,
  });
};

const bottomRect = async (next: any, isOpen: boolean) => {
  // Stage 1 - Move to center first  
  await next({
    transform: isOpen
      ? "translate(0px, 0px) rotate(0deg)"
      : "translate(0px, 0px) rotate(0deg)",
    config: linearConfig,
  });

  // Stage 2 - Rotate while staying at center
  await next({
    transform: isOpen
      ? "translate(0px, -8.5px) rotate(45deg)"
      : "translate(0px, 0px) rotate(0deg)",
    config: config.wobbly,
  });
};

const rects = [topRect, mediumRect, bottomRect];

const BurgerMenu = memo(({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => {
  const [springs] = useSprings(
    3,
    (index) => ({
      to: async (next) => {
        await rects[index](next, isOpen);
      },
    }),
    [isOpen]
  );

  return (
    <svg
      className="cursor-pointer burgerIcon"
      onClick={onClick}
      width="32"
      height="32"
      viewBox="-4 -6 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {springs.map((props, index) => {
        return (
          <animated.rect
            key={index}
            x="0"
            y={index * 9}
            width="24"
            height="2"
            rx="1"
            fill={"#FFF"}
            style={{
              transformOrigin: `12px ${index * 9 + 1}px`, // Centre de rotation au milieu de chaque barre
              ...props
            }}
          />
        );
      })}
    </svg>
  );
});

export default BurgerMenu;
