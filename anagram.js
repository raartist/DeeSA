//sorting and comparing
// export function isAnagram(s,t){
//     const first = s.split('').sort().join('');
//     const second = t.split('').sort().join('');
//     return first === second;
// }

//using an array of zeros
// export function isAnagramWithArray(s,t){
//     const arr = new Array(128).fill(0);

//     for(let i = 0; i < s.length; i++){
//         arr[s.charCodeAt(i)]++;
//     }   
//     for(let i = 0; i < t.length; i++){
//         arr[t.charCodeAt(i)]--;
//     }

//     return arr.every(num => num === 0);
// }

//using an frequency object
export function isAnagramWithObject(s,t){
    const freq = {};

    for(let i = 0; i < s.length; i++){
        freq[s[i]] = (freq[s[i]] || 0) + 1;
    }   
    for(let i = 0; i < t.length; i++){
        freq[t[i]] = (freq[t[i]] || 0) - 1;
    }
    for(let key in freq){
        if(freq[key] !== 0){
            return false;
        }
    }
    return true;
}