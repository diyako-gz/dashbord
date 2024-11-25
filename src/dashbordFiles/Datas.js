let xAxisData = [
    {
        "name": "jan" , 
        "sale": 112_000
    },
    {
        "name": "feb" , 
        "sale": 212_000
    },
    {
        "name": "march" , 
        "sale": 513_000
    },
    {
        "name": "april" , 
        "sale": 512_000
    },
    {
        "name": "may" , 
        "sale": 312_000
    },
    {
        "name": "jun" , 
        "sale": 211_000
    },
    {
        "name": "july" , 
        "sale": 212_000
    },
    {
        "name": "agu" , 
        "sale": 111_000
    },
    {
        "name": "sep" , 
        "sale": 124_000
    },
    {
        "name": "okt" , 
        "sale": 143_000
    },
    {
        "name": "nov" , 
        "sale": 155_000
    },
    {
        "name": "des" , 
        "sale": 114_000
    },
]

const mamber = [
    {
        id: 1 , 
        userName: 'diyako gazvini' ,
        title:'web developer' , 
        img: '/imags/person.webp'
    } ,
    {
        id: 2 , 
        userName: 'john danilson' ,
        title:'ceo ingeniure' , 
        img: '/imags/person.webp'
    } ,
    {
        id: 3 , 
        userName: 'amirgz' ,
        title:'it ingeniure' , 
        img: '/imags/person.webp'
    } 
]


const transaction = [
    {
        id: 1 ,
        customer: 'diyako gazvini' ,
        date: '12 may 2015' ,
        amount: 123 ,
        state: 'accepted' ,
        img: '/imags/person.webp'
    } ,
    {
        id: 2 ,
        customer: 'amirgz' ,
        date: '9 sep 2022' ,
        amount: 174 ,
        state: 'accepted' ,
        img: '/imags/person.webp'
    } ,
    {
        id: 3 ,
        customer: 'john danilson' ,
        date: '15 jun 2017' ,
        amount: 222 ,
        state: 'panding' ,
        img: '/imags/person.webp'
    } ,
    {
        id: 4 ,
        customer: 'cyrus' ,
        date: '22 agu 2019' ,
        amount: 453 ,
        state: 'accepted' ,
        img: '/imags/person.webp'
    } ,
    
]

let userRows = [
    {
        id: 1,
        userName: 'diyako' ,
        avatar : '/imags/person.webp' ,
        status: 'active' ,
        transaction: '$129,52' ,
        job: 'web developer'
    } ,
    {
        id: 2,
        userName: 'amigz' ,
        avatar : '/imags/person.webp' ,
        status: 'noneactive' ,
        transaction: '$1,52' ,
        job: 'ceo'
    } ,
    {
        id: 3,
        userName: 'john danilson' ,
        avatar : '/imags/person.webp' ,
        status: 'active' ,
        transaction: '$200,29' ,
        job: 'it assistanc'
    } ,
    {
        id: 4,
        userName: 'cyrus' ,
        avatar : '/imags/person.webp' ,
        status: 'noneactive' ,
        transaction: '$48,900' ,
        job: 'signal enginier'
    } 
]

let prudukts = [
    {
        id: 1,
        name: 'ebra' ,
        avatar : '/imags/prudukt.jpg' ,
        price: '$129,52' ,
        status: 'aleady have'
    } ,
    {
        id: 2,
        name: 'parfum' ,
        avatar : '/imags/prudukt.jpg' ,
        price: '$52' ,
        status: 'aleady have'
    } ,
    {
        id: 3,
        name: 'brille' ,
        avatar : '/imags/prudukt.jpg' ,
        price: '$180' ,
        status: 'aleady have'
    } ,
    {
        id: 4,
        name: 'shmuck' ,
        avatar : '/imags/prudukt.jpg' ,
        price: '$80' ,
        status: 'aleady have'
    } 
]

const pruduktData = [
    {
        name:'jun' ,
        sales:4000
    } ,
    {
        name:'may' ,
        sales:7000
    } ,
    {
        name:'agu' ,
        sales:6000
    } 
]


export {xAxisData , mamber , transaction , userRows , prudukts , pruduktData}