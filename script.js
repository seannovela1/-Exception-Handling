// 1. Say you have a function, primitiveMultiply, that in 20% of cases multiplies two
// numbers and in the other 80% of cases raises an exception of type
// MultiplicatorUnitFailure. Write a function that wraps this clunky function and just
// keeps trying until a call succeeds, after which it returns the result. Make sure you
// handle only the exceptions you are trying to handle.
// Example Output:
// console.log(reliableMultiply(8, 8)); // outputs 64

class MultiplicatorUnitFailure extends Error {}  //1. Create a custom error class for specific failures

function primitiveMultiply(a, b) { // 2. Define the primitiveMultiply function.
  if (Math.random() < 0.2) {// 3. Simulate a 20% chance of success
    return a * b; // 4. If we "succeed," return the product of a and b
  } else { // 5. If we don't succeed, throw the error.
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  // while (true) { // 6. Start an infinite loop to keep trying until it succeeds.
    try { // 7. Attempt to call primitiveMultiply.
      return primitiveMultiply(a, b); // 8. If successful, return the result.
    } catch (e) { // 9. Catch any errors thrown by primitiveMultiply.
      if (!(e instanceof MultiplicatorUnitFailure)) { // 10. If the error is not a MultiplicatorUnitFailure, rethrow it.
        throw e; // 11. Rethrow the error if it's not the one we're expecting.
        throw e; // 11. Rethrow the error if it's not the one we're expecting.
      }
      // 12. If it is a MultiplicatorUnitFailure, the loop continues and tries again.
    }
  }


