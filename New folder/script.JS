const image = document.querySelector('.image');
const hover = document.querySelector('.hover');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

function show() {
     hover.classList.add('active');
     modal.classList.add('show');
}

function hide() {
     hover.classList.remove('active');
     modal.classList.remove('show');
}

image.addEventListener('click', show);
close.addEventListener('click', hide);

var chkbtn = document.getElementById("chkbtn");
const sidebar = document.getElementById('sidebar');

function toogle() {
     var chk = document.getElementById('check').checked;
     if (!chk) {
          sidebar.style.display = 'block';
     } else {
          sidebar.style.display = 'none';
     }
}

chkbtn.addEventListener('click', toogle);

const container = document.querySelector('#body');
const toggle = document.querySelector('.toggle-input');
const part = document.getElementById('particles-js');
const initialState = 'false';
toggle.checked = initialState;

toggle.addEventListener('change', function () {
     if (!toggle.checked) {
          container.className = 'light';
          part.style.backgroundColor = "#d3d3d3";
          particlesJS("particles-js", {
               "particles": {
                    "number": {
                         "value": 100,
                         "density": {
                              "enable": true,
                              "value_area": 800
                         }
                    },
                    "color": {
                         "value": "#000000"
                    },
                    "shape": {
                         "type": "circle",
                         "stroke": {
                              "width": 0,
                              "color": "#000000"
                         },
                         "polygon": {
                              "nb_sides": 5
                         },
                         "image": {
                              "src": "img/github.svg",
                              "width": 100,
                              "height": 100
                         }
                    },
                    "opacity": {
                         "value": 0.5,
                         "random": false,
                         "anim": {
                              "enable": false,
                              "speed": 1,
                              "opacity_min": 0.1,
                              "sync": false
                         }
                    },
                    "size": {
                         "value": 3,
                         "random": true,
                         "anim": {
                              "enable": false,
                              "speed": 40,
                              "size_min": 0.1,
                              "sync": false
                         }
                    },
                    "line_linked": {
                         "enable": true,
                         "distance": 150,
                         "color": "#000000",
                         "opacity": 0.4,
                         "width": 1
                    },
                    "move": {
                         "enable": true,
                         "speed": 6,
                         "direction": "none",
                         "random": false,
                         "straight": false,
                         "out_mode": "out",
                         "bounce": false,
                         "attract": {
                              "enable": false,
                              "rotateX": 600,
                              "rotateY": 1200
                         }
                    }
               },
               "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                         "onhover": {
                              "enable": true,
                              "mode": "repulse"
                         },
                         "onclick": {
                              "enable": true,
                              "mode": "push"
                         },
                         "resize": true
                    },
                    "modes": {
                         "grab": {
                              "distance": 400,
                              "line_linked": {
                                   "opacity": 1
                              }
                         },
                         "bubble": {
                              "distance": 400,
                              "size": 40,
                              "duration": 2,
                              "opacity": 8,
                              "speed": 3
                         },
                         "repulse": {
                              "distance": 200,
                              "duration": 0.4
                         },
                         "push": {
                              "particles_nb": 4
                         },
                         "remove": {
                              "particles_nb": 2
                         }
                    }
               },
               "retina_detect": true
          })
          kofiWidgetOverlay.draw('xditya', {
               'type': 'floating-chat',
               'floating-chat.donateButton.text': 'Support me',
               'floating-chat.donateButton.background-color': '#00b9fe',
               'floating-chat.donateButton.text-color': '#fff'
          });
     }
     else {
          container.className = 'dark';
          part.style.backgroundColor = "#161616";
          particlesJS("particles-js", {
               "particles": {
                    "number": {
                         "value": 100,
                         "density": {
                              "enable": true,
                              "value_area": 800
                         }
                    },
                    "color": {
                         "value": "#f70000"
                    },
                    "shape": {
                         "type": "circle",
                         "stroke": {
                              "width": 0,
                              "color": "#000000"
                         },
                         "polygon": {
                              "nb_sides": 5
                         },
                         "image": {
                              "src": "img/github.svg",
                              "width": 100,
                              "height": 100
                         }
                    },
                    "opacity": {
                         "value": 0.5,
                         "random": false,
                         "anim": {
                              "enable": false,
                              "speed": 1,
                              "opacity_min": 0.1,
                              "sync": false
                         }
                    },
                    "size": {
                         "value": 3,
                         "random": true,
                         "anim": {
                              "enable": false,
                              "speed": 40,
                              "size_min": 0.1,
                              "sync": false
                         }
                    },
                    "line_linked": {
                         "enable": true,
                         "distance": 150,
                         "color": "#ffffff",
                         "opacity": 0.4,
                         "width": 1
                    },
                    "move": {
                         "enable": true,
                         "speed": 6,
                         "direction": "none",
                         "random": false,
                         "straight": false,
                         "out_mode": "out",
                         "bounce": false,
                         "attract": {
                              "enable": false,
                              "rotateX": 600,
                              "rotateY": 1200
                         }
                    }
               },
               "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                         "onhover": {
                              "enable": true,
                              "mode": "repulse"
                         },
                         "onclick": {
                              "enable": true,
                              "mode": "push"
                         },
                         "resize": true
                    },
                    "modes": {
                         "grab": {
                              "distance": 400,
                              "line_linked": {
                                   "opacity": 1
                              }
                         },
                         "bubble": {
                              "distance": 400,
                              "size": 40,
                              "duration": 2,
                              "opacity": 8,
                              "speed": 3
                         },
                         "repulse": {
                              "distance": 200,
                              "duration": 0.4
                         },
                         "push": {
                              "particles_nb": 4
                         },
                         "remove": {
                              "particles_nb": 2
                         }
                    }
               },
               "retina_detect": true
          })
          kofiWidgetOverlay.draw('xditya', {
               'type': 'floating-chat',
               'floating-chat.donateButton.text': 'Support me',
               'floating-chat.donateButton.background-color': '#323842',
               'floating-chat.donateButton.text-color': '#fff'
          });
     }
});

