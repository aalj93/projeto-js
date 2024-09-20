function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if (fano.value.length == 0 || Number(fano.vale) > ano) {window.alert('[erro] essa data não está correspondendo!')
   } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var gênero = ''
       var img = document.createElement('img')
       img.setAttribute('id','foto')
       if (fsex[0].checked){
         gênero = 'Homem'
         if (idade >=0 && idade < 10){
           img.setAttribute ('src', 'criancah.png')
         } else if (idade < 21){
            img.setAttribute('src','adolecenteh.png')
         } else if (idade < 50){
            img.setAttribute('srs','adultoh.png')

         } else {
            img.setAttribute('src', 'idosoh.png')
         }
       } else if (fsex[1].checked){
         gênero = 'Mulher'
         if (idade >=0 && idade < 10){
            img.setAttribute('src','criancam.png')

         } else if (idade < 21){ img.setAttribute('src','adolecentem.png')
         }else if (idade < 50){img.setAttribute('src','adultom.png')

         } else {
          img.setAttribute('src', 'idosom.png')
         }
       }
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
       res.appendChild(img)
   } 
}