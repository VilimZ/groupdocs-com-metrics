---
title: .NET API, skirta „Microsoft Project“ failams valdyti ir apdoroti
description: Patikima .NET projektų valdymo API, skirta Microsoft Project failams apdoroti. Generuokite, konvertuokite ir tvarkykite MPP, MPT ir MPX projektų failus .NET programose.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="C# .NET API, skirta „Microsoft Project“ failams valdyti ir apdoroti"
  inheadertext="Sklandžiai kurkite, redaguokite, eksportuokite ir apdorokite „Microsoft Project“ failų formatus, tokius kaip MPP, MPT, MPX ir XML, naudodami C# .NET projektų valdymo programas. Konvertuokite MS Project dokumentus į PDF, Excel, Primavera, HTML, TXT, PNG, JPEG ir SVG formatus naudodami .NET Project failų apdorojimo API."
  ctabtn="Atsisiųskite nemokamą bandomąją versiją"
  ctabtn="Atsisiųskite nemokamą bandomąją versiją"
  ctalink="https://releases.aspose.com/tasks/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Peržiūrėti visas API"
  bchomelink="/"
  bchome="Namai"
  bcpage="Užduotys"
  bclink2="Produktai"
  bclink3=".NET"
  bclink2url="/products/"
  bclink3url="/products/net/"
  >}}
{{< homepage/conholdate/com/inner-wrapper/sub-nav 
subnav1="#overview"
subnavtxt1="Apžvalga" 
subnav2="#features"
subnavtxt2="funkcijos" 
subnav3="#support"
subnavtxt3="Palaikymas" 
subnav4="#examples"
subnavtxt4="Pavyzdžiai" 
subnav5="https://purchase.aspose.com/pricing/tasks/net"
subnavtxt5="Kainodara" 
subbtn1="https://docs.aspose.com/tasks/net/"
subbtntxt1="Mokytis"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Pirkti"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Pirmaujanti projektų valdymo API, skirta MS Project failams apdoroti .NET"
   subtext="Aspose.Tasks for .NET yra patikima API, skirta apdoroti skirtingus Microsoft Project failų formatus. Tai leidžia .NET kūrėjams programiškai skaityti, keisti, konvertuoti ir eksportuoti projekto failus į kelis formatus. Naudodami šią .NET API, skirtą Microsoft Project failams, galite sumaniai valdyti projekto valdymo duomenis ir tvarkyti įvairius išteklius. Aspose.Tasks for .NET yra pilnas projekto išteklių valdymo sprendimas, leidžiantis dirbti su slaptažodžiu apsaugotais projekto dokumentais, rūšiuoti ir atrakinti Microsoft Project failus, planuoti ir sekti išteklius, manipuliuoti užduotimis ir valdyti išlaidas bei gaires."
   subtext2="Taip pat galite pridėti pasirinktines Ganto diagramas eksportuodami ir spausdindami projekto failus naudodami C# .NET projektų valdymo API, kuri palaiko tikslų projekto failų konvertavimą į PDF, Primavera, Excel skaičiuokles, tekstą, HTML, JPEG, BMP ir PNG. rastriniai vaizdai ir SVG vektoriai."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Darbo pradžia</h2>
   <p>Norėdami nustatyti Aspose.Tasks .NET bibliotekai, žr. šią informaciją. Prieš diegdami .NET projektų valdymo API, patikrinkite <a href="https://docs.aspose.com/tasks/net/system-requirements/">sistemos reikalavimų</a> puslapį, kuriame pateikiamas būtinų sąlygų sąrašas.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Tasks .NET diegimui"
>}}
<p>Norėdami tiesiogiai atsisiųsti DLL arba MSI diegimo programą, apsilankykite <a href="https://releases.aspose.com/tasks/net/">atsiuntimų skiltyje</a>. Taip pat galite įdiegti .NET API, kad apdorotumėte „Microsoft Project“ failus naudodami <a href="https://www.nuget.org/packages/Aspose.Tasks/">„NuGet“ paketą</a>. Paketų tvarkyklės konsolės komanda API sąrankai bendrinama toliau:</p>
{{< products/product-feature-blocks-snip
 snipclass="greysnipp"
 copyID="snipp1"
>}}
PM > Install-Package Aspose.Tasks
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
 featureheading="Kaip lengvai konvertuoti MPP projekto failus į PDF ir rastrinio vaizdo failų formatus"
 featuretext="Aspose.Tasks .NET bibliotekai leidžia greitai ir lengvai apdoroti projektų valdymo failus ir konvertuoti projekto failus į gerai žinomus dokumentų ir vaizdo failų formatus, tokius kaip PDF, Primavera, Excel, Text, HTML, PNG, SVG, JPEG, ir BMP."
