// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  let clean = s.replace(/[!]/g, "");
  return clean;
}
