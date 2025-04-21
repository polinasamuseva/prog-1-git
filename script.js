const vielas = [
    {"id":"1","nosaukums":"NaOH šķīdums 10%","tips":"Viela","apakstips":"hidroksīds","skaits":45,"daudzums":"50ml","komentari":"Sapildīts 2020"},
    {"id":"2","nosaukums":"HCl 20%","tips":"Viela","apakstips":"skābe","skaits":24,"daudzums":"100ml","komentari":""}
  ];
  
  const inventars = [
    {"id":"10","nosaukums":"Elektriskā plītīte","tips":"Aprīkojums","apakstips":"plītiņa","skaits":8,"daudzums":"","komentari":"1m kabelis"},
    {"id":"11","nosaukums":"Stikla mēģene","tips":"Aprīkojums","apakstips":"trauki","skaits":12,"daudzums":"","komentari":"Plīstoša"}
  ];
  
  function renderData(data) {
    const tbody = document.getElementById("data-table-body");
    tbody.innerHTML = "";
    data.forEach(item => {
      const row = `
        <tr>
          <td>${item.id}</td>
          <td>${item.nosaukums}</td>
          <td>${item.tips}</td>
          <td>${item.apakstips}</td>
          <td>${item.skaits}</td>
          <td>${item.daudzums}</td>
          <td>${item.komentari}</td>
        </tr>
      `;
      tbody.innerHTML += row;
    });
  }
  
  function renderAll() {
    renderData([...vielas, ...inventars]);
  }
  
  function renderVielas() {
    renderData(vielas);
  }
  
  function renderInventars() {
    renderData(inventars);
  }
  
  window.onload = renderAll;