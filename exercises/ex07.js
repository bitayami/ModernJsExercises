/*
The new smart parking lot in Codeville was a big hit! Next on your list to tackle is the air quality. You've decided that you want to install air pollution sensors around the city to monitor air quality and identify problem areas. We need to write the code for the sensors to trigger a special message when the air is too polluted.

Instruction
For this challenge we will implement a function called checkAir(), which will check a collection of air samples. The function will take in two arguments. The first argument is an array of strings, where each string represents a small air sample that is either clean or dirty. The second argument is a number representing the highest acceptable amount of dirty samples. For example, a threshold of 0.4 means that there must be less than 40% of total samples classified as dirty for our air to be considered clean. Our function must return Polluted if there are too many dirty air samples, or Clean if the proportion of dirty samples is below the threshold.

Note
Not sure where to get started? It might be useful to start by creating a variable to keep track of how many dirty samples we find as we loop through the array of samples. We can increment or add to this number using the ++ operator. Once you know how many dirty samples there are, we just need to do some simple math to determine if it exceeds the threshold.
*/

const ErrorMessages = {
  INVALID_SAMPLES_ARRAY: "Invalid samples array",
  SAMPLES_MUST_CONTAIN_CLEAN_OR_DIRTY: "Samples array must contain 'clean' or 'dirty' strings",
  INVALID_THRESHOLD: "Threshold must be between 0 and 1",
};

const checkAir = function (samples, threshold) {
  if (!Array.isArray(samples)) {
    return ErrorMessages.INVALID_SAMPLES_ARRAY;
  }

  if (!samples.includes('clean') || !samples.includes('dirty')) {
    return ErrorMessages.SAMPLES_MUST_CONTAIN_CLEAN_OR_DIRTY;
  }

  if (threshold < 0 || threshold > 1) {
    return ErrorMessages.INVALID_THRESHOLD;
  }

  const dirtyRatio = samples.filter(str => str === "dirty").length / samples.length;  

  return dirtyRatio > threshold ? "Polluted" : "Clean";
};

console.log(
  checkAir(
    [
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
    ],
    0.3
  )
); // Polluted

console.log(checkAir(["dirty", "dirty", "dirty", "dirty", "clean"], 0.25)); // Polluted

console.log(
  checkAir(["clean", "dirty", "clean", "dirty", "clean", "dirty", "clean"], 0.9)
); // Clean

module.exports.checkAir = checkAir;
module.exports.ErrorMessages = ErrorMessages;
