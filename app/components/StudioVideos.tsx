import s from "../studio.module.css";
export default function StudioVideos() {
  return (
    <div className={s.videoGrid}>
      {[
        {
          title: "A stronger first impression",
          category: "WEBSITE TRANSFORMATION",
          file: "website",
          description:
            "A before-and-after visual concept for a business website.",
        },
        {
          title: "From enquiry to action",
          category: "AUTOMATION EXPLAINED",
          file: "automation",
          description:
            "A short visual story showing an illustrative business workflow.",
        },
        {
          title: "Your business, connected",
          category: "CONTENT ENGINE",
          file: "content-engine",
          description:
            "A concept bringing together websites, AI and short-form content.",
        },
      ].map((video) => (
        <div className={s.videoCard} key={video.file}>
          <video
            src={`/videos/yy-builds-${video.file}.mp4`}
            controls
            playsInline
            muted
            preload="metadata"
            aria-label={`${video.category} concept video`}
          />
          <span>{video.category}</span>
          <h3>{video.title}</h3>
          <p>{video.description}</p>
        </div>
      ))}
    </div>
  );
}
