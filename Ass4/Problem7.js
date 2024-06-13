function isSubsetOf(sourceArray, targetArray) {
    let set = new Set(sourceArray);

    for (let i = 0; i < targetArray.length; i++) {
        if (!set.has(targetArray[i])) {
            return false; 
        }
    }

    return true; 
}

let sourceArray = [11, 1, 13, 21, 3, 7];
let targetArray = [11, 3, 7 , 1];

let result = isSubsetOf(sourceArray, targetArray);
if (result) {
    console.log(`targetArray[] is a subset of sourceArray[]`);
} else {
    console.log(`targetArray[] is not a subset of sourceArray[]`);
}
