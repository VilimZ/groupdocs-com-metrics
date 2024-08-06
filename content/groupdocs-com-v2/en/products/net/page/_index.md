---
title: Excellent .NET API for EPS, PostScript & XPS File Processing
description: Optimize your productivity with EPS, PostScript, and XPS file processing API for .NET by Aspose. Efficiently convert XPS, PostScript files to PDF, JPEG & more.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle=".NET API for EPS, PostScript, and XPS File Processing"
  inheadertext="Transform your .NET apps by adding PostScript and XPS manipulation features using the Aspose XPS document API for .NET. Seamlessly add, edit, and convert pages, create vector graphic elements, and do much more."
  ctabtn="Download Free Trial"
  ctalink="https://releases.aspose.com/page/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="View All APIs"
  bchomelink="/"
  bchome="Home"
  bcpage="Page"
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
subnav5="https://purchase.aspose.com/pricing/page/net" 
subnavtxt5="Pricing" 
subbtn1="https://docs.aspose.com/page/net/" 
subbtntxt1="Learn"
subbtn2="https://purchase.aspose.com/buy" 
subbtntxt2="Buy"
>}}
   {{< products/subtext-wrapper 
   sectionid="overview"
   subtitle="Empower .NET Solutions with XPS and PS Processing Features"
   subtext="Aspose.Page for .NET offers a comprehensive feature set to manage different page description elements on the .NET platform. It helps developers programmatically create, render, and convert XPS files and manipulate EPS and PostScript documents. Developers can create, add, and modify pages in XPS files, insert text and images into XPS and PostScript files, work with glyphs, canvas, and paths, manipulate vector graphic shape elements and text strings, and manage print tickets. It supports drawing shapes in PostScript documents and using solid color, image, and visual brushes."
   subtext2="The XPS file processing API for .NET boasts excellent conversion capabilities to convert XPS, EPS, and PostScript files to PDF documents and JPEG, PNG, BMP, and TIFF images, EMF, and WMF files. Users can upgrade their .NET page processing solutions by incorporating the supported conversion features for seamlessly converting XPS to PDF, PostScript to PDF, EPS to PDF, XPS to JPEG, PS to PNG, and more. Aspose.Page for .NET provides merging functionality to merge PostScript or XPS documents while also supporting cross-package operations."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Getting Started</h2>
   <p>Please review the following information for conveniently setting up Aspose.Page for .NET. The <a href="https://docs.aspose.com/page/net/system-requirements/">System Requirements</a> page lists the prerequisites to ensure you have the recommended OS, development environment, and framework requirements enabled at your end before installing the PostScript and XPS file processing API.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper 
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Page for .NET Installation"
>}}
<p>Please visit the <a href="https://releases.aspose.com/page/net/">downloads section</a> to download the MSI installer or the DLLs to install the .NET page manipulation library. Or, you can utilize the <a href="https://www.nuget.org/packages/Aspose.Page/">NuGet package</a> to set up the library in the Visual Studio Package Manager Console using the following command:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM > Install-Package Aspose.Page
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Insert Text in XPS and Effortlessly Convert XPS to PDF in .NET" featuretext="Aspose.Page for .NET includes many options for manipulating different elements of page description language (PDL) formats such as PostScript, EPS, and XPS. It allows working with pages, text, and images, and users can build .NET solutions to insert text, images, and new pages into files of supported formats. It is one of the best .NET libraries for XPS to PDF conversion and lets users effortlessly convert PostScript and EPS documents to PDF and raster images."
>}}
   
{{< products/product-feature-blocks-col
featurecolheading="How to Add Text in XPS Files in C#"
>}}
<p>As part of the XPS document generation, manipulation, and processing capabilities of Aspose.Page for .NET API, inserting text into XPS files is a prominent feature. In the following C# code example, we will review how to add text to XPS files quickly and easily, so let’s check the <a href="https://blog.aspose.com/page/insert-image-text-xps-csharp/#section1">steps involved</a>.</p>
<ul>
   <li>Create an <a href="https://reference.aspose.com/page/net/aspose.page.xps/xpsdocument">XPSDocument</a> class object.</li>
   <li>Next, create a brush of a color of your choice.</li>
   <li>Add a glyph to the file.</li>
   <li>Save the XPS document using the Save method.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp2"
