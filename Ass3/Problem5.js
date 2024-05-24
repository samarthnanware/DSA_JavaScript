// Find the Intersection of Two Arrays
// Given two arrays, write a program to find their intersection. The intersection should contain only the unique elements present in both arrays.

function intersection(arr1,arr2){
    const intersectionSet = []

    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i]==arr2[j]){
                intersectionSet.push(arr1[i]);
                break;
            }
        }
    }
    return (intersectionSet);
}
const array1 = [1, 2, 2, 1];
const array2 = [2, 2, 3];
const Intersection = intersection(array1, array2);
console.log(Intersection);