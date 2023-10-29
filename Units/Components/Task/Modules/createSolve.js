export class Create_solve {
  static _create_solve(solve_content, task_num, task, result_true) {
    if (task_num == 0) {
      let total_content = `${task[0]} + ${task[1]}`;
      
      let total = solve_content[task_num].querySelector('.total_permutation');
      
      total.textContent = total_content;
    }
    else if (task_num == 1) {
      let total_content = `${task[0]} * ${task[1]}`;
      
      let total = solve_content[task_num].querySelector('.total_permutation');
      
      total.textContent = total_content;
    }
    else if (task_num == 2) {
      let count_content = task;
      let total_content = `${task}!`;
      
      let count = solve_content[task_num].querySelector('.count_permutation');
      let total = solve_content[task_num].querySelector('.total_permutation');
      
      count.textContent = count_content;
      total.textContent = total_content;
    }
    else if (task_num == 3) {
      let count_content = `(${task[0]}, ${task[1]})`;
      
      let n = task[0] + task[1];
      
      let denominator_content = `${task[0]}!*${task[1]}!`;
      let reader_content = `(${task[0]} + ${task[1]})!`;
      
      let count = solve_content[task_num].querySelector('.count_permutation');
      let denominator = solve_content[task_num].querySelector('.denominator');
      let reader = solve_content[task_num].querySelector('.reader');
      
      count.textContent = count_content;
      denominator.textContent = denominator_content;
      reader.textContent = reader_content;
    }
    else if (task_num == 4) {
      let count_content = task[1];
      let total_content = task[0];
      
      let denominator_content = `(${task[0]} - ${task[1]})!`;
      let reader_content = `${task[0]}!`;
      let count = solve_content[task_num].querySelector('.count');
      let denominator = solve_content[task_num].querySelector('.denominator');
      let reader = solve_content[task_num].querySelector('.reader');
      let total = solve_content[task_num].querySelector('.total');
      
      count.textContent = count_content;
      denominator.textContent = denominator_content;
      reader.textContent = reader_content;
      total.textContent = total_content;
    }
    else if (task_num == 5) {
      let count_content = task[1];
      let total_content = task[0];
      
      let count = solve_content[task_num].querySelector('.count');
      let degree = solve_content[task_num].querySelector('.degree');
      let footing = solve_content[task_num].querySelector('.footing');
      let total = solve_content[task_num].querySelector('.total');
      
      count.textContent = count_content;
      degree.textContent = count_content;
      footing.textContent = total_content;
      total.textContent = total_content;
    }
    else if (task_num == 6) {
      let count_content = task[1];
      let total_content = task[0];
      
      let denominator_content = `${task[1]}!(${task[0]} - ${task[1]})!`;
      let reader_content = `${task[0]}!`;
      
      let count = solve_content[task_num].querySelector('.count');
      let denominator = solve_content[task_num].querySelector('.denominator');
      let reader = solve_content[task_num].querySelector('.reader');
      let total = solve_content[task_num].querySelector('.total');
      
      count.textContent = count_content;
      denominator.textContent = denominator_content;
      reader.textContent = reader_content;
      total.textContent = total_content;
    }
    else if (task_num == 7) {
      let count_content = task[1];
      let total_content = `${task[0]}+${task[1]}-1`;
      
      let denominator_content = `${task[1]}!(${task[0] + task[1] - 1} - ${task[1]})!`;
      let reader_content = `${task[0] + task[1] - 1}!`;
      
      let count = solve_content[task_num].querySelector('.count');
      let denominator = solve_content[task_num].querySelector('.denominator');
      let reader = solve_content[task_num].querySelector('.reader');
      let total = solve_content[task_num].querySelector('.total');
      
      count.textContent = count_content;
      denominator.textContent = denominator_content;
      reader.textContent = reader_content;
      total.textContent = total_content;
    }
    
    
    let answers = solve_content[task_num].querySelectorAll('.answer');
    
    for (let answer of answers) {
      answer.textContent = result_true;
    }
  }
  
  
  
  
  static init(solve_content, task_num, task, result_true) {
    this._create_solve(solve_content, task_num, task, result_true);
  }
}
