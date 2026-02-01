//second most frequent depends on tie handling

let arr = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple', 'banana'];

//Step 1 Count Frequencies using Map

function secondMostFreq(arr) {
  const freq = new Map();

  for (const str of arr) {
    freq.set(str, (freq.get(str) || 0) + 1);
  }

  const counts = [...freq.values()];
  const uniqueCounts = [...new Set(counts)].sort((a, b) => b - a);

  if (uniqueCounts.length < 2) return null;

  const secondHighest = uniqueCounts[1];

  for (const [key, value] of freq.entries()) {
    if (value === secondHighest) {
      return key;
    }
  }
}

const apr = secondMostFreq(arr);
console.log(apr);
