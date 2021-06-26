

// /*
//       

//         var dizi = ["Alparslan","Cihan","Oğuz","Gülcan","Gökçen"];
//         // saf js ile bu dizinin elemanlarını bir liste oluşturup içersine ekle
//         // ve sonra bu listeyi yukarıdaki listenin önüne ekle
 
//         let ul=document.createElement("ul");
//         for (const ad of dizi){
//             let li=document.createElement("li");
//             li.innerText=ad;
//             ul.appendChild(li);
//         }
//         let oncekiUl=document.getElementById("liste");
//         oncekiUl.parentNode.insertBefore(ul,oncekiUl);

//         // // https://attacomsian.com/blog/javascript-insert-element-before


//         // jquery ile bu dizinin elemanlarını bir liste oluşturup içersine ekle
//         // ve sonra bu listeyi yukarıdaki listenin önüne ekle
//         var yeniUl=$("<ul/>");
//         $.each(dizi,function(index,ad){
//             $("<li/>").text(ad).appendTo(yeniUl);            
//         });
//         yeniUl.insertBefore("#liste");
        
//         // yukarıda önce ul elementi (jquery nesnesi olarak) oluşturduk
//         // ad'leri jquery foreach'i ile gezdik
//         // her ad için o adı içeren bir li oluşturduk ve onu ul'a ekledik
//         // yeni listeyi eski listenin ÖNCESİNE ekledik

// ---------------------------------------------------------------
// var liler=$("li");
//         // li'lerin ilki
//         yazdir("İlk kişi: " + liler.first().text());
//         // li'lerin sonuncusu
//         yazdir("Son kişi: " +liler.last().text());
//         // li'lerin beşincisi
//         yazdir("5. kişi: " +liler.eq(4).text());

//         // yedinci'den sonraki isimleri al
//         yazdir("7.sonrası: " + liler.eq(6).nextAll().text()); 
        
//         var adlar=liler.eq(6).nextAll().map(function(){
//             return this.innerText;
//         }).get().join(', ');
//         yazdir("7. sonrası: "+ adlar);
        
//         // İlk bulduğu zeki'den sonrakini yazdir
//         var sonraki=liler.filter(function(index,li){
//             return li.innerText=="Zeki";
//         }).first().next().text();//next kullanımı nextAll gibi değil dikkat et.
//         yazdir("Zeki sonrası: " + sonraki);

//         // liste öğelerinin sonuncusunun kardeşlerini italic yap
//         liler.last().siblings().css("font-style", "italic");

//         // liste öğelerinin beşincisinin sonrasını bold yap
//         liler.eq(4).nextAll().css("font-weight", "bold");

//         // liste öğelerinden haric sınıfına sahip OLMAYANLARI getir
//         var dahiller=liler.not(".haric").get().map(x=> x.innerText).join(', ');
//         yazdir("haric sınıfsızlar: " + dahiller);
        

//         function yazdir(metin) {
//             var icerik = $("#ozet").val();
//             $("#ozet").val(icerik  + metin + "\n");

//         }

// -------------------------------------------------------------------------------------------
// // bu jquery ile ilgili değildir
//         // normal javascript (ecmascript 6) bilgisidir

//         let dizi = ["ankara", "istanbul", "izmir"];
//         // aralarına tire koyarak yazdır
//         document.write(dizi.join('-'));
//         document.write("<hr>")

//         // dizinin elemanlarının uzunluklarını aralarına tire koyarak yazdır
//         let sayilar = dizi.map(x => x.length);
//         document.write(sayilar.join('-'));


// -----------------------------------------------------------------------------------------------
//  // bir butona tıklandığında onu içeren ilk form'un başına
//         // butonun içeriğinde metni ekle
//         $("button").click(function () {
//             var metin = $(this).text();
//             var enYakinindakiForm = $(this).closest("form");
//             enYakinindakiForm.prepend(metin);
//         });


// ---------------------------------------------------------------------------------------------------

// $("p").html("Merhaba");

//         function $(selector) {
//             var kume=document.querySelectorAll(selector);
//             return{
//                 dizi:kume,
//                 html:function(data) {
//                     for (var i=0; i<this.dizi.length;i++){
//                         this.dizi[i].innerHTML=data;
//                     }
//                 }
//             };
//         }

