---
title: API .NET per la gestione e l'elaborazione dei file di Microsoft Project
description: Un'API di gestione dei progetti .NET affidabile per l'elaborazione dei file di Microsoft Project. Genera, converti e manipola file di progetto MPP, MPT e MPX nelle app .NET.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="API C# .NET per la gestione e l'elaborazione dei file di Microsoft Project"
  inheadertext="Crea, modifica, esporta ed elabora senza problemi i formati di file di Microsoft Project come MPP, MPT, MPX e XML all'interno delle app di gestione dei progetti C# .NET. Converti i documenti MS Project nei formati PDF, Excel, Primavera, HTML, TXT, PNG, JPEG e SVG utilizzando l'API di elaborazione dei file .NET Project."
  ctabtn="Scarica la prova gratuita"
  ctabtn="Scarica la prova gratuita"
  ctalink="https://releases.aspose.com/tasks/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Visualizza tutte le API"
  bchomelink="/"
  bchome="Casa"
  bcpage="Compiti"
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
subnav5="https://purchase.aspose.com/pricing/tasks/net"
subnavtxt5="Prezzi" 
subbtn1="https://docs.aspose.com/tasks/net/"
subbtntxt1="Imparare"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Acquistare"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="La principale API di gestione dei progetti per l'elaborazione di file MS Project in .NET"
   subtext="Aspose.Tasks per .NET è una solida API per elaborare diversi formati di file Microsoft Project. Consente agli sviluppatori .NET di leggere, modificare, convertire ed esportare in modo programmatico i file di progetto in più formati. Utilizzando questa API .NET per i file di Microsoft Project, puoi manipolare in modo intelligente i dati di gestione del progetto e gestire varie risorse. Aspose.Tasks per .NET è una soluzione completa per la gestione delle risorse del progetto e consente di lavorare con documenti di progetto protetti da password, ordinare e sbloccare file di Microsoft Project, pianificare e tenere traccia delle risorse, manipolare attività e gestire costi e traguardi."
   subtext2="Puoi anche aggiungere diagrammi di Gantt personalizzati durante l'esportazione e la stampa dei file di progetto con l'aiuto dell'API di gestione dei progetti C# .NET che supporta la conversione accurata dei file di progetto in PDF, Primavera, fogli di calcolo Excel, testo, HTML, JPEG, BMP e PNG immagini raster e vettori SVG."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Iniziare</h2>
   <p>Fare riferimento alle seguenti informazioni per configurare Aspose.Tasks per la libreria .NET. Consulta la pagina <a href="https://docs.aspose.com/tasks/net/system-requirements/">Requisiti di sistema</a> per un elenco di prerequisiti prima di installare l'API di gestione dei progetti .NET.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Tasks per l'installazione di .NET"
>}}
<p>Per scaricare direttamente le DLL o il programma di installazione MSI, visita la <a href="https://releases.aspose.com/tasks/net/">sezione download</a>. Puoi anche installare l'API .NET per l'elaborazione dei file di Microsoft Project utilizzando il <a href="https://www.nuget.org/packages/Aspose.Tasks/">pacchetto NuGet</a>. Il comando della console del gestore pacchetti per la configurazione dell'API è condiviso di seguito:</p>
{{< products/product-feature-blocks-snip
 snipclass="greysnipp"
 copyID="snipp1"
>}}
PM > Install-Package Aspose.Tasks
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
 featureheading="Come convertire facilmente i file di progetto MPP in PDF e formati di file immagine raster"
 featuretext="La libreria Aspose.Tasks per .NET consente un'elaborazione rapida e semplice dei file di gestione del progetto e consente di convertire i file di progetto in formati di file di documenti e immagini ben noti come PDF, Primavera, Excel, testo, HTML, PNG, SVG, JPEG, e BMP."
