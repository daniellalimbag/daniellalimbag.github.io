import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchool } from "react-icons/io5";

const experiences = [
  {
    title: "BS Computer Science Major in Software Technology",
    company: "De La Salle Univeristy, Manila",
    date: "Sep 2022 - Present",
    description: "Research Executive at Data Science Society. Doumentations member at SDFO Paragons. Member of Human-X Interactions Lab.",
  },
  {
    title: "High School",
    company: "The Nazareth School, Lipa City",
    date: "Aug 2017 - May 2022",
    description: "Graduated in STEM. Competed in math and chess competitions.",
  }
];

const Experience = () => (
  <section id="experience" className="py-16 px-0 w-full bg-[color:var(--bg)]">
    <div className="w-full">
      <div className="flex items-center justify-center mb-12 w-full">
        <h2 className="section-title text-3xl md:text-3xl font-bold text-text drop-shadow-lg tracking-tight text-center w-fit">
          Experience
        </h2>
      </div>
      <div className="w-full">
        <VerticalTimeline lineColor="var(--violet)">
          {experiences.map((work, i) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={work.date}
              iconStyle={{ background: "var(--violet)", color: "#fff", textAlign: "center" }}
              icon={<IoSchool size={24} />}
              key={i}
              contentStyle={{ background: 'var(--bg)', color: 'var(--text)', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
              contentArrowStyle={{ borderRight: '7px solid var(--bg)' }}
            >
              <h3 className="vertical-timeline-element-title font-bold text-[color:var(--violet)]" style={{ textAlign: "left" }}>{work.title}</h3>
              <h4 className="vertical-timeline-element-subtitle text-[color:var(--green)]" style={{ textAlign: "left" }}>{work.company}</h4>
              <p className="text-[color:var(--text)] text-base mt-2" style={{ textAlign: "left" }}>{work.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  </section>
);

export default Experience;