import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Description from "../comonent/Player/Description";
import Player from "../comonent/Player/Player";
import RelatedVideo from "../comonent/relatedVideo/RelatedVideo";
import ErrorMessage from "../comonent/ui/ErrorMessage";
import Loading from "../comonent/ui/Loading";
import { fetchVideo } from "../features/video/videoSlice";
const VideoPlayer = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const { video, isLoading, isError, error } = useSelector(
    (state) => state.video
  );
  const { title, link, tags, id } = video;

  useEffect(() => {
    dispatch(fetchVideo(param.videoId));
  }, [dispatch, param.videoId]);

  //decide what to render
  let content;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError) content = <ErrorMessage message={error} />;
  if (!isLoading && !isError && !video?.id)
    content = <ErrorMessage message="Video not Found..." />;
  if (!isLoading && !isError && video?.id) {
    content = (
      <div className="grid grid-cols-3 gap-2 lg:gap-8">
        <div className="col-span-full w-full space-y-8 lg:col-span-2">
          <Player link={link} title={title} />
          <Description video={video} />
        </div>
        <RelatedVideo tags={tags} id={id} />
      </div>
    );
  }
  return (
    <section className="pt-6 pb-20">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        {content}
      </div>
    </section>
  );
};

export default VideoPlayer;
