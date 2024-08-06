---
title: API C# .NET PowerPoint per l'elaborazione di file di presentazione
description: Una potente API PowerPoint .NET per l'elaborazione di formati di file di presentazione come PPT, POT, PPS e ODP. Crea, modifica e converti diapositive in modo programmatico.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="API C# .NET PowerPoint per l'elaborazione dei formati di file di presentazione"
  inheadertext="Potenzia le tue presentazioni .NET sviluppando app per generare, elaborare e manipolare diapositive di Microsoft PowerPoint. Gestisci diversi formati di file di presentazione tra cui PPT, PPTX, POT, POTX, PPS, PPSX e ODP. Converti documenti PowerPoint in PDF, HTML, immagini raster e vettori SVG."
  ctabtn="Scarica la prova gratuita"
  ctabtn="Scarica la prova gratuita"
  ctalink="https://releases.aspose.com/slides/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Visualizza tutte le API"
  bchomelink="/"
  bchome="Casa"
  bcpage="Diapositive"
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
subnav5="https://purchase.aspose.com/pricing/slides/net"
subnavtxt5="Prezzi" 
subbtn1="https://docs.aspose.com/slides/net/"
subbtntxt1="Imparare"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Acquistare"
>}}
   {{< products/subtext-wrapper sectionid="overview"
   subtitle="Manipola le diapositive di PowerPoint utilizzando l'API di presentazione .NET"
   subtext="Aspose.Slides per .NET è un'API .NET PowerPoint completa e flessibile che consente agli sviluppatori di software e app di generare, modificare, manipolare ed esportare in modo programmatico presentazioni Microsoft PowerPoint nella piattaforma .NET. Supporta l'elaborazione di vari formati di file PowerPoint popolari come PPT, POT, PPTX, PPS, POTX e PPTM, nonché documenti OpenOffice (ODP). I programmatori possono utilizzare le funzionalità avanzate di formattazione ed elaborazione delle presentazioni di questa libreria .NET per aggiungere, rimuovere, dividere o unire diapositive di presentazione, applicare la formattazione del testo, gestire animazioni e transizioni di diapositive, lavorare con immagini, forme, tabelle e grafici e fare molto di più."
   subtext2="Dotato di un intricato motore di rendering, Aspose.Slides per .NET API ti aiuta a convertire perfettamente le presentazioni PowerPoint in più formati di file come PowerPoint in PDF, PowerPoint in JPG e PowerPoint in HTML."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Iniziare</h2>
   <p>Prima di configurare l'API per le presentazioni PowerPoint .NET, controlla la pagina <a href="https://docs.aspose.com/slides/net/system-requirements/">Requisiti di sistema</a> per i prerequisiti utili installi l'API senza problemi.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Slides per l'installazione di .NET"
>}}
<p>Puoi scaricare direttamente le DLL o il programma di installazione MSI di Aspose.Slides per .NET visitando la <a href="https://releases.aspose.com/slides/net/">sezione download</a>. Puoi anche utilizzare il <a href="https://www.nuget.org/packages/Aspose.Slides.Net/">pacchetto NuGet</a> per l'installazione dell'API .NET PowerPoint. Di seguito è riportato il comando per configurare la libreria nella console del gestore pacchetti:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM > Install-Package Aspose.Slides.NET
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Come convertire PowerPoint in PDF in .NET e unire rapidamente le presentazioni"
featuretext="Aspose.Slides per .NET è l'API leader per la manipolazione di presentazioni PowerPoint che include un set di funzionalità eccezionale con la possibilità di convertire le presentazioni. Converti senza problemi PowerPoint in PDF e altri formati di file in .NET e unisci le diapositive della presentazione utilizzando l'API PowerPoint di .NET."
>}}
{{< products/product-feature-blocks-col
featurecolheading="Converti PowerPoint in PDF in .NET"
>}}
<p>Esegui presentazioni PowerPoint immacolate in conversioni PDF in C# .NET utilizzando Aspose.Slides per l'API .NET mentre imposti diverse proprietà del documento PDF risultante nel processo. Fare riferimento ai seguenti passaggi e alla codifica di esempio per convertire PowerPoint PPT in PDF nella piattaforma .NET:</p>
<ul>
   <li>Crea un'istanza dell'oggetto di classe <a href="https://apireference.aspose.com/slides/net/aspose.slides/presentation">Presentazione</a> per caricare il file di presentazione di origine.</li>
   <li>Inizializza l'oggetto di classe <a href="https://apireference.aspose.com/slides/net/aspose.slides.export/pdfoptions/">PdfOptions</a> per impostare le opzioni dell'immagine desiderate.</li>
   <li>Impostare le opzioni PDF desiderate per il file PDF risultante.</li>
   <li>Converti la presentazione in formato PDF utilizzando il metodo Salva.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp2"
