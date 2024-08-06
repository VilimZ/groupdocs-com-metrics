---
title: Powerful .NET Typesetting API to Convert TeX & LaTeX to PDF
description: Instantly convert TeX and LaTeX files to high-quality PDFs, JPEG, SVG & PNG images with the feature-rich Aspose .NET Typesetting API for developers.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="Powerful .NET Typesetting API to Convert TeX and LaTeX to PDF"
  inheadertext="Effortlessly integrate typesetting functionality into your apps to typeset TeX and LaTeX files and accurately generate PDFs, raster images, and vectors."
  ctabtn="Download Free Trial"
  ctalink="https://releases.aspose.com/tex/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="View All APIs"
  bchomelink="/"
  bchome="Home"
  bcpage="TeX"
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
subnav5="https://purchase.aspose.com/pricing/tex/net" 
subnavtxt5="Pricing" 
subbtn1="https://docs.aspose.com/tex/net/" 
subbtntxt1="Learn"
subbtn2="https://purchase.aspose.com/buy" 
subbtntxt2="Buy"
>}}
   {{< products/subtext-wrapper 
   sectionid="overview"
   subtitle="Automate TeX Document Processing Workflows in .NET"
   subtext="Aspose.TeX for .NET provides typesetting capabilities to developers looking to process TeX and LaTeX files in their .NET solutions. Using the API, developers can programmatically generate PDF documents from TeX and LaTeX files and convert these files to XPS documents, JPEG, PNG, BMP, and TIFF raster image formats, as well as SVG vectors. Our API helps end users typeset TeX files and make custom TeX formats."
   subtext2="The .NET typesetting API enables developers to load TeX files from various sources, typeset them, convert them to multiple file formats, export them to ZIP archives, generate customized TeX formats, create mathematical equations in LaTeX, and do more. Aspose.TeX for .NET is a powerful library with easy-to-use features that allow users to automate TeX and LaTeX document processing solutions and conveniently optimize their existing workflows."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Getting Started</h2>
   <p>Before getting started and installing Aspose.TeX for .NET, please visit the <a href="https://docs.aspose.com/tex/net/system-requirements/">System Requirements</a> page. This page provides the recommended framework, OS, and development environment information. Please ensure compliance with the settings outlined on this page to enjoy a smooth API usage experience.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper 
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.TeX for .NET Installation"
>}}
<p>Please download the MSI installer or the DLLs of the .NET TeX file typesetting library from the <a href="https://releases.aspose.com/tex/net/">downloads section</a> to set up the library. You can also install the library using the <a href="https://www.nuget.org/packages/Aspose.TeX/">NuGet package</a>. The command for the Visual Studio package manager console is provided below:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM > Install-Package Aspose.TeX
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Learn to Convert TeX to PDF and LaTeX to JPG in .NET Solutions" featuretext="Aspose.TeX for .NET supports converting TeX files to multiple formats, including PDF and XPS. Developers can export TeX to PDF documents and images within their .NET solutions using the API methods. Converting LaTeX files to raster images is another functionality available to end users. In this section, we will learn how to programmatically convert TeX to PDF and LaTeX to JPG using the .NET typesetting API."
>}}
   
{{< products/product-feature-blocks-col
featurecolheading="Convert TeX to PDF using C#"
>}}
<p>Let’s review the following coding example to learn how to accurately convert TeX to PDF using the .NET library for typesetting.</p>
<ul>
   <li>Create the typesetting options for the default <a href="https://reference.aspose.com/tex/net/aspose.tex/texconfig/methods/objecttex">ObjectTeX</a> format.</li>
   <li>Specify the console or memory stream as an output terminal.</li>
   <li>Apply the options for rendering to PDF format.</li>
   <li>Use the <a href="https://reference.aspose.com/tex/net/aspose.tex/texjob">TexJob</a> class constructor & save the output PDF with the <a href="https://reference.aspose.com/tex/net/aspose.tex.presentation.pdf/pdfdevice">PdfDevice</a> class object.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp2"
>}}
String dataDir = @"D:\test\";
// Create typesetting options for the default ObjectTeX format.
TeXOptions options = TeXOptions.ConsoleAppOptions(TeXConfig.ObjectTeX());

// Specify a file system working directory for input.
options.InputWorkingDirectory = new InputFileSystemDirectory(dataDir);

