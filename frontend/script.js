
const form = document.querySelector('.form')
        form?.addEventListener('submit', async (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            const response = await fetch('http://localhost:3000/usuario/cadastro', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password })
      });

      const result = await response.json();

      if (result.success) {
        alert("Cadastro bem-sucedido!");
        window.location.href = 'car-register.html'
      } else {
        alert("Cadastro não concluído!");
      }
});

const formLogin = document.querySelector('.formLogin')
        formLogin?.addEventListener('submit', async (e) => {
            e.preventDefault()

            const name = document.getElementById('name').value
            const password = document.getElementById('password').value

            const response = await fetch('http://localhost:3000/usuario/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({name, password})
        })

          const result = await response.json()

          if (result.success) {
            alert("Login concluído!");
            window.location.href = 'car-register.html'
          } else {
            alert("Usuário ou senha incorreta!");
          }
       })

       const formCar = document.querySelector('.formCar')
        formCar?.addEventListener('submit', async (e) => {
            e.preventDefault();

            const vehicle_name = document.getElementById('vehicle_name').value;
            const license_plate = document.getElementById('license_plate').value;
            const parking_space = document.getElementById('parking_space').value;

            const response = await fetch('http://localhost:3000/carro/cadastro', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ vehicle_name, license_plate, parking_space})
      });

      const result = await response.json(); 

      if (result.success) {
        alert("Cadastro do veículo bem-sucedido!");
        window.location.href = 'listagem.html'
      } else {
        alert("A vaga já está preenchida!");
        console.log(result)
      }
});

async function loadCars() {
    const response = await fetch('http://localhost:3000/carros')
    const data = await response.json()
    const tbody = document.querySelector('tbody')

    tbody.innerHTML = ''

    data.cars.forEach(car => {
      const row = document.createElement('tr')
      row.innerHTML = `
      <td>${car.vehicle_name}</td>
      <td>${car.license_plate}</td>
      <td>${car.parking_space}</td>
      <td>
        <button class='btn-delete-car' onclick='deleteCar(${car.id})'>Excluir Veículo</button>
        <button class='btn-edit-car' onclick='editCar(${car.id})'>Editar Veículo</button>
      </td>
      `;
      tbody.appendChild(row)
    });
}

window.onload = () => {
  loadCars()
}

async function deleteCar(id) {

  await fetch(`http://localhost:3000/carros/${id})`, {
    method: 'DELETE',
  })
  loadCars()
}

  async function editCar(id) {
    const vehicle_name = prompt("Ajuste o nome do veículo:")
    const license_plate = prompt("Ajuste a placa do veículo:")

    await fetch(`http://localhost:3000/carros/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({vehicle_name, license_plate})
    })
    loadCars()
  }

loadCars()