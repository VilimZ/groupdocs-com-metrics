---
title: .NET Visio Diagram API to Create, Edit, and Process Diagrams
description: C# .NET Visio Diagram API for creating, editing, and processing VSD, VSX, VTX, VSDX, and other Visio files. Convert diagrams to PDF, PNG & HTML formats.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle=".NET Visio Diagram API to Create, Edit, Export, and Process Diagrams"
  inheadertext="The ultimate .NET diagramming API to flawlessly generate, manipulate, and convert Microsoft Visio file formats such as VSD, VDX, VSX, VSX, VSSX, VTX, and VTSX with C#, ASP.NET, and VB.NET-based Visio diagram file processing apps."
  ctabtn="Download Free Trial"
  ctalink="https://releases.aspose.com/diagram/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="View All APIs"
  bchomelink="/"
  bchome="Home"
  bcpage="Diagram"
  bclink2="Products"
  bclink3=".NET"
  bclink2url="/products/"
  bclink3url="/products/net/"
  >}}
{{< homepage/conholdate/com/inner-wrapper/sub-nav 
subnav1="#overview"
subnavtxt1="Overview" 
subnav2="#features"
subnavtxt2="Features" 
subnav3="#support"
subnavtxt3="Support" 
subnav4="#examples"
subnavtxt4="Examples" 
subnav5="https://purchase.aspose.com/pricing/diagram/net"
subnavtxt5="Pricing" 
subbtn1="https://docs.aspose.com/diagram/net/"
subbtntxt1="Learn"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Buy"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="A full-featured .NET API for processing Microsoft Visio diagrams"
   subtext="Aspose.Diagram for .NET is a flexible and comprehensive Visio diagram API allowing software and app developers to create powerful Visio file processing apps across C#, ASP.NET, and VB.NET. With the help of this native .NET diagramming API, you can build mobile applications, desktop solutions, and tools for web interfaces to create, modify, transform, and export Microsoft Visio diagrams. Aspose.Diagram for .NET library supports popular Visio file formats such as VSD, VSDX, VTX, VDX, VSX, VSSX, VTSX, VSDM, and VSSM. You can quickly and easily develop sophisticated diagram conversion solutions using this .NET Visio diagram API and convert your Visio files to PDF, JPG, PNG, BMP, HTML, XPS, SVG, and EMF file formats."
   subtext2="Among many of its advanced Visio file processing features, Aspose.Diagram for .NET enables rotating shapes, retrieving information about connectors and fonts, grouping shapes, injecting images into drawings, adding new pages to Visio drawings, and doing much more. Furthermore, you can also draw rectangles, polylines, Bezier, and many other shapes on Visio pages."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Getting Started</h2>
   <p>Please check the prerequisites on the <a href="https://docs.aspose.com/diagram/net/system-requirements/">System Requirements</a> page before setting up the .NET diagramming API for an optimized installation and API usage experience.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Diagram for .NET Installation"
>}}
<p>To install Aspose.Diagram for .NET API, you can download the DLLs or the MSI installer from the <a href="https://releases.aspose.com/diagram/net/">downloads section</a>. Or, you can use the <a href="https://www.nuget.org/packages/Aspose.Diagram/">NuGet package</a> to set up the Visio diagram API for .NET. The command for the package manager console is given below:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM > Install-Package Aspose.Diagram 
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="How to Create Visio Diagrams From Scratch and Convert Visio to PDF in .NET"
featuretext="Developers can programmatically create MS Visio diagrams from scratch using Aspose.Diagram for .NET library. You can effortlessly insert new pages and shapes, or manipulate different shape properties in the diagram files you create. Independently converting the VSD and VSDX Visio diagram formats to PDF files in high fidelity is also supported by the .NET diagramming API."
>}}
   