// Specify a file system working directory for output.
options.OutputWorkingDirectory = new OutputFileSystemDirectory(dataDir);

// Specify memory stream as output terminal.
options.TerminalOut = new OutputMemoryTerminal();

// Set options for rendering into PDF format.
options.SaveOptions = new PdfSaveOptions();

// Run typesetting.
new TeXJob("hello-world", new PdfDevice(), options);

{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col
featurecolheading="Convert LaTeX to JPG in .NET"
>}}
<p>Our library supports exporting LaTeX files to images, including PNG and JPG. The following example showcases converting LaTeX to JPG.</p>
<ul>
   <li>Load the input LaTeX file.</li>
   <li>Create the conversion options using the <a href="https://reference.aspose.com/tex/net/aspose.tex/texoptions">TeXOptions</a> class object.</li>
   <li>Instantiate the <a href="https://reference.aspose.com/tex/net/aspose.tex.presentation.image/jpegsaveoptions">JpegSaveOptions</a> class object.</li>
   <li>Perform LaTeX to JPG conversion using the TexJob class.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
// Load the input LaTEX or TEX file
byte[] bytes = File.ReadAllBytes("helloworld.ltx");            
Stream stream = new MemoryStream(bytes);

// Create conversion options for Object LaTeX format on Object TeX engine extension.
TeXOptions options = TeXOptions.ConsoleAppOptions(TeXConfig.ObjectLaTeX);

// Specify the file system working directory for the output.
options.OutputWorkingDirectory = new OutputFileSystemDirectory(dataDir);

// Initialize the options for saving in JPG format.
options.SaveOptions = new JpegSaveOptions();

// Run LaTeX to JPG conversion.
new TeXJob(stream, new ImageDevice(), options).Run();

