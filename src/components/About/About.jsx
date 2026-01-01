import React from 'react'
import './About.css'
import Card from '../Card/Card'
import python from "../../assets/python.png"
import react from "../../assets/reacttt.png"
import mysql from "../../assets/mysql.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'




gsap.registerPlugin(ScrollTrigger)
function About() {
  useGSAP(()=>{
    gsap.from(".circle ",{
      x: -100,
      opacity: 0,
      duration: 1,
      sragger:1,
      scrollTrigger:{
        trigger: ".circle",
        scroll: "body",
        scrub: 2,
     
        start: "top 60%",
        end: "top 30%",
        
      }
    })
     gsap.from(".line ",{
      x: -100,
      opacity: 0,
      duration: 1,
      stagger:1,
      scrollTrigger:{
        trigger: ".line",
        scroll: "body",
        scrub: 2,
        
        start: "top 60%",
        end: "top 30%",
        
      }
    })

gsap.from(".aboutdetails h1 ",{
      x: -100,
      opacity: 0,
      duration: 1,
      stagger:1,
      scrollTrigger:{
        trigger: ".aboutdetails h1",
        scroll: "body",
        scrub: 2,
        
        start: "top 60%",
        end: "top 30%",
        
      }
    })
    gsap.from(".aboutdetails ul",{
      y: 100,
      opacity: 0,
      duration: 1,
      stagger:1,
      scrollTrigger:{
        trigger: ".aboutdetails ul",
        scroll: "body",
        scrub: 2,
      
        start: "top 60%",
        end: "top 30%",
        
      }
    })
    gsap.from(".rightabout ",{
      y: 100,
      opacity: 0,
      duration: 1,
      stagger:1,
      scrollTrigger:{
        trigger: ".rightabout",
        scroll: "body",
        scrub: 2,
       
        start: "top 60%",
        end: "top 30%",
        
      }
    })


  })
  useGSAP(()=>{
    gsap.from(".card",{
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger:{
        trigger: ".card",
        scroll: "body",
        scrub: 2,

      }

    })

      
  })
  
  return (
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
              <li><span>Degree</span>: B-Tech (Mechanical Engineering)</li>
              <li><span>Intermediate </span>: UP Board (2018) </li>
              <li><span>High School</span>:UP Board (2016) </li>
              
            </ul>
          </div>
          <div className="Certification">
            <h1>Certification</h1>
            <ul>
              <li>Python Fullstack Web Development <span>Ducat Sector 63 Noida</span></li>
              <li>AR/VR Development By IIT Mundi <span>Ducat Sector 63 Noida</span></li>
              <li>Solid Work <span> Cadd Center Ghaziabad</span></li>
              
            </ul>
          </div>
          <div className="Skills">
            <h1>Skills</h1>
            <ul>
              <li>Python Fullstack </li>
              <li>Web Development</li>
              <li>React.js</li>
              <li>MySql</li>
              
            </ul>
          </div>
          <div className="personalinfo">
            <h1>Personal Information</h1>
            <ul>
              <li><span>Name</span>: Zubair Saifi</li>
              <li><span>D.O.B</span>: 25-June-2000</li>
              <li><span>Gender</span>: Male</li>
              <li><span>Language Known</span>: English, Hindi</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rightabout">
        <Card title="Python" image={python}/>
        <Card title="React.js" image={react}/>
        <Card title="MySql" image={mysql}/>
      </div>

        
    </div>
  )
}

export default About