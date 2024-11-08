import React from 'react';
import SectionHeading from './SectionHeading';

export default function Education({ data }) {
  const { sectionHeading, allEducation } = data;

  return (
    <section className="section gray-bg" id="education">
      <div className="container">
        <SectionHeading
          miniTitle={sectionHeading.miniTitle}
        />
        <div className="row gy-3">
          {allEducation?.map((item, index) => (
            <div
              className="col-12"
              key={index}
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay={index * 100}
            >
              <div className="ex-box">
                <div className="row gy-4">
                  
                  <div className="col-md-8 col-lg-9">
                    <div className="ex-right">
                      <h5>{item.Title}</h5>
                      <h6>{item.Address}</h6>
                      <p className="m-0">{item.Timeline}</p>
                      <p className="m-0">{item.Description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}