{{< products/product-feature-blocks-col
featurecolheading="Create Visio Diagrams from Scratch in .NET"
>}}
<p>Aspose.Diagram for .NET API is a complete diagram manipulation solution enabling developers to create Visio diagrams loaded with all essential elements such as shapes, flowcharts, comments, and much more. You can use the .NET diagram API to create Visio documents from scratch with the help of the below-given steps and information:</p>
<ul>
   <li>Check if the directory to save the file exists.</li>
   <li>Create a directory if it doesn’t exist.</li>
   <li>Initialize an object of the <a href="https://reference.aspose.com/diagram/net/aspose.diagram/diagram">Diagram</a> class.</li>
   <li>Save the diagram as VSDX using <a href="https://reference.aspose.com/diagram/net/aspose.diagram.diagram/save/methods/2">Diagram.Save(String fileName, SaveFileFormat.VSDX)</a> method.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp2"
>}}
// The path to the documents directory.
string dataDir = RunExamples.GetDataDir_Diagrams();
// Create a directory if it is not already present.
bool IsExists = System.IO.Directory.Exists(dataDir);
if (!IsExists)
    System.IO.Directory.CreateDirectory(dataDir);
// Initialize a new Visio
Diagram diagram = new Diagram();
dataDir = dataDir + "CreateDiagram_out.vsdx";
// Save in the VSDX format
diagram.Save(dataDir, SaveFileFormat.VSDX);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col
featurecolheading="Convert MS Visio Diagrams to PDF in .NET"
>}}
<p>Converting files to PDF format makes sharing and accessing them easier across multiple devices. Aspose.Diagram for .NET API allows converting Visio diagrams to PDF format within your C# .NET apps. You can programmatically convert VSD or VSDX to PDF with high conversion quality. The following steps and information will help you in achieving this:</p>
<ul>
   <li>Initialize the <a href="https://apireference.aspose.com/diagram/net/aspose.diagram">Diagram</a> class object to load the input Visio file to convert.</li>
   <li>Instantiate the <a href="https://reference.aspose.com/diagram/net/aspose.diagram.saving/pdfsaveoptions/">PdfSaveOptions</a> class object.</li>
   <li>Set file properties like page count and page index.</li>
   <li>Save the output file as PDF.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
// Load Visio diagram
Aspose.Diagram.Diagram diagram = new Aspose.Diagram.Diagram("Sample.vsd");

// Declare PdfSaveOptions object
Aspose.Diagram.Saving.PdfSaveOptions saveOptions = new Aspose.Diagram.Saving.PdfSaveOptions();

// Number of pages to render
saveOptions.PageCount = 2;

// Set first page index
saveOptions.PageIndex = 1;

// Save Visio diagram to PDF
diagram.Save("PDF_out.pdf", saveOptions);

