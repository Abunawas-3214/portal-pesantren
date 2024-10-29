'use client'
import YouTube, { YouTubeProps } from "react-youtube"
export default function VideoProfile({ video_link }: { video_link: string }) {
    const videoId = video_link.split('v=')[1];
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        event.target.pauseVideo()
    }
    const opts: YouTubeProps['opts'] = {
        height: '420',
        width: '720',
        playerVars: {
            autoplay: 1,
        },
    }
    return (
        <div className="space-y-2">
            <h2 className='text-black text-xl font-semibold'>Video Profil Pesantren</h2>
            <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />
        </div>
    )

}
