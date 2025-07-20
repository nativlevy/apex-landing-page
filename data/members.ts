export interface Member {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  linkedinUrl: string;
  isFounder?: boolean; // Optional: to distinguish if needed, though not used by showcase
}

export const foundingTeamMembers: Member[] = [
  { id: "tal", name: "Tal Fialkow", description: "VP Cyber AI at Dream", imageSrc: "/team/tal.jpeg", linkedinUrl: "https://www.linkedin.com/in/tal-fialkow-486b8455/", isFounder: true },
  { id: "roy", name: "Roy Nissim", description: "2x Founder | PhD", imageSrc: "/team/roy.jpeg", linkedinUrl: "https://www.linkedin.com/in/roy-nissim/", isFounder: true },
  { id: "avishag", name: "Avishag Bohbot", description: "Venture Builder VelocityX, Social Entrepreneur", imageSrc: "/team/avishag.jpeg", linkedinUrl: "https://www.linkedin.com/in/avishagbohbot/", isFounder: true },
  { id: "nativ", name: "Nativ Levy", description: "Founder | ex-81", imageSrc: "/team/nativ.jpeg", linkedinUrl: "https://www.linkedin.com/in/nativ-levy/", isFounder: true },
  { id: "elroei", name: "Elroei Buchman", description: "Venture Builder", imageSrc: "/team/elroei.png", linkedinUrl: "https://www.linkedin.com/in/elroei-buchman-9b59931/", isFounder: true },
  { id: "ofek", name: "Ofek Censor", description: "Building", imageSrc: "/team/ofek.jpeg", linkedinUrl: "https://www.linkedin.com/in/ofekc/", isFounder: true },
];

export const communityMembers: Member[] = [
  { id: "assaf_e", name: "Assaf Elovic", description: "Director, Head of AI at monday.com", imageSrc: "/team/assaf_elovic.jpeg", linkedinUrl: "https://www.linkedin.com/in/assafe/" },
  { id: "gal", name: "Gal Peretz", description: "Head of AI @ Carbyne | Co-Host @ LangTalks podcast", imageSrc: "/team/gal_perez.png", linkedinUrl: "https://www.linkedin.com/in/gal-peretz/" },
  { id: "shlomi", name: "Shlomi Boutnaru, Ph.D.", description: "Post Exit Founder", imageSrc: "/team/shlomi.jpeg", linkedinUrl: "https://www.linkedin.com/in/shlomi-boutnaru-ph-d-ba781811a/" },
  { id: "roy_m", name: "Roy Miara", description: "Director of Machine Learning at Pinecone", imageSrc: "/team/miara.png", linkedinUrl: "https://www.linkedin.com/in/miararoy/" },
  { id: "gil_e", name: "Gil Elbaz", description: "Builder", imageSrc: "/team/gil_elbaz.png", linkedinUrl: "https://www.linkedin.com/in/gil-elbaz/" },


  
  // { id: "asaf_t", name: "Asaf Tzur", description: "ex-McKinsey | Founding Partner at Demo Capital", imageSrc: "/team/asaf_tzur.jpeg", linkedinUrl: "https://www.linkedin.com/in/tzurasaf/" },
  { id: "adi", name: "Adi Glasman", description: "Vice President of Engineering & Data Zendesk", imageSrc: "/team/adi.jpeg", linkedinUrl: "https://www.linkedin.com/in/glasman/" },
  
  { id: "yonatan_a", name: "Yonatan Amir", description: "Founder & President at Diagnostic Robotics", imageSrc: "/team/yonatan_amir.jpeg", linkedinUrl: "https://www.linkedin.com/in/yonatan-amir/" },
  { id: "elad", name: "Elad Levi", description: "CTO at Plurai, PhD", imageSrc: "/team/elad_levi.jpeg", linkedinUrl: "https://www.linkedin.com/in/elad-levi-a938a3121/" },
  { id: "ilan", name: "Ilan Kadar", description: "CEO at Plurai, PhD", imageSrc: "/team/ilan_kader.jpeg", linkedinUrl: "https://www.linkedin.com/in/ilan-kadar-b57ba511b/" },
  { id: "or_l", name: "Or Lenchner", description: "CEO at Brightdata", imageSrc: "/team/or_lenchner.jpeg", linkedinUrl: "https://www.linkedin.com/in/orlenchner/" },
  { id: "ori_oz", name: "Ori Avraham", description: "Building", imageSrc: "/team/Ori_A_oz.webp", linkedinUrl: "#" },
  { id: "ori_a", name: "Ori Ashur", description: "Building", imageSrc: "/team/ori_a.webp", linkedinUrl: "#" },
  { id: "alon", name: "Alon Kejzman", description: "Building", imageSrc: "/team/alon.jpg", linkedinUrl: "https://www.linkedin.com/in/alon-kejzman/", isFounder: true },
  { id: "shachar", name: "Shachar Cohen", description: "4M, Talpiot", imageSrc: "/team/shachar.webp", linkedinUrl: "https://www.linkedin.com/in/shachar-cohen-480b86205/" },
  { id: "avior", name: "Avior Barouch", description: "Security Research Director at Paragon", imageSrc: "/team/avior.png", linkedinUrl: "https://www.linkedin.com/in/avior-b-793b21203/" },
  { id: "benny", name: "Benny Meir", description: "DevOps Ninja", imageSrc: "/team/benny_meir.png", linkedinUrl: "" },
  { id: "ofer", name: "Ofer Herman", description: "Co-founder & CTO Papaya Global", imageSrc: "/team/ofer_herman.jpeg", linkedinUrl: "https://www.linkedin.com/in/oferherman/" },
  { id: "tamir", name: "Tamir Meerovitch", description: "Sr. Growth Strategy Executive at Frost & Sullivan", imageSrc: "/team/tal_meerovitch.jpeg", linkedinUrl: "https://www.linkedin.com/in/tamir-meerovitch/" },
  { id: "itzik", name: "Itzik Polad", description: "Chief Data Officer at LSports", imageSrc: "/team/itzik.webp", linkedinUrl: "https://www.linkedin.com/in/itzik-polad/" },
  { id: "gadi", name: "Gadi Lifshitz", description: "Ex Director Meta, Ex CTO at Sygnia", imageSrc: "/team/gadi.jpeg", linkedinUrl: "https://www.linkedin.com/in/lgadi/" },
  { id: "ido", name: "Ido Ben Shaul", description: "AA-I Technologies", imageSrc: "/team/ido_ben_shaul.png", linkedinUrl: "https://www.linkedin.com/in/ido-ben-shaul-482449147/" },
  { id: "talya", name: "Talya Pines", description: "MBA intern @ Chicago Booth", imageSrc: "/team/talya.jpeg", linkedinUrl: "https://www.linkedin.com/in/talya-pines/" },
  { id: "rotem", name: "Rotem Lapid", description: "Head of AI, ORT Israel", imageSrc: "/team/rotem_lapid.png", linkedinUrl: "https://www.linkedin.com/in/rotem-lapid-98b42370/" },
];

export const allMembers: Member[] = [...foundingTeamMembers, ...communityMembers]; 