import React, { useState, useEffect } from 'react';
import {  Header, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';


import Parallax from '../components/home/parallax/Parallax';
import HomepageHeading from '../components/HomepageHeading';
import Presentation from '../components/about/Presentation/Presentation';
import Experience from '../components/about/Experience';
import Certificates from '../components/about/Certifications';
import BannerSocial from '../components/banners/BannerSocial';
import Services from '../components/home/Services';

const homeProps = {
  homeHeading: {
    title:"Iván Medina",
    subtitle: "Application Security and Penetration Tester"
  },  homeServices: {
    title: "Technical Skills",
    services:[
      {
        id: "appsec",
        icon: "lock",
        title: "Application Security",
        bullets: [
          'Secure Code Review',
          'SAST, DAST and SCA',
          'Threat Modeling',
          'CI/CD Security'
        ],
      },
      {
        id: "pentest",
        icon: "shield",
        title: "Penetration Testing",
        bullets: [
          'Web, API and Android',
          'Cloud (AWS & Azure)',
          'WiFi',
          'Internal/External Network',
          'Active Directory'
        ],
      },
      {
        id: "secdev",
        icon: "crosshairs",
        title: "Red Team Operations",
        bullets: [
          'Adversary Simulation',
          'Sliver C2',
          'TTP Implementation (MITRE ATT&CK Mapping)',
        ],
      },
      {
        id: "secdev",
        icon: "code",
        title: "Web Development",
        bullets: [
          'Secure Coding',
          'DevSecOps Integration',
          'ReactJS, NextJS, StrapiJS, NodeJS',
          'Git'
        ],
      },
    ],
  },

}

const aboutProps = {
  aboutPresentation: {
    presentationImage: "assets/images/desktopme.jpg",
    title: "root@kali:~# whoami",
    subtitle: "I'm Iván, I'm from Mexico and I love finding vulnerabilities and coding",
    content: 
    `I studied Computer Systems Engineering and started in Cybersecurity participating in CTFs for many years. Currently, I work in Application Security and Penetration Testing specialized in Web Applications, Active Directory, and Cloud Environments such as AWS and Azure, and I also have practical experience in Red Teaming operations performing Adversary Simulations.\nI enjoy going to the gym, listening to lo-fi music, photography, skateboarding, and playing FPS video games..`,
    buttonContent: "Contact",
  },
  aboutExperience: {
    title: "Experience",
    experiences: [
      {
        company: 'Fluid Attacks',
        role: 'Application Security Analyst',
        description:
          `As an analyst, my activities included continuous hacking such as penetration testing against web applications, APIs, microservices, and cloud infrastructure, as well as source code review, SAST and collaborating with developers to remediate findings and integrate security into the SDLC.`,
        tools: ['Burp Suite', 'Postman', 'Semgrep', 'Python', 'Bash']
      },
      {
        company: 'UAdeC',
        role: 'Web Developer',
        description:
          'I had the opportunity to work for a period at my own university. During that time, I had the role of Web Developer, where I participated in developing an inventory system to migrate ir from legacy technologies to more modern ones.',
        tools: ['PHP', 'Laravel', 'JavaScript', 'Git', 'SQL Server']
      },
          {
        company: 'Evotek',
        role: 'Web Developer',
        description:
          'During my Days at Evotek, I participated Development tasks and Server Configurations, led a small development team, automated processes to improve the Development and Deployment and was part of a Mobile Development project.',
        tools: ['ReactJS', 'NodeJS', 'Docker', 'React Native', 'Firebase']
      },
      {
        company: 'Trivius Systems (Internship)',
        role: 'Pentetration Tester',
        description:
          'I was part of Trivius to participate in a Project that consisted of an Internal Penetration Testing on Active Directory infrastructure, identifying and exploiting security vulnerabilities. I assisted in the security assessments, vulnerability management, and reporting findings to improve network security.',
        tools: [ 'OpenVAS', 'Nessus', 'Hydra', 'Nmap', 'Nikto', 'Netexec', 'Impacket']
      },
      {
        company: 'UAdeC',
        role: 'CTF Player',
        description:
          'I started as part of the first Schols Hacking Team, beginning with binary explotation and reverse engineering where my team and I placed in the Top 4 three times at the HackDef CTF. Then I was part of the Mayas CTF Team in the Pwning Category, during my time with Mayas, we participated in the CSAW 2021 CTF, where we qualified for the finals and achieved the 35th place globally. Finaly, I was part of Fluid Attacks Team in the HackMex CTF 2023 and we achieved first place.',
        tools: ['IDA','Ghidra','GDB','Pwntools','Python','Burp Suite']
      }
    ]
  },
  aboutCertifications: {
    title: "Certifications",
    certs: [
      { src: '/assets/images/certs/oswe.png', label: 'OSWE' },
      { src: '/assets/images/certs/oswp.png', label: 'OSWP' },
      { src: '/assets/images/certs/ewptx.png', label: 'eWPTX' },
      { src: '/assets/images/certs/cwes.png', label: 'CWES' },
      { src: '/assets/images/certs/cap.png', label: 'CAP' },
      { src: '/assets/images/certs/crta.png', label: 'CRTA' },
      { src: '/assets/images/certs/apisec.png', label: 'APISec' },
      { src: '/assets/images/certs/mcrta.png', label: 'MCRTA' },
      { src: '/assets/images/certs/lfd121.png', label: 'LFD121' },
      { src: '/assets/images/certs/adrts.png', label: 'AD-RTS' },
    ]
  },
  aboutBanner01:{
    title: "Got Questions?",
    description: "If you want to talk, ask anything, or just say hi, I’m here...",
    icons:
        [
            { name: "medium", url:"https://medium.com/@ivansk8.imm" },
            { name: "linkedin", url:"https://www.linkedin.com/in/ivanmedina-isc/" },
            { name: "github", url:"https://github.com/ivanmedina" },
            { name: "discord", url:"https://discordapp.com/users/611002011713798184" },
        ]
  },
}

export default function Homepage() {

  return (

    <div style={{ overflow: 'hidden' }}>

      <HomepageHeading { ...homeProps.homeHeading }/>
      
      <Presentation {...aboutProps.aboutPresentation}/>

      <Services { ...homeProps.homeServices }/>

      <Parallax 
        imageUrl="assets/images/selfphoto-min.jpg"
        speed={0.8} 
      />
      <Experience {...aboutProps.aboutExperience}/>

      < BannerSocial {...aboutProps.aboutBanner01}/>

      <Certificates {...aboutProps.aboutCertifications}/>

    </div>

  );
}