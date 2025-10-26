export interface Member {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  linkedinUrl: string;
  isFounder?: boolean; // Optional: to distinguish if needed, though not used by showcase
}

export const foundingTeamMembers: Member[] = [
  { id: "avishag", name: "Avishag Bohbot", description: "Venture Builder VelocityX, Social Entrepreneur", imageSrc: "/team/avishag.jpeg", linkedinUrl: "https://www.linkedin.com/in/avishagbohbot/", isFounder: true },
  { id: "tal", name: "Tal Fialkow", description: "VP Cyber AI at Dream", imageSrc: "/team/tal.jpeg", linkedinUrl: "https://www.linkedin.com/in/tal-fialkow-486b8455/", isFounder: true },
  { id: "roy", name: "Roy Nissim", description: "2x Founder | PhD", imageSrc: "/team/roy.jpeg", linkedinUrl: "https://www.linkedin.com/in/roy-nissim/", isFounder: true },
  { id: "nativ", name: "Nativ Levy", description: "Founder | ex-81", imageSrc: "/team/nativ.jpeg", linkedinUrl: "https://www.linkedin.com/in/nativ-levy/", isFounder: true },
  { id: "elroei", name: "Elroei Buchman", description: "Venture Builder", imageSrc: "/team/elroei.png", linkedinUrl: "https://www.linkedin.com/in/elroei-buchman-9b59931/", isFounder: true },
  { id: "ofek", name: "Ofek Censor", description: "Building", imageSrc: "/team/ofek.jpeg", linkedinUrl: "https://www.linkedin.com/in/ofekc/", isFounder: true },
];

