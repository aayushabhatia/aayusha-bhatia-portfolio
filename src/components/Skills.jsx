import React from 'react';
import SectionHeading from './SectionHeading';

export default function Skills({ data }) {
  const { sectionHeading, allSkills } = data;

  return (
    <section className="section gray-bg" id="skills">
      <div className="container">
        <SectionHeading miniTitle={sectionHeading.miniTitle} />
        <div className="row gy-3">
          {allSkills?.map((item, index) => (
            <div
              className="col-12 col-sm-6 col-md-4" // Adjust columns to fit 3 per row
              key={index}
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay={index * 100}
            >
              <div className="ex-box">
                <h6>{item.Title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