// -----------------------------------------------------
//  $("#gorev1 >button").click(function(){
//             this.remove();// dom elementine dom fonksiyonu uyguladık
//         })

//         $("#tesekkur > span").click(function(){
//             $(this).css("color","red");
//         });


//         $("#frmSehir").submit(function(event){
//             event.preventDefault();
//             var sehirAd=$("#ad").val();
//             // SORU: alttaki satırda text metodu yerine html kullanırsak ne olur? Çalışır
//             var li=$("<li/>").html(sehirAd).dblclick(function(){
//                 this.remove();
//             });
//             $("ul#sehirler").append(li);
//             this.reset();
//         });


// ---------------------------------------------------------------------------------------------
// function sariYap() {
//             document.querySelector("body").style.background="yellow";
//         }

// -----------------------------------------------------------------------------------------------
//  

// -------------------------------------------------------------------------------------------------
//   // yukarıdaki ilk paragrafın dom nesnesine erişiyoruz
//          var parag=document.querySelector("p");
//         //  parag.style.color="red";//renk stilini değiştir.

//          //mevcut dom nesnesini queryleştirme
//          $(parag).css("color","red");//bu kod çalışmaz.

//          //sayfadaki tüm paragrafları seçer ve kırmızı yapar.
//          var p1=$("p");//query object
//          p1.css("color","yellow");


//          //jquery nesnesinden dom elementine erişme
//          var p2=$("p")[0];//saf dom elementi
//          p2.style.backgroundColor="red";//saf js ile değiştirdik.


// ---------------------------------------------------------------------------------------------------
// //Tüm paragrafları getir ve arka planını sarı yap
//         // var dizi=document.querySelectorAll("p");

//         // for (var i=0;i<dizi.length;i++)
//         //     dizi[i].style.backgroundColor="yellow";


//             //jquery karşılığı
//             $("p").css("background-color","yellow")

//             var parag=document.getElementById("onemli");
//             // parag.style.fontWeight="bold";
            
//             $("#onemli").css("font-weight","bold");

// ---------------------------------------------------------------------------------------------
// <body>
//      <!-- https://oscarotero.com/jquery/ -->
//     <!-- ul>li*10>lorem4 -->
//     <ul>
//         <li title="iki açıklama">Lorem ipsum dolor sit.</li>
//         <li>Inventore dicta similique deleniti.</li>
//         <li class="kirmizi">Esse sint optio alias.</li>
//         <li>Lorem ipsum dolor sit.</li>
//         <li id="oge5">Error explicabo cumque molestiae?</li>
//         <li>In velit nam numquam!</li>
//         <li class="kirmizi">Iste ut ipsum rerum?</li>
//         <li>Delectus illum eum quaerat!</li>
//         <li title="bir açıklama">Quo quasi libero aperiam?</li>
//         <li>Lorem ipsum dolor sit.</li>
//     </ul>
  
//     <p title="bir açıklama">
//         Lorem ipsum <span class="kirmizi">dolor</span> sit amet.
//     </p>

//     <p>
//         <span style="display:none">Bir numaralı</span> arama motoru:
//         <a href="https://google.com">Google</a>
//     </p>

//     <div style="display:none">
//         Bu element  gizlidir.
//     </div>

//     <br /><br /><br /><br /><br /><br /><br /><br /><br />

//     <form>
//         <label for="ad">Ad:</label>
//         <input type="text" name="ad" id="ad"><br />
//         <label for="soyad">Soyad</label>
//         <input type="text" name="soyad" id="soyad"><br />
//         <label for="sehir">Şehir</label>
//         <select name="sehir" id="sehir">
//             <option value="6">Ankara</option>
//             <option value="34">İstanbul</option>
//             <option value="35">İzmir</option>
//         </select>
//         <input type="button" value="Gönder">
//     </form>

//     <hr>
//     <button onclick="goster()">Tüm gizlileri göster</button>


