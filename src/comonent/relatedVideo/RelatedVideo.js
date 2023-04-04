import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessage from "../../comonent/ui/ErrorMessage";
import Loading from "../../comonent/ui/Loading";
import { fetchRelatedVideos } from "../../features/relatedVideos/relatedVideoSlice";
import RelatedSingleVideo from "./RelatedSingleVideo";

const RelatedVideo = ({ tags, id }) => {
  const dispatch = useDispatch();
  const relatedVideo = useSelector((state) => state.relatedVideos);
  const { relatedVideos, isLoading, isError, error } = relatedVideo;

  useEffect(() => {
    dispatch(fetchRelatedVideos({ tags, id }));
  }, [dispatch, tags, id]);

  //decide what render
  let content;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError) content = <ErrorMessage message={error} />;
  if (!isLoading && !isError && relatedVideos?.length === 0)
    content = <ErrorMessage message="Related Videos Not Found..." />;
  if (!isLoading && !isError && relatedVideos?.length > 0)
    content = relatedVideos.map((video) => (
      <RelatedSingleVideo key={video.id} video={video} />
    ));

  return (
    <>
      <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
        {content}
      </div>
    </>
  );
};

export default RelatedVideo;
