export interface Member {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  linkedinUrl: string;
  isFounder?: boolean; // Optional: to distinguish if needed, though not used by showcase
}

export interface Alumni {
  id: string;
  name: string;
  imageSrc: string;
  cohort?: string;
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
  // Apex Advisory - First Row
  { id: "yaron", name: "Yaron Rosen", description: "Apex Advisory, Entrepreneur, a16z Scout, angel investor. Brig. General (Res.), Former Air Force Division commander, and Chief of IDF Cyber Staff. Reichman University ICT Research Fellow.", imageSrc: "/team/harris.jpg", linkedinUrl: "https://www.linkedin.com/in/yaron-rosen-3b46296/" },
  { id: "omer", name: "Omer Dagan", description: "Apex Advisory, Ex Commander Lotem, Senior Leadership | Entrepreneur | Impact | People-Centric | Mamram Alumni", imageSrc: "/team/omer.png", linkedinUrl: "https://www.linkedin.com/in/omer-dagan-%F0%9F%8E%97%EF%B8%8F-957916149/" },
  { id: "david_m", name: "David Magerman", description: "Apex Advisory, Co-Founder @ Differential Ventures | PhD in Computer Science, Quantitative Investing | Ex Renaissance Fund", imageSrc: "/team/david.png", linkedinUrl: "https://www.linkedin.com/in/david-magerman-954b25174/" },
  { id: "danny_g", name: "Danny Grander", description: "Co-Founder Snyk | 🚀 Building What I Wish Existed. Betting on Those Who Dare.", imageSrc: "/team/danny_grander.png", linkedinUrl: "https://www.linkedin.com/in/grander/" },
  { id: "rotem", name: "Rotem Lapid", description: "Head of AI, ORT Israel", imageSrc: "/team/rotem_lapid.png", linkedinUrl: "https://www.linkedin.com/in/rotem-lapid-98b42370/" },
  
  // Additional Advisory Members
  { id: "tom_h", name: "Tom Hoffen", description: "Entrepreneur", imageSrc: "/team/tom.png", linkedinUrl: "https://www.linkedin.com/in/tom-hoffen-8722b88a/" },
  { id: "amos_b", name: "Amos Bar Joseph", description: "Entrepreneur", imageSrc: "/team/amos.png", linkedinUrl: "https://www.linkedin.com/in/amos-bar-joseph/" },
  { id: "philip_t", name: "Philip Tannor", description: "Entrepreneur", imageSrc: "/team/phillip.png", linkedinUrl: "https://www.linkedin.com/in/philip-tannor-a6a910b7/" },
  { id: "nir_y", name: "Nir Yaron", description: "Chief of Staff @ Ministry of Finance | Talpiot Alum | Ex. Cyber @ IDF", imageSrc: "/team/nir.png", linkedinUrl: "https://www.linkedin.com/in/nir-yaron-886051241/" },
  { id: "danny_h", name: "Danny Harnik", description: "Senior Technical Staff Member (STSM) at IBM Research", imageSrc: "/team/danny.png", linkedinUrl: "https://www.linkedin.com/in/danny-harnik-19a95436/" },
  { id: "david_d", name: "David Drizin", description: "VP R&D at Paragon", imageSrc: "/team/david_drizin.png", linkedinUrl: "https://www.linkedin.com/in/ddrizin/" },
  { id: "shachar", name: "Shachar Cohen", description: "Software | Management | Talpiot", imageSrc: "/team/shachar.webp", linkedinUrl: "https://www.linkedin.com/in/shachar-cohen-480b86205/" },

  // Women members
  { id: "talya", name: "Talya Pines", description: "MBA intern @ Chicago Booth", imageSrc: "/team/talya.jpeg", linkedinUrl: "https://www.linkedin.com/in/talya-pines/" },
  { id: "adi", name: "Adi Glasman", description: "Vice President of Engineering & Data Zendesk", imageSrc: "/team/adi.jpeg", linkedinUrl: "https://www.linkedin.com/in/glasman/" },

