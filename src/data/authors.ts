export interface Expert {
  id: string;
  name: string;
  role: string;
  credentials: string;
  bio: string;
  image: string;
  url?: string;
}

export const EXPERTS: Record<string, Expert> = {
  "sarah-jenkins": {
    id: "sarah-jenkins",
    name: "Dr. Sarah Jenkins",
    role: "Medical Reviewer",
    credentials: "MD",
    bio: "Dr. Sarah Jenkins is a board-certified physician with over 15 years of clinical experience specializing in metabolic health, weight management, and hormonal balance. She rigorously reviews our health calculators to ensure medical accuracy.",
    image: "https://loremflickr.com/400/400/doctor,woman",
  },
  "marcus-chen": {
    id: "marcus-chen",
    name: "Marcus Chen",
    role: "Nutrition Expert",
    credentials: "RD, CSSD",
    bio: "Marcus Chen is a Registered Dietitian and Certified Specialist in Sports Dietetics. He has worked with elite athletes and everyday individuals to optimize their nutrition, macros, and fitness performance.",
    image: "https://loremflickr.com/400/400/man,portrait",
  },
  "elena-rodriguez": {
    id: "elena-rodriguez",
    name: "Elena Rodriguez",
    role: "Fitness Advisor",
    credentials: "CSCS, CPT",
    bio: "Elena Rodriguez is a Certified Strength and Conditioning Specialist with a background in kinesiology. She designs and reviews our workout guides, ensuring they meet the highest standards of safety and biomechanics.",
    image: "https://loremflickr.com/400/400/fitness,woman",
  }
};

export const DEFAULT_REVIEWER = EXPERTS["sarah-jenkins"];
export const DEFAULT_AUTHOR = EXPERTS["marcus-chen"];
