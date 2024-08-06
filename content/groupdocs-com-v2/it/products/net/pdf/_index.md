---
title: API PDF per .NET per elaborare, modificare e convertire documenti PDF
description: Una libreria PDF .NET avanzata per generare e unire documenti PDF. Converti PDF in JPG, PDF in Excel e PDF in Word nelle app C#, ASP.NET e VB.NET.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="API PDF per .NET per elaborare, modificare e convertire accuratamente i documenti PDF"
  inheadertext="Sperimenta potenti funzionalità di modifica, conversione e analisi di PDF senza bisogno di Adobe Acrobat. Renderizza i documenti PDF in DOC, DOCX, PPTX, XLS, JPG, PNG, GIF, SVG e altri formati nelle tue app .NET."
  ctabtn="Scarica la prova gratuita"
  ctabtn="Scarica la prova gratuita"
  ctalink="https://releases.aspose.com/pdf/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Visualizza tutte le API"
  bchomelink="/"
  bchome="Casa"
  bcpage="PDF"
  bclink2="Prodotti"
  bclink3=".NET"
  bclink2url="/products/"
  bclink3url="/products/net/"
  >}}
{{< homepage/conholdate/com/inner-wrapper/sub-nav 
subnav1="#overview"
subnavtxt1="Panoramica" 
subnav2="#features"
subnavtxt2="Caratteristiche" 
subnav3="#support"
subnavtxt3="Supporto" 
subnav4="#examples"
subnavtxt4="Esempi" 
subnav5="https://purchase.aspose.com/pricing/pdf/net"
subnavtxt5="Prezzi" 
subbtn1="https://docs.aspose.com/pdf/net/"
subbtntxt1="Imparare"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Acquistare"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Porta l'elaborazione dei documenti PDF al livello successivo in C# .NET"
   subtext="Aggiorna le tue applicazioni di elaborazione dei documenti .NET integrando funzionalità complete di manipolazione PDF con l'aiuto di Aspose.PDF per .NET. Questa libreria nativa è ricca di capacità di elaborazione di file PDF immacolate che consentono agli sviluppatori .NET non solo di generare, elaborare, modificare e analizzare PDF, ma anche di convertire accuratamente documenti PDF. Inserisci rapidamente e facilmente testo, annotazioni e immagini nei documenti PDF, aggiungi o rimuovi allegati, filigrane e segnalibri, dividi o unisci pagine PDF ed elabora campi modulo nei tuoi file PDF utilizzando questa API PDF per .NET."
   subtext2="Offrendo una compatibilità multipiattaforma senza pari, Aspose.PDF per .NET è progettato per funzionare senza problemi su più framework come .NET Framework e .NET Core, tra gli altri. Inoltre, puoi utilizzare questa API PDF .NET per creare applicazioni di conversione PDF in C#, ASP.NET e VB.NET e convertire PDF in JPG, PDF in Excel, PDF in Word, PDF in PowerPoint e molti altri formati di file con alta fedeltà."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Iniziare</h2>
   <p>Per configurare e utilizzare correttamente Aspose.PDF per l'API .NET, controllare le informazioni fornite di seguito. Fai riferimento alla pagina <a href="https://docs.aspose.com/pdf/net/system-requirements/">Requisiti di sistema</a> per un elenco di prerequisiti per configurare correttamente l'API PDF per . NETTO</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.PDF per l'installazione di .NET"
>}}
<p>Per configurare Aspose.PDF per .NET sul tuo sistema, puoi scaricare le DLL o il programma di installazione MSI direttamente dalla <a href="https://releases.aspose.com/pdf/net/">sezione download</ un>. In alternativa, puoi utilizzare il <a href="https://www.nuget.org/packages/Aspose.PDF/">pacchetto NuGet</a> per l'installazione dell'API .NET PDF. Di seguito viene fornito il comando API del gestore pacchetti.</p>
{{< products/product-feature-blocks-snip
 snipclass="greysnipp"
 copyID="snipp1"
>}}
PM> Install-Package Aspose.PDF
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Come convertire PDF in Word in .NET e unire rapidamente i PDF"
featuretext="Aspose.PDF per .NET supporta una vasta gamma di funzionalità di elaborazione dei documenti, inclusa la conversione di PDF in Word e altri formati di file e l'unione di PDF in .NET. Utilizzando questa libreria .NET, sperimenta l'elaborazione di documenti PDF completamente indipendente senza fare affidamento su software di terze parti."
>}}
{{< products/product-feature-blocks-col
 featurecolheading="Converti PDF in Word in .NET"
>}}
<p>Aggiorna le tue app di conversione PDF .NET esistenti integrando la funzionalità di conversione da PDF a Word. Aspose.PDF per .NET API ti consente di convertire PDF in DOC e PDF in DOCX all'interno delle tue app di conversione di documenti .NET. Fai riferimento alle seguenti istruzioni e allo snippet di codice per aiutarti a convertire PDF in Word in .NET:</p>
<ul>
   <li>Crea un'istanza dell'oggetto <a href="https://reference.aspose.com/pdf/net/aspose.pdf/document/">Documento</a> con il documento PDF di origine.</li>
   <li>Salvalo nel formato <strong>SaveFormat.Doc</strong> chiamando il metodo <strong>Document.Save()</strong>.</li>
