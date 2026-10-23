function fetchUserDataCallback(userId, callback) {
  setTimeout(() => {
    if (userId === 1) {
      callback(null, { id: 1, name: "Alice" });
    } else {
      callback(new Error("User not found"), null);
    }
  }, 1000);
}

// Usage:
fetchUserDataCallback(1, (err, data) => {
  if (err) console.error(err.message);
  else console.log("Callback Data:", data);

});

function fetchUserDataPromise(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === 1) {
        resolve({ id: 1, name: "Alice" });
      } else {
        reject(new Error("User not found"));
      }
    }, 1000);
  });
}

// Usage:
fetchUserDataPromise(1)
  .then(data => console.log("Promise Data:", data))
  .catch(err => console.error(err.message));

//task2
Promise.resolve(4)
  .then(num => {
    console.log(`Initial number: ${num}`);
    return num * 3; // 12
  })
  .then(num => {
    console.log(`After multiplying by 3: ${num}`);
    return num + 5; // 17
  })
  .then(finalResult => {
    console.log(`Final Result: ${finalResult}`); // Output: 17
  })
  .catch(err => {
    console.error("An error occurred:", err);
  });

  //task3

  Promise.resolve("Step 1 Complete")
  .then(result => {
    console.log(result);
    return "Step 2 Complete";
  })
  .then(result => {
    console.log(result);
    throw new Error("Something went wrong in Step 3!");
  })
  .then(result => {
    // This skipped because an error was thrown above
    console.log(result);
  })
  .catch(error => {
    console.error(`Caught Error: ${error.message}`); 
    // Output: Caught Error: Something went wrong in Step 3!
  });


  //task4

  function processUser() {
  fetchUser()
    .then(user => fetchPermissions(user.id))
    .then(permissions => renderDashboard(permissions))
    .catch(err => console.error(err));
}

async function processUserAsync() {
  try {
    const user = await fetchUser();
    const permissions = await fetchPermissions(user.id);
    renderDashboard(permissions);
  } catch (err) {
    console.error("Error processing user:", err);
  }
}

//task5
async function fetchFirstFiveUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const users = await response.json();
    
    // Get the first 5 users and print their names
    console.log("First 5 Users:");
    users.slice(0, 5).forEach((user, index) => {
      console.log(`${index + 1}. ${user.name}`);
    });
  } catch (error) {
    console.error("Failed to fetch users:", error.message);
  }
}

fetchFirstFiveUsers();

//task6

async function fetchUserDataAndPosts() {
  try {
    const [usersResponse, postsResponse] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users'),
      fetch('https://jsonplaceholder.typicode.com/posts')
    ]);

    if (!usersResponse.ok || !postsResponse.ok) {
      throw new Error("One or more requests failed");
    }

    const users = await usersResponse.json();
    const posts = await postsResponse.json();

    console.log(`Users returned: ${users.length}`);
    console.log(`Posts returned: ${posts.length}`);
  } catch (error) {
    console.error("Error fetching concurrently:", error);
  }
}

fetchUserDataAndPosts();

//task7

const p1 = Promise.resolve("Success 1");
const p2 = new Promise((resolve) => setTimeout(() => resolve("Success 2"), 100));
const p3 = Promise.reject(new Error("Failure 3"));

// 1. Promise.all: Fails fast if ANY promise rejects. Returns array of values if all succeed.
Promise.all([p1, p2, Promise.resolve("Success 3")])
  .then(res => console.log("Promise.all:", res))
  .catch(err => console.log("Promise.all failed:", err.message));

// 2. Promise.allSettled: Waits for ALL promises to settle (fulfilled or rejected). Returns status array.
Promise.allSettled([p1, p2, p3])
  .then(results => console.log("Promise.allSettled:", results));

// 3. Promise.race: Returns the result of the FIRST promise that settles (either resolves or rejects).
Promise.race([p1, p2])
  .then(res => console.log("Promise.race winner:", res));

// 4. Promise.any: Returns the FIRST **fulfilled** promise, ignoring rejections unless ALL fail.
Promise.any([p3, p2])
  .then(res => console.log("Promise.any first success:", res));

//task8

/*
Bug 1: Logging a Promise instead of its result

Bug: console.log(fetch('...')) prints a Promise { <pending> } object.

Fix: Use await fetch(...) or chain with .then(res => res.json()).then(data => console.log(data)).

Bug 2: Failing to return a Promise from a .then() handler

Bug: Forgetting return inside .then(), causing subsequent .then() blocks to receive undefined.

Fix: Ensure you explicitly write return fetch(...); or omit curly braces for implicit returns.

Bug 3: Not catching an asynchronous error

Bug: Unhandled rejection inside an async function or promise chain without .catch().

Fix: Add a .catch() block to the end of your promise chain or wrap your await calls in a try...catch statement.

Bug 4: Executing independent requests sequentially

Bug: Using await sequentially for independent tasks (e.g., await req1(); await req2();), doubling wait times unnecessarily.

Fix: Fire them concurrently using Promise.all([req1(), req2()])*/

//task9

/*nsole.log("1: Script start");

setTimeout(() => {
    console.log("2: setTimeout");
}, 0);

Promise.resolve()
    .then(() => {
        console.log("3: Promise 1");
    })
    .then(() => {
        console.log("4: Promise 2");
    });

async function asyncTest() {
    console.log("5: Async start");
    await Promise.resolve();
    console.log("6: Async end");
}

asyncTest();

console.log("7: Script end"); 

//task10


// 1. The raw array returned from the API
const usersArray = [
  { id: 1, name: "Leanne Graham", email: "Sincere@april.biz" },
  { id: 2, name: "Ervin Howell", email: "Shanna@melissa.tv" },
  { id: 3, name: "Clementine Bauch", email: "Nathan@yesenia.net" },
  // ... more users
];

// 2. Iterating through the array to display each item
usersArray.forEach(user => {
  console.log(`Name: ${user.name}, Email: ${user.email}`);
});

// 3. Example: Filtering the array (e.g., finding users with specific names or criteria)
const filteredUsers = usersArray.filter(user => user.name.startsWith('L'));
console.log("Filtered Array:", filteredUsers);

// Inside the async function from Task 10:
const users = await response.json(); // This is the array!

users.forEach(user => {
  const card = document.createElement('div');
  card.className = 'user-card';
  card.innerHTML = `<strong>${user.name}</strong><br><small>${user.email}</small>`;
  userListEl.appendChild(card);
});
*/