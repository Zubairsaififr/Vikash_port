import React from 'react'
import './About.css'
import Card from '../Card/Card'
// import python from "../../assets/pay.png"
// import react from "../../assets/multi.png"
// import mysql from "../../assets/hrpolo.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'




gsap.registerPlugin(ScrollTrigger)
function About() {
  useGSAP(() => {
    gsap.from(".circle ", {
      x: -100,
      opacity: 0,
      duration: 1,
      sragger: 1,
      scrollTrigger: {
        trigger: ".circle",
        scroll: "body",
        scrub: 2,

        start: "top 60%",
        end: "top 30%",

      }
    })
    gsap.from(".circle ", {
      x: -100,
      opacity: 0,
      duration: 1,
      sragger: 1,
      scrollTrigger: {
        trigger: ".circle",
        scroll: "body",
        scrub: 2,

        start: "top 60%",
        end: "top 30%",

      }
    })
    gsap.from(".line ", {
      x: -100,
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".line",
        scroll: "body",
        scrub: 2,

        start: "top 60%",
        end: "top 30%",

      }
    })

    gsap.from(".aboutdetails h1 ", {
      x: -100,
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".aboutdetails h1",
        scroll: "body",
        scrub: 2,

        start: "top 60%",
        end: "top 30%",

      }
    })
    gsap.from(".aboutdetails ul", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".aboutdetails ul",
        scroll: "body",
        scrub: 2,

        start: "top 60%",
        end: "top 30%",

      }
    })
    gsap.from(".rightabout ", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".rightabout",
        scroll: "body",
        scrub: 2,

        start: "top 60%",
        end: "top 30%",

      }
    })


  })
  useGSAP(() => {
    gsap.from(".card", {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".card",
        scroll: "body",
        scrub: 2,

      }

    })


  })

  return (
    <>
      <div id="sum" className='ppp'>

        <div className='AZU'>
          <h1>Professional Summary </h1>
          <h3>Mechanical Design Engineer with over 3.5 years of hands-on experience in the lithium-ion battery industry, specializing in the design and development of battery packs, modules, and enclosures for Electric Vehicles (EV), Home UPS systems, and Energy Storage Systems (ESS/BESS).
            Proficient in SolidWorks for creating robust, production-ready 3D models and detailed drawings, with strong expertise in sheet metal design, IP-rated enclosures for environmental protection, and adherence to Design for Manufacturability (DFM) and Design for Assembly (DFA) principles.
            Skilled in generating comprehensive manufacturing documentation, including GD&T, BOMs, and assembly instructions, to ensure seamless transition from concept to production.
            Proven track record of collaborating with cross-functional teams— including electrical, thermal, and manufacturing engineers—to deliver safe, reliable, cost-optimized, and high-performance battery solutions that meet stringent industry standards.
            Passionate about advancing sustainable energy technologies through innovative mechanical design.</h3>
        </div>
        <div id='about'>

          <div className="leftabout">
            <div className="circle-line">
              <div className="circle"></div>
              <div className="line"></div>
              <div className="circle"></div>
              <div className="line"></div>
              <div className="circle"></div>
              <div className="line"></div>
              <div className="circle"></div>
            </div>
            <div className="aboutdetails">

              <div className="Education">
                <h1>Education</h1>
                <ul>
                  <li><span>B-Tech</span>: Mechanical Engineering (2018-2022)</li>
                  <li>Hi-Tech Institute of Engineering & Technology, AKTU University   </li>
                  {/* <li><span>Graduation</span>: Bachelor's In Business Administration  (2021) </li>
                  <li>CCS University  </li> */}

                </ul>
              </div>
              <div className="Certification">
                <h1>Certification</h1>
                <ul>
                  <li> <span>Ducat Sector 63 Noida</span></li>
                  <li>AR/VR Development By IIT Mundi <span>Ducat Sector 63 Noida</span></li>
                  <li>Solid Work <span> Cadd Center Ghaziabad</span></li>

                </ul>
              </div>
              <div className="Skills">
                <h1>Skills</h1>
                <ul>
                  <li>Battery Enclosure Design (EV / ESS / UPS)</li>
                  <li>SolidWorks (3.5+ Years) – Sheet Metal, Assemblies, Drawings </li>
                  <li>IP-Rated Enclosures (IP65 / IP67 – concept & implementation)</li>
                  <li>Sheet Metal (CRCA, Aluminium, Extrusions) </li>
                  <li>Thermal & Structural Design Considerations</li>
                  <li>Design for Manufacturability (DFM) & Assembly (DFA) </li>
                  <li>BOM Creation & Production Drawings</li>
                  <li>Forming Tools (Emboss, Louvers, Vents) </li>
                  <li>GD&T (ISO standards)</li>
                  <li>Prototype Support & Design Validation</li>

                </ul>
              </div>
              <div className="personalinfo">
                <h1>Personal Information</h1>
                <ul>
                  <li><span>Name</span>: Vikash Rajput</li>
                  <li><span>D.O.B</span>: 08-Aug-2000</li>
                  <li><span>Gender</span>:Male</li>
                  <li><span>Language Known</span>: English, Hindi</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="rightabout">
            {/* <Card title="Payroll Management" image={python} />
            <Card title="Multitasking" image={react} />
            <Card title="Multitasking" image={react} />
            <Card title="HR Policies" image={mysql} /> */}
          </div>


        </div>
      </div>
    </>
  )
}

export default About