//     <script src="jquery-3.6.0.min.js"></script>
//     <script >
//         // her şeyi seç ve 2 css özelliğini değiştir
//         $("*").css({
//             "border":"3px solid black",
//             "margin":"6px"
//         });

//         // element ismiyle seçim: tüm li'leri seç, hepsinin sonuna gülücük koy
//         $("li").append(" :)");
//         $("ul").css("list-style", "none");

//         //class ile seçim:
//         $(".kirmizi").css("color","red");

//         // id ile seçim:
//         $("#oge5").css("text-decoration","underline");

//         // title attribute'unda bir açıklama yazanları seç
//         $('[title="bir açıklama"]').css("background-color","turquoise");

//         // çoklu seçim: oge5 id'li kirmizi class'lıların başına + koy
//         $("#oge5, .kirmizi").prepend("+ ");

//         // css hiyerarşi: paragraf içindeki kirmizi sınıfına sahip olanlar
//         $("p > .kirmizi").css("background-color", "pink");

//          // siblings: #oge5 sonraki kardeşleri
//          $("#oge5 ~ *").css("border-left","10px solid orange");

//          // content filter örnekleri
//          // içinde dolor kelimesi geçen li'lerin sonuna D koy
//          $("li:contains('dolor')").append("D");

//         // içinde link içeren paragrafları seç
//         $("p:has(a)").append(" [link]");

//         function goster(){
//             // visibility filter
//             $(":hidden").show();
//         }

//         // metin kutularının sağına * karakteri koy
//         $("input[type='text']").after(" *");

//         // append bir elementin içinin sonuna ekler
//         // after doğrudan sonrasına ekler

//         // name attribute'u d harfi ile bitenleri arka planını mor yap
//         $("input[name$='d']").css("background-color", "purple");

//         // form elemanlarının seçimi
//         $("input:button").val("Kaydet");//Gönder idi Kaydet oldu.

//         // child filters
//         // ul'un içindeki li'lerin tek sırada olanlarının sonuna TEK
//         // çift sırada olanlarının sonuna ÇİFT yaz
//         $("ul > li:nth-child(odd").append(" [Tek]");
//         $("ul > li:nth-child(even").append(" [Çift]");

//         

            
//        // not: query ile seçim yapıldıktan sonra uygulanan metotlara uygulanan metotlar da aynı seçim üzerinde etkili olur.

//     </script>

// </body>
// </html>

// ------------------------------------------------------------------------------------------------------------
//  $("a").css("text-decoration","none");


//         // attr: bir elementin herhangi bir attribute'unun
//         // değerini almak ve güncellemek için kullanılır.
//         $("a").attr("href","https://google.com");//değer atadık.
//         $("input:checkbox#ist").prop("checked",true);
//         var id=$("a").attr("id");//değerine eriştik
//         $("body").append("a'nın id si: "+id);
//          // id'si link olanın sınıflarına onemli yi ekle
//         $("#link").addClass("onemli");

//         function degistir() {
//             $("button").toggleClass("pembe");
//         }

//         // form elemanlarının değerini değiştirme
//         $("adet").val(33);

//         $("#genislik").on("input",function(){
//             var yeniDeger=$("#genislik").val();
//             $("#cubuk").width(yeniDeger).text(yeniDeger);
//         });

//         var aciklama=$("#parag").data("aciklama");
//         $("#parag").before("<h2>"+aciklama+"</h2>");
        
//         // topun içerisine sayfadaki konumunun pozisyonunu yazdır

//         var konum=$("#ball").offset();
//         console.log(konum);
//         $("#ball").html("top: "+ konum.top +"<br>left: " + konum.left);



// görev 1


        
        // saf js ile bu dizinin elemanlarını bir liste oluşturup içersine ekle
        // ve sonra bu listeyi yukarıdaki listenin önüne ekle
 
        // let ul=document.createElement("ul");
        
        
        $("#gorev1").submit(function(){//function(event)
                //event.preventDefault();
                var dizi = $("article div:lt(3)>h2").val();
                // var h2_baslik=$("#ad").val();
                for (const ad of dizi){
                    let li=document.createElement("li");
                    li.innerText=ad;
                    $("#gorev1>ul").append(li);
                }
        });

