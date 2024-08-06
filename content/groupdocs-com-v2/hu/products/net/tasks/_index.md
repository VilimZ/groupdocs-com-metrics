---
title: .NET API a Microsoft Project fájlok kezeléséhez és feldolgozásához
description: Megbízható .NET projektmenedzsment API a Microsoft Project fájlok feldolgozásához. MPP, MPT és MPX projektfájlok létrehozása, konvertálása és manipulálása .NET-alkalmazásokban.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="C# .NET API Microsoft Project fájlok kezelésére és feldolgozására"
  inheadertext="Zökkenőmentesen hozhatja létre, szerkesztheti, exportálhatja és feldolgozhatja Microsoft Project fájlformátumait, például MPP, MPT, MPX és XML-t a C# .NET projektmenedzsment alkalmazásokban. A .NET Project fájlfeldolgozó API segítségével MS Project dokumentumokat konvertálhat PDF, Excel, Primavera, HTML, TXT, PNG, JPEG és SVG formátumokká."
  ctabtn="Ingyenes próbaverzió letöltése"
  ctabtn="Ingyenes próbaverzió letöltése"
  ctalink="https://releases.aspose.com/tasks/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Az összes API megtekintése"
  bchomelink="/"
  bchome="itthon"
  bcpage="Feladatok"
  bclink2="Termékek"
  bclink3=".NET"
  bclink2url="/products/"
  bclink3url="/products/net/"
  >}}
{{< homepage/conholdate/com/inner-wrapper/sub-nav 
subnav1="#overview"
subnavtxt1="Áttekintés" 
subnav2="#features"
subnavtxt2="Jellemzők" 
subnav3="#support"
subnavtxt3="Támogatás" 
subnav4="#examples"
subnavtxt4="Példák" 
subnav5="https://purchase.aspose.com/pricing/tasks/net"
subnavtxt5="Árazás" 
subbtn1="https://docs.aspose.com/tasks/net/"
subbtntxt1="Tanul"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="megvesz"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="A vezető projektmenedzsment API az MS Project fájlok feldolgozásához .NET-ben"
   subtext="Az Aspose.Tasks for .NET egy robusztus API a különböző Microsoft Project fájlformátumok feldolgozásához. Lehetővé teszi a .NET-fejlesztők számára a projektfájlok programozott olvasását, módosítását, konvertálását és exportálását többféle formátumba. A Microsoft Project fájlokhoz készült .NET API használatával okosan kezelheti projektkezelési adatait és kezelheti a különféle erőforrásokat. Az Aspose.Tasks for .NET egy teljes projekt-erőforrás-kezelési megoldás, amely lehetővé teszi a jelszóval védett projektdokumentumokkal való munkát, a Microsoft Project fájlok rendezését és feloldását, az erőforrások tervezését és nyomon követését, a feladatok kezelését, valamint a költségek és a mérföldkövek kezelését."
   subtext2="A projektfájlok exportálása és nyomtatása közben egyéni Gantt-diagramokat is hozzáadhat a C# .NET projektmenedzsment API segítségével, amely támogatja a projektfájlok pontos konvertálását PDF, Primavera, Excel táblázatok, szöveg, HTML, JPEG, BMP és PNG formátumokká. raszteres képek és SVG vektorok."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Elkezdeni</h2>
   <p>Kérjük, olvassa el a következő információkat az Aspose.Tasks .NET könyvtárhoz való beállításához. A .NET projektmenedzsment API telepítése előtt tekintse meg a <a href="https://docs.aspose.com/tasks/net/system-requirements/">Rendszerkövetelmények</a> oldalt az előfeltételek listájáért.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Tasks .NET telepítéshez"
>}}
<p>A DLL-ek vagy az MSI-telepítő közvetlen letöltéséhez keresse fel a <a href="https://releases.aspose.com/tasks/net/">letöltések részt</a>. A .NET API-t a Microsoft Project fájlok feldolgozásához is telepítheti a <a href="https://www.nuget.org/packages/Aspose.Tasks/">NuGet csomag</a> használatával. Az API beállításához szükséges csomagkezelő konzolparancs az alábbiakban található:</p>
{{< products/product-feature-blocks-snip
 snipclass="greysnipp"
 copyID="snipp1"
>}}
PM > Install-Package Aspose.Tasks
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
 featureheading="Hogyan konvertálhat könnyedén MPP projektfájlokat PDF és raszteres képfájl formátumokká"
 featuretext="Az Aspose.Tasks for .NET könyvtár lehetővé teszi a projektmenedzsment fájlok gyors és egyszerű feldolgozását, és lehetővé teszi a projektfájlok konvertálását olyan jól ismert dokumentum- és képformátumokká, mint a PDF, Primavera, Excel, szöveg, HTML, PNG, SVG, JPEG, és a BMP."
