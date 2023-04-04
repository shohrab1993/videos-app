import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../comonent/ui/Loading";
import { fetchTags } from "../../features/tag/tagSlice";
import ErrorMessage from "../ui/ErrorMessage";
import Tag from "./Tag";

const Tags = () => {
  const dispatch = useDispatch();
  const tagsItem = useSelector((state) => state.tags);
  const { tags, isLoading, isError, error } = tagsItem;

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  // reder what to do

  let content;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError) content = <ErrorMessage message={error} />;
  if (!isLoading && !isError && tags.length === 0)
    content = <ErrorMessage message="Tags not Found..." />;
  if (!isLoading && !isError && tags?.length > 0)
    content = tags.map((tag) => <Tag key={tag.id} tag={tag} />);

  return (
    <>
      <section>
        <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
          {content}
        </div>
      </section>
    </>
  );
};

export default Tags;
