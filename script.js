const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'C', 'C++', 'React',
    'Python', 'Java', 'git',
    'django', 'Node.js',
    'GCP', 'MySQL', 'jQuery',
];

var tagCloud = TagCloud('.content', myTags,{

 
  radius: 250,

  maxSpeed: 'fast',
  initSpeed: 'fast',
  direction: 135,
  keep: true
  
});

//To change the color of text randomly
var colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', 'FFBA01', '01A6F0'];




var random_color = colors[Math.floor(Math.random() * colors.length)];
document.querySelector('.content').style.color = random_color;
