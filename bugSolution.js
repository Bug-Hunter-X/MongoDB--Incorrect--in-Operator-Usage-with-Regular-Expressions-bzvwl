```javascript
const query = { name: /John/i }; // Case-insensitive search

// Correct use of $regex operator for case-insensitive search
const result = await collection.find({ name: query }).toArray(); // Or use $regex explicitly
// const result = await collection.find({ name: { $regex: /John/i } }).toArray();
```