---
title: Unlock Advanced SVG Editing with .NET SVG Processing API
description: Empower your apps to create, edit, and convert SVG files using Aspose .NET SVG processing API. Effortlessly convert SVG to PDF, JPG, PNG, GIF & more.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="Unlock Advanced SVG Editing using .NET SVG Processing API"
  inheadertext="Streamline SVG manipulation with our API to conveniently load, edit, and convert SVG files to PDF and raster images. Quickly convert raster images to vector graphics."
  ctabtn="Download Free Trial"
  ctalink="https://releases.aspose.com/svg/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="View All APIs"
  bchomelink="/"
  bchome="Home"
  bcpage="SVG"
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
subnav5="https://purchase.aspose.com/pricing/svg/net" 
subnavtxt5="Pricing" 
subbtn1="https://docs.aspose.com/svg/net/" 
subbtntxt1="Learn"
subbtn2="https://purchase.aspose.com/buy" 
subbtntxt2="Buy"
>}}
   {{< products/subtext-wrapper 
   sectionid="overview"
   subtitle="Discover Powerful SVG File Processing Capabilities in .NET"
   subtext="Aspose.SVG for .NET is a comprehensive SVG file processing API for developers to programmatically create, load, edit, convert, and process scalable vector graphics (SVG) files. The API provides various methods to manipulate SVG vectors seamlessly and offers advanced processing features such as editing and merging SVG files. Using our API, developers can build specialized applications to convert SVG files to PDF and XPS documents and JPEG, GIF, BMP, PNG, and TIFF images. It helps users build desktop or web-based solutions capable of handling SVG file manipulation requests and offering scalability to improve performance and response times."
   subtext2="The .NET SVG processing API enables end users to edit SVG files, rotate SVGs, merge multiple SVGs into a single file, optimize and resize SVG files, convert SVG vectors to raster images, use XPath Query to perform content navigation, encode various image files to Base64, and do more. Our API also supports converting raster images to vector graphics within your .NET apps. This feature is useful for replacing the existing raster graphics in a web project with vectors, which improves rendering, compatibility, and data visualization. Aspose.SVG for .NET is a dynamic toolkit that unlocks powerful SVG processing capabilities and covers all your SVG file manipulation and parsing requirements."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Getting Started</h2>
   <p>Please visit the <a href="https://docs.aspose.com/svg/net/getting-started/system-requirements/">System Requirements</a> page before getting started with the .NET SVG processing API. This page lists the recommended operating system, framework, development environment, and other settings. By complying with the requirements outlined on this page, you can enjoy a hassle-free API usage experience.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper 
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.SVG for .NET Installation"
>}}
<p>Please download the MSI installer or the DLLs of the library from the <a href="https://releases.aspose.com/svg/net/">downloads section</a>. You can also use the <a href="https://www.nuget.org/packages/Aspose.SVG/">NuGet package</a> for setting up the .NET library for SVG processing. The command for the Visual Studio package manager console is provided below:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM > Install-Package Aspose.SVG
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Learn to Optimize SVG Files and Seamlessly Convert SVG to PDF in .NET" featuretext="Aspose.SVG for .NET offers immaculate SVG file processing capabilities to developers and helps augment the functionality of the existing solutions. It is a robust library that developers can use to integrate SVG editing, conversion, and other manipulation features into their applications. Our API provides SVG optimization capability, which makes the SVG vectors more efficient. In this section, we will learn to optimize SVG files using the .NET SVG processing API and review how to convert SVG to PDF easily."
>}}
   
{{< products/product-feature-blocks-col
featurecolheading="Optimize SVG Files using C#"
>}}
<p>Optimizing SVG files helps improve efficiency while not compromising the quality of the vector graphics. Let’s review the following C# coding example to learn more about SVG optimization.</p>
<ul>
   <li>Load the input file using the SVGDocument class.</li>
   <li>Instantiate the <a href="https://reference.aspose.com/svg/net/aspose.svg.toolkit.optimizers/svgoptimizationoptions/">SVGOptimizationOptions</a> class.</li>
   <li>Apply the required optimization options.</li>
   <li>Use the <a href="https://reference.aspose.com/svg/net/aspose.svg.toolkit.optimizers/svgoptimizer/optimize/#optimize_1">Optimize</a> method for optimizing the loaded image.</li>
   <li>Save the SVG vector using the Save method.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp2"
>}}
// Load the input SVG file with SVGDocument
var document = new SVGDocument("C:\\Files\\sample.svg");

