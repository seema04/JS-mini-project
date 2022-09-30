const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: './img/p1.jpg',
    text: 'Iure nemo quo vero magni molestiae! Pariatur dolores quis voluptatibus!'
  },

  {
    id: 2,
    name: 'Olive Williams',
    job: 'UI designer',
    img: "./img/p2.jpg",
    text: 'Amet consectetur, adipisicing elit. Sapiente fugiat, iure nemo quo vero magni molestiae! Pariatur dolores quis voluptatibus!'
  },

  {
    id: 3,
    name: 'Anna Johnson',
    job: 'Content creator',
    img: "./img/p3.jpg",
    text: 'Lorem ipsum dolor sit amet      consectetur, adipisicing elit. Sapiente fugiat.'
  },

  {
    id: 4,
    name: 'Rachel',
    job: 'Fashion designer',
    img: "./img/p4.jpg",
    text: 'Lorem ipsum dolor sit amet      consectetur, adipisicing elit. Sapiente fugiat, iure nemo quo vero magni molestiae! Pariatur dolores quis voluptatibus! sit amet      consectetur, adipisicing elit.'
  },

  {
    id: 5,
    name: 'Shradha',
    job: 'Data analyst',
    img: "./img/p5.jpg",
    text: 'Lorem ipsum dolor sit amet      consectetur, adipisicing elit. Sapiente fugiat, iure nemo quo vero magni molestiae! Pariatur dolores quis voluptatibus! Adipisicing elit. Sapiente fugiat, iure nemo quo vero magni molestiae! Pariatur dolores quis voluptatibus'
  },

  {
    id: 6,
    name: 'Monica',
    job: 'Chef',
    img: "./img/p6.jpg",
    text: 'Magni molestiae! Pariatur dolores quis voluptatibus!'
  }
]

const img = document.querySelector('#person-img');
const author = document.querySelector('#author');
const job = document.querySelector('#job');
const info = document.querySelector('#info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item.

let currentItem = 0;

window.addEventListener('DOMContentLoaded',function(){
 showPerson(currentItem);
})

const showPerson = (person) => {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// previous review.

prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0)
      currentItem = reviews.length-1;
    showPerson(currentItem);
})

// next review
nextBtn.addEventListener('click', function(){
    currentItem++; 
    if(currentItem > reviews.length - 1)
      currentItem = 0;
    showPerson(currentItem);
  })


const getRandomReviews = () => {
    return Math.floor(Math.random() * reviews.length);
  }

randomBtn.addEventListener('click', function(){
    currentItem = getRandomReviews();
    showPerson(currentItem);
  })


