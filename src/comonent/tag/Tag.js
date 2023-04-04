import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removedTags, selecteTags } from "../../features/filter/filterSlice";

const Tag = ({ tag }) => {
  const dispatch = useDispatch();
  const { tags: selectedTag } = useSelector((state) => state.filter);
  const isSelected = selectedTag.includes(tag.title) ? true : false;

  const style = isSelected
    ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
    : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer";
  // onClick function

  const handleTagSelect = () => {
    if (isSelected) {
      dispatch(removedTags(tag.title));
    } else {
      dispatch(selecteTags(tag.title));
    }
  };
  return (
    <>
      <div className={style} onClick={handleTagSelect}>
        {tag.title}
      </div>
    </>
  );
};

export default Tag;
