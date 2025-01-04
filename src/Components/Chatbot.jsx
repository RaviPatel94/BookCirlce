// import { Webchat, WebchatProvider, Fab, getClient } from "@botpress/webchat";
// import { buildTheme } from "@botpress/webchat-generator";
// import { useState } from "react";
// const { theme, style } = buildTheme({
//   themeName: "prism",
//   themeColor: "#634433",
// });

// const clientId = "b3801f15-8fc9-4b48-a808-9df711801aad";
// export default function Chatbot() {
//   const client = getClient({ clientId });
//   const [isWebchatOpen, setIsWebchatOpen] = useState(false);
//   const toggleWebchat = () => {
//     setIsWebchatOpen((prevState) => !prevState);
//   };
//   return (
//     <div className="w-screen h-screen absolute z-50 ">
//         <div className="absolute w-96 right-4 bottom-0">
//       <style>{style}</style>
//       <WebchatProvider
//         theme={theme}
//         client={client}
//       >
//         <Fab onClick={toggleWebchat} />
//         <div
//           style={{
//             display: isWebchatOpen ? "block" : "none",
//           }}
//         >
//           <Webchat />
//         </div>
//       </WebchatProvider>
//       </div>
//     </div>
//   );
// }