  // Rest of community
  { id: "gal_c", name: "Gal Chechik", description: "Sr. Director of AI Research at NVIDIA, Professor at BIU", imageSrc: "/team/gal_chechik.jpg", linkedinUrl: "https://www.linkedin.com/in/gal-chechik-00a6b44/" },
  { id: "gil_e", name: "Gil Elbaz", description: "Builder", imageSrc: "/team/gil_elbaz.png", linkedinUrl: "https://www.linkedin.com/in/gil-elbaz/" },
  { id: "yonatan_a", name: "Yonatan Amir", description: "Founder & President at Diagnostic Robotics", imageSrc: "/team/yonatan_amir.jpeg", linkedinUrl: "https://www.linkedin.com/in/yonatan-amir/" },
  { id: "elad", name: "Elad Levi", description: "CTO at Plurai, PhD", imageSrc: "/team/elad_levi.jpeg", linkedinUrl: "https://www.linkedin.com/in/elad-levi-a938a3121/" },
  { id: "ilan", name: "Ilan Kadar", description: "CEO at Plurai, PhD", imageSrc: "/team/ilan_kader.jpeg", linkedinUrl: "https://www.linkedin.com/in/ilan-kadar-b57ba511b/" },
  { id: "avior", name: "Avior Barouch", description: "Security Research Director at Paragon", imageSrc: "/team/avior.png", linkedinUrl: "https://www.linkedin.com/in/avior-b-793b21203/" },
  { id: "benny", name: "Benny Meir", description: "DevOps Ninja", imageSrc: "/team/benny_meir.png", linkedinUrl: "" },
  { id: "almog", name: "Almog Baku", description: "GenAI Community Founder", imageSrc: "/team/almog_baku.png", linkedinUrl: "https://www.linkedin.com/in/almogbaku/" },
  { id: "ofer", name: "Ofer Herman", description: "Co-founder & CTO Papaya Global", imageSrc: "/team/ofer_herman.jpeg", linkedinUrl: "https://www.linkedin.com/in/oferherman/" },
  { id: "tamir", name: "Tamir Meerovitch", description: "Sr. Growth Strategy Executive at Frost & Sullivan", imageSrc: "/team/tal_meerovitch.jpeg", linkedinUrl: "https://www.linkedin.com/in/tamir-meerovitch/" },
  { id: "itzik", name: "Itzik Polad", description: "Chief Data Officer at LSports", imageSrc: "/team/itzik.webp", linkedinUrl: "https://www.linkedin.com/in/itzik-polad/" },
  { id: "gadi", name: "Gadi Lifshitz", description: "Ex Director Meta, Ex CTO at Sygnia", imageSrc: "/team/gadi.jpeg", linkedinUrl: "https://www.linkedin.com/in/lgadi/" },
  { id: "ido", name: "Ido Ben Shaul", description: "AA-I Technologies", imageSrc: "/team/ido_ben_shaul.png", linkedinUrl: "https://www.linkedin.com/in/ido-ben-shaul-482449147/" },
];

export const allMembers: Member[] = [...foundingTeamMembers, ...communityMembers];

