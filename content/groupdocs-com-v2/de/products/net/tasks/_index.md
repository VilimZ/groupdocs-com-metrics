---
title: .NET-API zum Verwalten und Verarbeiten von Microsoft Project-Dateien
description: Eine zuverlässige .NET-Projektverwaltungs-API zur Verarbeitung von Microsoft Project-Dateien. Generieren, konvertieren und bearbeiten Sie MPP-, MPT- und MPX-Projektdateien in .NET-Apps.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="C# .NET API zum Verwalten und Verarbeiten von Microsoft Project-Dateien"
  inheadertext="Erstellen, bearbeiten, exportieren und verarbeiten Sie Ihre Microsoft Project-Dateiformate wie MPP, MPT, MPX und XML nahtlos in den C# .NET-Projektmanagement-Apps. Konvertieren Sie MS Project-Dokumente mithilfe der .NET Project-Dateiverarbeitungs-API in die Formate PDF, Excel, Primavera, HTML, TXT, PNG, JPEG und SVG."
  ctabtn="Download kostenlose Testversion"
  ctabtn="Download kostenlose Testversion"
  ctalink="https://releases.aspose.com/tasks/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Alle APIs anzeigen"
  bchomelink="/"
  bchome="Heim"
  bcpage="Aufgaben"
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
subnav5="https://purchase.aspose.com/pricing/tasks/net"
subnavtxt5="Preisgestaltung" 
subbtn1="https://docs.aspose.com/tasks/net/"
subbtntxt1="Lernen"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Kaufen"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Die führende Projektmanagement-API zur Verarbeitung von MS Project-Dateien in .NET"
   subtext="Aspose.Tasks für .NET ist eine robuste API zur Verarbeitung verschiedener Microsoft Project-Dateiformate. Es ermöglicht .NET-Entwicklern das programmgesteuerte Lesen, Ändern, Konvertieren und Exportieren von Projektdateien in mehrere Formate. Mit dieser .NET-API für Microsoft Project-Dateien können Sie Ihre Projektmanagementdaten intelligent bearbeiten und verschiedene Ressourcen verwalten. Aspose.Tasks für .NET ist eine vollständige Projektressourcenmanagementlösung und ermöglicht die Arbeit mit passwortgeschützten Projektdokumenten, das Sortieren und Entsperren von Microsoft Project-Dateien, die Ressourcenplanung und -verfolgung, die Bearbeitung von Aufgaben sowie die Verwaltung von Kosten und Meilensteinen."
   subtext2="Sie können beim Exportieren und Drucken der Projektdateien mithilfe der C# .NET-Projektverwaltungs-API auch benutzerdefinierte Gantt-Diagramme hinzufügen, die die genaue Konvertierung Ihrer Projektdateien in PDF, Primavera, Excel-Tabellen, Text, HTML, JPEG, BMP und PNG unterstützt Rasterbilder und SVG-Vektoren."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Erste Schritte</h2>
   <p>Bitte beachten Sie die folgenden Informationen zum Einrichten der Aspose.Tasks für die .NET-Bibliothek. Bitte überprüfen Sie die Seite <a href="https://docs.aspose.com/tasks/net/system-requirements/">Systemanforderungen</a> auf eine Liste der Voraussetzungen, bevor Sie die .NET-Projektverwaltungs-API installieren.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Tasks für die .NET-Installation"
>}}
<p>Um die DLLs oder das MSI-Installationsprogramm direkt herunterzuladen, besuchen Sie bitte den <a href="https://releases.aspose.com/tasks/net/">Download-Bereich</a>. Sie können die .NET-API auch zum Verarbeiten von Microsoft Project-Dateien mithilfe des <a href="https://www.nuget.org/packages/Aspose.Tasks/">NuGet-Pakets</a> installieren. Der Paketmanager-Konsolenbefehl für die API-Einrichtung wird unten geteilt:</p>
{{< products/product-feature-blocks-snip
 snipclass="greysnipp"
 copyID="snipp1"
>}}
PM > Install-Package Aspose.Tasks
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
 featureheading="So konvertieren Sie MPP-Projektdateien mühelos in PDF- und Rasterbilddateiformate"
 featuretext="Die Aspose.Tasks for .NET-Bibliothek ermöglicht die schnelle und einfache Verarbeitung von Projektmanagementdateien und ermöglicht die Konvertierung der Projektdateien in bekannte Dokument- und Bilddateiformate wie PDF, Primavera, Excel, Text, HTML, PNG, SVG, JPEG. und BMP."
