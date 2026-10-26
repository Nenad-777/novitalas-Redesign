/** Playback is user-initiated, including when reduced motion is requested. */
export default function EditorialVideo({src, poster, title}: {src:string; poster:string; title:string}) {
 return <video controls playsInline muted preload="metadata" poster={poster} aria-label={title} style={{display:"block",width:"100%",height:"auto",aspectRatio:"910 / 512",objectFit:"contain",background:"#000"}}><source src={src} type="video/mp4"/><a href={src}>Preuzmi video</a></video>;
}
