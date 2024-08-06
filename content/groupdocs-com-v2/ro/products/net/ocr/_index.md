---
title: API OCR puternic pentru .NET pentru a realiza recunoașterea precisă a textului
description: Utilizați API-ul Aspose Optical Character Recognition (OCR) pentru .NET pentru a recunoaște și a extrage cu acuratețe textul din imagini, pentru a converti imagini și PDF-uri în text și multe altele.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="Puternic .NET OCR API pentru a efectua recunoașterea textului"
  inheadertext="Integrați capabilități OCR avansate în aplicațiile dvs. cu API-ul Aspose Optical Character Recognition pentru .NET. Recunoașteți și extrageți fără probleme text din imagini PNG, JPG, GIF și BMP, fotografii scanate și PDF-uri sau convertiți imagini sau PDF-uri în text."
  ctabtn="Descarcare varianta scurta de prezentare gratuita"
  ctabtn="Descarcare varianta scurta de prezentare gratuita"
  ctalink="https://releases.aspose.com/ocr/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Vedeți toate API-urile"
  bchomelink="/"
  bchome="Acasă"
  bcpage="OCR"
  bclink2="Produse"
  bclink3=".NET"
  bclink2url="/products/"
  bclink3url="/products/net/"
  >}}
{{< homepage/conholdate/com/inner-wrapper/sub-nav 
subnav1="#overview" subnavtxt1="Prezentare generală" 
subnav2="#features" subnavtxt2="Caracteristici" 
subnav3="#support" subnavtxt3="A sustine" 
subnav4="#examples" subnavtxt4="Exemple" 
subnav5="https://purchase.aspose.com/pricing/ocr/net"
subnavtxt5="Prețuri" 
subbtn1="https://docs.aspose.com/ocr/net/"
subbtntxt1="Învăța"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Cumpără"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Motor .NET OCR cu viteză și precizie superioare"
   subtext="Aspose.OCR pentru .NET este un API avansat, eficient și precis de recunoaștere optică a caracterelor pentru recunoașterea fără efort a textului din imagini și PDF-uri. Ajută la dezvoltarea funcționalității OCR pentru aplicațiile .NET și oferă viteză de procesare îmbunătățită, precizie și un set cuprinzător de caracteristici. Puternicul motor .NET OCR vă permite să efectuați recunoașterea și extragerea precisă a textului din fișiere PDF și din imagini JPEG, GIF, PNG, TIFF și BMP. Puteți construi soluții automate pentru conversia imaginilor și documentelor PDF în formate text, Word, Excel, XML și JSON cu ajutorul API-ului OCR pentru .NET."
   subtext2="Dezvoltatorii se pot bucura de o experiență de extragere a textului pe mai multe platforme folosind API-ul Aspose.OCR pentru .NET, deoarece poate funcționa identic în mediile bazate pe Windows, Mac OS și Linux. API-ul acceptă 27 de limbi diferite în scripturi latine și chirilice și mii de caractere chinezești și permite detectarea și recunoașterea fonturilor binecunoscute. În plus, puteți recunoaște textul din fotografiile scanate cu capacitatea încorporată de a procesa imagini zgomotoase, deformate sau rotite. Biblioteca Aspose.OCR pentru .NET este o soluție completă de analiză a imaginii și extracție de text care ar putea să vă sporească aplicațiile existente sau să vă ajute să creați soluții OCR profesionale de la zero."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Noțiuni de bază</h2>
   <p>Pentru a configura și utiliza corect .NET OCR API, vă rugăm să verificați detaliile de mai jos. Vă recomandăm să consultați lista de cerințe preliminare de pe pagina <a href="https://docs.aspose.com/ocr/net/system-requirements/">Cerințe de sistem</a> pentru o instalare fără probleme a API-ul de recunoaștere optică a caracterelor pentru .NET.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.OCR pentru instalare .NET"
>}}
<p>Puteți instala biblioteca OCR pentru C# .NET descărcând programul de instalare MSI sau DLL-uri din <a href="https://releases.aspose.com/ocr/net/">secțiunea de descărcări</a>. Sau puteți utiliza <a href="https://www.nuget.org/packages/Aspose.OCR/">pachetul NuGet</a> pentru a-l configura. Comanda pentru consola managerului de pachete Visual Studio este furnizată mai jos:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM > Install-Package Aspose.OCR
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Efectuați eficient OCR pe documente PDF și convertiți imaginile în text"
featuretext="Aspose.OCR pentru .NET API este o alegere excelentă pentru realizarea perfectă a recunoașterii optice a caracterelor (OCR) pentru dezvoltatorii .NET. Aplicarea OCR documentelor PDF și convertirea textului recunoscut în format Word necesită doar câteva linii de cod. În mod similar, puteți construi soluții de conversie de imagine în text folosind biblioteca de recunoaștere a textului pentru C# .NET."
>}}
{{< products/product-feature-blocks-col
featurecolheading="Recunoașteți și extrageți text din documente PDF în .NET"
>}}
<p>Recunoașterea optică a caracterelor pentru documentele PDF scanate este simplificată cu ajutorul Aspose.OCR pentru .NET. Este una dintre cele mai apreciate caracteristici ale API-ului OCR pentru documente .NET PDF și echipează oricui lucrează cu API-ul cu toate instrumentele necesare pentru a recunoaște, extrage și converti text din documente PDF în mai multe formate. Să aruncăm o privire la pașii necesari pentru a efectua OCR pe documente PDF și pentru a converti textul extras din PDF în format Word:</p>
<ul>
   <li>Instanciați clasa <strong>AsposeOcr</strong>.</a></li>
   <li>Creați un obiect din clasa <strong>DocumentRecognitionSettings</strong>.</li>
   <li>Specificați limba OCR.</li>
   <li>Apelați metoda <strong>RecognizePdf()</strong> pentru a obține <strong>RecognitionResult</strong>. Adăugați calea fișierului și obiectul <strong>DocumentRecognitionSettings</strong> ca argumente.</li>
   <li>Salvați textul utilizând metoda <strong>SaveMultipageDocument()</strong>. Adăugați calea fișierului de ieșire, obiectele <strong>SaveFormat</strong> și <strong>RecognitionResult</strong> ca argumente</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp2"
