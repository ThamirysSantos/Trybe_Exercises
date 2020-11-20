function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
  const ul = document.getElementById('days');

  function populaDaysList (listDays) {

    for (let key in listDays) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.className = 'day';
      if (listDays[key] == 24 || listDays[key] == 25 || listDays[key] == 31) {
        li.className += ' holiday';
      } 
      if (listDays[key] == 4 || listDays[key] == 11 || listDays[key] == 18 || listDays[key] == 25) {
        li.className += ' friday';
      }
      li.innerText = listDays[key];
    }
  }
  populaDaysList(dezDaysList);
  const holidayBtn = document.createElement('button');
  
  function holidaysButton (name) {  
    holidayBtn.id = 'btn-holiday';
    document.getElementsByClassName('buttons-container')[0].appendChild(holidayBtn);
    holidayBtn.innerText = name;
  }
  holidaysButton("Feriados");

  
  
  holidayBtn.addEventListener('click', function() { 
    const holidays = document.getElementsByClassName('holiday');
    
    for (let index = 0; index < holidays.length; index += 1) {
      if (holidays[index].id !== 'selectedHoliday') {
        holidays[index].style.backgroundColor = 'green';
        holidays[index].style.color = 'rgb(238,238,238)';
        holidays[index].id = 'selectedHoliday';
      } else {
        holidays[index].style.backgroundColor = 'rgb(238,238,238)';
        holidays[index].style.color = '#666';
        holidays[index].id = '';
      }
    }
  })
  
  const fridayBtn = document.createElement('button');
  function fridayButton (name) {  
    fridayBtn.id = 'btn-friday';
    document.getElementsByClassName('buttons-container')[0].appendChild(fridayBtn);
    fridayBtn.innerText = name;
  }
  fridayButton("Sexta-feira");

  fridayBtn.addEventListener('click', function() { 
    const fridays = document.getElementsByClassName('friday');
    let sextou = [4,11,18,25];
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].id !== 'selectedFriday') {
        fridays[index].innerText = 'Sextou!';
        fridays[index].id = 'selectedFriday';
      } else {
          fridays[index].innerText = sextou[index];
          fridays[index].id = '';
      }
    }
  })

  ul.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '25px';
  })
  ul.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '18px';
  })
  
  function adicionaTarefa (tarefa) {
    const task = document.createElement('span');
    task.innerText = tarefa;
    document.querySelector('.my-tasks').appendChild(task);
  }
  adicionaTarefa('estudar');

  function adicionaCorTarefa (cor) {
    const corTask = document.createElement('div');
    corTask.className = 'task';
    corTask.style.backgroundColor = cor;
    document.querySelector('.my-tasks').appendChild(corTask);
  }
  adicionaCorTarefa('red');

  document.querySelector('.my-tasks').addEventListener('click', function(event) {
    if (event.target.className !== 'task selected') {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  })

  const colorTaskSelected = document.getElementsByClassName('task selected');
  ul.addEventListener('click', function(event) {
    if (event.target.style.backgroundColor !== colorTaskSelected[0].style.backgroundColor && event.target.className == 'day') {
      event.target.style.backgroundColor = colorTaskSelected[0].style.backgroundColor;
    } else {
      event.target.style.backgroundColor = 'rgb(238,238,238)';
    }
  })