export const communityMembers: Member[] = [
  { id: "yaron_r", name: "Yaron Rosen", description: "Entrepreneur, a16z Scout, angel investor and Apex Advisory", imageSrc: "/team/yaron_rosen.jpg", linkedinUrl: "https://www.linkedin.com/in/yaron-rosen-3b46296/" },
  { id: "omer_d", name: "Omer Dagan", description: "Entrepreneur, People-Centric CIO, Ex-Commander Lotem and Apex Advisory", imageSrc: "/team/omer_dagan.jpeg", linkedinUrl: "https://www.linkedin.com/in/omer-dagan-%F0%9F%8E%97%EF%B8%8F-957916149/" },
  { id: "david_m", name: "David Magerman", description: "Co-Founder @ Differential Ventures, Ex-renaissance fund and Apex Advisory", imageSrc: "/team/david_magerman.jpeg", linkedinUrl: "https://www.linkedin.com/in/david-magerman-954b25174/" },
  { id: "danny_g", name: "Danny Grander", description: "Co-Founder @ Snyk, Angel Investor", imageSrc: "/team/danny_grander.jpeg", linkedinUrl: "https://www.linkedin.com/in/grander/" },
  { id: "rotem", name: "Rotem Lapid", description: "Head of AI, ORT Israel", imageSrc: "/team/rotem_lapid.png", linkedinUrl: "https://www.linkedin.com/in/rotem-lapid-98b42370/" },
  { id: "seffi_c", name: "Seffi Cohen", description: "Chief Data Scientist, AI Expert, PhD", imageSrc: "/team/seffi_cohen.jfif", linkedinUrl: "https://www.linkedin.com/in/seffi-cohen/" },
  { id: "gal_c", name: "Gal Chechik", description: "Sr. Director of AI Research at NVIDIA, Professor at BIU", imageSrc: "/team/gal_chechik.jpg", linkedinUrl: "https://www.linkedin.com/in/gal-chechik-00a6b44/" },
  { id: "talya", name: "Talya Pines", description: "MBA intern @ Chicago Booth", imageSrc: "/team/talya.jpeg", linkedinUrl: "https://www.linkedin.com/in/talya-pines/" },
  { id: "assaf_e", name: "Assaf Elovic", description: "Director, Head of AI at monday.com", imageSrc: "/team/assaf_elovic.jpeg", linkedinUrl: "https://www.linkedin.com/in/assafe/" },
  { id: "adi_s", name: "Adi Sharabani", description: "Serial founder, Snyk", imageSrc: "/team/adi_sharabani.jfif", linkedinUrl: "https://www.linkedin.com/in/adisharabani/" },
  { id: "gal", name: "Gal Peretz", description: "Head of AI @ Carbyne | Co-Host @ LangTalks podcast", imageSrc: "/team/gal_perez.png", linkedinUrl: "https://www.linkedin.com/in/gal-peretz/" },
  { id: "shlomi", name: "Shlomi Boutnaru, Ph.D.", description: "Post Exit Founder", imageSrc: "/team/shlomi.jpeg", linkedinUrl: "https://www.linkedin.com/in/shlomi-boutnaru-ph-d-ba781811a/" },
  { id: "roy_m", name: "Roy Miara", description: "Director of Machine Learning at Pinecone", imageSrc: "/team/miara.png", linkedinUrl: "https://www.linkedin.com/in/miararoy/" },
  { id: "shahar_l", name: "Shahar Lutati", description: "AI Architect, Hard problem solver, PhD", imageSrc: "/team/shahar_lutati.jpeg", linkedinUrl: "https://www.linkedin.com/in/shahar-lutati-4b4863118/" },
  { id: "stav_l", name: "Stav Levy", description: "CEO and Co-Founder @ Alta | AI Revenue Workforce", imageSrc: "/team/stav_levy.jfif", linkedinUrl: "https://www.linkedin.com/in/stav-levy/" },
  { id: "yael_d", name: "Yael Daihes", description: "AI and Data Builder, Independent Consultant", imageSrc: "/team/yael_daihes.jfif", linkedinUrl: "https://www.linkedin.com/in/yael-daihes/" },
  { id: "david_k", name: "David Kadouch", description: "Google AI, Technion", imageSrc: "/team/david_kadouch.jfif", linkedinUrl: "https://www.linkedin.com/in/davidkad/" },

  { id: "adi", name: "Adi Glasman", description: "Vice President of Engineering & Data Zendesk", imageSrc: "/team/adi.jpeg", linkedinUrl: "https://www.linkedin.com/in/glasman/" },

  { id: "yonatan_a", name: "Yonatan Amir", description: "Founder & President at Diagnostic Robotics", imageSrc: "/team/yonatan_amir.jpeg", linkedinUrl: "https://www.linkedin.com/in/yonatan-amir/" },
  { id: "elad", name: "Elad Levi", description: "CTO at Plurai, PhD", imageSrc: "/team/elad_levi.jpeg", linkedinUrl: "https://www.linkedin.com/in/elad-levi-a938a3121/" },
  { id: "ilan", name: "Ilan Kadar", description: "CEO at Plurai, PhD", imageSrc: "/team/ilan_kader.jpeg", linkedinUrl: "https://www.linkedin.com/in/ilan-kadar-b57ba511b/" },

  { id: "shachar", name: "Shachar Cohen", description: "4M, Talpiot", imageSrc: "/team/shachar.webp", linkedinUrl: "https://www.linkedin.com/in/shachar-cohen-480b86205/" },
  { id: "benny", name: "Benny Meir", description: "DevOps Ninja", imageSrc: "/team/benny_meir.png", linkedinUrl: "" },
  { id: "almog", name: "Almog Baku", description: "GenAI Community Founder", imageSrc: "/team/almog_baku.png", linkedinUrl: "https://www.linkedin.com/in/almogbaku/" },
  { id: "ofer", name: "Ofer Herman", description: "Co-founder & CTO Papaya Global", imageSrc: "/team/ofer_herman.jpeg", linkedinUrl: "https://www.linkedin.com/in/oferherman/" },
  { id: "tamir", name: "Tamir Meerovitch", description: "Sr. Growth Strategy Executive at Frost & Sullivan", imageSrc: "/team/tal_meerovitch.jpeg", linkedinUrl: "https://www.linkedin.com/in/tamir-meerovitch/" },
  { id: "itzik", name: "Itzik Polad", description: "Chief Data Officer at LSports", imageSrc: "/team/itzik.webp", linkedinUrl: "https://www.linkedin.com/in/itzik-polad/" },
  { id: "gadi", name: "Gadi Lifshitz", description: "Ex Director Meta, Ex CTO at Sygnia", imageSrc: "/team/gadi.jpeg", linkedinUrl: "https://www.linkedin.com/in/lgadi/" },
  { id: "ido", name: "Ido Ben Shaul", description: "AA-I Technologies", imageSrc: "/team/ido_ben_shaul.png", linkedinUrl: "https://www.linkedin.com/in/ido-ben-shaul-482449147/" },
];

export const allMembers: Member[] = [...foundingTeamMembers, ...communityMembers]; 