import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { videoFetcher } from './api.player';

function Player() {
    const [video, setVideo] = useState({
        key: '',
        size: 0,
        name: '',
        published_at: '',
        iso_3166_1: ''
    })
    const videoId = useParams();
    useEffect(() => {
        fetchVideo(videoId.id)
    }, []);
    const fetchVideo = async (videoId) => {
        const response = await videoFetcher(videoId);
        setVideo(response.results[0])
    }
    return (
        <div className='px-5 py-3'>
            <div className="py-5 lg:py-4 w-auto">
                <div className="text-white overflow-hidden lg:py-4 md:h-[600px] h-[400px] sm2:h-[500px] lg:h-[700px] xl:h-[800px] 2xl:h-[900px]">
                    <div className="h-24 w-full"></div>
                    <div className="2xl:h-[90%] xl:h-[86%] lg:h-[85%] lg:w-[87%] md:h-[70%] h-[70%] sm2:h-[80%] w-[95%] rounded-lg overflow-hidden md:w-[80%] xl:w-[90%] mx-auto 2xl:w-full  ">
                        <div className="h-full w-full ">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${video.key}`}
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen>
                            </iframe>
                        </div>
                    </div>
                </div>
                <div className={"w-full mx-auto"}>
                    <div className="w-full flex items-center justify-between text-[15px] font-medium font-manrope  text-white bg-[#1A1A1A] rounded-lg md:px-4 px-3 lg:px-6 py-6 lg:py-12">
                        <div>
                            <p>
                                <span className="text-[#999999] text-[16px] ">Title: </span>
                                {video.name}
                            </p>
                            <p className="mt-3">
                                <span className="text-[#999999] text-[16px] ">Size: </span>
                                {video.size} MB
                            </p>
                        </div>
                        <div>
                            <p>
                                <span className="text-[#999999] text-[16px]">Relese At: </span>{" "}
                                {video.published_at.slice(0, 10)}
                            </p>
                            <p className="mt-3">
                                <span className="text-[#999999] text-[16px]">Language: </span>{" "}
                                {(video.iso_3166_1 = "US" && "English")}
                            </p>
                        </div>
                    </div>
                    showing realted movies in playing

                </div>
            </div>
        </div>
    )
}

export default Player