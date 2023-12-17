const farmAnimals = 'cow horse sheep pig chicken';
const farmAnimalsArr = farmAnimals.split(' ');
let [moo, neigh, baa, oink, cluck] = farmAnimalsArr;
// const remove1 = (arr) => {
//   const result = [arr[0]];
//   for(let i = 2; i < arr.length; i++) result.push(arr[i]);
//   return result;
// }
//let [bessie, dolly, babe, little] = remove1(farmAnimals.split(' '));
let [bessie, dolly, babe, little] = [...farmAnimalsArr.slice(0,1),...farmAnimalsArr.slice(2)];
let [blackAndWhite, black, pink] = [farmAnimalsArr[0], farmAnimalsArr[2], farmAnimalsArr[3]];


const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let [red, orange, yellow, green, blue, indigo, violet] = colors;
let [r,o,y,g,b,i,v] = colors;
let indg = colors[5];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};
let {muppetName, color, song, job, partner} = muppet

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};
const nestedMuppetMovie = nestedMuppet.album.theMuppetMovie;
let [song2, song4, nestedJob, nestedPartner] = [nestedMuppetMovie.song2, nestedMuppetMovie.song4, nestedMuppet.nestedJob, nestedMuppet.nestedPartner]

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner