import { helper } from "@ember/component/helper";

const coverList = [
  "black",
  "checkers",
  "lake-sky",
  "mountains",
  "space",
  "space-art",
];
const coverListSize = coverList.length;

export default helper(function userCover(parameter) {
  const id = Number(`${parameter}`.split("").reverse().join(""));
  const index =
    id === 0 ? 0 : ((id + (coverListSize - 1)) % (coverListSize - 1)) + 1;
  const cover = coverList[index];
  return `/assets/covers/${cover}/index.png`;
});
