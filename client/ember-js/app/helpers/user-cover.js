import { helper } from "@ember/component/helper";

const coverList = ["checkers", "lake-sky", "mountains", "space", "space-art"];
const coverListSize = coverList.length;

export default helper(function userCover(parameter) {
  const id = Number(parameter);
  const index = (id + coverListSize) % coverListSize;
  const cover = coverList[index];
  return `/assets/covers/${cover}/index.png`;
});
