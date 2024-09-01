function longestConsecutive(nums) {
    if (nums.length === 0) return 0;

    const numSet = new Set(nums);
    let longestStreak = 0;

    for (let num of numSet) {
        // Check if it's the start of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            // Count the length of the sequence
            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            // Update the longest streak found
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
}