// Alumni from first APEX Architect Beta Cohort
export const alumniMembers: Alumni[] = [
  { id: "alumni-1", name: "Placeholder Alumnus", imageSrc: "/placeholder-user.jpg", cohort: "Beta Cohort 2024" },
  { id: "alumni-2", name: "Placeholder Alumnus", imageSrc: "/placeholder-user.jpg", cohort: "Beta Cohort 2024" },
  { id: "alumni-3", name: "Placeholder Alumnus", imageSrc: "/placeholder-user.jpg", cohort: "Beta Cohort 2024" },
  { id: "alumni-4", name: "Placeholder Alumnus", imageSrc: "/placeholder-user.jpg", cohort: "Beta Cohort 2024" },
  { id: "alumni-5", name: "Placeholder Alumnus", imageSrc: "/placeholder-user.jpg", cohort: "Beta Cohort 2024" },
  { id: "alumni-6", name: "Placeholder Alumnus", imageSrc: "/placeholder-user.jpg", cohort: "Beta Cohort 2024" },
  { id: "alumni-7", name: "Placeholder Alumnus", imageSrc: "/placeholder-user.jpg", cohort: "Beta Cohort 2024" },
  { id: "alumni-8", name: "Placeholder Alumnus", imageSrc: "/placeholder-user.jpg", cohort: "Beta Cohort 2024" },
  { id: "alumni-9", name: "Placeholder Alumnus", imageSrc: "/placeholder-user.jpg", cohort: "Beta Cohort 2024" },
  { id: "alumni-10", name: "Placeholder Alumnus", imageSrc: "/placeholder-user.jpg", cohort: "Beta Cohort 2024" },
  { id: "alumni-11", name: "Placeholder Alumnus", imageSrc: "/placeholder-user.jpg", cohort: "Beta Cohort 2024" },
  { id: "alumni-12", name: "Placeholder Alumnus", imageSrc: "/placeholder-user.jpg", cohort: "Beta Cohort 2024" },
  { id: "alumni-13", name: "Placeholder Alumnus", imageSrc: "/placeholder-user.jpg", cohort: "Beta Cohort 2024" },
  { id: "alumni-14", name: "Placeholder Alumnus", imageSrc: "/placeholder-user.jpg", cohort: "Beta Cohort 2024" },
  { id: "alumni-15", name: "Placeholder Alumnus", imageSrc: "/placeholder-user.jpg", cohort: "Beta Cohort 2024" },
  { id: "alumni-16", name: "Placeholder Alumnus", imageSrc: "/placeholder-user.jpg", cohort: "Beta Cohort 2024" },
  { id: "alumni-17", name: "Placeholder Alumnus", imageSrc: "/placeholder-user.jpg", cohort: "Beta Cohort 2024" },
  { id: "alumni-18", name: "Placeholder Alumnus", imageSrc: "/placeholder-user.jpg", cohort: "Beta Cohort 2024" },
  { id: "alumni-19", name: "Placeholder Alumnus", imageSrc: "/placeholder-user.jpg", cohort: "Beta Cohort 2024" },
  { id: "alumni-20", name: "Placeholder Alumnus", imageSrc: "/placeholder-user.jpg", cohort: "Beta Cohort 2024" },
  { id: "alumni-21", name: "Placeholder Alumnus", imageSrc: "/placeholder-user.jpg", cohort: "Beta Cohort 2024" },
  { id: "alumni-22", name: "Placeholder Alumnus", imageSrc: "/placeholder-user.jpg", cohort: "Beta Cohort 2024" },
  { id: "alumni-23", name: "Placeholder Alumnus", imageSrc: "/placeholder-user.jpg", cohort: "Beta Cohort 2024" },
  { id: "alumni-24", name: "Placeholder Alumnus", imageSrc: "/placeholder-user.jpg", cohort: "Beta Cohort 2024" },
  { id: "alumni-25", name: "Placeholder Alumnus", imageSrc: "/placeholder-user.jpg", cohort: "Beta Cohort 2024" },
  { id: "alumni-26", name: "Placeholder Alumnus", imageSrc: "/placeholder-user.jpg", cohort: "Beta Cohort 2024" },
  { id: "alumni-27", name: "Placeholder Alumnus", imageSrc: "/placeholder-user.jpg", cohort: "Beta Cohort 2024" },
  { id: "alumni-28", name: "Placeholder Alumnus", imageSrc: "/placeholder-user.jpg", cohort: "Beta Cohort 2024" },
  { id: "alumni-29", name: "Placeholder Alumnus", imageSrc: "/placeholder-user.jpg", cohort: "Beta Cohort 2024" },
  { id: "alumni-30", name: "Placeholder Alumnus", imageSrc: "/placeholder-user.jpg", cohort: "Beta Cohort 2024" },
];