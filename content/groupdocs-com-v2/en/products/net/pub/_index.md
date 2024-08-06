---
title: .NET Publisher API to Easily Process and Convert PUB Files
description: Explore different ways to process and convert PUB files with the reliable .NET Publisher API by Aspose. Read and export PUB files to PDF, Word, JPEG & more.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle=".NET Publisher API to Process and Convert PUB Files Easily"
  inheadertext="Build .NET solutions to effortlessly read and manipulate Microsoft Publisher files using the PUB document API for .NET by Aspose. Convert PUB files to PDF, DOCX, HTML, and raster images."
  ctabtn="Download Free Trial"
  ctalink="https://releases.aspose.com/pub/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="View All APIs"
  bchomelink="/"
  bchome="Home"
  bcpage="PUB"
  bclink2="Products"
  bclink3=".NET"
  bclink2url="/products/"
  bclink3url="/products/net/"
  >}}
{{< homepage/conholdate/com/inner-wrapper/sub-nav 
subnav1="#overview" 
subnavtxt1="Overview" 
subnav3="#support" 
subnavtxt3="Support" 
subnav4="#examples" 
subnavtxt4="Examples" 
subnav5="https://purchase.aspose.com/pricing/pub/net" 
subnavtxt5="Pricing" 
subbtn1="https://docs.aspose.com/pub/net/" 
subbtntxt1="Learn"
subbtn2="https://purchase.aspose.com/buy" 
subbtntxt2="Buy"
>}}
   {{< products/subtext-wrapper 
   sectionid="overview"
   subtitle="Advanced Publisher File Processing in .NET"
   subtext="Aspose.PUB for .NET is a reliable Microsoft Publisher files processing API that helps software and app developers programmatically access, read, edit, and convert PUB files within their .NET apps. It offers advanced PUB file processing capabilities to users looking to integrate editing and conversion of the Publisher files into their existing solutions or build new solutions from scratch. Users can manipulate the metadata of PUB files using the API and further optimize Publisher document workflows."
   subtext2="In addition to the excellent PUB file reading and editing abilities, the robust .NET Publisher API supports converting PUB files to different formats. .NET developers can enhance their file conversion software by adding the functionality to accurately convert PUB to PDF, HTML, Word (DOC/DOCX), JPEG, PNG, and more. Aspose.PUB for .NET is the preferred choice for developers to build cross-platform MS Publisher file reading, modification, and conversion solutions that work on multiple OS and platforms."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Getting Started</h2>
   <p>Please review the following information to help easily set up the PUB files library for .NET. To check if your system meets the recommended settings and prerequisites in terms of the OS, development environment, and frameworks, please visit the <a href="https://docs.aspose.com/pub/net/system-requirements/">System Requirements</a> page of the library.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper 
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.PUB for .NET Installation"
>}}
<p>To directly download the MSI installer or the DLLs and install the library, please visit the <a href="https://releases.aspose.com/pub/net/">downloads section</a> of Aspose.PUB for .NET. Or, you can obtain the <a href="https://www.nuget.org/packages/Aspose.PUB/">NuGet package</a> and install it from the Visual Studio package manager console with the help of the below-given command:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM > Install-Package Aspose.PUB
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Effortless PUB to PDF and Word Document Conversion in .NET" featuretext="Aspose.PUB for .NET library includes conversion functionality that developers can utilize to convert Publisher files to multiple file formats. One of the primary conversion options is PUB to PDF, which allows saving the Publisher documents as PDF documents. Furthermore, the PUB format conversion API enables effortlessly exporting to other files, including documents and raster images."
>}}
   
{{< products/product-feature-blocks-col
featurecolheading="Convert Publisher Files to PDF in C#"
>}}
<p>PDF format has become the standard for file sharing and collaboration as it can easily be accessed and viewed on devices running on any OS. The .NET Publisher API supports converting PUB files to PDF documents, making it possible for programmers to integrate this feature into their MS Publisher file converter apps. In the following C# coding example, we will learn how to convert PUB to PDF.</p>
<ul>
   <li>Load the input PUB file using the <a href="https://reference.aspose.com/pub/net/aspose.pub/pubfactory">PubFactory</a> class.</li>
   <li>Parse the PUB file.</li>
   <li>Convert and save the output PDF document.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp2"
>}}
string fileName = dataDir + "halloween-flyer.pub";

var parser = PubFactory.CreateParser(fileName);

var doc = parser.Parse();

Aspose.Pub.PubFactory.CreatePdfConverter().ConvertToPdf(doc, dataDir + "result_out.pdf");

{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col
featurecolheading="Convert PUB Files to Word Documents in C#"
>}}
<p>Microsoft Word is the leading word-processing software used globally by individual and corporate users. Converting a file to Word format makes for convenient access across multiple OS. Users can seamlessly convert PUB documents to DOC and DOCX formats with the PUB file manipulation library. The following code example shows how to convert PUB to DOCX in C#.</p>
<ul>
   <li>Initialize a MemoryStream for the output document.</li>
   <li>Load and parse the PUB file using <a href="https://reference.aspose.com/pub/net/aspose.pub/ipubparser/methods/parse">IPubParser.Parse()</a> method.</li>
   <li>Convert the PUB file to PDF and add it to a MemoryStream.</li>
   <li>Load the PDF file by initializing a <a href="https://reference.aspose.com/pdf/net/aspose.pdf/docsaveoptions">DocSaveOptions</a> class object.</li>
   <li>Specify the output format (DOC/DOCX) to save the Word document.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
string fileName = "ConvertTest.pub";