>}}
// Create a new XPS Document
XpsDocument doc = new XpsDocument();

// Create a brush 
XpsSolidColorBrush textFill = doc.CreateSolidColorBrush(Color.Black);

// Add glyph to the document
XpsGlyphs glyphs = doc.AddGlyphs("Arial", 12, FontStyle.Regular, 300f, 450f, "Hello World!");
glyphs.Fill = textFill;

// Save the resultant XPS document
doc.Save("AddText_out.xps");

{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col
featurecolheading="How to convert XPS to PDF using C#"
>}}
<p>Developers can enjoy a full-cycle XPS document processing experience in .NET with the XPS library. They can convert XPS files to different formats within their .NET apps. The following steps and C# coding example explain how to convert XPS to PDF on the .NET platform with <a href="https://blog.aspose.com/page/convert-xps-to-pdf-online/#Convert-XPS-to-PDF-in-CSharp">various save options</a>.</p>
<ul>
   <li>Use a Stream class object to load the input XPS file.</li>
   <li>Create a <a href="https://reference.aspose.com/page/net/aspose.page.xps.presentation.pdf/pdfsaveoptions/">PdfSaveOptions</a> class object to set the parameters.</li>
   <li>For the output PDF file, create a rendering device.</li>
   <li>Save the converted XPS file to PDF format.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
// The path to the documents directory.
string dataDir = "C:\\TestFiles\\";

// Initialize PDF output stream
using (Stream pdfStream = File.Open(dataDir + "XPStoPDF.pdf", FileMode.Create, FileAccess.Write))
// Initialize XPS input stream
using (Stream xpsStream = File.Open(dataDir + "input.xps", FileMode.Open, FileAccess.Read))
{
    // Load XPS document form the stream
    XpsDocument document = new XpsDocument(xpsStream, new XpsLoadOptions());

    // Initialize options object with necessary parameters.
    PdfSaveOptions options = new PdfSaveOptions()
    {
        JpegQualityLevel = 100,
        ImageCompression = PdfImageCompression.Jpeg,
        TextCompression = PdfTextCompression.Flate,
        PageNumbers = new int[] { 1 }
    };

    // Create a rendering device for PDF format
    PdfDevice device = new PdfDevice(pdfStream);
    
    // Save the converted PDF document
    document.Save(device, options);
}

