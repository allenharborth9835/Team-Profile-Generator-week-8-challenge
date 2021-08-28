const generateCards = employeeArr =>{

  return`  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${employeeArr.name}\n ${employeeArr.role}</h5>
    <p class="card-text"></p>
  </div>
  </div>`
}

module.exports = templateData => { 
  console.log(templateData);

  //destructure projects and about data from templateData based on their property key name
  const {projects, about, ...header} = templateData;

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>
  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
      </div>
    </header>
    <main class="container my-5">
      ${generateCards(managerArr)}
    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${header.name}</h3>
    </footer>
  </body>
  </html>
  `;
};