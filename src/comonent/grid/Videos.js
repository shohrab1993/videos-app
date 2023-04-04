import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../features/videos/videosSlice";
import ErrorMessage from "../ui/ErrorMessage";
import Loading from "../ui/Loading";
import Video from "./Video";

const Videos = () => {
  const dispatch = useDispatch();
  const videoState = useSelector((state) => state.videos);
  const { tags, search } = useSelector((state) => state.filter);
  const { videos, isLoading, isError, error } = videoState;

  useEffect(() => {
    dispatch(fetchVideos({ tags, search }));
  }, [dispatch, tags, search]);

  //decide what to do
  let content;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError) content = <ErrorMessage message={error} />;
  if (!isLoading && !isError && videos.length === 0)
    content = <ErrorMessage message="Video is not Found..." />;
  if (!isLoading && !isError && videos?.length > 0)
    content = videos.map((video) => <Video key={video.id} video={video} />);

  return (
    <>
      <section className="pt-12">
        <section className="pt-12">
          <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
            {content}
          </div>
        </section>
      </section>
    </>
  );
};

export default Videos;
