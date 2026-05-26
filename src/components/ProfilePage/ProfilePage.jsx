import PageWrapper from "../PageWrapper/PageWrapper";
import SectionTitle from "../SectionTitle/SectionTitle";
import Timeline from "../Timeline/Timeline";

export default function ProfilePage({ onBack }) {
  const eduItems = [
    { 
      year: "2021 – 2026", 
      title: "UPN VETERAN JAWA TIMUR", 
      desc: [
        "Pursued higher education with active involvement in both academic and organizational activities.",
        "Participated in various departmental committee events and actively engaged in internal and external organizations, developing leadership, teamwork, and communication skills.",
        "Served as a laboratory assistant for Mapping and Geospatial courses, strengthening technical competencies in spatial analysis and environmental mapping.",
        "Contributed to the design of Water Treatment Plant (WTP) and Wastewater Treatment Plant (WWTP) projects.",
        "Participated in lecturer-led projects focused on landfill and integrated waste management facility (TPA/TPST) planning, enhancing practical experience in environmental engineering and infrastructure development."
      ]
    },
    { 
      year: "2018 – 2021", 
      title: "SMAN 4 SURABAYA", 
      desc: [
        "Completed senior high school with strong academic performance and active involvement in both academic and sports activities.",
        "Participated in several city-level olympiads and regional futsal tournaments, demonstrating competitiveness, teamwork, and continuous self-development.",
        "Graduated with a final report card score of 89.57.",
        "Successfully earned admission to a public university through the UTBK (Computer-Based Written Examination) pathway, reflecting strong dedication and academic capability."
      ]
    },
    { 
      year: "2015 – 2018", 
      title: "SMPN 19 SURABAYA", 
      desc: [
        "Completed junior high school with consistent academic performance and strong participation in extracurricular activities.",
        "Achieved a National Examination score of 33.15/40.00 and consistently obtained satisfying results in monthly try-out examinations, reflecting discipline and academic commitment.",
        "Actively participated in several academic olympiads and regional futsal tournaments.",
        "Demonstrated competitiveness, teamwork, and the ability to balance academic and non-academic pursuits."
      ]
    },
    { 
      year: "2009 – 2015", 
      title: "SDN KERTAJAYA", 
      desc: [
        "Built a strong academic and extracurricular foundation during primary education by consistently ranking in the top 10 of the class from grades 4 to 6.",
        "Actively participated in various regional competitions and olympiads, demonstrating strong performance in both academic and non-academic fields.",
        "Graduated with an outstanding National Examination score of 27.80/30.00.",
        "Achieved 2nd place in a district-level scouting competition and participated in a provincial scouting jamboree.",
        "Actively competed in regional futsal tournaments, reflecting strong teamwork, discipline, and leadership skills."
      ]
    },
  ];
  
  return (
    <PageWrapper onBack={onBack}>
      <SectionTitle label="MY PROFILE" sub="SYSTEM — BIOGRAPHICAL DATA" />
      <Timeline items={eduItems.map(i => ({
        year: i.year, 
        title: i.title, 
        desc: i.desc.map(point => `• ${point}`).join('\n')
      }))} />
    </PageWrapper>
  );
}