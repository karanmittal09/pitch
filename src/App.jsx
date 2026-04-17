// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const videos = [
//   "https://www.w3schools.com/html/mov_bbb.mp4",
//   "https://www.w3schools.com/html/movie.mp4",
//   "https://www.w3schools.com/html/mov_bbb.mp4",
//   "https://www.w3schools.com/html/movie.mp4"
// ];

// export default function VideoGrid() {
//   const [active, setActive] = useState(null);
//   const [next, setNext] = useState(null);

//   function handleEnded() {
//     const nextIdx = active === videos.length - 1 ? 0 : active + 1;
//     setNext(nextIdx);
//     setActive(null);
//   }

//   useEffect(() => {
//     if (next === null) return;
//     const timer = setTimeout(() => {
//       setActive(next);
//       setNext(null);
//     }, 500);
//     return () => clearTimeout(timer);
//   }, [next]);

//   return (
//     <div style={{
//           maxWidth: 1100,
//           margin: "auto",
//           padding: "60px 20px",
//           fontFamily: "sans-serif"
//        }}>
      
//       {/* GRID (2x2) */}
//       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
//         {[0, 1, 2, 3].map((i) =>
//           active === i ? (
//             <div
//               key={i}
//               style={{
//                 height: 160,
//                 borderRadius: 12,
//                 background: "rgba(0,0,0,0.08)"
//               }}
//             />
//           ) : (
//             <motion.div
//               key={i}
//               layoutId={`video-${i}`}
//               onClick={() => setActive(i)}
//               style={{
//                 cursor: "pointer",
//                 borderRadius: 12,
//                 overflow: "hidden",
//                 border: "4px solid black"
//               }}
//             >
//               <video
//                 src={videos[i]}
//                 muted
//                 loop
//                 autoPlay
//                 playsInline
//                 preload="metadata"
//                 style={{
//                   width: "100%",
//                   height: 160,
//                   objectFit: "cover",
//                   display: "block"
//                 }}
//               />
//             </motion.div>
//           )
//         )}
//       </div>

//       {/* BACKDROP */}
//       <AnimatePresence>
//         {active !== null && (
//           <motion.div
//             key="backdrop"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             onClick={(e) => {
//               if (e.target === e.currentTarget) setActive(null);
//             }}
//             style={{
//               position: "fixed",
//               inset: 0,
//               background: "rgba(0,0,0,0.75)",
//               backdropFilter: "blur(6px)",
//               zIndex: 50
//             }}
//           />
//         )}
//       </AnimatePresence>

//       {/* FULLSCREEN VIDEO */}
//       <AnimatePresence>
//         {active !== null && (
//           <motion.div
//             key={`overlay-${active}`}
//             layoutId={`video-${active}`}
//             style={{
//               position: "fixed",
//               inset: 0,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               zIndex: 100
//             }}
//           >
//             <video
//               src={videos[active]}
//               autoPlay
//               controls
//               controlsList="nodownload"
//               preload="metadata"
//               onPlay={(e) => (e.target.controls = true)}
//               onEnded={handleEnded}
//               style={{
//                 width: "70%",
//                 maxHeight: "80vh",
//                 borderRadius: 16,
//                 boxShadow: "0 20px 50px rgba(0,0,0,0.6)"
//               }}
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }



// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Darwix from "./assets/darwix.png";

// const videos = [
//   {
//     url: "https://www.w3schools.com/html/mov_bbb.mp4",
//     tag: "LIVE GUIDANCE",
//     title: "Real-Time Agent Assist",
//     desc: "Live guidance, rebuttals, nudges and compliance support"
//   },
//   {
//     url: "https://www.w3schools.com/html/movie.mp4",
//     tag: "IN-PERSON SALES ASSIST",
//     title: "Sherpa AI",
//     desc: "AI guidance during physical interactions"
//   },
//   {
//     url: "https://www.w3schools.com/html/mov_bbb.mp4",
//     tag: "ON-GROUND",
//     title: "Nova AI",
//     desc: "Field Intelligence Assist - mobile-first operational intelligence"
//   },
//   {
//     url: "https://www.w3schools.com/html/movie.mp4",
//     tag: "AUTONOMOUS VOICE",
//     title: "Voice Automation",
//     desc: "Human-like AI conversations at scale"
//   }
// ];

// export default function VideoGrid() {
//   const [active, setActive] = useState(null);
//   const [next, setNext] = useState(null);

//   function handleEnded() {
//     const nextIdx = active === videos.length - 1 ? 0 : active + 1;
//     setNext(nextIdx);
//     setActive(null);
//   }

//   useEffect(() => {
//     if (next === null) return;
//     const timer = setTimeout(() => {
//       setActive(next);
//       setNext(null);
//     }, 500);
//     return () => clearTimeout(timer);
//   }, [next]);

//   return (
//     <div
//       style={{
//         maxWidth: 1100,
//         margin: "auto",
//         padding: "60px 20px",
//         fontFamily: "sans-serif"
//       }}
//     >
     

//       {/* HEADER */}
      