>}}
{{< products/product-feature-blocks-col
featurecolheading="Konvertuoti MPP į PDF .NET"
>}}
<p>Puikiai konvertuokite projekto failus į PDF formatą savo .NET failų konvertavimo programose. „Aspose.Tasks“, skirta .NET bibliotekai, leidžia konvertuoti MPP failus į PDF naudojant tik kelias .NET kodavimo eilutes. Peržiūrėkite toliau pateiktas instrukcijas ir pavyzdinį kodą, norėdami konvertuoti MPP dokumentus į PDF failo formatą su .NET API ir apdoroti Microsoft Project failus:</p>
<ul>
   <li>Įkelkite MPP failą, kurį norite konvertuoti, naudodami <a href="https://reference.aspose.com/tasks/net/aspose.tasks/project">projekto klasę.</a></li>
   <li>Pridėti MPP failo pakeitimus (neprivaloma).</li>
   <li>Konvertuokite MPP failą į PDF formatą ir eksportuokite jį naudodami <a href="https://reference.aspose.com/tasks/net/aspose.tasks/project/methods/save/index">Išsaugoti</a> metodą .</li>
</ul>
{{< products/product-feature-blocks-snip
 snipclass="greysnipp"
 copyID="snipp2"
>}}
// Load the input Project file (MPP)
Project project = new Project("project.mpp");
// Export the output PDF file
project.Save("ExportAsPDF.pdf", SaveFileFormat.PDF);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col
featurecolheading="Konvertuokite projekto failus į vaizdus"
>}}
<p>Konvertuoti projekto duomenis į PNG arba JPEG vaizdus lengva naudojant Aspose.Tasks, skirtą .NET API. Tai reikalauja minimalaus kodavimo ir leidžia eksportuoti duomenis į vaizdo formatus, kad būtų patogu saugoti ir pasiekti keliuose įrenginiuose. Ši informacija ir kodo fragmentas padės konvertuoti „Microsoft Project“ duomenis į JPEG vaizdus naudojant .NET projektų valdymo API:</p>
<ul>
   <li>Įkelkite projekto MPP failą naudodami <a href="https://reference.aspose.com/tasks/net/aspose.tasks/project">Project</a> klasę.</li>
   <li>Sukurkite <a href="https://reference.aspose.com/tasks/net/aspose.tasks.saving/imagesaveoptions">ImageSaveOptions</a> klasės egzempliorių naudodami <a href="https://reference.aspose.com/tasks/net/aspose.tasks.saving/savefileformat">SaveFileFormat.JPEG</a> sąrašas.</li>
   <li>Nurodykite JPEG vaizdo kokybę naudodami <a href="https://reference.aspose.com/tasks/net/aspose.tasks.saving/imagesaveoptions/properties/jpegquality">JpegQuality</a> ypatybę. Leidžiamas verčių diapazonas yra nuo 0 iki 100.</li>
   <li>Konvertuokite ir išsaugokite JPEG vaizdą naudodami <a href="https://reference.aspose.com/tasks/net/aspose.tasks.project/save/methods/6">Išsaugoti</a> metodą.</li>
