/***********************************************************************
You probably know the "like" system from Facebook and other pages.
People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

likes [] // must be "no one likes this"
likes ["Peter"] // must be "Peter likes this"
likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
For 4 or more names, the number in and 2 others simply increases.

https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
***********************************************************************/

function likes(name) {
  if (name.length === 0) {
    return "no one likes this"
  } else if (name.length === 1) {
    return name[0] + " likes this"
  } else if (name.length === 2) {
    return name[0] + ' and ' + name[1] + " like this"
  } else if (name.length === 3) {
    return name[0] + ', ' + name[1] + ' and ' + name[2] + " like this"
  } else {
    return (name.slice(0, 2).join(', ')) + ' and ' + (name.length - 2) + " others like this"
  }
}

console.log(likes([])) //=> 'no one likes this'
console.log(likes(['Peter'])) //=> 'Peter likes this'
console.log(likes(['Jacob', 'Alex'])) //=> 'Jacob and Alex like this'
console.log(likes(['Max', 'John', 'Mark'])) //=> 'Max, John and Mark like this'
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])) //=> 'Alex, Jacob and 2 others like this'