>}}
// This code example demonstrates how to OCR PDF documents and save the recognized text as DOCX.
// Initialize the PCR engine
AsposeOcr recognitionEngine = new AsposeOcr();
// Initialize recognition settings
DocumentRecognitionSettings recognitionSettings = new DocumentRecognitionSettings();
// Specify language for OCR. Multi-language by default
recognitionSettings.Language = Language.Eng;
// Recognize text from PDF
List<RecognitionResult> results = recognitionEngine.RecognizePdf("C:\\MyFiles\\test.pdf", recognitionSettings);
// Save the recognized text as Word (DOCX) file
AsposeOcr.SaveMultipageDocument("C:\\Files\\OCR_result.docx", SaveFormat.Docx, results);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col
featurecolheading="Convertiți fără efort imagini în PDF-uri care pot fi căutate în .NET"
>}}
<p>API-ul .NET OCR de înaltă performanță permite dezvoltatorilor să extragă text care poate fi căutat din imaginile scanate și fotografiile din diferite formate de imagine utilizate în mod obișnuit, cum ar fi GIF, PNG, JPG, BMP și TIFF. Dacă doriți să integrați capabilitățile OCR în aplicațiile dvs. .NET, funcția de conversie a imaginii în text le-ar putea consolida. Aici, vom analiza pașii necesari pentru conversia eficientă a JPG în PDF utilizând API-ul OCR robust pentru .NET:</p>
<ul>
   <li>Setați calea fișierului imagine de intrare pentru recunoașterea textului.</li>
   <li>Creați o instanță de clasă <strong>AsposeOcr</strong></li>
   <li>Utilizați metoda <strong>RecognizeImage</strong> pentru a recunoaște textul din fișierul imagine selectat.</li>
   <li>Salvați fișierul procesat utilizând metoda <strong>Salvare</strong> și adăugați numele fișierului de ieșire și <strong>Format Salvare</strong> ca argumente.</li>
   <li>Asigurați-vă că setați fișierul rezultat într-un document PDF care poate fi căutat folosind <strong>SaveFormat</strong>.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