</ul>
{{< products/product-feature-blocks-snip
 snipclass="greysnipp"
 copyID="snipp2"
>}}
public static void ConvertPDFtoWord()
{
    // Open the source PDF document
    Document pdfDocument = new Document(_dataDir + "PDFToDOC.pdf");
    // Save the file into MS document format
    pdfDocument.Save(_dataDir + "PDFToDOC_out.doc", SaveFormat.Doc);
}
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col
 featurecolheading="Unisci file PDF in .NET"
>}}
<p>L'unione di file PDF è supportata da Aspose.PDF per .NET API. Controlla le istruzioni e lo snippet di codice indicati di seguito per unire rapidamente e facilmente i file PDF nelle tue app C# .NET:</p>
<ul>
   <li>Crea due oggetti <a href="https://reference.aspose.com/pdf/net/aspose.pdf/document">Documento</a>, ciascuno contenente uno dei file PDF di input.</li>
   <li>Quindi chiama il metodo Add della raccolta <a href="https://reference.aspose.com/pdf/net/aspose.pdf/pagecollection">PageCollection</a> per l'oggetto Document a cui vuoi aggiungere l'altro file PDF .</li>
   <li>Passare la raccolta PageCollection del secondo oggetto Document al metodo Add della prima raccolta PageCollection.</li>
   <li>Infine, salva il file PDF di output utilizzando il metodo <a href="https://reference.aspose.com/pdf/net/aspose.pdf.document/save/methods/4">Salva</a>.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