</ul>
{{< products/product-feature-blocks-snip
 snipclass="greysnipp"
 copyID="snipp3"
>}}
// Load the MPP file
Project project = new Project("SourceDirectory\\Tests\\test_project.mpp");
// Create an instance of the ImageSaveOptions class
ImageSaveOptions options = new ImageSaveOptions(SaveFileFormat.JPEG) { JpegQuality = 50 };
// Export the JPEG image
project.Save("OutputDirectory\\project_image.jpeg", (SaveOptions)options);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">Apsilankykite <a href="https://github.com/aspose-tasks/Aspose.Tasks-for-.NET/tree/master/Examples">GitHub pavyzdžių</a> puslapyje Aspose.Tasks for .NET API, kad peržiūrėtumėte daugiau kodo pavyzdžių ir darbo pavyzdžių. Naudodami <a href="https://products.aspose.app/tasks/family">nemokamas internetines</a> projektų valdymo duomenų apdorojimo programas galite peržiūrėti, konvertuoti ir valdyti „Microsoft Project“ failus naudodami stalinį kompiuterį arba mobiliuosius įrenginius. .</p>
{{< products/product-feature-blocks
 featureheading="Sujunkite Microsoft Project failus C# .NET failų sujungimo programose"
 featuretext="Aspose.Tasks .NET leidžia lengvai sujungti skirtingus failus. Programinį MPP, MPX, MPT ir JIRA failų derinimą su PDF, Primavera ir kitais failų formatais palaiko .NET projektų valdymo API. Be to, jums nereikia įdiegti Microsoft Project arba Microsoft Office, kad galėtumėte manipuliuoti projekto failais C# .NET dokumentų apdorojimo programose."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="DUK"
>}}
   {{< products/faq-block
 faqquery="1. Kaip galiu konvertuoti projekto failus į .NET?"
 faqanswer="Konvertuoti „Microsoft Project“ failus .NET yra greita ir paprasta naudojant „Aspose.Tasks“, skirtą .NET API. Norint konvertuoti MPP, MPX, MPT, XML ir kitus projekto failus į skirtingus dokumentų ir vaizdo failų formatus, reikia tik kelių .NET kodavimo eilučių."
>}}
   {{< products/faq-block 
 faqquery="2. Kiek laiko užtrunka projektų valdymo failų konvertavimas arba sujungimas?"
 faqanswer=".NET API, skirta „Microsoft Project“ failams valdyti ir apdoroti, veikia greitai ir greitai užbaigia failų sujungimo arba konvertavimo užklausas."
>}}
   {{< products/faq-block
 faqquery="3. Ar saugu apdoroti projekto valdymo duomenis naudojant .NET API?"
 faqanswer="Galite būti tikri dėl savo projekto duomenų failų saugumo juos apdorodami naudodami Aspose.Tasks, skirtą .NET API. Užtikriname Jūsų duomenų privatumą ir imamės visų reikiamų priemonių, kad suteiktume Jums saugią vartotojo patirtį."
>}}
   {{< products/faq-block
 faqquery="4. Ar galiu apdoroti projekto failus „Mac OS“, „Windows“ ar „Linux“?"
 faqanswer="Taip, projekto failų apdorojimo API, skirta .NET, veikia įvairiose OS, sistemose ir operacinėse aplinkose. Jį galite naudoti pasirinktoje platformoje ir, kad ji veiktų, nereikia įdiegti jokios papildomos programinės įrangos."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Projektų valdymo failų manipuliavimo įrankiai"
>}}
   {{< products/popularapp-anchor
 anchorlink="MPP į PDF"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPP į XLSX"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-xlsx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPP į HTML"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPP į JPEG"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPP į PNG"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-png/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPP į BMP"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-bmp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPT į XLSX"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpt-to-xlsx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPT į JPEG"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpt-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JIRA į MPP"
 moreproducts="https://products.aspose.com/tasks/net/merger/jira-to-mpp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="XML į MPP"
 moreproducts="https://products.aspose.com/tasks/net/merger/xml-to-mpp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPX į PDF"
 moreproducts="https://products.aspose.com/tasks/net/merger/mpx-to-pdf/"
>}}  
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Ieškote pagalbos?"
bartext="Peržiūrėkite mūsų palaikymo kanalus, kad gautumėte pagalbos dėl klausimų, susijusių su „Aspose“ produkto API funkcijomis ir darbu."
resourcetxt1="Docs"
resourcelinks1="https://docs.aspose.com/tasks/net/"
resourcetxt2="API nuoroda"
resourcelinks2="https://reference.aspose.com/tasks/"
resourcetxt3="Žinių bazė"
resourcelinks3="https://kb.aspose.com/tasks/net/"
resourcetxt4="Nemokamas palaikymas"
resourcelinks4="https://forum.aspose.com/c/tasks/15"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-wrapper
resource-heading="Ištekliai"
sectionid="support"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://blog.aspose.com/"
resourcetitle="Dienoraščiai"
resourcealt="Dienoraščiai"
resourceimg="/images/blog1.svg"
resourcelistlink="https://blog.aspose.com/tasks/convert-mpp-to-mpx-in-csharp/"
resourcelistlink2="https://blog.aspose.com/tasks/convert-ms-project-to-pdf-in-csharp/"
resourcelistlink3="https://blog.aspose.com/tasks/convert-mpp-to-tiff-in-csharp/"
resourcelisttext="Konvertuoti MPP į MPX C#"
resourcelisttext2="Konvertuokite „Microsoft Project“ į PDF naudodami C#.NET"
resourcelisttext3="Konvertuokite MPP į TIFF C#.NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://docs.aspose.com/"
resourcetitle="Dokumentacija"
resourcealt="Dokumentacija"
resourceimg="/img/docs1.svg"
resourcelistlink="https://docs.aspose.com/tasks/net/product-overview/#rich-features"
resourcelistlink2="https://www.nuget.org/packages/Aspose.Tasks/"
resourcelistlink3="https://helpdesk.aspose.com/"
resourcelisttext="Aspose.Tasks .NET funkcijoms"
resourcelisttext2="Įdiekite Aspose.Tasks, skirtą .NET NuGet paketui"
resourcelisttext3="Aspose.Tasks, skirtas .NET mokamos pagalbos pagalbos tarnybai"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://kb.aspose.com/"
resourcetitle="Žinių bazė"
resourcealt="Kodo pavyzdžiai"
resourceimg="/images/code1.svg"
resourcelistlink="https://kb.aspose.com/tasks/net/how-to-convert-mpp-to-excel-using-csharp/"
resourcelistlink2="https://kb.aspose.com/tasks/net/how-to-extract-microsoft-project-file-metadata-in-c-sharp/"
resourcelistlink3="https://kb.aspose.com/tasks/net/how-to-add-weekdays-in-mpp-using-csharp/"
resourcelisttext="Kaip konvertuoti MPP į Excel naudojant C#"
resourcelisttext2="Kaip išgauti MS projekto failo metaduomenis C#"
resourcelisttext3="Kaip pridėti darbo dienas MPP naudojant C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Pasiruošę pradėti?"
rtstext="Atsisiųskite nemokamą bandomąją versiją"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Peržiūrėti visas API"
>}}
