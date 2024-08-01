import { useCopilotAction } from "@copilotkit/react-core";
import { VideoModel } from "../types";
import { VideoPreview } from "../components/misc/VideoPreview";

interface PlayVideoParameters {
  updateVideo: (partialVideo: Partial<VideoModel>) => void;
}

export default function useUpdateVideo({
  updateVideo,
}: PlayVideoParameters) {
  useCopilotAction({
    name: "updateVideo",
    description: "Update the current video.",
    parameters: [
      {
        name: "content",
        description:
          "The content of the video.",
      },
      {
        name: "videoUrl",
        description:
          "The url of the video. Use the getImageUrl tool to retrieve a URL for a topic.",
      },
      {
        name: "spokenNarration",
        description:
          "The spoken narration for the video. This is what the user will hear when the video is shown.",
      },
    ],
    handler: async ({ content, videoUrl, spokenNarration }) => {
      const newVideo: VideoModel ={
        content,
        videoUrl,
        spokenNarration,
      };
    },
    render: (props) => {
      return (
        <VideoPreview {...props.args} done={props.status === "complete"} />
      );
    },
  });
}