// $("#frmSehir").submit(function(event){
//     event.preventDefault();
//     var sehirAd=$("#ad").val();
//     // SORU: alttaki satırda text metodu yerine html kullanırsak ne olur? 
//     var li=$("<li/>").html(sehirAd).dblclick(function(){
//         this.remove();
//     });
//     $("ul#sehirler").append(li);
//     this.reset();
// });


// var liler=$("li");
//         // li'lerin ilki
//         yazdir("İlk kişi: " + liler.first().text());
//         // li'lerin sonuncusu
//         yazdir("Son kişi: " +liler.last().text());
//         // li'lerin beşincisi
//         yazdir("5. kişi: " +liler.eq(4).text());

//         // yedinci'den sonraki isimleri al
//         yazdir("7.sonrası: " + liler.eq(6).nextAll().text()); 
        
//         var adlar=liler.eq(6).nextAll().map(function(){
//             return this.innerText;
//         }).get().join(', ');
//         yazdir("7. sonrası: "+ adlar);
        

// var sonraki=liler.filter(function(index,li){
//     return li.innerText=="Zeki";
// }).first().next().text();//next kullanımı nextAll gibi değil dikkat et.
// yazdir("Zeki sonrası: " + sonraki);

// // liste öğelerinin sonuncusunun kardeşlerini italic yap
// liler.last().siblings().css("font-style", "italic");

// // liste öğelerinin beşincisinin sonrasını bold yap
// liler.eq(4).nextAll().css("font-weight", "bold");

// // liste öğelerinden haric sınıfına sahip OLMAYANLARI getir
// var dahiller=liler.not(".haric").get().map(x=> x.innerText).join(', ');
// yazdir("haric sınıfsızlar: " + dahiller);



// // jquery ile bu dizinin elemanlarını bir liste oluşturup içersine ekle
//         // ve sonra bu listeyi yukarıdaki listenin önüne ekle
//         var yeniUl=$("<ul/>");
//         $.each(dizi,function(index,ad){
//             $("<li/>").text(ad).appendTo(yeniUl);            
//         });
//         yeniUl.insertBefore("#liste");
        
//         // yukarıda önce ul elementi (jquery nesnesi olarak) oluşturduk
//         // ad'leri jquery foreach'i ile gezdik
//         // her ad için o adı içeren bir li oluşturduk ve onu ul'a ekledik
//         // yeni listeyi eski listenin ÖNCESİNE ekledik



//     
//         let oncekiUl=document.getElementById("liste");
//         oncekiUl.parentNode.insertBefore(ul,oncekiUl);


//                 // // $("#liste > li").each(function(index, element) {
//         // //     var metin = $(this).text();
//         // //     $(this).append(": " + metin.length);
//         // // });

//         $("#liste > li").each(function(){
//             var metin=$(this).text();
//             $(this).append(": "+metin.length);
//         });



// görev 2


//  var ogeler=document.querySelectorAll("#liste > li");
//         // for ile
//           for(var i=0; i<ogeler.length;i++){
//             var metin=ogeler[i].textContent;
//             ogeler[i].textContent += ": " + metin.length;
//         }

//         // forEach metodu ile
//         ogeler.forEach(function(eleman,key){
//             var metin=eleman.innerText;
//             eleman.innerText+=": " + metin.length;            
//         });
// görev 3
// h1:nth-of-type(1)
$("#gorev3>button").click(function(){
    var h1_deger=$("h1:nth-of-type(1)").text();
    //$("#gorev3>input[type='text']").val(h1_deger);
    $("#gorev3>input[type='text']").val(h1_deger);
        a=$("#test1").text();
      $("#test3").val(a);
  });




// görev 4

  //$("ol").append("<li>Appended item</li>");

   // her bir liste öğesinin sonuna o öğenin uzunluğunu koy
//         var ogeler=document.querySelectorAll("#liste > li");
//         // for ile
//           for(var i=0; i<ogeler.length;i++){
//             var metin=ogeler[i].textContent;
//             ogeler[i].textContent += ": " + metin.length;
      
//         }

