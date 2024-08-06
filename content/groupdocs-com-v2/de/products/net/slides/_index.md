---
title: C# .NET PowerPoint-API zur Verarbeitung von Präsentationsdateien
description: Eine leistungsstarke .NET PowerPoint-API zur Verarbeitung von Präsentationsdateiformaten wie PPT, POT, PPS und ODP. Erstellen, bearbeiten und konvertieren Sie Folien programmgesteuert.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="C# .NET PowerPoint-API zur Verarbeitung von Präsentationsdateiformaten"
  inheadertext="Optimieren Sie Ihre .NET-Präsentationen, indem Sie Apps zum Generieren, Verarbeiten und Bearbeiten von Microsoft PowerPoint-Folien entwickeln. Verwalten Sie verschiedene Präsentationsdateiformate, einschließlich PPT, PPTX, POT, POTX, PPS, PPSX und ODP. Konvertieren Sie PowerPoint-Dokumente in PDF, HTML, Rasterbilder und SVG-Vektoren."
  ctabtn="Download kostenlose Testversion"
  ctabtn="Download kostenlose Testversion"
  ctalink="https://releases.aspose.com/slides/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Alle APIs anzeigen"
  bchomelink="/"
  bchome="Heim"
  bcpage="Folien"
  bclink2="Produkte"
  bclink3=".NET"
  bclink2url="/products/"
  bclink3url="/products/net/"
  >}}
{{< homepage/conholdate/com/inner-wrapper/sub-nav 
subnav1="#overview"
subnavtxt1="Überblick" 
subnav2="#features"
subnavtxt2="Merkmale" 
subnav3="#support"
subnavtxt3="Unterstützung" 
subnav4="#examples"
subnavtxt4="Beispiele" 
subnav5="https://purchase.aspose.com/pricing/slides/net"
subnavtxt5="Preisgestaltung" 
subbtn1="https://docs.aspose.com/slides/net/"
subbtntxt1="Lernen"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Kaufen"
>}}
   {{< products/subtext-wrapper sectionid="overview"
   subtitle="Bearbeiten Sie PowerPoint-Folien mithilfe der .NET-Präsentations-API"
   subtext="Aspose.Slides für .NET ist eine voll funktionsfähige und flexible .NET PowerPoint-API, die es Software- und App-Entwicklern ermöglicht, Microsoft PowerPoint-Präsentationen programmgesteuert auf der .NET-Plattform zu generieren, zu ändern, zu bearbeiten und zu exportieren. Es unterstützt die Verarbeitung verschiedener gängiger PowerPoint-Dateiformate wie PPT, POT, PPTX, PPS, POTX und PPTM sowie OpenOffice (ODP)-Dokumente. Programmierer können die erweiterten Formatierungs- und Präsentationsverarbeitungsfunktionen dieser .NET-Bibliothek nutzen, um Präsentationsfolien hinzuzufügen, zu entfernen, zu teilen oder zusammenzuführen, Textformatierungen anzuwenden, Animationen und Folienübergänge zu verwalten, mit Bildern, Formen, Tabellen und Diagrammen zu arbeiten und vieles mehr so viel mehr."
   subtext2="Aspose.Slides für .NET API verfügt über eine komplexe Rendering-Engine und hilft Ihnen bei der makellosen Konvertierung von PowerPoint-Präsentationen in mehrere Dateiformate wie PowerPoint in PDF, PowerPoint in JPG und PowerPoint in HTML."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Erste Schritte</h2>
   <p>Bevor Sie die .NET PowerPoint-Präsentations-API einrichten, überprüfen Sie bitte die Seite <a href="https://docs.aspose.com/slides/net/system-requirements/">Systemanforderungen</a> auf die Voraussetzungen Sie installieren die API ohne Probleme.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Slides für die .NET-Installation"
>}}
<p>Sie können die DLLs oder das MSI-Installationsprogramm von Aspose.Slides für .NET direkt herunterladen, indem Sie den Abschnitt <a href="https://releases.aspose.com/slides/net/">Downloads</a> besuchen. Sie können auch das <a href="https://www.nuget.org/packages/Aspose.Slides.Net/">NuGet-Paket</a> zum Installieren der .NET PowerPoint-API verwenden. Der Befehl zum Einrichten der Bibliothek in der Paketmanager-Konsole ist unten angegeben:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM > Install-Package Aspose.Slides.NET
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="So konvertieren Sie PowerPoint in PDF in .NET und führen Präsentationen schnell zusammen"
featuretext="Aspose.Slides für .NET ist die führende API zum Bearbeiten von PowerPoint-Präsentationen, die einen tollen Funktionsumfang mit der Möglichkeit zum Konvertieren von Präsentationen umfasst. Konvertieren Sie PowerPoint nahtlos in PDF und andere Dateiformate in .NET und führen Sie Präsentationsfolien mithilfe der .NET PowerPoint-API zusammen."
>}}
{{< products/product-feature-blocks-col
featurecolheading="Konvertieren Sie PowerPoint in PDF in .NET"
>}}
<p>Führen Sie mit der Aspose.Slides für .NET-API einwandfreie PowerPoint-Präsentationen in PDF-Konvertierungen in C# .NET durch und legen Sie dabei verschiedene Eigenschaften des resultierenden PDF-Dokuments fest. Bitte beachten Sie die folgenden Schritte und den Beispielcode zum Konvertieren von PowerPoint PPT in PDF auf der .NET-Plattform:</p>
<ul>
   <li>Erstellen Sie eine Instanz des Klassenobjekts <a href="https://apireference.aspose.com/slides/net/aspose.slides/presentation">Presentation</a>, um die Quellpräsentationsdatei zu laden.</li>
   <li>Initialisieren Sie das Klassenobjekt <a href="https://apireference.aspose.com/slides/net/aspose.slides.export/pdfoptions/">PdfOptions</a>, um die gewünschten Bildoptionen festzulegen.</li>
   <li>Legen Sie die gewünschten PDF-Optionen für die resultierende PDF-Datei fest.</li>
   <li>Konvertieren Sie die Präsentation mit der Save-Methode in das PDF-Format.</li>
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
featurecolheading="Präsentationen in .NET zusammenführen"
>}}
<p>Das Zusammenführen von Präsentationen zu einem einheitlichen PowerPoint-Dokument ist eine herausragende Funktion der Aspose.Slides für .NET-API. Bitte überprüfen Sie die unten aufgeführten Schritte und Informationen, um mithilfe der .NET-Präsentations-API schnell und einfach mehrere PowerPoint-PPTX-Präsentationen in Ihren Dokumentzusammenführungs-Apps zu kombinieren:</p>
<ul>
   <li>Erstellen Sie eine Instanz der Klasse <a href="https://apireference.aspose.com/slides/net/aspose.slides/presentation">Presentation</a>, um die Quellpräsentation zu laden.</li>
   <li>Initialisieren Sie separate Präsentationsklassenobjekte für die erforderlichen Zielpräsentationen.</li>
   <li>Durchlaufen Sie in einer Schleife alle <a href="https://apireference.aspose.com/slides/net/aspose.slides/islide">Folien</a> in den Zielpräsentationen.</li>
   <li>Rufen Sie die AddClone()-Methode der Foliensammlung der Quellpräsentation auf, in der andere Präsentationen kombiniert werden sollen.</li>
   <li>Speichern Sie die resultierende Präsentation mit allen Folien der Zielpräsentationen.</li>
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
   <p class="col-lg-12">Weitere Arbeitsbeispiele und vollständige Codierungsbeispiele der Aspose.Slides für .NET-API finden Sie unter <a href="https://github.com/aspose-slides/Aspose.Slides-for-.NET/tree/master/Examples">GitHub-Beispiele</a> Seite. Schauen Sie sich bitte die <a href="https://products.aspose.app/slides/family">kostenlosen Online-Apps</a> von Aspose.Slides an, mit denen Sie Inhalte anzeigen, konvertieren, analysieren, vergleichen, mit Wasserzeichen versehen, redigieren usw. können. Teilen und bearbeiten Sie PowerPoint-Präsentationsdateien von überall aus mit Ihren Mobil- oder Desktop-Geräten.</p>
{{< products/product-feature-blocks
featureheading="Sichere und unabhängige .NET-Präsentations-API"
featuretext="Mit Aspose.Slides für .NET haben Sie Zugriff auf einige hervorragende Sicherheitsfunktionen, die eine zuverlässige Präsentationsverarbeitung in .NET ermöglichen. Dazu gehört die Möglichkeit, die Präsentationen mit einem Passwort zu schützen und den schreibgeschützten Modus zu unterstützen. Darüber hinaus ist bei Verwendung der .NET-Präsentations-API keine Installation von Microsoft PowerPoint erforderlich, sodass Sie ein völlig unabhängiges und einzigartiges Benutzererlebnis erhalten."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
faqquery="1. Wie kann ich PowerPoint-Dateien in .NET konvertieren?"
 faqanswer="Das Konvertieren von Microsoft PowerPoint-Dateien in .NET ist mit der Aspose.Slides für .NET-API schnell und einfach. Für die Konvertierung von PPT-, PPTX-, PPS-, PPSX-, POT-, POTX-, PPTM- und ODP-Dateien in verschiedene Dateiformate sind nur wenige Zeilen .NET-Codierung erforderlich."
>}}
   {{< products/faq-block 
faqquery="2. Wie lange dauert das Zusammenführen oder Konvertieren von PowerPoint-Folien?"
 faqanswer="Die .NET-API zum Bearbeiten und Verarbeiten von Präsentationsfolien arbeitet schnell und erledigt die Konvertierung und Zusammenführung Ihrer Präsentationsdateien in kürzester Zeit."
>}}
   {{< products/faq-block
faqquery="3. Ist es sicher, Präsentationen mit der .NET-API zu verarbeiten?"
 faqanswer="Sie können sich auf die Sicherheit Ihrer PowerPoint-Präsentationsdateien verlassen, während Sie sie mit der Aspose.Slides für .NET-API verarbeiten. Wir gewährleisten den Schutz Ihrer Daten und ergreifen alle erforderlichen Maßnahmen, um Ihnen ein sicheres Benutzererlebnis zu bieten."
>}}
   {{< products/faq-block
faqquery="4. Kann ich PowerPoint-Präsentationen unter Mac OS, Windows oder Linux bearbeiten?"
 faqanswer="Ja, die Verarbeitungs-API für PowerPoint-Präsentationen für .NET funktioniert auf verschiedenen Betriebssystemen, Frameworks und Betriebsumgebungen. Sie können es auf der Plattform Ihrer Wahl verwenden und es ist keine zusätzliche Softwareinstallation erforderlich, um zu funktionieren."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Tools zur Manipulation von PowerPoint-Präsentationen"
>}}
   {{< products/popularapp-anchor
 anchorlink="PowerPoint zu PDF"
 moreproducts="https://products.aspose.com/slides/net/conversion/ppt-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PowerPoint zu JPEG"
 moreproducts="https://products.aspose.com/slides/net/conversion/ppt-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PowerPoint zu HTML"
 moreproducts="https://products.aspose.com/slides/net/conversion/ppt-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PPTX zu PDF"
 moreproducts="https://products.aspose.com/slides/net/conversion/pptx-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PPTX zu GIF"
 moreproducts="https://products.aspose.com/slides/net/conversion/pptx-to-gif/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PPTX zu PNG"
 moreproducts="https://products.aspose.com/slides/net/conversion/pptx-to-png/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PPT zusammenführen"
 moreproducts="https://products.aspose.com/slides/net/merger/ppt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PPTX zusammenführen"
 moreproducts="https://products.aspose.com/slides/net/merger/pptx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="ODP zusammenführen"
 moreproducts="https://products.aspose.com/slides/net/merger/odp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="POT zusammenführen"
 moreproducts="https://products.aspose.com/slides/net/merger/pot/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PPTM zusammenführen"
 moreproducts="https://products.aspose.com/slides/net/merger/pptm/"
>}}  
   {{< products/popularapp-anchor
 anchorlink="PPS zusammenführen"
 moreproducts="https://products.aspose.com/slides/net/merger/pps/"
>}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Suche nach Hilfe?"
bartext="Schauen Sie sich unsere Supportkanäle an, um Hilfe bei Ihren Fragen zu den Funktionen und der Funktionsweise der Aspose-Produkt-API zu erhalten."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/slides/net/"
 resourcetxt2="API-Referenz"
 resourcelinks2="https://reference.aspose.com/slides/" 
 resourcetxt3="Wissensbasis"
 resourcelinks3="https://kb.aspose.com/slides/net/"
 resourcetxt4="Kostenloser Support"
 resourcelinks4="https://forum.aspose.com/c/slides/11"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-wrapper
 resource-heading="Ressourcen"
 sectionid="support"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://blog.aspose.com/"
 resourcetitle="Blogs"
 resourcealt="Blogs"
 resourceimg="/images/blog1.svg"
 resourcelistlink="https://blog.aspose.com/slides/convert-ppt-to-video-csharp/"
 resourcelistlink2="https://blog.aspose.com/slides/encrypt-ppt-csharp/"
 resourcelistlink3="https://blog.aspose.com/slides/convert-jpg-to-ppt-csharp/"
 resourcelisttext="Konvertieren Sie PPT in Video in C#"
 resourcelisttext2="PowerPoint in C# verschlüsseln"
 resourcelisttext3="Konvertieren Sie JPG in PPT in C# .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Dokumentation"
 resourcealt="Dokumentation"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/slides/net/features-overview/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.Slides.Net/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.Slides für .NET-Funktionen"
 resourcelisttext2="Installieren Sie Aspose.Slides für das .NET NuGet-Paket"
 resourcelisttext3="Aspose.Slides für .NET Kostenpflichtiger Support-Helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Wissensbasis"
 resourcealt="Codebeispiele"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/slides/net/how-to-merge-slides-in-csharp/"
 resourcelistlink2="https://kb.aspose.com/slides/net/how-to-insert-signature-in-powerpoint-using-csharp/"
 resourcelistlink3="https://kb.aspose.com/slides/net/how-to-create-a-table-in-powerpoint-using-csharp/"
 resourcelisttext="So führen Sie Folien in C# zusammen"
resourcelisttext2="So fügen Sie mit C# eine Signatur in PowerPoint ein"
resourcelisttext3="So erstellen Sie eine Tabelle in PowerPoint mit C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Bereit anzufangen?"
rtstext="Download kostenlose Testversion"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Alle APIs anzeigen"
>}}
