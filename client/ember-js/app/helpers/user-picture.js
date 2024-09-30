import { helper } from "@ember/component/helper";

export default helper(function userPicture(parameter) {
  let tag = "guest";
  console.log("parameter: " + parameter);
  const name = `${parameter}`;
  if (name !== "Guest" && name && name[0]) {
    tag = name[0].toLowerCase();
  }
  return `/assets/users/user-picture-${tag}.png`;
});