//         // forEach metodu ile
//         ogeler.forEach(function(eleman,key){
//             var metin=eleman.innerText;
//             eleman.innerText+=": " + metin.length;            
//         });

//     */

//         // ipucu:
//        // // $("#liste > li").each(function(index, element) {
//         // //     var metin = $(this).text();
//         // //     $(this).append(": " + metin.length);
//         // // });

//         $("#liste > li").each(function(){
//             var metin=$(this).text();
//             $(this).append(": "+metin.length);
//         });şp


// görev 5

$("#gorev5>button").click(function(){
    $("h2:even").css("color","blue");
    $("h2:odd").css("color","orange");
    $("h1:nth-of-type(1)").css("color","red");
});
        
        
        
// görev 6

// ul'un içindeki 4. li'nin metnini IT and Programming with Gulcan Teacher yap
//         $("ul >li:nth-child(4)")
//             .text("IT and Programming with Gulcan Teacher")
//             .css("text-align", "center")
//             .css("border","3px dashed gray")
//             .css("padding","1rem");

$("#gorev6>button").click(function(){
    //$("p:first-child")//All <p> elements that are the first child of their parent.
    //div:first-child
    //$("[id*=s]") //All elements with an id attribute value containing the string "s"
    //#oge5 ~ * 
    //$("p:first-of-type")//All <p> elements that are the first <p> element of their parent.
    $("article>div:first-of-type").fadeOut();
});
// görev 7
// content filter örnekleri
//          // içinde dolor kelimesi geçen li'lerin sonuna D koy
//          $("li:contains('dolor')").append("D");

//         // içinde link içeren paragrafları seç
//         $("p:has(a)").append(" [link]");

baslik=$("h:contains('can')")
var yeniUl=$("#gorev7>ul")
$.each(baslik,function(index,ad){
                $("<li/>").text(ad).appendTo(yeniUl);            
             });
// forEach metodu ile
//         ogeler.forEach(function(eleman,key){
//             var metin=eleman.innerText;
//             eleman.innerText+=": " + metin.length;            
//         });

baslik.forEach(function(){
    //             var metin=eleman.innerText;
    //             eleman.innerText+=": " + metin.length;
    $("<li/>").text(ad).appendTo(yeniUl);            
    //         });

    $("#liste > li").each(function(){
        //             var metin=$(this).text();
        //             $(this).append(": "+metin.length);
        //         });
// görev 8


// ve sonra bu listeyi yukarıdaki listenin önüne ekle
//         var yeniUl=$("<ul/>");
//         $.each(dizi,function(index,ad){
//             $("<li/>").text(ad).appendTo(yeniUl);            
//         });
//         yeniUl.insertBefore("#liste");
        
//         // yukarıda önce ul elementi (jquery nesnesi olarak) oluşturduk
//         // ad'leri jquery foreach'i ile gezdik
//         // her ad için o adı içeren bir li oluşturduk ve onu ul'a ekledik
//         // yeni listeyi eski listenin ÖNCESİNE ekledik



//     
//         let oncekiUl=document.getElementById("liste");
//         oncekiUl.parentNode.insertBefore(ul,oncekiUl);


//                 // // $("#liste > li").each(function(index, element) {
//         // //     var metin = $(this).text();
//         // //     $(this).append(": " + metin.length);
//         // // });

//         $("#liste > li").each(function(){
//             var metin=$(this).text();
//             $(this).append(": "+metin.length);
//         });
$.ajax({
                url:"lorem.html",
                type:"get",
                success:function(cevap){
                    $("#bilgi").val(cevap);
                }
            });


// görev 9

$("button").click(function(){
    $("h1, h2").addClass("mouseOver");
  });
ß
// $("h1,h2").hover(function(){
    a=$(".mouseOver")
    $("#gorev3>input[type='text']").val(a);
//     $("#gorev3>input[type='text']").text(mouseOver);
//   });

// ul'un içindeki 4. li'nin metnini IT and Programming with Gulcan Teacher yap
//         $("ul >li:nth-child(4)")
//             .text("IT and Programming with Gulcan Teacher")
//             .css("text-align", "center")
//             .css("border","3px dashed gray")
//             .css("padding","1rem");
// görev 10
