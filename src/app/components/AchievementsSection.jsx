"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const AnimatedNumbers = dynamic(
  () => import("react-animated-numbers"),
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Repositori",
    value: "20",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Projek",
    value: "6",
  },
  {
    metric: "Tahun",
    value: "2",
  },
];

const AchievementsSection = () => {
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRenderCount((prevCount) => prevCount + 1);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <h2 className="text-white text-4xl font-bold flex flex-row">
              {achievement.prefix}
              <AnimatedNumbers
                includeComma
                animateToNumber={parseInt(achievement.value)}
                locale="en-US"
                className="text-white text-4xl font-bold"
                configs={(_, index) => ({
                  mass: 1,
                  friction: 100,
                  tensions: 140 * (index + 1),
                })}
                key={renderCount} // Key change triggers re-render
              />
              {achievement.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