>}}
// Create an instance of the Presentation class object to load the PPT file
 Presentation presPPT = new Presentation("TestPresentation.ppt");
// Create the PdfOptions class object
PdfOptions exportPdfOptions = new PdfOptions();
// Set the JPEG quality for images inside the presentation
exportPdfOptions.JpegQuality = 90;
// Set the metafiles behavior
exportPdfOptions.SaveMetafilesAsPng = true;
// Apply the text compression level
exportPdfOptions.TextCompression = PdfTextCompression.Flate;
// Set the output PDF standard
exportPdfOptions.Compliance = PdfCompliance.Pdf15;
// Convert and Save the Presentation to PDF
presPPT.Save("PPT-to-PDF.pdf", SaveFormat.Pdf, exportPdfOptions);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col
featurecolheading="Unisci presentazioni in .NET"
>}}
<p>L'unione di presentazioni in un documento PowerPoint unificato è una caratteristica importante di Aspose.Slides per l'API .NET. Si prega di controllare i passaggi e le informazioni indicati di seguito per combinare rapidamente e facilmente più presentazioni PowerPoint PPTX all'interno delle app di unione di documenti utilizzando l'API di presentazioni .NET:</p>
<ul>
   <li>Crea un'istanza della classe <a href="https://apireference.aspose.com/slides/net/aspose.slides/presentation">Presentazione</a> per caricare la presentazione di origine.</li>
   <li>Inizializza oggetti della classe di presentazione separati per le presentazioni di destinazione richieste.</li>
   <li>In un ciclo, scorrere tutte le <a href="https://apireference.aspose.com/slides/net/aspose.slides/islide">diapositive</a> nelle presentazioni di destinazione.</li>
   <li>Chiamare il metodo AddClone() della raccolta di diapositive della presentazione di origine in cui devono essere combinate altre presentazioni.</li>
   <li>Salva la presentazione risultante con tutte le diapositive delle presentazioni di destinazione.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
// Load the source presentation
Presentation prest1 = new Presentation("prest1.pptx");
// Initialize separate Presentation class objects for the target presentations
Presentation prest2 = new Presentation("prest2.pptx");
Presentation prest3 = new Presentation("prest3.pptx");
// Loop through all target presentations slides
foreach (ISlide slide in prest2.Slides)
    prest1.Slides.AddClone(slide);
 foreach (ISlide slide in prest3.Slides)
    prest1.Slides.AddClone(slide);
