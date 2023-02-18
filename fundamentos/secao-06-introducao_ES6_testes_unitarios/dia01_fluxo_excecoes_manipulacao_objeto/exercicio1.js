const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
        street: 'Rua das Flores',
        number: '389',
        apartment: '701'
    },
    order: {
        pizza: {
            marguerita: {
                amount: 1,
                price: 25
            },
            pepperoni: {
                amount: 1,
                price: 20
            }
        },
        drinks: {
            coke: {
                type: 'Coca-Cola Zero',
                price: 10,
                amount: 1
            }
        },
        delivery: {
            deliveryPerson: 'Ana Silveira',
            price: 5
        }
    },
    payment: {
        total: 60
    }
}

const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const {
        name,
        phoneNumber,
        address: { street, number, apartment },
        order: {
            delivery: { deliveryPerson }
        }
    } = order
    let mensagem = `Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, R. ${street}, Nº: ${number}, AP: ${apartment}`
    return console.log(mensagem)
}

customerInfo(order)

const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    const newOrder = { name: newName = 'Luiz Silva', payment: { total: newTotal = 50 }, ...order }

    const {
        order: { pizza },
        order: {
            drinks: {
                coke: { type }
            }
        }
    } = newOrder
    
    const items = [...Object.keys(pizza), type].join(', ')
    const mensagem = `Olá ${newName}, o total do seu pedido de ${items} é R$ ${newTotal},00.`

    return console.log(mensagem)
}

orderModifier(order)
console.log(order)