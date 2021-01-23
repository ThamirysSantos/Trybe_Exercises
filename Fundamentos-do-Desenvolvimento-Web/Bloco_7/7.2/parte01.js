const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const pedido = Object.values(order);
  return `Olá ${pedido[3].delivery.deliveryPerson}, entrega para: ${pedido[0]},
  Telefone: ${pedido[1]}, R. ${pedido[2].street}, Nº ${pedido[2].number},
  AP: ${pedido[2].apartment}`;
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
 const newCliente = order.name = 'Luiz Silva';
 const pizzas = `${Object.keys(order.order.pizza)[0]}, ${Object.keys(order.order.pizza)[1]}`;
 const drink = Object.values(order.order.drinks.coke)[0];
 const total = order.payment.total = 'R$ 50,00';
 
 return `Olá ${newCliente}, o total do seu pedido de ${pizzas} e ${drink} é ${total}.`;
}

orderModifier(order);