// Save the resultant presentation with all the slides from the target presentations
prest1.Save("combined.pptx", SaveFormat.Pptx);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">Altri esempi funzionanti e campioni di codifica completi di Aspose.Slides per .NET API sono disponibili su <a href="https://github.com/aspose-slides/Aspose.Slides-for-.NET/tree/master/Examples">Esempi GitHub</a>. Dai un'occhiata alle <a href="https://products.aspose.app/slides/family">app online gratuite</a> di Aspose.Slides che ti consentono di visualizzare, convertire, analizzare, confrontare, filigranare, redigere, dividere e modificare i file di presentazione di PowerPoint da qualsiasi luogo utilizzando i dispositivi mobili o desktop.</p>
{{< products/product-feature-blocks
featureheading="API di presentazione .NET sicura e indipendente"
featuretext="Con Aspose.Slides per .NET, hai accesso ad alcune eccellenti funzionalità di sicurezza che consentono un'elaborazione affidabile delle presentazioni in .NET. Ciò include la possibilità di proteggere con password le presentazioni e il supporto per la modalità di sola lettura. Inoltre, l'installazione di Microsoft PowerPoint non è necessaria durante l'utilizzo dell'API di presentazione .NET che offre un'esperienza utente completamente indipendente e unica."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
faqquery="1. Come posso convertire i file PowerPoint in .NET?"
 faqanswer="La conversione di file Microsoft PowerPoint in .NET è semplice e veloce utilizzando Aspose.Slides per l'API .NET. Sono necessarie solo poche righe di codifica .NET per convertire i file PPT, PPTX, PPS, PPSX, POT, POTX, PPTM e ODP in diversi formati di file."
>}}
   {{< products/faq-block 
faqquery="2. Quanto tempo ci vuole per unire o convertire le diapositive di PowerPoint?"
 faqanswer="L'API .NET per la manipolazione e l'elaborazione delle diapositive di presentazione funziona velocemente e completa le richieste di conversione e fusione dei file di presentazione in pochissimo tempo."
>}}
   {{< products/faq-block
faqquery="3. È sicuro elaborare presentazioni utilizzando l'API .NET?"
 faqanswer="Puoi essere sicuro della sicurezza dei tuoi file di presentazione di PowerPoint durante l'elaborazione utilizzando Aspose.Slides per l'API .NET. Garantiamo la privacy dei tuoi dati e adottiamo tutte le misure necessarie per offrirti un'esperienza utente sicura."
>}}
   {{< products/faq-block
faqquery="4. Posso elaborare presentazioni PowerPoint su Mac OS, Windows o Linux?"
 faqanswer="Sì, l'API di elaborazione delle presentazioni PowerPoint per .NET funziona su diversi sistemi operativi, framework e ambienti operativi. Puoi usarlo sulla piattaforma che preferisci e non richiede alcuna installazione di software aggiuntivo per funzionare."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Strumenti di manipolazione delle presentazioni PowerPoint"
>}}
   {{< products/popularapp-anchor
 anchorlink="PowerPoint in PDF"
 moreproducts="https://products.aspose.com/slides/net/conversion/ppt-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PowerPoint in JPEG"
 moreproducts="https://products.aspose.com/slides/net/conversion/ppt-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Da PowerPoint a HTML"
 moreproducts="https://products.aspose.com/slides/net/conversion/ppt-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Da PPTX a PDF"
 moreproducts="https://products.aspose.com/slides/net/conversion/pptx-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Da PPTX a GIF"
 moreproducts="https://products.aspose.com/slides/net/conversion/pptx-to-gif/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Da PPTX a PNG"
 moreproducts="https://products.aspose.com/slides/net/conversion/pptx-to-png/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Unisci PPT"
 moreproducts="https://products.aspose.com/slides/net/merger/ppt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Unisci PPTX"
 moreproducts="https://products.aspose.com/slides/net/merger/pptx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Unisci ODP"
 moreproducts="https://products.aspose.com/slides/net/merger/odp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Unisci POT"
 moreproducts="https://products.aspose.com/slides/net/merger/pot/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Unisci PPTM"
 moreproducts="https://products.aspose.com/slides/net/merger/pptm/"
>}}  
   {{< products/popularapp-anchor
 anchorlink="Unisci PPS"
 moreproducts="https://products.aspose.com/slides/net/merger/pps/"
>}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Cerchi aiuto?"
bartext="Dai un'occhiata ai nostri canali di supporto per assistenza con le tue domande relative alle funzionalità e al funzionamento dell'API del prodotto Aspose."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/slides/net/"
 resourcetxt2="Riferimento API"
 resourcelinks2="https://reference.aspose.com/slides/" 
 resourcetxt3="base di conoscenza"
 resourcelinks3="https://kb.aspose.com/slides/net/"
 resourcetxt4="Supporto gratuito"
 resourcelinks4="https://forum.aspose.com/c/slides/11"
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
 resourcelistlink="https://blog.aspose.com/slides/convert-ppt-to-video-csharp/"
 resourcelistlink2="https://blog.aspose.com/slides/encrypt-ppt-csharp/"
 resourcelistlink3="https://blog.aspose.com/slides/convert-jpg-to-ppt-csharp/"
 resourcelisttext="Converti PPT in video in C#"
 resourcelisttext2="Crittografa PowerPoint in C#"
 resourcelisttext3="Converti JPG in PPT in C# .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Documentazione"
 resourcealt="Documentazione"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/slides/net/features-overview/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.Slides.Net/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.Slides per le funzionalità .NET"
 resourcelisttext2="Installare Aspose.Slides per il pacchetto .NET NuGet"
 resourcelisttext3="Aspose.Slides per Helpdesk di supporto a pagamento .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="base di conoscenza"
 resourcealt="Esempi di codice"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/slides/net/how-to-merge-slides-in-csharp/"
 resourcelistlink2="https://kb.aspose.com/slides/net/how-to-insert-signature-in-powerpoint-using-csharp/"
 resourcelistlink3="https://kb.aspose.com/slides/net/how-to-create-a-table-in-powerpoint-using-csharp/"
 resourcelisttext="Come unire le diapositive in C#"
resourcelisttext2="Come inserire la firma in PowerPoint usando C#"
resourcelisttext3="Come creare una tabella in PowerPoint usando C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Pronto per iniziare?"
rtstext="Scarica la prova gratuita"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Visualizza tutte le API"
>}}
