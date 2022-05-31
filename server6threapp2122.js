const data = 
[
    {
     NAME: "YASH CHANDEWAR",
     name: "1741106255",
     ignou: "179056755",
     MOB: "9763527406",
     EMAIL: "yashchanewar.04@gmail.com",
     BHM351T: "69",
     BHM351P: "72",
     BHM352T: "82",
     BHM352P: "68",
     BHM353T: "71",
     BHM353P: "61",
     BHM354T: "66",
     BHM354P: "63",
     BHM305T: "67",
     BHM306T: "60",
     BHM309P: "67",
     MAX1100: "746",
     RESULT: "PASS",
     RESUBJECT: "null",
     REin1and2ndyear: "null",
    },
    {
     NAME: "GAYATRI PALANISAMY",
     name: "1641106069",
     ignou: "167895243",
     MOB: "8454980261",
     EMAIL: "0",
     BHM351T: "57",
     BHM351P: "61",
     BHM352T: "63",
     BHM352P: "59",
     BHM353T: "37",
     BHM353P: "67",
     BHM354T: "55",
     BHM354P: "69",
     BHM305T: "54",
     BHM306T: "45",
     BHM309P: "67",
     MAX1100: "634",
     RESULT: "RE-APPEAR",
     RESUBJECT: "307   353T",
     REin1and2ndyear: "null",
    },
    {
     NAME: "ANAND PRAVIN DANGERA",
     name: "1741106057",
     ignou: "179054870",
     MOB: "0",
     EMAIL: "ananddangera@gmail.com",
     BHM351T: "78",
     BHM351P: "50",
     BHM352T: "64",
     BHM352P: "69",
     BHM353T: "75",
     BHM353P: "67",
     BHM354T: "76",
     BHM354P: "67",
     BHM305T: "71",
     BHM306T: "66",
     BHM309P: "68",
     MAX1100: "751",
     RESULT: "PASS",
     RESUBJECT: "null",
     REin1and2ndyear: "RE-APPEAR IN   BHM204P",
    },
    {
     NAME: "DHWANI GIRISH CHAWDA",
     name: "1741106093",
     ignou: "179055209",
     MOB: "0",
     EMAIL: "dhwanichawda2516@gmail.com",
     BHM351T: "43",
     BHM351P: "77",
     BHM352T: "44",
     BHM352P: "63",
     BHM353T: "57",
     BHM353P: "78",
     BHM354T: "44",
     BHM354P: "67",
     BHM305T: "46",
     BHM306T: "52",
     BHM309P: "75",
     MAX1100: "646",
     RESULT: "PASS",
     RESUBJECT: "null",
     REin1and2ndyear: "null",
    },
    {
     NAME: "AKSHIT",
     name: "1841106039",
     ignou: "184670848",
     MOB: "8396022038",
     EMAIL: "KTARAKKI@GMAIL.COM",
     BHM351T: "72",
     BHM351P: "73",
     BHM352T: "67",
     BHM352P: "73",
     BHM353T: "67",
     BHM353P: "75",
     BHM354T: "60",
     BHM354P: "67",
     BHM305T: "72",
     BHM306T: "60",
     BHM309P: "0",
     MAX1100: "686",
     RESULT: "RE-APPEAR",
     RESUBJECT: "309",
     REin1and2ndyear: "RE-APPEAR IN BHM203P",
    },
    {
     NAME: "BASANT KUMAR",
     name: "1841106062",
     ignou: "184671058",
     MOB: "9824585917",
     EMAIL: "ROYALBASANT3038@GMAIL.COM",
     BHM351T: "65",
     BHM351P: "72",
     BHM352T: "60",
     BHM352P: "59",
     BHM353T: "60",
     BHM353P: "67",
     BHM354T: "42",
     BHM354P: "63",
     BHM305T: "47",
     BHM306T: "42",
     BHM309P: "0",
     MAX1100: "577",
     RESULT: "RE-APPEAR",
     RESUBJECT: "309",
     REin1and2ndyear: "RE-APPEAR IN   BHM204P  203P   151T   111T",
    },
   ]
   // const results = document.getElementById('res')
  const names = document.getElementById('nameofstudent')
  const ignou = document.getElementById('ignou')
  const mobile = document.getElementById('MOB')
  const email = document.getElementById('EMAIL')
  const bhm351t = document.getElementById('BHM351T')
  const bhm351p = document.getElementById('BHM351P')
  const bhm352t = document.getElementById('BHM352T')
  const bhm352p = document.getElementById('BHM352P')
  const bhm353t = document.getElementById('BHM353T')
  const bhm353p = document.getElementById('BHM353P')
  const bhm354t = document.getElementById('BHM354T')
  const bhm354p = document.getElementById('BHM354P')
  const bhm305t = document.getElementById('BHM305T')
  const bhm306t = document.getElementById('BHM306T')
  const bhm309p = document.getElementById('BHM309P')
  const total = document.getElementById('MAX1100')
  const result = document.getElementById('RESULT')
  const resubject = document.getElementById('RESUBJECT')
  const rein1and2ndyear = document.getElementById('REin1and2ndyear')
  
  
  
  const smBtn = document.getElementById('smt-btn')
  smBtn.addEventListener("click", function() {
      const name = document.getElementById('name-box').value;
      for(let i = 0; i < data.length; i++){
          if(data[i].name.toLowerCase() == name.toLowerCase()){
              console.log(data[i].marks)
              // results.innerHTML ="<h3>"+"NAME:"+ data[i].NAME +"</h3>"+"<h3>"+"EMAIL ID:"+ data[i].EMAIL +"</h3>"+"<h3>"+"MOBILE NUMBER:"+ data[i].MOB +"</h3>"+"<h3>"+"1ST SEMESTER RESULT"+"</h3>"+"<h3>"+"BHM 111 THEORY:"+ data[i].BHM111TH +"</h3>"+"<h3>"+"BHM 111 FPP PRACTICAL:"
              // + data[i].BHM111FPPR +"</h3>"+"<h3>"+"BHM 112 FBS THOERY:"+ data[i].BHM112FBSTH +"</h3>"+"<h3>"+"BHM 113 FBS PRACTICAL:"
              // + data[i].BHM112FBSPR +"</h3>"+"<h3>"+"BHM 113 FO THEORY:"+ data[i].BHM113FOTH +"</h3>"+"<h3>"+"BHM 113 FO PRACTICAL:"+ data[i].BHM113FOPR +"</h3>"+"<h3>"+"BHM 114 AO THEORY:"+ data[i].BHM114AOTH +"</h3>"+"<h3>"+"BHM 114 AO PRACRICAL:"
              // + data[i].BHM114AOPR +"</h3>"+"<h3>"+"BHM 104 AOC THEORY:"+ data[i].BHMAOCTH +"</h3>"+"<h3>"+"BHM 105 AOC PRACTICAL:"+ data[i].BHM105AOCPR +"</h3>"+"<h3>"+"BHM 106 HE:"+ data[i].BHM106HE +"</h3>"+"<h3>"+"BHM 116 NUT.:"+ data[i].BHM116NUT +"</h3>"+"<h3>"+"TOTAL:"+ data[i].TOTAL +"</h3>"+"<h3>"+"RESULT:"+ data[i].RESULT +"</h3>"
            
            bhm351t.innerHTML = data[i].BHM351T
            bhm351p.innerHTML = data[i].BHM351P
            bhm352t.innerHTML = data[i].BHM352T
            bhm352p.innerHTML = data[i].BHM352P
            bhm353t.innerHTML = data[i].BHM353T
            bhm353p.innerHTML = data[i].BHM353P
            bhm354t.innerHTML = data[i].BHM354T
            bhm354p.innerHTML = data[i].BHM354P
            bhm305t.innerHTML = data[i].BHM305T
            bhm306t.innerHTML = data[i].BHM306T
            bhm309p.innerHTML = data[i].BHM309P
            ignou.innerHTML = data[i].ignou
            total.innerHTML = data[i].MAX1100
            result.innerHTML = data[i].RESULT
            resubject.innerHTML = data[i].RESUBJECT
            mobile.innerHTML = data[i].MOB   
            names.innerHTML   = data[i].NAME
            email.innerHTML = data[i].EMAIL
            rein1and2ndyear.innerHTML = data[i].REin1and2ndyear
            
            
              return;
          }
      }
      results.innerHTML ="<h3>"+"No data"+"</h3>"
  }) 
  function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
  }
  