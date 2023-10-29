//26.01.2022


export class Combinatorics {
  static _factorial(n) {
    let result = 1n;

    for (let i = 1n; i <= n; i++) {
      result *= i;
    }
    
    return result;
  }
  
  
  
  
  static combinations(n, k) {
    let n_factor = this._factorial(n);
    let k_factor = this._factorial(k);
    let difference = n - k;
    let difference_factor = this._factorial(difference);
    let denominator = k_factor * difference_factor;
    let result = n_factor / denominator;
    
    return result;
  }
  
  
  static combinations_repeat(n, k) {
    let n_repeat = n + k - 1;
    let n_factor = this._factorial(n_repeat);
    let k_factor = this._factorial(k);
    let difference = n_repeat - k;
    let difference_factor = this._factorial(difference);
    let denominator = k_factor * difference_factor;
    let result = n_factor / denominator;
    
    return result;
  }
  
  
  static multiplication() {
    let result = 1;
    
    for (let i = 0; i < arguments.length; i++) {
      result *= arguments[i];
    }
    
    return result;
  }
  
  
  static sum() {
    let result = 0;
  
    for (let i = 0; i < arguments.length; i++) {
      result += arguments[i];
    }
  
    return result;
  }
  
  
  static permutation(n) {
    let result = this._factorial(n);
    
    return result;
  }
  
  
  static permutation_repeat() {
    let n = this._factorial(arguments[0]);
    let result = 1;
    let k_repeat = 1n;
    
    for (let i = 1; i < arguments.length; i++) {
      k_repeat *= this._factorial(arguments[i]);
    }
    
    result = n / k_repeat;
    
    return result;
  }
  
  
  static placements(n, k) {
    let permutation = this._factorial(n);
    let methods = n - k;
    let methods_factor = this._factorial(methods);
    let result = permutation / methods_factor;
    
    return result;
  }
  
  
  static placements_repeat(n, k) {
    let result = n ** k;
    
    return result;
  }
}
