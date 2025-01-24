```javascript
const query = { name: /John/i }; // Case-insensitive search

// Incorrect use of $in operator with a regular expression
const result = await collection.find({ name: { $in: [query] } }).toArray();
```