// Specify optimization options
var options = new SVGOptimizationOptions();

// Path optimization
options.PathOptimizationOptions.FloatPrecision = 2;
options.PathOptimizationOptions.ArcBuildingThreshold = 2;
options.PathOptimizationOptions.ArcBuildingTolerance = 1;

// Optimize document
SVGOptimizer.Optimize(document, options);

// Save the document to a file
document.Save("C:\\Files\\optimized.svg");

{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col
featurecolheading="Easily Convert SVG to PDF in .NET"
>}}
<p>SVG to PDF conversion enhances cross-platform file collaboration as PDF documents are viewable across various devices. Please check out the code sample below to learn how to convert SVG to PDF format using the .NET API for SVG processing.</p>
<ul>
   <li>Load the input SVG using the <a href="https://reference.aspose.com/svg/net/aspose.svg/svgdocument/">SVGDocument</a> class.</li>
   <li>Instantiate the <a href="https://reference.aspose.com/svg/net/aspose.svg.saving/pdfsaveoptions/">PdfSaveOptions</a> class.</li>
   <li>Specify PDF save options such as BackgroundColor, etc.</li>
   <li>Convert SVG to PDF using the <a href="https://reference.aspose.com/svg/net/aspose.svg.converters/converter/convertsvg#convertsvg_3">Converter.ConvertSVG()</a> method.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
// This code example showcases SVG to PDF conversion
// Load the source SVG file
var document = new SVGDocument("C:\\Files\\Fill-Circle.svg");

// Initialize an instance of the PdfSaveOptions class
var saveOptions = new PdfSaveOptions();
saveOptions.BackgroundColor = System.Drawing.Color.DarkBlue;

// Convert SVG to PDF
Converter.ConvertSVG(document, saveOptions, "C:\\Files\\Circles_out.pdf");

