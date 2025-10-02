import Dentist1 from '../assets/Doctors/ConnorMcTeeth.png';
import Dentist2 from '../assets/Doctors/SidneySmile.png';
import Dentist3 from '../assets/Doctors/AlexOMolar.png';
import Dentist4 from '../assets/Doctors/PKPlaque.png';

import Dentist5 from '../assets/Doctors/AlexOvi.png';
import Dentist6 from '../assets/Doctors/MariePoulin.png';
import Dentist7 from '../assets/Doctors/SarahFloss.png';
import Dentist8 from '../assets/Doctors/JaromirJawgr.png';

export default function OurDentist() {
const dentists = [
  {
    name: "Dr. Connor McTeeth",
    role: "General & Cosmetic Dentistry",
    bio: "Dr. McTeeth graduated from the University of Toronto with a DMD degree and specializes in general and cosmetic dentistry. Known for his friendly demeanor and precision work, he helps patients achieve bright, healthy smiles. Outside the clinic, he enjoys coaching youth hockey and volunteering at community dental outreach programs.",
    specialties: ["DMD", "DDS"],
    img: Dentist1
  },
  {
    name: "Dr. Sidney Smile",
    role: "Pediatric & Preventive Dentistry",
    bio: "Dr. Smile earned his DDS at McGill University and focuses on pediatric and preventive care. He has a talent for putting young patients at ease and making dental visits enjoyable. In addition to his dental work, he regularly visits schools to educate children on oral hygiene and participates in local wellness initiatives.",
    specialties: ["DDS"],
    img: Dentist2
  },
  {
    name: "Dr. Alex O’Molar",
    role: "Oral Surgery & Implants",
    bio: "Dr. O’Molar completed his DMD at the University of British Columbia and pursued advanced training in oral surgery and dental implants. With a calm and confident approach, he handles complex procedures while ensuring patient comfort. He is also passionate about mentoring dental students and supporting local sports teams.",
    specialties: ["DMD"],
    img: Dentist3
  },
  {
    name: "Dr. P.K. Plaque",
    role: "Orthodontics & Preventive Care",
    bio: "Dr. Plaque graduated from the University of Alberta with a DDS degree and specializes in orthodontics and preventive dentistry. He is known for his careful attention to detail and his ability to make treatments straightforward and stress-free. In his free time, he enjoys recreational hockey and volunteering at community clinics.",
    specialties: ["DDS"],
    img: Dentist4
  },
  {
    name: "Dr. Alex Ovidenture",
    role: "Restorative & Cosmetic Dentistry",
    bio: "Dr. Ovidenture earned his DMD at Moscow State University and specializes in restorative and cosmetic dentistry. With a steady hand and a perfectionist’s eye, he helps patients regain confidence through beautiful, functional smiles. Known for his determination and leadership, he also supports local sports programs and enjoys mentoring young athletes in his free time.",
    specialties: ["DMD"],
    img: Dentist5
  },
  {
    name: "Dr. Marie-Polish Poulin",
    role: "Preventive & Family Dentistry",
    bio: "Dr. Poulin graduated from Université de Montréal with a DMD degree and focuses on preventive and family dentistry. She is admired for her approachable, polished style of care, making patients of all ages feel comfortable during visits. Beyond dentistry, she is dedicated to youth development, regularly speaking at schools and volunteering with community wellness programs.",
    specialties: ["DMD"],
    img: Dentist6
  },
  {
    name: "Dr. Sarah Floss",
    role: "Pediatric & Preventive Dentistry",
    bio: "Dr. Floss completed her DMD at Western University and specializes in pediatric and preventive care. Known for her gentle approach and ability to connect with children, she makes dental visits fun and stress-free. She is active in local outreach, often leading educational workshops on oral hygiene and promoting healthy habits among young families.",
    specialties: ["DMD"],
    img: Dentist7
  },
  {
    name: "Dr. Jaromir Jawgr",
    role: "Oral Surgery & Complex Care",
    bio: "Dr. Jawgr earned his DDS at Charles University in Prague, Czechia, with advanced training in oral surgery and complex dental care. With a serious, confident demeanor, he takes on challenging cases while prioritizing patient comfort and long-term results. Outside the clinic, he enjoys staying active in the community, supporting sports initiatives, and mentoring aspiring dental professionals.",
    specialties: ["DDS"],
    img: Dentist8
  },
];

  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
          Meet Our Dentists
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {dentists.map((dentist, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition transform hover:-translate-y-1 bg-white text-center"
            >
              {/* Dentist photo */}
              <img 
                src={dentist.img} 
                alt={dentist.name} 
                className="mx-auto mb-4 object-cover object-center"
              />

              {/* Dentist name + role */}
              <h3 className="text-xl font-bold mb-1">{dentist.name}</h3>
              <p className="text-sm text-orange-500 mb-3">{dentist.role}</p>

              {/* Bio */}
              <p className="text-gray-600 text-sm mb-4">{dentist.bio}</p>

              {/* Specialties */}
              <div className="flex flex-wrap gap-2 justify-center">
                {dentist.specialties.map((spec, i) => (
                  <span 
                    key={i} 
                    className="bg-orange-500/10 text-orange-500 py-1 px-3 rounded-full text-xs"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



/*export default function OurDentist() {
  return (
    <div className="p-12 text-center">
      <h1 className="text-4xl font-bold mb-4">Meet Our Dentist</h1>
      <p>Dr. Smile McTeeth has 15+ years of experience and a passion for creating healthy, beautiful smiles.</p>
    </div>
  );
}*/
