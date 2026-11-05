import React from "react";

const stats = [
  {
    value: "5k+",
    label: "User Visited",
    bg: "hsla(170, 75%, 41%, 0.2)",
    color: "hsl(170, 75%, 41%)",
  },
  {
    value: "300+",
    label: "Total Videos",
    bg: "hsla(351, 83%, 61%, 0.3)",
    color: "hsl(351, 83%, 61%)",
  },
  {
    value: "95%",
    label: "Satisfaction Rate",
    bg: "hsla(260, 100%, 67%, 0.3)",
    color: "hsl(260, 100%, 67%)",
  },
  {
    value: "200+",
    label: "Top Instructors",
    bg: "hsla(42, 94%, 55%, 0.25)",
    color: "hsl(42, 94%, 55%)",
  },
];

const Statatics: React.FC = () => {
  return (
    <section className="bg-white py-[20px] pb-[100px]" aria-label="stats">
      <div className="max-w-[1400px] mx-auto flex justify-center flex-wrap gap-4">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="w-[250px] h-[180px] rounded-[20px] p-[30px] m-[10px] text-center flex flex-col justify-center items-center shadow-sm"
            style={{
              backgroundColor: stat.bg,
              fontFamily: "var(--font-league-spartan)",
            }}
          >
            <h3
              className="text-[3rem] font-semibold m-0 leading-[1.1]"
              style={{ color: stat.color }}
            >
              {stat.value}
            </h3>
            <p className="text-black text-[20px] font-normal m-0 mt-[10px]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statatics;
