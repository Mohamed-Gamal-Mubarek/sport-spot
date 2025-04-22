export const capitalizeFirst = word =>
    typeof word === "string" && word.length
        ? word.charAt(0).toUpperCase() + word.slice(1)
        : word;