// Set path for input image to recognize
string image = "OCR_test.jpg";
// Initialize AsposeOcr class instance
AsposeOcr api = new AsposeOcr();
// Recognize input image with RecognizeImage method
RecognitionResult result = api.RecognizeImage(image, new RecognitionSettings());
// Save output to searchable PDF file
result.Save("OCR_output.pdf", SaveFormat.Pdf);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12"><a href="https://github.com/aspose-ocr/Aspose.OCR-for-.NET/tree/master/Examples">pagina de exemple</a> GitHub a API-ului Aspose Optical Character Recognition pentru . NET include mai multe exemple de cod de lucru, vă rugăm să nu ezitați să le verificați. De asemenea, oferim <a href="https://products.aspose.app/ocr/family">OCR PDF online gratuit și Convertor de imagine în text</a>, recunoaștere text și aplicații de extragere. Puteți utiliza aceste aplicații OCR gratuite din mers folosind dispozitivele dvs. mobile.</p>
{{< products/product-feature-blocks
featureheading="Biblioteca .NET OCR ușor de utilizat pentru extragerea textului din fotografii"
featuretext="Întâmpinați dificultăți în citirea și extragerea textului din imaginile scanate? Dacă da, utilizați Aspose.OCR pentru .NET, deoarece este cel mai bun API OCR pentru analiza imaginilor și extragerea textului din fotografii scanate, imagini de pe smartphone și multe altele. Folosind acest API, puteți recunoaște în mod programatic textul din imagini și îl puteți converti în diferite formate de fișiere. În plus, API-ul de conversie imagine în text include funcții avansate, cum ar fi verificarea ortografică și înlocuirea caracterelor pentru textele cu defecte vizuale. Ar putea citi cu ușurință astfel de texte, ar putea verifica ortografia și ar putea înlocui orice caractere distorsionate din textul scris greșit de pe imagine. În timp ce rulați OCR imagine, puteți furniza linkul către un fișier imagine ca sursă. Este posibil să scanați și să recunoașteți textul dintr-o imagine completă sau doar dintr-o parte selectată a imaginii pentru acest proces. Dezvoltați cu competență aplicații complete de conversie de imagine în text folosind API-ul OCR de imagine .NET și convertiți cu ușurință JPEG în text, PNG în text, BMP în text și multe altele."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
 faqquery="1. Cum pot converti imaginile în text în .NET?"
 faqanswer="Convertirea imaginilor în text în .NET este rapidă și ușoară folosind .NET OCR API. Sunt necesare doar câteva linii de codare .NET pentru a converti fișiere JPG, BMP, GIF, PNG, TIFF și alte imagini în formate PDF, Word, Excel, JSON, Text simplu și XML."
>}}
   {{< products/faq-block 
 faqquery="2. Cât timp durează convertirea fișierelor imagine sau PDF în text?"
 faqanswer="Cel mai bun API OCR pentru .NET funcționează rapid și completează cererile de recunoaștere, extragere și conversie a textului în cel mai scurt timp."
>}}
   {{< products/faq-block
 faqquery="3. Este sigur să procesați imagini și fișiere PDF scanate folosind .NET API?"
 faqanswer="Puteți fi sigur de securitatea fișierelor dvs. de date în timp ce le procesați folosind API-ul de recunoaștere optică a caracterelor pentru .NET. Asigurăm confidențialitatea datelor dumneavoastră și luăm toate măsurile necesare pentru a vă oferi o experiență de utilizator sigură."
>}}
   {{< products/faq-block
 faqquery="4. Pot procesa fotografii și fișiere PDF pe Mac OS, Windows sau Linux?"
 faqanswer="Da, API-ul de recunoaștere a textului și de conversie a imaginii în text pentru .NET funcționează în diferite sisteme de operare, cadre și medii de operare. Îl puteți folosi pe platforma dorită și nu necesită nicio instalare software suplimentară pentru a funcționa."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper popularheading="Instrumente de recunoaștere optică a caracterelor"
>}}
   {{< products/popularapp-anchor
 anchorlink="JPEG în TXT"
 moreproducts="https://products.aspose.com/ocr/net/conversion/jpeg-to-txt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PNG în TXT"
 moreproducts="https://products.aspose.com/ocr/net/conversion/png-to-txt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="GIF în TXT"
 moreproducts="https://products.aspose.com/ocr/net/conversion/gif-to-txt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="BMP în TXT"
 moreproducts="https://products.aspose.com/ocr/net/conversion/bmp-to-txt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="TIFF în TXT"
 moreproducts="https://products.aspose.com/ocr/net/conversion/tiff-to-txt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG în PDF"
 moreproducts="https://products.aspose.com/ocr/net/conversion/jpeg-to-pdf"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG în Word"
 moreproducts="https://products.aspose.com/ocr/net/conversion/jpeg-to-docx"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG în Excel"
 moreproducts="https://products.aspose.com/ocr/net/conversion/jpeg-to-xlsx"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG în XML"
 moreproducts="https://products.aspose.com/ocr/net/conversion/jpeg-to-xml"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PNG în Word"
 moreproducts="https://products.aspose.com/ocr/net/conversion/png-to-docx"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PNG în Excel"
 moreproducts="https://products.aspose.com/ocr/net/conversion/png-to-xls"
>}}  
   {{< products/popularapp-anchor
 anchorlink="PNG în PDF"
 moreproducts="https://products.aspose.com/ocr/net/conversion/png-to-pdf"
>}}  
   {{< products/popularapp-anchor
 anchorlink="GIF în Word"
 moreproducts="https://products.aspose.com/ocr/net/conversion/gif-to-doc"
>}} 
   {{< products/popularapp-anchor
 anchorlink="GIF în PDF"
 moreproducts="https://products.aspose.com/ocr/net/conversion/gif-to-pdf"
>}}
   {{< products/popularapp-anchor
 anchorlink="BMP în Word"
 moreproducts="https://products.aspose.com/ocr/net/conversion/bmp-to-docx"
>}}
   {{< products/popularapp-anchor
 anchorlink="BMP în Excel"
 moreproducts="https://products.aspose.com/ocr/net/conversion/bmp-to-xls"
>}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Cauți ajutor?"
bartext="Consultați canalele noastre de asistență pentru ajutor cu întrebările dvs. legate de caracteristicile API-ului produsului Aspose și de funcționare."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/ocr/net/"
 resourcetxt2="Referință API"
 resourcelinks2="https://reference.aspose.com/ocr/net/" 
 resourcetxt3="Bază de cunoștințe"
 resourcelinks3="https://kb.aspose.com/ocr/net/"
 resourcetxt4="Asistență gratuită"
 resourcelinks4="https://forum.aspose.com/c/ocr/16"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-wrapper
 resource-heading="Resurse"
 sectionid="support"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://blog.aspose.com/"
 resourcetitle="Bloguri"
 resourcealt="Bloguri"
 resourceimg="/images/blog1.svg"
 resourcelistlink="https://blog.aspose.com/ocr/skew-correction-in-image-processing-using-csharp/"
 resourcelistlink2="https://blog.aspose.com/ocr/convert-screenshot-to-text-with-ocr-in-csharp/"
 resourcelistlink3="https://blog.aspose.com/ocr/image-to-excel-ocr-csharp/"
 resourcelisttext="Corecție oblică în procesarea imaginilor folosind C#"
 resourcelisttext2="Convertiți capturile de ecran în text cu OCR în C#"
 resourcelisttext3="Convertiți imaginea în Excel cu OCR în C#"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Documentație"
 resourcealt="Documentație"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/ocr/net/how-to-run-the-examples/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.OCR/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Cum să rulați exemple"
 resourcelisttext2="Instalați Aspose.OCR pentru pachetul .NET NuGet"
 resourcelisttext3="Aspose.OCR pentru .NET Paid Support Helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Bază de cunoștințe"
 resourcealt="Exemple de cod"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/ocr/net/how-to-extract-text-from-scanned-pdf-in-c-sharp/"
 resourcelistlink2="https://kb.aspose.com/ocr/net/how-to-extract-text-from-image-in-csharp/"
 resourcelisttext="Cum să extrageți text din PDF scanat în C#"
resourcelisttext2="Cum se extrage text din imagine în C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Sunteți gata să începeți?"
rtstext="Descarcare varianta scurta de prezentare gratuita"
rtslink="https://releases.aspose.com/ocr/net/" 
rtslink2="https://products.aspose.com" 
rtstext2="Vedeți toate API-urile"
>}}