//       <div
//         style={{
//           position: "relative", 
//           marginBottom: 50,
//           paddingTop: 20
//         }}
//       >

//         <div
//           style={{
//             top: -70,
//             position: "absolute",
//             height: 12,
//             background: "#5a67d8"
//           }}
//         /> 


//         {/* LOGO - top right */}
//         <div>
//         <img
//           src={Darwix}
//           alt="Darwix Logo"
//           style={{
//             position: "absolute",
//             top: -80,
//             right: 0,
//             width: 150,
//             height: 150,
//             objectFit: "contain"
//           }}
//         />
//         </div>

//         {/* CENTER TEXT */}
//         <div style={{ textAlign: "center" }}>
//           <div
//             style={{
//               color: "#5a67d8",
//               fontSize: 14,
//               fontWeight: 700,
//               letterSpacing: 1,
//             }}
//           >
//             OUR PRODUCTS
//           </div>

//           <h1
//             style={{
//               fontSize: 40,
//               fontWeight: 600,
//               marginTop: 10,
//               lineHeight: 1.3
//             }}
//           >
//             Enterprise{" "}
//             <span style={{ color: "#5a67d8" }}>GenAI Suite</span> for Customer
//             Conversations
//           </h1>
//         </div>
//       </div>

//       {/* GRID */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "1fr 1fr",
//           gap: 24
//         }}
//       >
//         {[0, 1, 2, 3].map((i) =>
//           active === i ? (
//             <div
//               key={i}
//               style={{
//                 height: 260,
//                 borderRadius: 16,
//                 background: "rgba(0,0,0,0.05)"
//               }}
//             />
//           ) : (
//             <motion.div
//               key={i}
//               layoutId={`video-${i}`}
//               onClick={() => setActive(i)}
//               whileHover={{
//                 y: -8,
//                 boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
//               }}
//               style={{
//                 cursor: "pointer",
//                 borderRadius: 16,
//                 overflow: "hidden",
//                 background: "#fff",
//                 boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
//                 border: "1px solid #c6b7b7"
//               }}
//             >
//               {/* VIDEO AREA */}
//               <div
//                 style={{
//                   height: 180,
//                   background: "#dcdde1"
//                 }}
//               >
//                 <video
//                   src={videos[i].url}
//                   muted
//                   loop
//                   autoPlay
//                   playsInline
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover"
//                   }}
//                 />
//               </div>

//               {/* TEXT */}
//               <div style={{ padding: 16 }}>
//                 <div
//                   style={{
//                     fontSize: 11,
//                     color: "#5a67d8",
//                     fontWeight: 700,
//                     letterSpacing: 1,
//                     marginBottom: 6
//                   }}
//                 >
//                   {videos[i].tag}
//                 </div>

//                 <div
//                   style={{
//                     fontSize: 18,
//                     fontWeight: 600,
//                     marginBottom: 6
//                   }}
//                 >
//                   {videos[i].title}
//                 </div>

//                 <div
//                   style={{
//                     fontSize: 14,
//                     color: "#666"
//                   }}
//                 >
//                   {videos[i].desc}
//                 </div>
//               </div>
//             </motion.div>
//           )
//         )}
//       </div>

//       {/* BACKDROP */}
//       <AnimatePresence>
//         {active !== null && (
//           <motion.div
//             key="backdrop"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={(e) => {
//               if (e.target === e.currentTarget) setActive(null);
//             }}
//             style={{
//               position: "fixed",
//               inset: 0,
//               background: "rgba(0,0,0,0.75)",
//               backdropFilter: "blur(6px)",
//               zIndex: 50
//             }}
//           />
//         )}
//       </AnimatePresence>

//       {/* FULLSCREEN */}
//       <AnimatePresence>
//         {active !== null && (
//           <motion.div
//             key={`overlay-${active}`}
//             layoutId={`video-${active}`}
//             style={{
//               position: "fixed",
//               inset: 0,
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "center",
//               zIndex: 100
//             }}
//           >
//             <video
//               src={videos[active].url}
//               autoPlay
//               controls
//               onEnded={handleEnded}
//               style={{
//                 width: "70%",
//                 maxHeight: "70vh",
//                 borderRadius: 16,
//                 boxShadow: "0 20px 50px rgba(0,0,0,0.6)"
//               }}
//             />

//             {/* TEXT IN FULLSCREEN */}
//             <div
//               style={{
//                 marginTop: 20,
//                 color: "white",
//                 textAlign: "center"
//               }}
//             >
//               <h2>{videos[active].title}</h2>
//               <p>{videos[active].desc}</p>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }



import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Darwix from "/Darwix.png";

const videos = [
  {
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    tag: "LIVE GUIDANCE",
    title: "Real-Time Agent Assist",
    desc: "Live guidance, rebuttals, nudges and compliance support"
  },
  {
    url: "https://www.w3schools.com/html/movie.mp4",
    tag: "IN-PERSON SALES ASSIST",
    title: "Sherpa AI",
    desc: "AI guidance during physical interactions"
  },
  {
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    tag: "ON-GROUND",
    title: "Nova AI",
    desc: "Field Intelligence Assist - mobile-first operational intelligence"
  },
  {
    url: "https://www.w3schools.com/html/movie.mp4",
    tag: "AUTONOMOUS VOICE",
    title: "Voice Automation",
    desc: "Human-like AI conversations at scale"
  }
];