// The path to the documents directory.
string dataDir = RunExamples.GetDataDir_AsposePdf_Pages();
// Open first document
Document pdfDocument1 = new Document(dataDir + "Concat1.pdf");
// Open second document
Document pdfDocument2 = new Document(dataDir + "Concat2.pdf");
// Add pages of second document to the first
pdfDocument1.Pages.Add(pdfDocument2.Pages);
dataDir = dataDir + "ConcatenatePdfFiles_out.pdf";
// Save concatenated output file
pdfDocument1.Save(dataDir);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">Per ulteriori esempi funzionanti e campioni di codice di Aspose.PDF per l'API .NET, visitare il nostro <a href="https://github.com/aspose-pdf/Aspose.PDF-for-.NET/tree/master/Examples">Esempi di GitHub</a>. Se stai cercando di visualizzare, modificare, unire, dividere, annotare, confrontare o convertire documenti PDF al volo, dai un'occhiata al nostro <a href="https://products.aspose.app/pdf/family" gratuito online >App di elaborazione PDF.</a></p>
{{< products/product-feature-blocks
featureheading="Elaborazione sicura dei file PDF in .NET"
featuretext="Aspose.PDF per .NET è una libreria di elaborazione PDF completamente sicura che fornisce funzionalità di sicurezza come il supporto della firma digitale, la protezione con password e la crittografia. Ciò garantisce l'accesso, l'elaborazione e la trasmissione affidabili dei documenti PDF, impedendo l'accesso e la modifica non autorizzati. Inoltre, non è necessario installare Adobe Acrobat per utilizzare questa API di elaborazione PDF .NET."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
 faqquery="1. Come posso convertire PDF in .NET?"
 faqanswer="La conversione di PDF in .NET è semplice e diretta utilizzando Aspose.PDF per l'API .NET. Richiede solo poche righe di codice e puoi convertire i file PDF in più formati di file."
>}}
   {{< products/faq-block 
 faqquery="2. Quanto tempo ci vuole per unire o convertire un PDF?"
 faqanswer="L'API PDF di .NET funziona velocemente ed elabora le tue richieste di unione o conversione di documenti in pochissimo tempo."
>}}
   {{< products/faq-block
 faqquery="3. È sicuro elaborare PDF utilizzando l'API PDF di .NET?"
 faqanswer="Ovviamente! Puoi essere certo della sicurezza dei tuoi documenti durante l'elaborazione utilizzando Aspose.PDF per l'API .NET. Garantiamo la privacy dei tuoi dati e adottiamo tutte le misure necessarie per offrirti un'esperienza utente sicura."
>}}
   {{< products/faq-block
 faqquery="4. Posso elaborare PDF su Mac OS, Windows o Linux?"
 faqanswer="Sì, l'API di manipolazione PDF .NET funziona su diversi sistemi operativi, framework e ambienti operativi. Puoi usarlo sulla piattaforma che preferisci. La nostra libreria PDF .NET non richiede alcuna installazione di software aggiuntivo per funzionare."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Strumenti di manipolazione PDF"
   >}}
   {{< products/popularapp-anchor
 anchorlink="Da PDF a WORD"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-word/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Da PDF a DOC"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-doc/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Da PDF a DOCX"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-docx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Da PDF a EXCEL"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-excel/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Da PDF a XLS"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-xls/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Da PDF a XLSX"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-xlsx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Da PDF a PPTX"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-pptx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF in HTML"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Da PDF a BMP"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-bmp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Da PDF a TIFF"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-tiff/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Da PDF a PNG"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-png/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Da PDF a GIF"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-gif/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Da PDF a BMP"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-bmp/"
>}}  
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Cerchi aiuto?"
bartext="Dai un'occhiata ai nostri canali di supporto per assistenza con le tue domande relative alle funzionalità e al funzionamento dell'API del prodotto Aspose."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/pdf/net/"
 resourcetxt2="Riferimento API"
 resourcelinks2="https://reference.aspose.com/pdf/" 
 resourcetxt3="base di conoscenza"
 resourcelinks3="https://kb.aspose.com/pdf/net/"
 resourcetxt4="Supporto gratuito"
 resourcelinks4="https://forum.aspose.com/c/pdf/10"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-wrapper
 resource-heading="Risorse"
 sectionid="support"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://blog.aspose.com/"
 resourcetitle="Blog"
 resourcealt="Blog"
 resourceimg="/images/blog1.svg"
 resourcelistlink="https://blog.aspose.com/pdf/convert-latex-to-pdf-in-python/"
 resourcelistlink2="https://blog.aspose.com/pdf/convert-pdf-to-ppt-in-python/"
 resourcelistlink3="https://blog.aspose.com/pdf/convert-pdf-to-latex-in-python/"
 resourcelisttext="Converti LaTeX in PDF in Python"
 resourcelisttext2="Converti PDF in PPT in Python"
 resourcelisttext3="Converti PDF in LaTeX in Python"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Documentazione"
 resourcealt="Documentazione"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/pdf/net/key-features/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.PDF/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.PDF per le funzionalità .NET"
 resourcelisttext2="Installa Aspose.PDF per il pacchetto .NET NuGet"
 resourcelisttext3="Aspose.PDF per Helpdesk di supporto a pagamento .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="base di conoscenza"
 resourcealt="Esempi di codice"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/words/net/how-to-insert-hyperlink-in-word-using-csharp/"
 resourcelistlink2="https://kb.aspose.com/total/python/how-to-install-python-to-run-aspose-pdf-for-python-via-net/"
 resourcelistlink3="https://kb.aspose.com/pdf/net/how-to-add-hyperlink-in-pdf-using-csharp/"
 resourcelisttext="Come inserire un collegamento ipertestuale in Word usando C#"
resourcelisttext2="Come installare Python per eseguire Aspose.PDF per Python tramite .NET"
resourcelisttext3="Come aggiungere un collegamento ipertestuale in PDF usando C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Pronto per iniziare?"
rtstext="Scarica la prova gratuita"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Visualizza tutte le API"
>}}