Console.WriteLine("Done");
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">More working examples of Aspose.Diagram for .NET API are available on the <a href="https://github.com/aspose-diagram/Aspose.Diagram-for-.NET/tree/master/Examples">GitHub Examples</a> page. We offer <a href="https://products.aspose.app/diagram/family/">free online apps</a> of Aspose.Diagram to edit, view, convert, merge, watermark, split, and compress Microsoft Visio diagram files on the fly using your mobile or desktop devices. Please feel free to try the online apps for manipulating Visio diagrams from anywhere.</p>
{{< products/product-feature-blocks
featureheading="Independently manipulate and print Visio files"
featuretext="Aspose.Diagram for .NET API allows accessing and reading data from Microsoft Visio files, processing it, and printing the processed files in high quality with multiple printing options, using minimum coding. You do not need to install Microsoft Office or Microsoft Visio when processing Visio diagram files with Aspose.Diagram for .NET, giving you an independent user experience."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
   >}}
   {{< products/faq-block
   faqquery="1. How can I convert Microsoft Visio Diagrams in .NET?"
   faqanswer="Converting Visio diagrams in .NET is quick and easy using Aspose.Diagram for .NET API. Only a few lines of .NET coding are needed to convert your VSD, VSDX, VSX, VTX, VDX, VSDM, and other diagram files to different file formats."
   >}}
   {{< products/faq-block
   faqquery="2. How long it takes to convert or process Visio diagrams?"
   faqanswer="The .NET diagram API works fast and completes your diagram conversion requests in no time."
   >}}
   {{< products/faq-block
   faqquery="3. Is it safe to process Visio diagrams using the .NET API?"
   faqanswer="You can be sure of the security of your diagram files while processing them using Aspose.Diagram for .NET API. We ensure the privacy of your data and take all required measures to provide you with a secure user experience."
   >}}
   {{< products/faq-block
   faqquery="4. Can I process MS Visio diagrams on Mac OS, Windows, or Linux?"
   faqanswer="Yes, the diagramming API for .NET works across different OS, frameworks, and operating environments. You can use it on the platform of your choice and it does not require any additional software installation to function."
   >}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Visio Diagrams Manipulation Tools"
>}}
   {{< products/popularapp-anchor
anchorlink="VSD to VSSX"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsd-to-vssx/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDX to VSTM"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdx-to-vstm/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VDX to VSDX"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vdx-to-vsdx/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDM to VSSM"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdm-to-vssm/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSD to TIFF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsd-to-tiff/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDX to BMP"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdx-to-bmp/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDM to JPEG"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdm-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VDX to PNG"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vdx-to-png/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSD to PDF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsd-to-pdf/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDX to PDF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdx-to-pdf/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSX to PDF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsx-to-pdf/"
>}}  
   {{< products/popularapp-anchor
anchorlink="VSTM to PDF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vstm-to-pdf/"
>}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Looking for help?"
bartext="Checkout our support channels for help with your questions related to Aspose product API features and working."
resourcetxt1="Docs"
resourcelinks1="https://docs.aspose.com/diagram/net/"
resourcetxt2="API Reference"
resourcelinks2="https://reference.aspose.com/diagram/" 
resourcetxt3="Knowledge Base"
resourcelinks3="https://kb.aspose.com/diagram/net/"
resourcetxt4="Free Support"
resourcelinks4="https://forum.aspose.com/c/diagram/17"
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
resourcelistlink="https://blog.aspose.com/diagram/convert-image-to-visio-in-csharp/"
resourcelistlink2="https://blog.aspose.com/diagram/create-org-chart-csharp/"
resourcelistlink3="https://blog.aspose.com/diagram/find-replace-visio-text-csharp/"
resourcelisttext="Convert Image to Visio in C#"
resourcelisttext2="Create ORG Chart Programmatically in C#"
resourcelisttext3="Find and Replace Text in Visio Files in C#"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://docs.aspose.com/"
resourcetitle="Documentation"
resourcealt="Documentation"
resourceimg="/img/docs1.svg"
resourcelistlink="https://docs.aspose.com/diagram/net/feature-list/"
resourcelistlink2="https://www.nuget.org/packages/Aspose.Diagram/"
resourcelistlink3="https://helpdesk.aspose.com/"
resourcelisttext="Aspose.Diagram for .NET Features"
resourcelisttext2="Install Aspose.Diagram for .NET NuGet Package"
resourcelisttext3="Aspose.Diagram for .NET Paid Support Helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://kb.aspose.com/"
resourcetitle="Knowledge Base"
resourcealt="Code Samples"
resourceimg="/images/code1.svg"
resourcelistlink="https://kb.aspose.com/diagram/net/how-to-add-comment-to-visio-drawings-in-c-sharp/"
resourcelistlink2="https://kb.aspose.com/diagram/net/how-to-merge-visio-files-in-csharp/"
resourcelistlink3="https://kb.aspose.com/diagram/net/how-to-convert-vsx-to-html-in-c-sharp/"
resourcelisttext="How to Add Comments to Visio Drawings in C#"
resourcelisttext2="How to Merge Visio Files in C#"
resourcelisttext3="How to Convert VSX to HTML in C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Ready to get started?"
rtstext="Download Free Trial"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="View All APIs"
>}}