export default function VideoGrid() {
  const [active, setActive] = useState(null);
  const [next, setNext] = useState(null);

  function handleEnded() {
    const nextIdx = active === videos.length - 1 ? 0 : active + 1;
    setNext(nextIdx);
    setActive(null);
  }

  useEffect(() => {
    if (next === null) return;
    const timer = setTimeout(() => {
      setActive(next);
      setNext(null);
    }, 500);
    return () => clearTimeout(timer);
  }, [next]);

  return (
    <div style={{
      maxHeight: "100vh",
      overflow: "hidden",
    }
    }>
      {/*  FULL WIDTH TOP BAR */}
      <div
        style={{
          height: 15,
          width: "100%",
          background: "#5a67d8"
        }}
      />

      {/* MAIN CONTAINER */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto ",
          padding: "20px 20px",
          fontFamily: "sans-serif"
        }}
      >
        {/* HEADER */}
        <div
          style={{
            position: "relative",
            marginBottom: 50,
            paddingTop: 20
          }}
        >
          {/* LOGO */}
          <img
            src={Darwix}
            alt="Darwix Logo"
            style={{
              position: "absolute",
              top: -60,
              right: -200,
              width: 140,
              height: 140,
              objectFit: "contain"
            }}
          />

          {/* TEXT */}
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                color: "#5a67d8",
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: 1
              }}
            >
              OUR PRODUCTS
            </div>

            <h1
              style={{
                fontSize: 30,
                fontWeight: 600,
                marginTop: 10,
                lineHeight: 1.3
              }}
            >
              Enterprise{" "}
              <span style={{ color: "#5a67d8" }}>GenAI Suite</span> for Customer
              Conversations
            </h1>
          </div>
        </div>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 30,
            fontFamily: "sans-serif"
          }}
        >
          {[0, 1, 2, 3].map((i) =>
            active === i ? (
              <div
                key={i}
                style={{
                  height: 260,
                  borderRadius: 10,
                  background: "rgba(0,0,0,0.05)"
                }}
              />
            ) : (
            <motion.div
              key={i}
              layoutId={`video-${i}`}
              onClick={() => setActive(i)}
              whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
              style={{
                display: "flex",
                flexDirection: "column",
                height: 220, // Total Height
                cursor: "pointer",
                borderRadius: 12,
                overflow: "hidden",
                background: "#fff",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                border: "1px solid #eee"
              }}
            >
              {/* 1. VIDEO SECTION: flex: 2 ko badal kar 7 kar dein */}
              <div style={{ flex: 7, backgroundColor: "#000", overflow: "hidden" }}>
                <video
                  src={videos[i].url}
                  muted loop autoPlay playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
              </div>

              {/* 2. TEXT SECTION: flex: 1 ko badal kar 3 kar dein */}
              <div style={{ 
                flex: 3, 
                padding: "6px 12px", 
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "center",
                backgroundColor: "white"
              }}>
                <div style={{ fontSize: 10, color: "#5a67d8", fontWeight: 700, textTransform: "uppercase", marginBottom: 2 }}>
                  {videos[i].tag}
                </div>

                <div style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.1, marginBottom: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {videos[i].title}
                </div>

                <div style={{ fontSize: 12, color: "#666", lineHeight: 1.2, display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {videos[i].desc}
                </div>
              </div>
            </motion.div>
          
            )
          )}
        </div>

        {/* BACKDROP */}
        <AnimatePresence>
          {active !== null && (
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={(e) => {
                if (e.target === e.currentTarget) setActive(null);
              }}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(58,58,59,0.25)",   
                backdropFilter: "blur(3.8px)",      
                WebkitBackdropFilter: "blur(3.8px)",
                zIndex: 50
              }}
            />
          )}
        </AnimatePresence>

        {/* FULLSCREEN */}
        <AnimatePresence>
          {active !== null && (
            <motion.div
              key={`overlay-${active}`}
              layoutId={`video-${active}`}
              style={{
                position: "fixed",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 100
              }}
            >
              <video
                src={videos[active].url}
                autoPlay
                controls
                onEnded={handleEnded}
                style={{
                  width: "70%",
                  maxHeight: "70vh",
                  borderRadius: 16,
                  boxShadow: "0 20px 50px rgba(0,0,0,0.6)"
                }}
              />

              <div
                style={{
                  marginTop: 20,
                  color: "black",
                  textAlign: "center"
                }}
              >
                <h2>{videos[active].title}</h2>
                <p>{videos[active].desc}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/*  FULL WIDTH BOTTOM BAR */}
      <div
        style={{
          height:18,
          width: "100%",
          background: "#5a67d8",
          marginTop: 50
        }}
      />
    </div>
  );
}