>}}
{{< products/product-feature-blocks-col
featurecolheading="Converti MPP in PDF in .NET"
>}}
<p>Converti abilmente i file di progetto in formato PDF nelle tue app di conversione file .NET. Aspose.Tasks per la libreria .NET consente di convertire i file MPP in PDF utilizzando solo poche righe di codifica .NET. Si prega di controllare le istruzioni fornite di seguito e il codice di esempio per convertire i documenti MPP in formato file PDF con l'API .NET per l'elaborazione dei file Microsoft Project:</p>
<ul>
   <li>Carica il file MPP da convertire utilizzando la <a href="https://reference.aspose.com/tasks/net/aspose.tasks/project">Classe progetto.</a></li>
   <li>Aggiungi modifiche al file MPP (facoltativo).</li>
   <li>Converti il file MPP in formato PDF ed esportalo utilizzando il metodo <a href="https://reference.aspose.com/tasks/net/aspose.tasks/project/methods/save/index">Salva</a> .</li>
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
featurecolheading="Converti file di progetto in immagini"
>}}
<p>La conversione dei dati del progetto in immagini PNG o JPEG è facile utilizzando Aspose.Tasks per l'API .NET. Richiede una codifica minima e consente di esportare i dati in formati di immagine, consentendo una comoda memorizzazione e l'accesso su più dispositivi. Le seguenti informazioni e il frammento di codice ti aiuteranno a convertire i dati di Microsoft Project in immagini JPEG utilizzando l'API di gestione dei progetti .NET:</p>
<ul>
   <li>Carica il file MPP del progetto utilizzando la classe <a href="https://reference.aspose.com/tasks/net/aspose.tasks/project">Progetto</a>.</li>
   <li>Crea un'istanza della classe <a href="https://reference.aspose.com/tasks/net/aspose.tasks.saving/imagesaveoptions">ImageSaveOptions</a> utilizzando <a href="https://reference.aspose.com/tasks/net/aspose.tasks.saving/savefileformat">SaveFileFormat.JPEG</a> enumerazione.</li>
   <li>Specifica la qualità dell'immagine JPEG utilizzando la proprietà <a href="https://reference.aspose.com/tasks/net/aspose.tasks.saving/imagesaveoptions/properties/jpegquality">JpegQuality</a>. L'intervallo di valori consentito è compreso tra 0 e 100.</li>
   <li>Converti e salva l'immagine JPEG utilizzando il metodo <a href="https://reference.aspose.com/tasks/net/aspose.tasks.project/save/methods/6">Salva</a>.</li>
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
   <p class="col-lg-12">Visita la pagina <a href="https://github.com/aspose-tasks/Aspose.Tasks-for-.NET/tree/master/Examples">GitHub examples</a> di Aspose.Tasks per .NET API per visualizzare altri esempi di codice ed esempi funzionanti. Puoi visualizzare, convertire e manipolare i file di Microsoft Project utilizzando il desktop o i dispositivi mobili utilizzando le app di elaborazione dati per la gestione dei progetti <a href="https://products.aspose.app/tasks/family">gratuite online</a> .</p>
{{< products/product-feature-blocks
 featureheading="Unisci i file Microsoft Project nelle app di fusione file C# .NET"
 featuretext="Aspose.Tasks per .NET consente di unire file diversi in modo semplice. La combinazione programmatica di file MPP, MPX, MPT e JIRA con PDF, Primavera e altri formati di file è supportata dall'API di gestione dei progetti .NET. Inoltre, non è necessario installare Microsoft Project o Microsoft Office per manipolare i file di progetto all'interno delle app di elaborazione dei documenti C# .NET."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
 faqquery="1. Come posso convertire i file di progetto in .NET?"
 faqanswer="La conversione di file Microsoft Project in .NET è semplice e veloce utilizzando Aspose.Tasks per l'API .NET. Sono necessarie solo poche righe di codifica .NET per convertire MPP, MPX, MPT, XML e altri file di progetto in diversi formati di documenti e file immagine."
>}}
   {{< products/faq-block 
 faqquery="2. Quanto tempo ci vuole per convertire o unire i file di gestione del progetto?"
 faqanswer="L'API .NET per la gestione e l'elaborazione dei file di Microsoft Project funziona rapidamente e completa le richieste di unione o conversione dei file in pochissimo tempo."
>}}
   {{< products/faq-block
 faqquery="3. È sicuro elaborare i dati di gestione del progetto utilizzando l'API .NET?"
 faqanswer="Puoi essere sicuro della sicurezza dei file di dati del tuo progetto durante l'elaborazione utilizzando Aspose.Tasks per l'API .NET. Garantiamo la privacy dei tuoi dati e adottiamo tutte le misure necessarie per offrirti un'esperienza utente sicura."
>}}
   {{< products/faq-block
 faqquery="4. Posso elaborare file di progetto su Mac OS, Windows o Linux?"
 faqanswer="Sì, l'API di elaborazione dei file di progetto per .NET funziona su diversi sistemi operativi, framework e ambienti operativi. Puoi usarlo sulla piattaforma che preferisci e non richiede alcuna installazione di software aggiuntivo per funzionare."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Strumenti di manipolazione dei file di gestione del progetto"
>}}
   {{< products/popularapp-anchor
 anchorlink="MPP in PDF"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Da MPP a XLSX"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-xlsx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPP in HTML"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Da MPP a JPEG"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Da MPP a PNG"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-png/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Da MPP a BMP"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-bmp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="da MPT a XLSX"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpt-to-xlsx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPT in JPEG"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpt-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="da JIRA a MPP"
 moreproducts="https://products.aspose.com/tasks/net/merger/jira-to-mpp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Da XML a MPP"
 moreproducts="https://products.aspose.com/tasks/net/merger/xml-to-mpp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Da MPX a PDF"
 moreproducts="https://products.aspose.com/tasks/net/merger/mpx-to-pdf/"
>}}  
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Cerchi aiuto?"
bartext="Dai un'occhiata ai nostri canali di supporto per assistenza con le tue domande relative alle funzionalità e al funzionamento dell'API del prodotto Aspose."
resourcetxt1="Docs"
resourcelinks1="https://docs.aspose.com/tasks/net/"
resourcetxt2="Riferimento API"
resourcelinks2="https://reference.aspose.com/tasks/"
resourcetxt3="base di conoscenza"
resourcelinks3="https://kb.aspose.com/tasks/net/"
resourcetxt4="Supporto gratuito"
resourcelinks4="https://forum.aspose.com/c/tasks/15"
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
resourcelistlink="https://blog.aspose.com/tasks/convert-mpp-to-mpx-in-csharp/"
resourcelistlink2="https://blog.aspose.com/tasks/convert-ms-project-to-pdf-in-csharp/"
resourcelistlink3="https://blog.aspose.com/tasks/convert-mpp-to-tiff-in-csharp/"
resourcelisttext="Converti MPP in MPX in C#"
resourcelisttext2="Converti Microsoft Project in PDF in C# .NET"
resourcelisttext3="Converti MPP in TIFF in C# .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://docs.aspose.com/"
resourcetitle="Documentazione"
resourcealt="Documentazione"
resourceimg="/img/docs1.svg"
resourcelistlink="https://docs.aspose.com/tasks/net/product-overview/#rich-features"
resourcelistlink2="https://www.nuget.org/packages/Aspose.Tasks/"
resourcelistlink3="https://helpdesk.aspose.com/"
resourcelisttext="Aspose.Tasks per le funzionalità .NET"
resourcelisttext2="Installare Aspose.Tasks per il pacchetto .NET NuGet"
resourcelisttext3="Aspose.Tasks per Helpdesk di supporto a pagamento .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://kb.aspose.com/"
resourcetitle="base di conoscenza"
resourcealt="Esempi di codice"
resourceimg="/images/code1.svg"
resourcelistlink="https://kb.aspose.com/tasks/net/how-to-convert-mpp-to-excel-using-csharp/"
resourcelistlink2="https://kb.aspose.com/tasks/net/how-to-extract-microsoft-project-file-metadata-in-c-sharp/"
resourcelistlink3="https://kb.aspose.com/tasks/net/how-to-add-weekdays-in-mpp-using-csharp/"
resourcelisttext="Come convertire MPP in Excel utilizzando C#"
resourcelisttext2="Come estrarre i metadati dei file di MS Project in C#"
resourcelisttext3="Come aggiungere i giorni della settimana in MPP usando C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Pronto per iniziare?"
rtstext="Scarica la prova gratuita"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Visualizza tutte le API"
>}}
