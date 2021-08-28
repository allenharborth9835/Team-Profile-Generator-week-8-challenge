const generateCardBody= employee =>{
  if(employee.role === "Manager")
    return employee.getOfficeNumber()
  if(employee.role === "Intern")
    return employee.getSchool()
  if(employee.role === "Engineer")
    return employee.getGithub()
  return '';
}

const generateCards = employeeArr =>{
  let pageHTML = ""
  employeeArr.forEach(employee => {
    pageHTML += `  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-header text-white bg-primary mb-3">${employee.name}<br/> ${employee.role}</h5>
    <p class="card-text">
      ${employee.getId()}<br/> 
      ${employee.getEmail()}<br/> 
      ${generateCardBody(employee)}
    </p>
  </div>
  </div>`
  });
  return pageHTML;
}

module.exports = templateData => { 
  console.log(templateData);

  //destructure projects and about data from templateData based on their property key name
  const employeeArr = templateData;

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
  </head>
  <body>
    <header class="p-3 bg-dark">
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
      </div>
    </header>
    <main class="container my-5">
      ${generateCards(employeeArr)}
    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy; ${new Date().getFullYear()} by allen harborth</h3>
    </footer>
  </body>
  </html>
  `;
};