>}}
{{< products/product-feature-blocks-col
featurecolheading="MPP konvertálása PDF-be .NET-ben"
>}}
<p>Szakszerűen konvertálja a projektfájlokat PDF formátumba .NET-fájlkonverziós alkalmazásaiban. Az Aspose.Tasks for .NET könyvtár lehetővé teszi az MPP-fájlok PDF-formátumba konvertálását néhány soros .NET-kód használatával. Kérjük, ellenőrizze az alábbi utasításokat és a mintakódot az MPP dokumentumok PDF-formátumba konvertálásához a .NET API-val a Microsoft Project fájlok feldolgozásához:</p>
<ul>
   <li>Töltse be a konvertálandó MPP-fájlt a <a href="https://reference.aspose.com/tasks/net/aspose.tasks/project">Project osztály</a> használatával.</li>
   <li>Módosítások hozzáadása az MPP-fájlhoz (opcionális).</li>
   <li>Konvertálja az MPP-fájlt PDF formátumba, és exportálja a <a href="https://reference.aspose.com/tasks/net/aspose.tasks/project/methods/save/index">Mentés</a> módszerrel .</li>
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
featurecolheading="Konvertálja a projektfájlokat képekké"
>}}
<p>A projektadatok PNG- vagy JPEG-képekké konvertálása egyszerű az Aspose.Tasks for .NET API segítségével. Minimális kódolást igényel, és lehetővé teszi az adatok képformátumokba történő exportálását, így kényelmes tárolást és hozzáférést tesz lehetővé több eszközön. A következő információk és kódrészlet segít a Microsoft Project adatok JPEG-képekké alakításában a .NET projektkezelő API használatával:</p>
<ul>
   <li>Töltse be a projekt MPP-fájlját a <a href="https://reference.aspose.com/tasks/net/aspose.tasks/project">Project</a> osztály használatával.</li>
   <li>Hozzon létre egy példányt az <a href="https://reference.aspose.com/tasks/net/aspose.tasks.saving/imagesaveoptions">ImageSaveOptions</a> osztályból a <a href="https://reference.aspose.com/tasks/net/aspose.tasks.saving/savefileformat">SaveFileFormat.JPEG</a> felsorolás.</li>
   <li>Adja meg a JPEG képminőséget a <a href="https://reference.aspose.com/tasks/net/aspose.tasks.saving/imagesaveoptions/properties/jpegquality">JpegQuality</a> tulajdonsággal. A megengedett értéktartomány 0 és 100 között van.</li>
   <li>Konvertálja és mentse a JPEG-képet a <a href="https://reference.aspose.com/tasks/net/aspose.tasks.project/save/methods/6">Mentés</a> módszerrel.</li>
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
   <p class="col-lg-12">Kérjük, keresse fel az Aspose.Tasks for .NET <a href="https://github.com/aspose-tasks/Aspose.Tasks-for-.NET/tree/master/Examples">GitHub-példák</a> oldalát API további kódminták és működő példák megtekintéséhez. Az <a href="https://products.aspose.app/tasks/family">ingyenes online</a> projektmenedzsment adatfeldolgozó alkalmazásokkal asztali számítógépén vagy mobileszközén tekintheti meg, konvertálhatja és kezelheti a Microsoft Project fájlokat. .</p>
{{< products/product-feature-blocks
 featureheading="Egyesítse a Microsoft Project fájlokat a C# .NET fájlegyesítő alkalmazásokban"
 featuretext="Az Aspose.Tasks for .NET lehetővé teszi a különböző fájlok egyszerű összevonását. A .NET projektmenedzsment API támogatja az MPP, MPX, MPT és JIRA fájlok PDF, Primavera és más fájlformátumokkal való programozott kombinálását. Ezenkívül nem szükséges a Microsoft Project vagy a Microsoft Office telepítése a projektfájlok C# .NET dokumentumfeldolgozó alkalmazásokon belüli manipulálásához."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="GYIK"
>}}
   {{< products/faq-block
 faqquery="1. Hogyan konvertálhatok projektfájlokat .NET-ben?"
 faqanswer="A Microsoft Project fájlok konvertálása .NET-ben gyors és egyszerű az Aspose.Tasks for .NET API használatával. Csak néhány sornyi .NET kód szükséges az MPP, MPX, MPT, XML és más projektfájlok különböző dokumentum- és képfájlformátumokká konvertálásához."
>}}
   {{< products/faq-block 
 faqquery="2. Mennyi ideig tart a projektmenedzsment fájlok konvertálása vagy egyesítése?"
 faqanswer="A Microsoft Project fájlok kezelésére és feldolgozására szolgáló .NET API gyorsan működik, és pillanatok alatt befejezi az összevonási vagy konvertálási kérelmeket."
>}}
   {{< products/faq-block
 faqquery="3. Biztonságos a projektmenedzsment adatok feldolgozása a .NET API használatával?"
 faqanswer="Biztos lehet a projekt adatfájlok biztonságában az Aspose.Tasks for .NET API használatával történő feldolgozás során. Biztosítjuk adatainak védelmét, és minden szükséges intézkedést megteszünk a biztonságos felhasználói élmény biztosítása érdekében."
>}}
   {{< products/faq-block
 faqquery="4. Feldolgozhatom a projektfájlokat Mac OS, Windows vagy Linux rendszeren?"
 faqanswer="Igen, a .NET projektfájl-feldolgozó API-ja különböző operációs rendszereken, keretrendszereken és operációs környezeteken működik. Használhatja a választott platformon, és működéséhez nincs szükség további szoftver telepítésére."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Projektmenedzsment fájlkezelési eszközök"
>}}
   {{< products/popularapp-anchor
 anchorlink="MPP-ből PDF-be"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPP-ből XLSX-be"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-xlsx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPP-ből HTML-be"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPP-ből JPEG-be"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPP-ből PNG-be"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-png/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPP-ből BMP-be"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-bmp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPT XLSX-re"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpt-to-xlsx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPT-ből JPEG-be"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpt-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JIRA az MPP-nek"
 moreproducts="https://products.aspose.com/tasks/net/merger/jira-to-mpp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="XML-ből MPP-be"
 moreproducts="https://products.aspose.com/tasks/net/merger/xml-to-mpp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPX-ből PDF-be"
 moreproducts="https://products.aspose.com/tasks/net/merger/mpx-to-pdf/"
>}}  
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Segítséget keres?"
bartext="Az Aspose termék API funkcióival és működésével kapcsolatos kérdéseivel kapcsolatban keresse fel támogatási csatornáinkat."
resourcetxt1="Docs"
resourcelinks1="https://docs.aspose.com/tasks/net/"
resourcetxt2="API-referencia"
resourcelinks2="https://reference.aspose.com/tasks/"
resourcetxt3="Tudásbázis"
resourcelinks3="https://kb.aspose.com/tasks/net/"
resourcetxt4="Ingyenes támogatás"
resourcelinks4="https://forum.aspose.com/c/tasks/15"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-wrapper
resource-heading="Erőforrások"
sectionid="support"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://blog.aspose.com/"
resourcetitle="Blogok"
resourcealt="Blogok"
resourceimg="/images/blog1.svg"
resourcelistlink="https://blog.aspose.com/tasks/convert-mpp-to-mpx-in-csharp/"
resourcelistlink2="https://blog.aspose.com/tasks/convert-ms-project-to-pdf-in-csharp/"
resourcelistlink3="https://blog.aspose.com/tasks/convert-mpp-to-tiff-in-csharp/"
resourcelisttext="MPP konvertálása MPX-re C#-ban"
resourcelisttext2="A Microsoft Project konvertálása PDF-be C# .NET-ben"
resourcelisttext3="MPP konvertálása TIFF-re C# .NET-ben"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://docs.aspose.com/"
resourcetitle="Dokumentáció"
resourcealt="Dokumentáció"
resourceimg="/img/docs1.svg"
resourcelistlink="https://docs.aspose.com/tasks/net/product-overview/#rich-features"
resourcelistlink2="https://www.nuget.org/packages/Aspose.Tasks/"
resourcelistlink3="https://helpdesk.aspose.com/"
resourcelisttext="Aspose.Tasks a .NET-szolgáltatásokhoz"
resourcelisttext2="Telepítse az Aspose.Tasks-t a .NET NuGet csomaghoz"
resourcelisttext3="Aspose.Tasks a .NET fizetett támogatási ügyfélszolgálatához"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://kb.aspose.com/"
resourcetitle="Tudásbázis"
resourcealt="Kódminták"
resourceimg="/images/code1.svg"
resourcelistlink="https://kb.aspose.com/tasks/net/how-to-convert-mpp-to-excel-using-csharp/"
resourcelistlink2="https://kb.aspose.com/tasks/net/how-to-extract-microsoft-project-file-metadata-in-c-sharp/"
resourcelistlink3="https://kb.aspose.com/tasks/net/how-to-add-weekdays-in-mpp-using-csharp/"
resourcelisttext="Hogyan lehet MPP-t Excelbe konvertálni C# segítségével"
resourcelisttext2="Hogyan lehet kivonni az MS Project fájl metaadatait C#-ban"
resourcelisttext3="Hétköznapok hozzáadása MPP-ben a C# használatával"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Készen áll az indulásra?"
rtstext="Ingyenes próbaverzió letöltése"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Az összes API megtekintése"
>}}
