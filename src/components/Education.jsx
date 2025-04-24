import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchool } from "react-icons/io5";

const educations = [
  {
    degree: "BS Computer Science Major in Software Technology",
    school: "De La Salle Univeristy, Manila",
    date: "Sep 2022 - Present",
    description: "Research Executive at Data Science Society. Doumentations member at SDFO Paragons. Member of Human-X Interactions Lab.",
  },
  {
    degree: "High School",
    school: "The Nazareth School, Lipa City",
    date: "Aug 2017 - May 2022",
    description: "Graduated in STEM. Competed in math and chess competitions.",
  }
];

const Education = () => (
  <section id="education" className="relative z-0 py-16 px-0 w-full bg-[color:var(--bg)] border-t border-t-[color:var(--text)]">
    <div className="w-full">
      <div className="flex items-center justify-center mb-12 w-full">
        <h2 className="section-title text-3xl md:text-3xl font-bold text-text drop-shadow-lg tracking-tight text-center w-fit">
          Education
        </h2>
      </div>
      <div className="w-full">
        <VerticalTimeline lineColor="var(--violet)">
          {educations.map((education, i) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={education.date}
              iconStyle={{ background: "var(--violet)", color: "#fff", textAlign: "center" }}
              icon={<IoSchool size={24} />}
              key={i}
              contentStyle={{ color: 'var(--text)', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
              contentArrowStyle={{ borderRight: '7px solid var(--bg)' }}
            >
              <h3 className="vertical-timeline-element-title font-bold text-[color:var(--violet)]" style={{ textAlign: "left" }}>{education.degree}</h3>
              <h4 className="vertical-timeline-element-subtitle text-[color:var(--green)]" style={{ textAlign: "left" }}>{education.school}</h4>
              <p className="text-[color:var(--violet)] text-base mt-2" style={{ textAlign: "left" }}>{education.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  </section>
);

export default Education;