{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12 mb-5">Please check out more complete coding examples of Aspose.TeX for .NET library on the <a href="https://github.com/aspose-tex/Aspose.TeX-for-.NET/tree/master/Aspose.TeX.Examples">GitHub examples</a> page. You can view and convert TeX files from anywhere using your mobile devices with our <a href="https://products.aspose.app/tex/family">Free Online TeX Viewer and Conversion Apps</a>.</p>
{{< products/product-feature-blocks
featureheading="Develop Cross-platform .NET Typesetting Applications"
featuretext="Aspose.TeX for .NET is compatible with multiple frameworks and supports various popular operating systems. Owing to this cross-platform compatibility, developers can build feature-rich typesetting applications that can be easily integrated with the existing software modules. The .NET typesetting API can be used across different development environments for writing optimized application code. Experience platform-independent app development and create PDFs or great-quality raster and vector images using our API."
>}}
{{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
faqquery="1. How can I process TeX and LaTeX files in .NET?"
faqanswer="Processing TeX and LaTeX files is convenient using the Aspose.TeX for .NET library. Our library boasts typesetting ability for TeX files and supports generating PDFs, XPS documents, and images from TeX and LaTeX documents on the .NET platform."
>}}
   {{< products/faq-block 
faqquery="2. How long it takes to process and convert files using the API?"
faqanswer="Our API works fast and completes your file loading, processing, and conversion requests in no time."
>}}
   {{< products/faq-block
faqquery="3. Are code examples available for developers to learn about TeX and LaTeX document processing using the .NET library?"
faqanswer="Yes, we provide coding examples for developers to help them with the initial learning curve. These code samples are available on the GitHub examples page of the .NET library for typesetting and cover various use cases for the library users."
>}}
   {{< products/faq-block
faqquery="4. Is the API secure for sensitive documents and data?"
faqanswer="Yes, our API is secure for sensitive data. We ensure the safety and integrity of your data and take all necessary measures to protect your files processed using our products."
>}}
{{< products/faq-block
faqquery="5. Is Aspose.TeX for .NET compatible with different .NET frameworks?"
faqanswer="Absolutely! The .NET typesetting API is compatible with multiple .NET frameworks and runs smoothly on various operating systems. It does not require additional software installations to typeset TeX files."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="TeX File Manipulation Tools"
>}}
{{< products/popularapp-anchor
 anchorlink="Typeset TeX Files"
moreproducts="https://products.aspose.com/tex/net/typeset-tex-files/"
>}}
{{< products/popularapp-anchor
 anchorlink="Create Math Equations in LaTeX"
moreproducts="https://products.aspose.com/tex/net/latex-math/"
>}}
   {{< products/popularapp-anchor
 anchorlink="TeX to PDF"
moreproducts="https://products.aspose.com/tex/net/conversion/tex-to-pdf/"
>}}
{{< products/popularapp-anchor
 anchorlink="TeX to XPS"
moreproducts="https://products.aspose.com/tex/net/conversion/tex-to-xps/"
>}}
   {{< products/popularapp-anchor
 anchorlink="TeX to JPEG"
moreproducts="https://products.aspose.com/tex/net/conversion/tex-to-jpeg/"
>}}
{{< products/popularapp-anchor
 anchorlink="TeX to PNG"
moreproducts="https://products.aspose.com/tex/net/conversion/tex-to-png/"
>}}
   {{< products/popularapp-anchor
 anchorlink="TeX to SVG"
moreproducts="https://products.aspose.com/tex/net/conversion/tex-to-svg/"
>}}
{{< products/popularapp-anchor
 anchorlink="LaTeX to PDF"
moreproducts="https://products.aspose.com/tex/net/conversion/latex-to-pdf/"
>}}
   {{< products/popularapp-anchor
 anchorlink="LaTeX to XPS"
moreproducts="https://products.aspose.com/tex/net/conversion/latex-to-xps/"
>}}
{{< products/popularapp-anchor
 anchorlink="LaTeX to JPEG"
moreproducts="https://products.aspose.com/tex/net/conversion/latex-to-jpeg/"
>}}
   {{< products/popularapp-anchor
 anchorlink="LaTeX to PNG"
moreproducts="https://products.aspose.com/tex/net/conversion/latex-to-png/"
>}}
{{< products/popularapp-anchor
 anchorlink="LaTeX to SVG"
moreproducts="https://products.aspose.com/tex/net/conversion/latex-to-svg/"
>}}  
{{< /products/popularapp-home-wrapper >}}
{{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Looking for help?"
bartext="Checkout our support channels for help with your questions related to Aspose product API features and working."
resourcetxt1="Docs"
resourcelinks1="https://docs.aspose.com/tex/net/"
 resourcetxt2="API Reference"
 resourcelinks2="https://reference.aspose.com/tex/net/"
 resourcetxt3="Knowledge Base"
 resourcelinks3="https://kb.aspose.com/tex/net/"
 resourcetxt4="Free Support"
 resourcelinks4="https://forum.aspose.com/c/tex/47"
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
 resourcelistlink="https://blog.aspose.com/tex/latex-formula-to-svg-in-csharp/"
 resourcelistlink2="https://blog.aspose.com/tex/convert-latex-to-tiff-using-csharp/"
 resourcelistlink3="https://blog.aspose.com/tex/latex-document-conversion-in-csharp/"
 resourcelisttext="Convert LaTeX Formula to SVG in C#"
 resourcelisttext2="Convert LaTeX to TIFF using C#"
 resourcelisttext3="LaTeX Document Conversion in C#"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Documentation"
 resourcealt="Documentation"
 resourceimg="/images/docs1.svg"
 resourcelistlink="https://docs.aspose.com/tex/net/feature-list/"
 resourcelistlink2="https://docs.aspose.com/tex/net/installation/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.TeX for .NET Features Overview"
 resourcelisttext2="Install Aspose.TeX for .NET"
 resourcelisttext3="Aspose.TeX for .NET Paid Support Helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Knowledge Base"
 resourcealt="Code Samples"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/tex/net/how-to-convert-tex-to-pdf-in-csharp/"
 resourcelistlink2="https://kb.aspose.com/tex/net/how-to-render-latex-to-png-in-c-sharp/"
 resourcelistlink3="https://kb.aspose.com/tex/net/how-to-render-latex-to-png-in-c-sharp/#code-to-render-latex-to-png-in-c"
 resourcelisttext="How to Convert TeX to PDF in C#"
resourcelisttext2="How to Render LaTeX to PNG in C#"
 resourcelisttext3="Code to Render LaTeX to PNG in C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Ready to get started?"
rtstext="Download Free Trial"
rtslink="https://releases.aspose.com/tex/net/"
rtslink2="https://products.aspose.com"
rtstext2="View All APIs"
>}}
