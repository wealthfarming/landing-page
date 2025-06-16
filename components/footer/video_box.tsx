import { X } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

interface VideoBoxProps {
    modalActive: boolean;
    setModalActive: (active: boolean) => void;
}
const VideoBox: React.FC<VideoBoxProps> = ({ modalActive, setModalActive }) => {
    const { t } = useTranslation();
    return (
        <>
            {
                modalActive &&
                <div
                    className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
                    onClick={() => setModalActive(false)}
                >
                    <div
                        className="bg-white p-5 rounded-lg shadow-lg"
                        onClick={e => e.stopPropagation()}
                    >
                        <span className="flex flex-row items-center justify-between mb-4 relative w-full">
                            <h2 className="text-xl font-bold">{t('guide_video')}</h2>
                            <X
                                size={20}
                                onClick={() => setModalActive(false)}
                                className="cursor-pointer text-gray-500 hover:text-gray-700 transition-colors duration-200"
                                style={{ zIndex: 1000 }}
                            />
                        </span>
                        <div className="aspect-video w-full mb-4">
                            <iframe
                                width="760"
                                height="500"
                                src={t('guide_video_src')}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default VideoBox;