// Initialize a MemoryStream to hold the output document
MemoryStream stream = new MemoryStream();

// Load input PUB file
Aspose.Pub.IPubParser parser = Aspose.Pub.PubFactory.CreateParser(fileName);

// Parse the input publisher file
Aspose.Pub.Document doc = parser.Parse();

// Convert the PUB file to PDF and save the result in a MemoryStream
Aspose.Pub.PubFactory.CreatePdfConverter().ConvertToPdf(doc, stream);

// Load input PDF file from the MemoryStream
Aspose.Pdf.Document document = new Document(stream);

// Initialize DocSaveOptions class object
Aspose.Pdf.DocSaveOptions options = new DocSaveOptions();

// Specify the format of the output Word file (DOC/DOCX)
options.Format = DocSaveOptions.DocFormat.Doc;

// Save output word file (DOC/DOCX)
document.Save(dataDir + "Output.doc", options);

{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">You can view more working code examples at the Aspose.PUB for .NET <a href="https://github.com/aspose-pub/Aspose.PUB-for-.NET/tree/master/Examples">GitHub examples</a> page. If you are looking to read, view, or convert Microsoft Publisher documents on the fly using your mobile device, please check out the <a href="https://products.aspose.app/pub/family/">Free Online PUB File Processing Apps</a> we provide.</p>
{{< products/product-feature-blocks
featureheading="PUB File Manipulation with No Dependencies"
featuretext="Aspose.PUB for .NET is a standalone API that does not need additional software installations. Users are not required to set up Microsoft Publisher to work with PUB files on the .NET platform. The .NET Publisher API ensures a no-dependency user experience for anyone working with it to process PUB documents. If you are looking to read and manipulate PUB files or convert them to PDF and various other document and image file formats, Aspose.PUB for .NET is an excellent option for your Windows or Web-based services."
>}}
{{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
faqquery="1. How can I convert PUB files on the .NET platform?"
faqanswer="Converting PUB files in .NET is quick and easy using the .NET Publisher API. It helps you convert PUB files to different formats such as PDF, Word, HTML, JPEG, PNG, and more."
>}}
   {{< products/faq-block 
faqquery="2. How long it takes to process Publisher files and convert them?"
faqanswer="The PUB file manipulation API for .NET works fast and completes your PUB file reading, editing, converting, and processing requests in no time."
>}}
   {{< products/faq-block
faqquery="3. Is it safe to process PUB data files using the .NET API?"
faqanswer="You can be sure of the security of your data files while processing them using the PUB document API. We ensure the privacy of your data and take all required measures to provide you with a secure user experience."
>}}
   {{< products/faq-block
faqquery="4. Can I process Microsoft Publisher files on different operating systems?"
faqanswer="Yes, the .NET PUB files library works across different OS, frameworks, and operating environments. You can use it on the platform of your choice, and it does not require any additional software installation to function."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="PUB File Manipulation Tools"
>}}
   {{< products/popularapp-anchor
 anchorlink="PUB to PDF"
moreproducts="https://products.aspose.com/pub/net/conversion/pub-to-pdf/"
>}} 
     
   
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Looking for help?"
bartext="Checkout our support channels for help with your questions related to Aspose product API features and working."
resourcetxt1="Docs"
resourcelinks1="https://docs.aspose.com/pub/net/"
 resourcetxt2="API Reference"
 resourcelinks2="https://reference.aspose.com/pub/net/"
 resourcetxt3="Knowledge Base"
 resourcelinks3="https://kb.aspose.com/pub/net/"
 resourcetxt4="Free Support"
 resourcelinks4="https://forum.aspose.com/c/pub/40"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-wrapper
 resource-heading="Resources"
 sectionid="support"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://blog.aspose.com/"
 resourcetitle="Blogs"
 resourcealt="Blogs"
 resourceimg="/images/blog1.svg"
 resourcelistlink="https://blog.aspose.com/pub/convert-pub-to-pptx-csharp/"
 resourcelistlink2="https://blog.aspose.com/pub/pub-to-html-xhtml/"
 resourcelistlink3="https://blog.aspose.com/pub/convert-pub-to-png-jpeg-or-tif-image-csharp/"
 resourcelisttext="Convert PUB to PPT/PPTX Presentations in C#"
 resourcelisttext2="Convert PUB to HTML Webpage using C#"
 resourcelisttext3="Convert PUB to JPEG, PNG, or TIF Images using C#"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Documentation"
 resourcealt="Documentation"
 resourceimg="/images/docs1.svg"
 resourcelistlink="https://docs.aspose.com/pub/net/features/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.PUB/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.PUB for .NET Features"
 resourcelisttext2="Install Aspose.PUB for .NET NuGet Package"
 resourcelisttext3="Aspose.PUB for .NET Paid Support Helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Knowledge Base"
 resourcealt="Code Samples"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/pub/net/how-to-convert-pub-to-png-in-c-sharp/"
 resourcelistlink2="https://kb.aspose.com/pub/net/how-to-convert-pub-to-pdf-in-csharp/"
 resourcelistlink3="https://kb.aspose.com/pub/net/how-to-convert-pub-to-jpg-in-csharp/"
 resourcelisttext="How to Convert PUB to PNG in C#"
resourcelisttext2="How to Convert PUB to PDF in C#"
 resourcelisttext3="How to Convert PUB to JPG in C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Ready to get started?"
rtstext="Download Free Trial"
rtslink="https://releases.aspose.com/pub/net/"
rtslink2="https://products.aspose.com"
rtstext2="View All APIs"
>}}