{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">You can find more coding examples of Aspose.SVG for .NET API on the <a href="https://github.com/aspose-svg/Aspose.SVG-for-.NET/tree/master/Examples">GitHub examples</a> page. We provide <a href="https://products.aspose.app/svg/family">Free Online SVG Processing Apps</a> to convert and merge SVG vectors and convert raster images to vector graphics on the fly using your mobile devices, so please feel free to check out our free apps.</p>
{{< products/product-feature-blocks
featureheading="Cross-platform Vector Graphics Manipulation for The .NET Platform"
featuretext="Aspose.SVG for .NET offers unmatched platform independence and cross-platform compatibility with Windows, Mac, and Linux operating systems. Developers can use the operating environment they like most to build feature-rich SVG manipulation applications. The .NET SVG processing API lets developers focus on software development and not worry about issues related to integration owing to its support for multiple .NET frameworks. From parsing and generating SVG content to advanced features like CSS styling and DOM manipulation, our library ensures a smooth and intuitive development experience. Use the .NET API to simplify the software development lifecycle for your end users and upgrade your document processing solutions independently."
>}}
{{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
faqquery="1. What is Aspose.SVG for .NET API?"
faqanswer="Aspose.SVG for .NET offers dynamic SVG vector loading, editing, conversion, and processing features for software developers to upgrade their applications with these capabilities. Our API allows merging and optimizing SVG files and has many other features to manipulate SVG vectors."
>}}
   {{< products/faq-block 
faqquery="2. What document formats are supported by the API?"
faqanswer="The .NET API for SVG processing supports SVG files and lets end users export SVG vectors to PDF and XPS documents, as well as JPEG, BMP, GIF, and PNG images. These raster images can be converted to SVG vectors using our API."
>}}
   {{< products/faq-block
faqquery="3. Are code examples available for developers to help learn about SVG file manipulation using the .NET API?"
faqanswer="Yes, we provide coding examples for developers to help them with the initial learning curve. These code samples are available on the GitHub examples page of the API and cover various use cases that API users may come across."
>}}
   {{< products/faq-block
faqquery="4. Is the API secure for sensitive documents and data?"
faqanswer="Yes, our API is secure for sensitive data. We ensure the safety and integrity of your data and take all necessary measures to protect your files processed using our products."
>}}
{{< products/faq-block
faqquery="5. Is Aspose.SVG for .NET compatible with different .NET frameworks?"
faqanswer="Absolutely! The .NET SVG processing library is compatible with multiple .NET frameworks and runs smoothly on various operating systems. You do not need to install third-party software for processing SVG vectors using the library."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="SVG File Manipulation Tools"
>}}
   {{< products/popularapp-anchor
 anchorlink="SVG to JPEG"
moreproducts="https://products.aspose.com/svg/net/conversion/svg-to-jpeg/"
>}}
{{< products/popularapp-anchor
 anchorlink="SVG to PNG"
moreproducts="https://products.aspose.com/svg/net/conversion/svg-to-png/"
>}}
   {{< products/popularapp-anchor
 anchorlink="SVG to BMP"
moreproducts="https://products.aspose.com/svg/net/conversion/svg-to-bmp/"
>}}
{{< products/popularapp-anchor
 anchorlink="SVG to XPS"
moreproducts="https://products.aspose.com/svg/net/conversion/svg-to-xps/"
>}}
   {{< products/popularapp-anchor
 anchorlink="JPG to SVG"
moreproducts="https://products.aspose.com/svg/net/vectorization/jpg-to-svg/"
>}}
{{< products/popularapp-anchor
 anchorlink="PNG to SVG"
moreproducts="https://products.aspose.com/svg/net/vectorization/png-to-svg/"
>}}
   {{< products/popularapp-anchor
 anchorlink="TIFF to SVG"
moreproducts="https://products.aspose.com/svg/net/vectorization/tiff-to-svg/"
>}}
{{< products/popularapp-anchor
 anchorlink="GIF to SVG"
moreproducts="https://products.aspose.com/svg/net/vectorization/gif-to-svg/"
>}}
   {{< products/popularapp-anchor
 anchorlink="Merge SVG to PDF"
moreproducts="https://products.aspose.com/svg/net/merger/svg-to-pdf/"
>}}
{{< products/popularapp-anchor
 anchorlink="Merge SVG to XPS"
moreproducts="https://products.aspose.com/svg/net/merger/svg-to-xps/"
>}}
   {{< products/popularapp-anchor
 anchorlink="Merge SVG to JPEG"
moreproducts="https://products.aspose.com/svg/net/merger/svg-to-jpeg/"
>}}
{{< products/popularapp-anchor
 anchorlink="Merge SVG to PNG"
moreproducts="https://products.aspose.com/svg/net/merger/svg-to-png/"
>}}  
{{< /products/popularapp-home-wrapper >}}
{{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Looking for help?"
bartext="Checkout our support channels for help with your questions related to Aspose product API features and working."
resourcetxt1="Docs"
resourcelinks1="https://docs.aspose.com/svg/net/"
 resourcetxt2="API Reference"
 resourcelinks2="https://reference.aspose.com/svg/net/"
 resourcetxt3="Knowledge Base"
 resourcelinks3="https://kb.aspose.com/svg/net/"
 resourcetxt4="Free Support"
 resourcelinks4="https://forum.aspose.com/c/svg/42"
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
 resourcelistlink="https://blog.aspose.com/svg/create-svg-with-image-inside-in-csharp/"
 resourcelistlink2="https://blog.aspose.com/svg/reduce-svg-file-size-in-csharp/"
 resourcelistlink3="https://blog.aspose.com/svg/vectorize-image-in-csharp/"
 resourcelisttext="Create SVG with Image Inside in C#"
 resourcelisttext2="Reduce SVG File Size using C#"
 resourcelisttext3="Vectorize Images using C#"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Documentation"
 resourcealt="Documentation"
 resourceimg="/images/docs1.svg"
 resourcelistlink="https://docs.aspose.com/svg/net/getting-started/features-list/"
 resourcelistlink2="https://docs.aspose.com/svg/net/getting-started/installation/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.SVG for .NET Features Overview"
 resourcelisttext2="Install Aspose.SVG for .NET"
 resourcelisttext3="Aspose.SVG for .NET Paid Support Helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Knowledge Base"
 resourcealt="Code Samples"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/svg/net/how-to-rotate-an-svg-in-csharp/"
 resourcelistlink2="https://kb.aspose.com/svg/net/how-to-change-svg-background-color-in-csharp/"
 resourcelistlink3="https://kb.aspose.com/svg/net/how-to-create-svg-in-c-sharp/"
 resourcelisttext="How to Rotate an SVG in C#"
resourcelisttext2="How to Change SVG Background Color in C#"
 resourcelisttext3="How to Create SVG in C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Ready to get started?"
rtstext="Download Free Trial"
rtslink="https://releases.aspose.com/svg/net/"
rtslink2="https://products.aspose.com"
rtstext2="View All APIs"
>}}