{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">Please visit the <a href="https://github.com/aspose-page/Aspose.Page-for-.NET/tree/master/Examples">GitHub examples</a> page of Aspose.Page for .NET API to view more working code examples. If you are looking to view, convert, or sign EPS, PostScript, and XPS documents on the fly, please check our cross-platform <a href="https://products.aspose.app/page/family/">Free Online XPS and PostScript Processing Apps</a> today.</p>
{{< products/product-feature-blocks
featureheading="Efficient PostScript Rendering and Manipulation in .NET"
featuretext="Aspose.Page for .NET API is loaded with features that provide impeccable rendering and manipulation of the PostScript documents. The API supports working with a host of PostScript file elements such as shapes, images, gradients, textures, transparency, text, pages, and more. The advanced PostScript manipulation capability allows developers to augment their existing page processing solutions in .NET by efficiently integrating the PS document manipulation functionality or building new solutions from scratch."
>}}
{{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
faqquery="1. How can I convert XPS, EPS, and PS files on the .NET platform?"
faqanswer="Converting these files in .NET is quick and easy using the EPS, PostScript, and XPS file processing API for .NET. It helps you seamlessly convert PS, EPS, and XPS files to PDF, JPEG, PNG, TIFF, BMP, EMF, WMF, and more."
>}}
   {{< products/faq-block 
faqquery="2. How long it takes to process XPS and PostScript files and convert them?"
faqanswer="The XPS document API works fast and completes your PostScript and XPS file reading, writing, converting, and processing requests in no time."
>}}
   {{< products/faq-block
faqquery="3. Is it safe to process PostScript and XPS documents using the .NET API?"
faqanswer="You can be sure of the security of your data files while processing them using the PS file manipulation API. We ensure the privacy of your data and take all required measures to provide you with a secure user experience."
>}}
   {{< products/faq-block
faqquery="4. Can I process XPS data files on different operating systems?"
faqanswer="Yes, the .NET XPS library works across different OS, frameworks, and operating environments. You can use it on the platform of your choice & it does not require any additional software installation to function."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="XPS and PostScript Manipulation Tools"
>}}
   {{< products/popularapp-anchor
 anchorlink="PostScript to PDF"
moreproducts="https://products.aspose.com/page/net/conversion/ps-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PostScript to JPEG"
moreproducts="https://products.aspose.com/page/net/conversion/ps-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PostScript to EPS"
moreproducts="https://products.aspose.com/page/net/conversion/ps-to-eps/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PostScript to PNG"
moreproducts="https://products.aspose.com/page/net/conversion/ps-to-png/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="XPS to PDF"
moreproducts="https://products.aspose.com/page/net/conversion/xps-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="XPS to JPEG"
moreproducts="https://products.aspose.com/page/net/conversion/xps-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="XPS to PNG"
moreproducts="https://products.aspose.com/page/net/conversion/xps-to-png/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="XPS to TIFF"
moreproducts="https://products.aspose.com/page/net/conversion/xps-to-tiff/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="EPS to PDF"
moreproducts="https://products.aspose.com/page/net/conversion/eps-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="EPS to JPEG"
moreproducts="https://products.aspose.com/page/net/conversion/eps-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Merge XPS Files"
moreproducts="https://products.aspose.com/page/net/merge-xps-files/"
>}}  
   {{< products/popularapp-anchor
 anchorlink="Merge PostScript to PDF"
moreproducts="https://products.aspose.com/page/net/merge-ps-to-pdf/"
>}}  
   
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Looking for help?"
bartext="Checkout our support channels for help with your questions related to Aspose product API features and working."
resourcetxt1="Docs"
resourcelinks1="https://docs.aspose.com/page/net/"
 resourcetxt2="API Reference"
 resourcelinks2="https://reference.aspose.com/page/net/"
 resourcetxt3="Knowledge Base"
 resourcelinks3="https://kb.aspose.com/page/net/"
 resourcetxt4="Free Support"
 resourcelinks4="https://forum.aspose.com/c/page/39"
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
 resourcelistlink="https://blog.aspose.com/page/merge-combine-ps-postscript-csharp/"
 resourcelistlink2="https://blog.aspose.com/page/merge-combine-xps-csharp/"
 resourcelistlink3="https://blog.aspose.com/page/convert-eps-ps-postscript-to-word-csharp/"
 resourcelisttext="Merge PostScript Files Programmatically in C#"
 resourcelisttext2="Merge or Combine XPS Files in C#"
 resourcelisttext3="Convert EPS or PS Files to Word Documents in C#"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Documentation"
 resourcealt="Documentation"
 resourceimg="/images/docs1.svg"
 resourcelistlink="https://docs.aspose.com/page/net/feature-list/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.Page/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.Page for .NET Features"
 resourcelisttext2="Install Aspose.Page for .NET NuGet Package"
 resourcelisttext3="Aspose.Page for .NET Paid Support Helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Knowledge Base"
 resourcealt="Code Samples"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/page/net/how-to-convert-eps-to-tiff-in-c-sharp/"
 resourcelistlink2="https://kb.aspose.com/page/net/how-to-convert-eps-to-pdf-in-csharp/"
 resourcelistlink3="https://kb.aspose.com/page/net/how-to-convert-xps-to-jpg-in-csharp/"
 resourcelisttext="How to Convert EPS to TIFF in C#"
resourcelisttext2="How to Convert EPS to PDF in C#"
 resourcelisttext3="How to Convert XPS to JPG in C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Ready to get started?"
rtstext="Download Free Trial"
rtslink="https://releases.aspose.com/page/net/"
rtslink2="https://products.aspose.com"
rtstext2="View All APIs"
>}}