particlesJS("particles-js", {
     "particles": {
          "number": {
               "value": 100,
               "density": {
                    "enable": true,
                    "value_area": 800
               }
          },
          "color": {
               "value": "#f70000"
          },
          "shape": {
               "type": "circle",
               "stroke": {
                    "width": 0,
                    "color": "#000000"
               },
               "polygon": {
                    "nb_sides": 5
               },
               "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
               }
          },
          "opacity": {
               "value": 0.5,
               "random": false,
               "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
               }
          },
          "size": {
               "value": 3,
               "random": true,
               "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
               }
          },
          "line_linked": {
               "enable": true,
               "distance": 150,
               "color": "#ffffff",
               "opacity": 0.4,
               "width": 1
          },
          "move": {
               "enable": true,
               "speed": 6,
               "direction": "none",
               "random": false,
               "straight": false,
               "out_mode": "out",
               "bounce": false,
               "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
               }
          }
     },
     "interactivity": {
          "detect_on": "canvas",
          "events": {
               "onhover": {
                    "enable": true,
                    "mode": "repulse"
               },
               "onclick": {
                    "enable": true,
                    "mode": "push"
               },
               "resize": true
          },
          "modes": {
               "grab": {
                    "distance": 400,
                    "line_linked": {
                         "opacity": 1
                    }
               },
               "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
               },
               "repulse": {
                    "distance": 200,
                    "duration": 0.4
               },
               "push": {
                    "particles_nb": 4
               },
               "remove": {
                    "particles_nb": 2
               }
          }
     },
     "retina_detect": true
})

kofiWidgetOverlay.draw('xditya', {
               'type': 'floating-chat',
               'floating-chat.donateButton.text': 'Support me',
               'floating-chat.donateButton.background-color': '#323842',
               'floating-chat.donateButton.text-color': '#fff'
          });