>}}
{{< products/product-feature-blocks-col
featurecolheading="Konvertieren Sie MPP in PDF in .NET"
>}}
<p>Konvertieren Sie Projektdateien in Ihren .NET-Dateikonvertierungs-Apps effizient in das PDF-Format. Die Aspose.Tasks for .NET-Bibliothek ermöglicht die Konvertierung der MPP-Dateien in PDF mit nur wenigen Zeilen .NET-Codierung. Bitte überprüfen Sie die unten aufgeführten Anweisungen und den Beispielcode zum Konvertieren von MPP-Dokumenten in das PDF-Dateiformat mit der .NET-API zur Verarbeitung von Microsoft Project-Dateien:</p>
<ul>
   <li>Laden Sie die zu konvertierende MPP-Datei mit der <a href="https://reference.aspose.com/tasks/net/aspose.tasks/project">Projektklasse</a></li>
   <li>Fügen Sie Änderungen zur MPP-Datei hinzu (optional).</li>
   <li>Konvertieren Sie die MPP-Datei in das PDF-Format und exportieren Sie sie mit der Methode <a href="https://reference.aspose.com/tasks/net/aspose.tasks/project/methods/save/index">Speichern</a> .</li>
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
featurecolheading="Konvertieren Sie Projektdateien in Bilder"
>}}
<p>Mit der Aspose.Tasks für .NET-API können Sie Ihre Projektdaten ganz einfach in PNG- oder JPEG-Bilder konvertieren. Es erfordert nur minimalen Programmieraufwand und ermöglicht den Export von Daten in Bildformate, was eine bequeme Speicherung und Zugriff auf mehrere Geräte ermöglicht. Die folgenden Informationen und Codeausschnitte helfen Ihnen bei der Konvertierung von Microsoft Project-Daten in JPEG-Bilder mithilfe der .NET-Projektverwaltungs-API:</p>
<ul>
   <li>Laden Sie die Projekt-MPP-Datei mit der Klasse <a href="https://reference.aspose.com/tasks/net/aspose.tasks/project">Project</a>.</li>
   <li>Erstellen Sie eine Instanz der Klasse <a href="https://reference.aspose.com/tasks/net/aspose.tasks.saving/imagesaveoptions">ImageSaveOptions</a> mit <a href="https://reference.aspose.com/tasks/net/aspose.tasks.saving/savefileformat">SaveFileFormat.JPEG</a> Aufzählung.</li>
   <li>Geben Sie die JPEG-Bildqualität mit der Eigenschaft <a href="https://reference.aspose.com/tasks/net/aspose.tasks.saving/imagesaveoptions/properties/jpegquality">JpegQuality</a> an. Der zulässige Wertebereich liegt zwischen 0 und 100.</li>
   <li>Konvertieren und speichern Sie das JPEG-Bild mit der Methode <a href="https://reference.aspose.com/tasks/net/aspose.tasks.project/save/methods/6">Speichern</a>.</li>
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
   <p class="col-lg-12">Bitte besuchen Sie die Seite <a href="https://github.com/aspose-tasks/Aspose.Tasks-for-.NET/tree/master/Examples">GitHub-Beispiele</a> von Aspose.Tasks für .NET API zum Anzeigen weiterer Codebeispiele und Arbeitsbeispiele. Mit den <a href="https://products.aspose.app/tasks/family">kostenlosen Online</a>-Apps für die Datenverarbeitung im Projektmanagement können Sie Microsoft Project-Dateien auf Ihrem Desktop oder auf Mobilgeräten anzeigen, konvertieren und bearbeiten .</p>
{{< products/product-feature-blocks
 featureheading="Führen Sie Microsoft Project-Dateien in C# .NET-Apps zum Zusammenführen von Dateien zusammen"
 featuretext="Aspose.Tasks für .NET ermöglicht das einfache Zusammenführen verschiedener Dateien. Die programmgesteuerte Kombination von MPP-, MPX-, MPT- und JIRA-Dateien mit PDF, Primavera und anderen Dateiformaten wird von der .NET-Projektverwaltungs-API unterstützt. Darüber hinaus müssen Sie weder Microsoft Project noch Microsoft Office installieren, um Projektdateien in den C# .NET-Dokumentverarbeitungs-Apps zu bearbeiten."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
 faqquery="1. Wie kann ich Projektdateien in .NET konvertieren?"
 faqanswer="Das Konvertieren von Microsoft Project-Dateien in .NET ist mit der Aspose.Tasks für .NET-API schnell und einfach. Für die Konvertierung von MPP-, MPX-, MPT-, XML- und anderen Projektdateien in verschiedene Dokument- und Bilddateiformate sind nur wenige Zeilen .NET-Codierung erforderlich."
>}}
   {{< products/faq-block 
 faqquery="2. Wie lange dauert das Konvertieren oder Zusammenführen von Projektmanagementdateien?"
 faqanswer="Die .NET-API zum Verwalten und Verarbeiten von Microsoft Project-Dateien arbeitet schnell und erledigt Ihre Anfragen zum Zusammenführen oder Konvertieren von Dateien in kürzester Zeit."
>}}
   {{< products/faq-block
 faqquery="3. Ist es sicher, Projektmanagementdaten mithilfe der .NET-API zu verarbeiten?"
 faqanswer="Sie können sich auf die Sicherheit Ihrer Projektdatendateien verlassen, während Sie diese mit der Aspose.Tasks für .NET-API verarbeiten. Wir gewährleisten den Schutz Ihrer Daten und ergreifen alle erforderlichen Maßnahmen, um Ihnen ein sicheres Benutzererlebnis zu bieten."
>}}
   {{< products/faq-block
 faqquery="4. Kann ich Projektdateien unter Mac OS, Windows oder Linux verarbeiten?"
 faqanswer="Ja, die Projektdateiverarbeitungs-API für .NET funktioniert auf verschiedenen Betriebssystemen, Frameworks und Betriebsumgebungen. Sie können es auf der Plattform Ihrer Wahl verwenden und es ist keine zusätzliche Softwareinstallation erforderlich, um zu funktionieren."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Tools zur Dateibearbeitung im Projektmanagement"
>}}
   {{< products/popularapp-anchor
 anchorlink="MPP zu PDF"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPP zu XLSX"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-xlsx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPP zu HTML"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPP zu JPEG"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPP zu PNG"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-png/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPP zu BMP"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-bmp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPT zu XLSX"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpt-to-xlsx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPT zu JPEG"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpt-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JIRA zu MPP"
 moreproducts="https://products.aspose.com/tasks/net/merger/jira-to-mpp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="XML zu MPP"
 moreproducts="https://products.aspose.com/tasks/net/merger/xml-to-mpp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPX zu PDF"
 moreproducts="https://products.aspose.com/tasks/net/merger/mpx-to-pdf/"
>}}  
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Suche nach Hilfe?"
bartext="Schauen Sie sich unsere Supportkanäle an, um Hilfe bei Ihren Fragen zu den Funktionen und der Funktionsweise der Aspose-Produkt-API zu erhalten."
resourcetxt1="Docs"
resourcelinks1="https://docs.aspose.com/tasks/net/"
resourcetxt2="API-Referenz"
resourcelinks2="https://reference.aspose.com/tasks/"
resourcetxt3="Wissensbasis"
resourcelinks3="https://kb.aspose.com/tasks/net/"
resourcetxt4="Kostenloser Support"
resourcelinks4="https://forum.aspose.com/c/tasks/15"
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
resourcelistlink="https://blog.aspose.com/tasks/convert-mpp-to-mpx-in-csharp/"
resourcelistlink2="https://blog.aspose.com/tasks/convert-ms-project-to-pdf-in-csharp/"
resourcelistlink3="https://blog.aspose.com/tasks/convert-mpp-to-tiff-in-csharp/"
resourcelisttext="Konvertieren Sie MPP in MPX in C#"
resourcelisttext2="Konvertieren Sie Microsoft Project in C# .NET in PDF"
resourcelisttext3="Konvertieren Sie MPP in TIFF in C# .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://docs.aspose.com/"
resourcetitle="Dokumentation"
resourcealt="Dokumentation"
resourceimg="/img/docs1.svg"
resourcelistlink="https://docs.aspose.com/tasks/net/product-overview/#rich-features"
resourcelistlink2="https://www.nuget.org/packages/Aspose.Tasks/"
resourcelistlink3="https://helpdesk.aspose.com/"
resourcelisttext="Aspose.Tasks für .NET-Funktionen"
resourcelisttext2="Installieren Sie Aspose.Tasks für das .NET NuGet-Paket"
resourcelisttext3="Aspose.Tasks für .NET Kostenpflichtiger Support-Helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://kb.aspose.com/"
resourcetitle="Wissensbasis"
resourcealt="Codebeispiele"
resourceimg="/images/code1.svg"
resourcelistlink="https://kb.aspose.com/tasks/net/how-to-convert-mpp-to-excel-using-csharp/"
resourcelistlink2="https://kb.aspose.com/tasks/net/how-to-extract-microsoft-project-file-metadata-in-c-sharp/"
resourcelistlink3="https://kb.aspose.com/tasks/net/how-to-add-weekdays-in-mpp-using-csharp/"
resourcelisttext="So konvertieren Sie MPP mit C# in Excel"
resourcelisttext2="So extrahieren Sie MS Project-Dateimetadaten in C#"
resourcelisttext3="So fügen Sie Wochentage in MPP mit C# hinzu"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Bereit anzufangen?"
rtstext="Download kostenlose Testversion"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Alle APIs anzeigen"
>}}
