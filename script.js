function drawHead() {
    const canvas = document.getElementById('canvas-head');
    const ctx = canvas.getContext('2d');
  
    ctx.beginPath();
    ctx.lineWidth = 3;
  
    ctx.beginPath();
    ctx.moveTo(3, 170);
    ctx.bezierCurveTo(40, 3, 270, 3, 303, 170);
    ctx.lineTo(303, 300)
    ctx.bezierCurveTo(310, 550, 0, 580, 3, 300);
    ctx.lineTo(3, 170)
  
    ctx.fillStyle = '#ebccad';
  
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  
    ctx.beginPath();
    ctx.lineWidth = 2;  
    ctx.moveTo(130, 70);
    ctx.bezierCurveTo(140, 70, 150, 65, 160, 68);
    ctx.stroke();
    ctx.closePath();
  
    ctx.beginPath();
    ctx.lineWidth = 2;  
    ctx.moveTo(90, 90);
    ctx.bezierCurveTo(140, 100, 150, 80, 200, 80);
    ctx.stroke();
    ctx.closePath();
  
    const points = [
      {x: 100, y: 133},
      {x: 140, y: 132},
      {x: 160, y: 125},
      {x: 170, y: 120},
      {x: 210, y: 110},
      {x: 250, y: 112},
      {x: 255, y: 124},
      {x: 250, y: 132},
      {x: 210, y: 130},
      {x: 180, y: 140},
      {x: 165, y: 148},
      {x: 120, y: 154},
      {x: 90, y: 152},
      {x: 40, y: 148},
      {x: 35, y: 140},
      {x: 40, y: 130},
      {x: 60, y: 130},
      {x: 100, y: 133},
    ];
  
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
  
    for (i = 1; i < points.length - 2; i ++) {
      const xc = (points[i].x + points[i + 1].x) / 2;
      const yc = (points[i].y + points[i + 1].y) / 2;
  
      ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
    }
  
    ctx.quadraticCurveTo(
      points[i].x, points[i].y, 
      points[i+1].x,points[i+1].y
    );
  
    ctx.stroke();
    ctx.fillStyle = '#cadcdc';
    ctx.fill();
    ctx.closePath();
  }
  
  function drawFace() {
    const canvas = document.getElementById('canvas-face');
    const ctx = canvas.getContext('2d');
    
    ctx.lineWidth = 2;
  
    ctx.beginPath();
    ctx.moveTo(65, 183);
    ctx.bezierCurveTo(140, 160, 140, 140, 250, 151);
    ctx.stroke();
    ctx.closePath();
  
    ctx.beginPath();
    ctx.moveTo(50, 175);
    ctx.bezierCurveTo(30, 190, 50, 205, 70, 195);
    ctx.stroke();
    ctx.closePath();
  
    ctx.beginPath();
    ctx.moveTo(260, 140);
    ctx.bezierCurveTo(270, 150, 275, 165, 240, 165);
    ctx.stroke();
    ctx.closePath();
  
    ctx.beginPath();
    ctx.moveTo(260, 140);
    ctx.bezierCurveTo(270, 150, 275, 165, 240, 165);
    ctx.stroke();
    ctx.closePath();
  
    ctx.beginPath();
    ctx.moveTo(140, 70);
    ctx.bezierCurveTo(145, 145, 184, 140, 175, 70);
    ctx.stroke();
    ctx.closePath();
  
    ctx.beginPath();
    ctx.moveTo(58, 107);
    ctx.bezierCurveTo(70, 110, 80, 110, 98, 102);
    ctx.stroke();
    ctx.closePath();
  
    ctx.beginPath();
    ctx.moveTo(200, 100);
    ctx.bezierCurveTo(220, 110, 230, 110, 240, 105);
    ctx.stroke();
    ctx.closePath();
  
    const points = [
      {x: 150, y: 153},
      {x: 150, y: 165},
      {x: 165, y: 165},
      {x: 165, y: 190},
      {x: 180, y: 190},
      {x: 180, y: 165},
      {x: 195, y: 165},
      {x: 195, y: 149},
    ];
  
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
  
    for (i = 1; i < points.length - 2; i ++) {
      const xc = (points[i].x + points[i + 1].x) / 2;
      const yc = (points[i].y + points[i + 1].y) / 2;
  
      ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
    }
  
    ctx.quadraticCurveTo(
      points[i].x, points[i].y, 
      points[i+1].x,points[i+1].y
    );
  
    ctx.bezierCurveTo(190, 148, 175, 148, 150, 153);
  
    ctx.stroke();
    ctx.fillStyle = '#dfefef';
    ctx.fill(); 
    ctx.closePath();
  
    ctx.beginPath();
    ctx.arc(200, 190, 5, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = '#dfefef';
    ctx.fill(); 
    ctx.closePath();
  }
  
  function drawShades() {
    const canvas = document.getElementById('canvas-shades');
    const ctx = canvas.getContext('2d');
  
    const points = [
      {x: 327, y: 160},
      {x: 327, y: 280},
      {x: 300, y: 305},
      {x: 270, y: 315},
      {x: 215, y: 310},
      {x: 190, y: 280},
      {x: 190, y: 180},
      {x: 180, y: 180},
      {x: 160, y: 180},
      {x: 150, y: 180},
      {x: 150, y: 280},
      {x: 125, y: 305},
      {x: 70, y: 315},
      {x: 40, y: 310},
      {x: 0, y: 280},
      {x: 3, y: 160},
    ];
  
    ctx.lineWidth = 2;
  
    ctx.beginPath();
    ctx.moveTo(3, 160)
    ctx.lineTo(327, 160);
    ctx.moveTo(points[0].x, points[0].y);
  
    for (i = 1; i < points.length - 2; i ++) {
      const xc = (points[i].x + points[i + 1].x) / 2;
      const yc = (points[i].y + points[i + 1].y) / 2;
  
      ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
    }
  
    ctx.quadraticCurveTo(
      points[i].x, points[i].y, 
      points[i+1].x,points[i+1].y
    );
  
    ctx.fillStyle = 'black';
  
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  
    ctx.beginPath();
    ctx.fillStyle = '#ffff00';
    ctx.strokeStyle = '#ffff00';
    ctx.shadowColor = '#ffff00';
    ctx.shadowBlur = 15;
  
    ctx.moveTo(90, 167);
    ctx.lineTo(130, 167);
    ctx.lineTo(130, 190);
    ctx.lineTo(22, 285);
    ctx.bezierCurveTo(14, 270, 12, 250, 11, 230);
    ctx.lineTo(90, 167);
  
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  
    ctx.beginPath();
    ctx.fillStyle = '#ffff00';
    ctx.strokeStyle = '#ffff00';
  
    ctx.moveTo(30, 295);
    ctx.lineTo(70, 260);
    ctx.lineTo(55, 305);
    ctx.lineTo(30, 295);
  
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  
    ctx.beginPath();
    ctx.fillStyle = '#ffff00';
    ctx.strokeStyle = '#ffff00';
  
    ctx.moveTo(270, 167);
    ctx.lineTo(310, 167);
    ctx.lineTo(310, 190);
    ctx.lineTo(206, 285);
    ctx.bezierCurveTo(198, 270, 198, 250, 198, 230);
  
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  
    ctx.beginPath();
    ctx.fillStyle = '#ffff00';
    ctx.strokeStyle = '#ffff00';
  
    ctx.moveTo(215, 295);
    ctx.lineTo(255, 260);
    ctx.lineTo(240, 305);
    ctx.lineTo(215, 295);
  
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  }
  
  function drawHair() {
    const canvas = document.getElementById('canvas-hair');
    const ctx = canvas.getContext('2d');
  
    // Drawing hair. Yes... this took forever
    ctx.beginPath();
    ctx.moveTo(180, 500);
    ctx.bezierCurveTo(170, 500, 155, 520, 150, 530);
    ctx.bezierCurveTo(155, 510, 130, 500, 140, 470);
    ctx.bezierCurveTo(110, 480, 100, 460, 90, 460);
    ctx.bezierCurveTo(100, 450, 120, 440, 130, 420);
    ctx.bezierCurveTo(110, 420, 90, 380, 30, 380);
    ctx.bezierCurveTo(60, 370, 60, 340, 100, 335);
    ctx.bezierCurveTo(90, 330, 50, 300, 20, 325);
    ctx.bezierCurveTo(40, 290, 60, 250, 110, 240);
    ctx.bezierCurveTo(90, 240, 60, 230, 20, 200);
    ctx.bezierCurveTo(50, 215, 90, 160, 130, 160);
    ctx.bezierCurveTo(110, 150, 90, 130, 60, 90);
    ctx.bezierCurveTo(140, 70, 130, 120, 210, 90);
    ctx.bezierCurveTo(200, 50, 220, 40, 230, 10);
    ctx.bezierCurveTo(230, 40, 250, 80, 270, 70);
    ctx.bezierCurveTo(270, 30, 320, 40, 350, 2);
    ctx.bezierCurveTo(350, 60, 370, 90, 400, 100);
    ctx.bezierCurveTo(420, 80, 440, 60, 530, 55);
    ctx.bezierCurveTo(480, 110, 510, 110, 470, 150);
    ctx.bezierCurveTo(500, 130, 520, 160, 590, 90);
    ctx.bezierCurveTo(590, 160, 530, 200, 490, 250);
    ctx.bezierCurveTo(530, 210, 560, 240, 585, 210);
    ctx.bezierCurveTo(560, 260, 520, 300, 490, 320);
    ctx.bezierCurveTo(530, 320, 550, 360, 575, 330);
    ctx.bezierCurveTo(560, 370, 520, 410, 480, 420);
    ctx.bezierCurveTo(510, 450, 540, 440, 550, 460);
    ctx.bezierCurveTo(510, 480, 460, 490, 460, 485);
    ctx.bezierCurveTo(470, 495, 485, 520, 500, 520);
    ctx.bezierCurveTo(480, 520, 440, 525, 410, 490);
    ctx.lineTo(180, 500)
    
    const grd = ctx.createLinearGradient(0, 0, 0, 300);
    grd.addColorStop(0, "#d3e1ee");
    grd.addColorStop(1, "#8ca0b3");
  
    ctx.fillStyle = grd;
    ctx.lineWidth = 3;
  
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  }
  
  drawFace();
  drawHead();
  drawShades();
  drawHair();