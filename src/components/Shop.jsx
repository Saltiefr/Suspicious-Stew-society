import React, { useState } from "react";
import { ExternalLink, Sparkles } from "lucide-react";
import { STORE_URL } from "../config";
import { Starfield } from "./Stats";

const CHESTS = [
  { 
    name: "Wooden Chest", 
    tier: "Starter", 
    color: "#B08968", 
    price: "$4.99",
    perks: [
      "500 in-game coins",
      "Colored chat name",
      "1 extra /home",
      "Kit access every 24h"
    ] 
  },
  { 
    name: "Iron Chest", 
    tier: "Popular", 
    color: "#C7D3DB", 
    price: "$9.99",
    perks: [
      "1,500 in-game coins",
      "3 extra /homes",
      "Kit access every 12h",
      "Priority queue on join"
    ] 
  },
  { 
    name: "Diamond Chest", 
    tier: "Best Value", 
    color: "#5FD3D9", 
    price: "$19.99",
    perks: [
      "4,000 in-game coins",
      "6 extra /homes",
      "Kit access every 6h",
      "Custom join message",
      "Exclusive disguise pack"
    ] 
  },
  { 
    name: "Amethyst Chest", 
    tier: "Ultimate", 
    color: "#B565D8", 
    price: "$34.99",
    perks: [
      "10,000 in-game coins",
      "Unlimited /homes",
      "Kit access every 2h",
      "Particle trail effects",
      "First access to new features"
    ] 
  },
];


function ChestCard({ chest }) {
  const [hov, setHov] = useState(false);

  return (
    <div style={{ position: "relative" }}>

      <div
        style={{
          position: "absolute",
          inset: "-34px",
          background: `radial-gradient(circle at 50% 30%, ${chest.color}40, transparent 70%)`,
          filter: "blur(28px)",
          opacity: hov ? 1 : 0.55,
          transition: "opacity 0.35s",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />


      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          background: hov
            ? "rgba(24,16,8,0.95)"
            : "rgba(17,13,9,0.8)",
          border: `1px solid ${
            hov ? chest.color + "55" : "rgba(245,234,214,0.06)"
          }`,
          borderRadius: "20px",
          padding: "36px 28px",
          display: "flex",
          flexDirection: "column",
          transform: hov ? "translateY(-7px)" : "translateY(0)",
          transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
          position: "relative",
          overflow: "hidden",
          zIndex: 1,
        }}
      >

        <span
          className="font-mono"
          style={{
            fontSize: "0.6rem",
            fontWeight: 700,
            letterSpacing: "0.2em",
            color: chest.color,
            background: `${chest.color}14`,
            padding: "4px 10px",
            borderRadius: "5px",
            border: `1px solid ${chest.color}30`,
            width: "fit-content",
            marginBottom: "20px",
          }}
        >
          {chest.tier}
        </span>


        <h3
          className="font-display"
          style={{
            fontSize: "1.25rem",
            fontWeight: 800,
            color: "var(--cream)",
            marginBottom: "6px",
          }}
        >
          {chest.name}
        </h3>


        <div
          className="font-display"
          style={{
            fontSize: "1.6rem",
            fontWeight: 800,
            color: chest.color,
            marginBottom: "18px",
          }}
        >
          {chest.price}
        </div>


        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            marginBottom: "28px",
            flex: 1,
          }}
        >
          {chest.perks.map((p, i) => (
            <li
              key={i}
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "0.86rem",
                color: "var(--muted)",
                marginBottom: "10px",
                display: "flex",
                gap: "8px",
              }}
            >
              <span style={{ color: chest.color }}>✓</span>
              {p}
            </li>
          ))}
        </ul>


        <a
          href={STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono"
          style={{
            background: hov ? chest.color : `${chest.color}22`,
            color: hov ? "#0A0806" : chest.color,
            border: `1px solid ${chest.color}55`,
            padding: "13px 20px",
            borderRadius: "10px",
            fontWeight: 800,
            textDecoration: "none",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
        >
          Buy Now <ExternalLink size={13}/>
        </a>


      </div>
    </div>
  );
}



export default function Shop() {

return (

<section
id="shop"
style={{
padding:"120px 80px",
position:"relative",
borderTop:"1px solid rgba(245,234,214,0.05)"
}}
>

<Starfield/>


<div style={{maxWidth:"1320px",margin:"0 auto"}}>


<div style={{textAlign:"center",marginBottom:"64px"}}>

<h2 className="font-display"
style={{
fontSize:"clamp(2rem,4vw,3.2rem)",
color:"var(--cream)"
}}>
The Shop
</h2>


<p style={{
color:"var(--muted)",
fontFamily:"Nunito"
}}>
Grab a chest for perks and cosmetics, or go custom with a personalized rank.
Nothing here is pay-to-win — just fun extras that help keep the lights on.
</p>

</div>



<div
style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",
gap:"24px"
}}
>

{CHESTS.map((c,i)=>
<ChestCard key={i} chest={c}/>
)}

</div>



<div
style={{
marginTop:"48px",
background:"rgba(14,10,6,0.9)",
border:"1px solid rgba(181,101,216,0.25)",
borderRadius:"24px",
padding:"44px 48px",
display:"flex",
alignItems:"center",
justifyContent:"space-between",
gap:"24px"
}}
>


<div style={{
display:"flex",
alignItems:"center",
gap:"20px"
}}>

<Sparkles size={32} color="var(--stew-purple)" />


<div>

<h3
className="font-display"
style={{
color:"var(--cream)"
}}
>
Want a Custom Rank?
</h3>


<p style={{
color:"var(--muted)",
fontFamily:"Nunito"
}}>
Pick your own name, color, and chat prefix. Reach out on Discord to get a custom rank built just for you.
</p>


</div>

</div>



<a
href={STORE_URL}
target="_blank"
rel="noopener noreferrer"
className="font-mono"
style={{
background:"var(--stew-purple)",
color:"#0A0806",
padding:"14px 28px",
borderRadius:"10px",
fontWeight:800,
textDecoration:"none",
display:"flex",
alignItems:"center",
gap:"8px"
}}
>
Visit Store <ExternalLink size={14}/>
</a>


</div>


</div>

</section>

);

}