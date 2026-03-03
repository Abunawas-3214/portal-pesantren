'use client'
import YouTube, { YouTubeProps } from "react-youtube"
export default function VideoProfile({ video_link }: { video_link: string }) {
    const videoId = video_link.split('v=')[1];
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        event.target.pauseVideo()
    }
    const opts: YouTubeProps['opts'] = {
        playerVars: {
            autoplay: 0,
        },
    }

    return (
        <div className="space-y-4">
            <h2 className='text-black text-2xl font-bold'>Video Profil Pesantren</h2>
            <div className="border border-stone-200 bg-white shadow-sm transition-all hover:shadow-md">
                <YouTube
                    videoId={videoId}
                    opts={opts}
                    onReady={onPlayerReady}
                    iframeClassName="absolute top-0 left-0 w-full h-full"
                    className="relative w-full aspect-video"
                />
            </div>
        </div>
    )
}
