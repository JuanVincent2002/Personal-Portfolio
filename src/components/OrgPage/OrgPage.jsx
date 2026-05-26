import PageWrapper from "../PageWrapper/PageWrapper";
import SectionTitle from "../SectionTitle/SectionTitle";
import Timeline from "../Timeline/Timeline";

export default function OrgPage({ onBack }) {
  const items = [
    { 
      year: "March 2024 – Feb 2025", 
      title: "HEAD OF STUDENT WELFARE AND ADVOCACY DEPARTMENT", 
      org: "Himpunan Mahasiswa Teknik Lingkungan UPN Veteran Jawa Timur (HIMA-TL)", 
      desc: [
        "Managed and supervised the implementation of departmental programs and initiatives, ensuring alignment with organizational objectives and reporting directly to the president.",
        "Assisted in processing 60+ student appeals for tuition fee adjustments (UKT), ensuring accurate documentation and timely submission.",
        "Organized academic study club sessions covering 5+ courses, supporting students’ learning and academic performance.",
        "Disseminated information on 5+ training and certification programs, increasing student awareness of professional development opportunities.",
        "Coordinated a guest lecture on hazardous waste (B3) management with 90+ attendees, enhancing student exposure to industry practices."
      ]
    },
    { 
      year: "Oct 2023 – Apr 2024", 
      title: "HEAD OF EDUCATIONAL AND PROFESSION DEPARTMENT", 
      org: "Ikatan Mahasiswa Teknik Lingkungan Indonesia (IMTLI)", 
      desc: [
        "Executed 2 flagship programs (Enviro Training Center 2023 and Environmental Learning Center 2023), certifying 15+ students and publishing 6 articles.",
        "Managed an IDR 1.000.000 with 100% compliance.",
      ]
    },
    { 
      year: "March 2023 – Feb 2024", 
      title: "STAFF OF STUDENT WELFARE AND ADVOCACY DEPARTMENT", 
      org: "Himpunan Mahasiswa Teknik Lingkungan UPN Veteran Jawa Timur (HIMA-TL)", 
      desc: [
        "Executed UKT (Single Tuition Fee) appeal sessions to facilitate financial relief and reduce tuition burdens for eligible students.",
        "Assisted in verifying student documents to ensure administrative accuracy and compliance with university policies.",
        "Accommodated student aspirations and inquiries by serving as a liaison between students and relevant university bureaucracies to resolve academic and financial concerns.",
      ]
    },
    { 
      year: "Apr 2022 – Feb 2023", 
      title: "STAFF OF INTERNAL AFFAIRS DEPARTMENT", 
      org: "Ikatan Mahasiswa Teknik Lingkungan Indonesia (IMTLI)", 
      desc: [
        "Executed 'IMTC Goes to Campus' (IGTC) campaign to drive leadership regeneration and recruit new organizational members.",
        "Coordinated with regional IGTC coordinators across multiple regions to ensure seamless event execution and timeline adherence.",
        "Monitored and controlled regional budgets to prevent both shortages and excesses, ensuring efficient allocation of resources.",
      ]
    },
  ];
  
  return (
    <PageWrapper onBack={onBack}>
      <SectionTitle label="ORGANIZATIONAL EXPERIENCE" sub="SYSTEM — LEADERSHIP RECORD" />
      <Timeline items={items.map(i => ({
        year: i.year, 
        title: i.title, 
        desc: `${i.org}\n\n${i.desc.map(point => `• ${point}`).join('\n')}`
      }))} />
    </PageWrapper>
  );
}