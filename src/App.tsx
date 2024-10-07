import './App.css'

function App() {
  const testMethods = async () => {
    await login();
    await clients();
    await reservation();
  };

  const login = async () => {
    console.log(
      '=============================== LOGIN ================================================= \n'
    );

    const response = await fetch(
      'https://4c90-2804-47c8-2400-29e-c006-93bc-7406-f1e1.ngrok-free.app/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Email: 'admin@gmail.com', password: '123456' }),
      }
    );

    console.log('RESPONSE', response);
    const data = await response.json();
    console.log('DATA', data);
  };

  const clients = async () => {
    console.log(
      '=============================== Clients ================================================= \n'
    );

    const response = await fetch(
      'https://4c90-2804-47c8-2400-29e-c006-93bc-7406-f1e1.ngrok-free.app/client',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('RESPONSE', response);
    const data = await response.json();
    console.log('DATA', data);
  };

  const reservation = async () => {
    console.log(
      '=============================== Reservation ================================================= \n'
    );

    const response = await fetch(
      'https://4c90-2804-47c8-2400-29e-c006-93bc-7406-f1e1.ngrok-free.app/reservation',
      {
        method: 'GET',
      }
    );

    console.log('RESPONSE', response);
    const data = await response.json();
    console.log('DATA', data);
  };
  return (
    <div>
    <h2>TESTANDO</h2>
    <button onClick={testMethods}>LOGAR</button>
  </div>
  )
}

export default App
