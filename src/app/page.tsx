"use client";

import { CopilotKit } from "@copilotkit/react-core";
import { CopilotChat } from "@copilotkit/react-ui";

import { useCopilotChat} from "@copilotkit/react-core";
import { useCopilotReadable, useCopilotAction } from "@copilotkit/react-core";
import { Role, TextMessage } from "@copilotkit/runtime-client-gql";
import "./styles.css";
import "@copilotkit/react-ui/styles.css";
import { Presentation } from "./components/main/Presentation";
import { useState } from "react";
import { VideoPreview } from "./components/misc/VideoPreview";
import useUpdateVideo from "./actions/usePlayVideo";




export default function AIPresentation() {
  const [performResearch, setPerformResearch] = useState(false);
  const chatData = {
    title: "Chat with our support",
    messages: [
      {
        type: "text",
        content: "Welcome to our support chat!",
      },
      {
        type: "custom",
        content: <iframe 
            src="https://player.vimeo.com/video/887830582?h=45ac7f1f05&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "30%",
              height: "30%"}}
            title="Use of Aircraft Wheel Chocks and Safety Cones_Part_2">
          </iframe>
          
      },
    ],
  };
  
  return (

    <CopilotKit
      publicApiKey={process.env.NEXT_PUBLIC_COPILOT_CLOUD_API_KEY}
      // Alternatively, you can use runtimeUrl to host your own CopilotKit Runtime
      runtimeUrl="/api/copilotkit"
      transcribeAudioUrl="/api/transcribe"
      textToSpeechUrl="/api/tts"
    >
      <CopilotChat
        instructions={
          "Help the user find locations for landmarks." +
          (!performResearch
            ? " No research is needed. Do not perform any research."
            : " Perform research on the topic.")
        }

        labels={{
          title: "Presentation Copilot",
          initial: "Welcome",
        }}
                
      >
      
      </CopilotChat>

    </CopilotKit>
  );
}
