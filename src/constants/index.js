import {
    
    vehicle,
    claim,
    estimate,
    repair,
    web,
    mobile,
    backend,
    creator,
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },    
    {
      id: "photo",
      title: "Testimonials",
    },
    {
      id: "work",
      title: "Process",
    },



    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Accept All Insurances",
      icon: web,
    },
    {
      title: "Experienced and Certified Professionals",
      icon: mobile,
    },
    {
      title: "Lifetime warranty",
      icon: backend,
    },
    {
      title: "Free Rental Car & Deductible Program",
      icon: creator,
    },
  ];
  
  const services2 = [
    {
      title: "Hustle-Free Experience:",
      description: "Thunder Fix transforms an anxious situation into a hassle-free journey.",
    },
    {
      title: "Excellent Skills and Experience:",
      description: "Our technicians are trained through a special PDR program.",
    },
    {
      title: "Forget About Dents:",
      description: "With Thunder Fix, your hail dents will simply disappear. ",
    },
    {
      title: "Quick Turnaround:",
      description: "Most repairs are completed within 24-72 hours!",
    },
  ];
 
  
  const experiences = [
    {
      title: " File a Claim with Your Car Insurance",
      company_name: "   ",
      icon: claim,
      iconBg: "#383E56",
      date: "Step 1",
      points: [
        "Notify your insurance provider promptly after hail damage occurs.",
        "Timely communication is essential for expediting the claims process.",
        "Our team is ready to assist you in navigating the claims filing procedure.",
      
      ],
    },
    {
      title: "Contact Us for a Free Estimate",
      company_name: "",
      icon: estimate,
      iconBg: "#E6DEDD",
      date: "Step 2",
      points: [
        "Initiate the repair process by reaching out to our dedicated team.",
        "Share images of your damaged vehicle via WhatsApp for a complimentary estimate.",
        "Schedule a convenient appointment to bring your vehicle to our location.",
      
      ],
    },
    {
      title: "Vehicle Repair in 1-7 Days",
      company_name: "",
      icon: repair,
      iconBg: "#383E56",
      date: "Step 3",
      points: [
        "Our skilled team will start fixing your vehicle promptly",
        "The repair might take 1-7 days, depending on the extent of the damage.",
        "Rest assured, your vehicle is in capable hands as we restore it to its pre-hail condition",
      
      ],
    },
    {
      title: "Take pleasure in driving your car again, now both clean and fixed to perfection",
      company_name: "",
      icon: vehicle,
      iconBg: "#E6DEDD",
      date: "Step 4",
      points: [
        "Receive your vehicle in pristine condition upon completion.",
        "Thoroughly washed and professionally repaired for a polished finish.",
        "Enjoy peace of mind with our provided lifetime warranty, reflecting our commitment to quality craftsmanship.",
        "Trust our team for a seamless hail damage repair experience, delivering lasting results and customer satisfaction.",
      ],
    },
  ];
  
  
  
  
  
  export { services, services2,  experiences };