import { useTranslation } from "react-i18next";
import { CaretLeft } from "@phosphor-icons/react";
interface VideoGuidePageProps {
    modalActive: boolean;
    setModalActive: (active: boolean) => void;
}

const VideoGuidePage: React.FC<VideoGuidePageProps> = () => {
    const { t } = useTranslation();
    return (
        <div className='w-full h-full bg-white shadow-lg rounded-lg relative z-50'>
            <div className="w-full h-[80px]"/>
            {/* <span className="flex flex-row items-center justify-between mb-4 relative w-full ">
                <CaretLeft onClick={() => {
                    window.history.back();
                }} size={22} className="cursor-pointer text-gray-500 hover:text-gray-700 transition-colors duration-200 w-[40px]" />
                <h2 className="text-xl font-bold text-center w-full">{t('guide_video')}</h2>
            </span> */}
            <div className="aspect-video w-full max-w-[760px] mx-auto mb-4">
                <iframe
                    width="100%"
                    height="100%"
                    src={t('guide_video_src')}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{ width: "100%", height: "100%" }}
                ></iframe>
            </div>
        </div>
    );
}
export default VideoGuidePage;